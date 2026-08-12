import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SpaceCanvas } from "@/components/space-canvas";
import { professionalProjects, type ProfessionalProjectSlug } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return professionalProjects.map(({ slug }) => ({ slug })); }

function findProject(slug: string) {
  return professionalProjects.find((project) => project.slug === slug as ProfessionalProjectSlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function ProfessionalWorkPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();
  return <><SpaceCanvas /><SiteHeader /><main className="professional-case">
    <section className="professional-case-hero shell"><Link className="back-link" href="/#work"><ArrowLeft size={15} /> Back to selected work</Link><p className="eyebrow"><span /> Public professional case note</p><h1>{project.title}</h1><p className="professional-case-summary">{project.description}</p><div className="case-outcome"><strong>{project.outcome}</strong><span>{project.outcomeLabel}</span></div></section>
    <section className="section shell professional-case-grid"><article><CheckCircle2 /><p className="section-number">01 / Verified outcome</p><h2>Impact, stated precisely.</h2><p>The result shown here is taken from my confirmed professional profile. It is presented as an outcome, without adding unverified implementation claims.</p></article><article><LockKeyhole /><p className="section-number">02 / Responsible disclosure</p><h2>Useful context, protected details.</h2><p>{project.disclosure}</p></article></section>
    <section className="case-note-cta shell"><div><p className="micro-label">Want to discuss the engineering approach?</p><h2>I can share appropriate context in a professional conversation.</h2></div><Link href="/contact">Start a conversation <ArrowUpRight /></Link></section>
  </main><footer><div className="shell"><p>Junior Rafael Carpenter</p><p>Professional case note</p><p>&copy; {new Date().getFullYear()}</p></div></footer></>;
}
