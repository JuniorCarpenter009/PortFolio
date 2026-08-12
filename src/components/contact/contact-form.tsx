"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") ?? "Portfolio inquiry").trim();
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = [`Hello Junior,`, "", message, "", `From: ${name}`, `Reply to: ${email}`].join("\n");
    setReady(true);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="field-row"><label>Name<input name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" /></label></div>
    <label>Subject<input name="subject" type="text" maxLength={140} required placeholder="What would you like to discuss?" /></label>
    <label>Message<textarea name="message" rows={7} maxLength={3000} required placeholder="Share a little context about the opportunity, project, or idea." /></label>
    <div className="form-footer"><p>{ready ? "Your email application should now be open." : "This form stores nothing. It opens your email application with the message prepared."}</p><button className="button primary" type="submit">Prepare email <ArrowUpRight size={16} /></button></div>
  </form>;
}
