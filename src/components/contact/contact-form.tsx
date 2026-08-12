"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("Your message will be sent securely. Your information is used only to reply.");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const form = new FormData(element);
    setStatus("sending");
    setFeedback("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "The message could not be sent.");
      element.reset();
      setStatus("success");
      setFeedback(result.message || "Message sent. Thank you - I will reply as soon as possible.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "The message could not be sent. Please try again.");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="field-row"><label>Name<input name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" /></label></div>
    <label>Subject<input name="subject" type="text" minLength={3} maxLength={140} required placeholder="What would you like to discuss?" /></label>
    <label>Message<textarea name="message" rows={7} minLength={10} maxLength={3000} required placeholder="Share a little context about the opportunity, project, or idea." /></label>
    <label className="honeypot" aria-hidden="true">Company website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
    <input name="startedAt" type="hidden" value={Date.now()} readOnly />
    <div className={`form-footer form-${status}`}><p role="status" aria-live="polite">{status === "success" && <CheckCircle2 size={15} />} {feedback}</p><button className="button primary" type="submit" disabled={status === "sending"}>{status === "sending" ? <>Sending <LoaderCircle className="spinner" size={16} /></> : <>Send message <ArrowUpRight size={16} /></>}</button></div>
  </form>;
}
