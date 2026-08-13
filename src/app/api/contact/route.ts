import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recentRequests = new Map<string, number[]>();

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength + 1) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] || character);
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const active = (recentRequests.get(identifier) || []).filter((time) => now - time < 10 * 60 * 1000);
  active.push(now);
  recentRequests.set(identifier, active);
  return active.length > 5;
}

export async function POST(request: NextRequest) {
  const identifier = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(identifier)) return NextResponse.json({ message: "Too many messages were sent recently. Please wait a few minutes and try again." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Please review the form and try again." }, { status: 400 }); }

  const name = text(body.name, 100);
  const email = text(body.email, 254);
  const subject = text(body.subject, 140);
  const message = text(body.message, 3000);
  const website = text(body.website, 200);
  const startedAt = Number(body.startedAt);

  if (website) return NextResponse.json({ message: "Message sent. Thank you." });
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500) return NextResponse.json({ message: "Please take a moment to review your message and try again." }, { status: 400 });
  if (name.length < 2 || subject.length < 3 || message.length < 10 || !EMAIL_PATTERN.test(email)) return NextResponse.json({ message: "Please complete every field with valid information." }, { status: 400 });
  if (name.length > 100 || email.length > 254 || subject.length > 140 || message.length > 3000) return NextResponse.json({ message: "One or more fields are longer than allowed." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.trim().toLowerCase();
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ message: "Direct messaging is being configured. Please use the email address shown on this page for now." }, { status: 503 });

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email.toLowerCase(),
        subject: `[Portfolio] ${subject}`,
        text: `${message}\n\nFrom: ${name}\nReply to: ${email}`,
        html: `<h2>New portfolio message</h2><p><strong>From:</strong> ${escapeHtml(name)}</p><p><strong>Reply to:</strong> ${escapeHtml(email)}</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><hr><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
  } catch (error) {
    console.error("Contact email provider could not be reached", { error: error instanceof Error ? error.message : "Unknown network error" });
    return NextResponse.json({ message: "The email service is temporarily unavailable. Please try again shortly or use the email address shown on this page." }, { status: 503 });
  }

  if (!resendResponse.ok) {
    console.error("Contact email provider rejected the request", { status: resendResponse.status });
    return NextResponse.json({ message: "Your message could not be delivered right now. Please try again shortly or use the email address shown on this page." }, { status: 502 });
  }
  return NextResponse.json({ message: "Message sent. Thank you - I will reply as soon as possible." });
}
