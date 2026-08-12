import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, CircleDot, GitBranch, Layers3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SpaceCanvas } from "@/components/space-canvas";
import { projectCaseStudies, type ProjectSlug } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return Object.keys(projectCaseStudies).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const project = projectCaseStudies[slug as ProjectSlug];
  return project ? { title: project.name, description: project.summary, openGraph: { title: `${project.name} case study`, description: project.summary } } : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; const project = projectCaseStudies[slug as ProjectSlug]; if (!project) notFound();
  return <><SpaceCanvas /><SiteHeader /><main className="case-study">
    <section className="case-hero shell"><Link className="back-link" href="/#work"><ArrowLeft size={15} /> Back to selected work</Link><p className="eyebrow"><span /> {project.eyebrow}</p><div className="case-title"><h1>{project.name}</h1><span className="status">{project.status}</span></div><p>{project.summary}</p><div className="case-actions"><a className="button primary" href={project.repository} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div><div className="tags case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="product-preview"><div className="preview-sidebar"><span className="preview-logo">JC</span>{["Overview","Transactions","Budgets","Accounts","Goals"].map((item) => <i key={item}>{item}</i>)}</div><div className="preview-main"><div className="preview-header"><span>Financial overview</span><b>JC Finance</b></div><div className="preview-metrics"><span /><span /><span /></div><div className="preview-chart"><svg viewBox="0 0 500 130" role="img" aria-label="Abstract financial trend preview"><path d="M0 112 C80 112 70 22 140 32 S210 75 270 58 S350 45 500 18" fill="none" stroke="currentColor" strokeWidth="4" /></svg></div></div><p>Editorial product preview - real screenshots will be added to the gallery when approved for publication.</p></div>
    </section>
    <section className="section shell case-split"><div><p className="section-number">01 / Problem</p><h2>From records to understanding.</h2><p>{project.problem}</p></div><div><p className="section-number">02 / Solution</p><h2>Explainable financial context.</h2><p>{project.solution}</p></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="section-number">03 / Architecture</p><h2>A modular foundation.</h2></div></div><div className="architecture-grid">{project.architecture.map((item, index) => <article key={item.label}>{index === 0 ? <Layers3 /> : index === 3 ? <ShieldCheck /> : <GitBranch />}<span>0{index + 1}</span><h3>{item.label}</h3><p>{item.value}</p></article>)}</div></section>
    <section className="section shell case-columns"><div><p className="section-number">04 / Product scope</p><h2>What it covers today.</h2><ul>{project.features.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div><p className="section-number">05 / Decisions</p><h2>Built to stay understandable.</h2><ul>{project.decisions.map((item) => <li key={item}><CircleDot size={14} />{item}</li>)}</ul></div></section>
    <section className="section shell roadmap"><p className="section-number">06 / Roadmap</p><h2>What comes next.</h2><div>{project.roadmap.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
  </main><footer><div className="shell"><p>Junior Rafael Carpenter</p><p>JC Finance by Jeicy Apps</p><p>&copy; {new Date().getFullYear()}</p></div></footer></>;
}
