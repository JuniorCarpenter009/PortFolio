import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { SiteHeader } from "@/components/site-header";
import { SpaceCanvas } from "@/components/space-canvas";
import { profile, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = { title: "Contact", description: "Contact Junior Rafael Carpenter about software engineering, product development, and collaboration opportunities." };
export default function ContactPage() {
  return <><SpaceCanvas /><SiteHeader /><main className="contact-page shell"><Link className="back-link" href="/"><ArrowLeft size={15} /> Back home</Link><section className="contact-layout"><div className="contact-copy"><p className="eyebrow"><span /> Contact</p><h1>Let&apos;s build something meaningful.</h1><p>Whether it is a software engineering opportunity, a product collaboration, or a complex problem worth exploring, context is always welcome.</p><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span></a><p><MapPin size={17} /><span>{profile.location}</span></p></div><div className="social-row">{socialLinks.filter((item) => item.label !== "Email").map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<ArrowUpRight size={13} /></a>)}</div></div><ContactForm /></section></main></>;
}
