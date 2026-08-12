import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Mail, MapPin, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SpaceCanvas } from "@/components/space-canvas";
import { education, experience, expertise, products, profile, skillGroups, socialLinks } from "@/data/portfolio";

export default function Home() {
  return <><SpaceCanvas /><SiteHeader /><main id="top">
    <section className="hero shell"><div className="hero-copy">
      <p className="eyebrow"><span /> Senior Full Stack Developer</p>
      <h1>I build software with <em>purpose, clarity,</em> and room to grow.</h1>
      <p className="hero-summary">{profile.summary}</p>
      <div className="hero-actions"><a className="button primary" href="#work">View selected work <ArrowDownRight size={17} /></a><a className="button secondary" href={`mailto:${profile.email}`}>Let&apos;s talk <Mail size={16} /></a></div>
      <div className="social-row">{socialLinks.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{item.label} <ArrowUpRight size={13} /></a>)}</div>
    </div><aside className="identity-card" aria-label="Professional profile">
      <div className="portrait-mark"><div className="helmet-ring"><span>JRC</span></div><small className="astronaut-label">MISSION: BUILD USEFUL THINGS</small></div><div><p className="micro-label">Based in</p><p className="location"><MapPin size={15} /> {profile.location}</p></div><div className="identity-rule" />
      <p className="availability"><span /> {profile.availability}</p><div className="identity-stats"><div><strong>8+</strong><span>Years in IT</span></div><div><strong>4+</strong><span>Years building software</span></div></div>
    </aside></section>

    <section id="about" className="section shell split-section"><div><p className="section-number">01 / About</p><h2>Engineering is my craft. Products are how I make it useful.</h2></div><div className="prose"><p>I&apos;m {profile.name}, a software engineer who works across backend systems, modern interfaces, databases, cloud, and delivery. I enjoy turning complex requirements into software that people can understand and trust.</p><p>My name is the identity behind this portfolio. <strong>Jeicy Apps</strong> is the product brand under which I create applications, while <strong>JC Hub</strong> is a future platform - not this website.</p></div></section>

    <section id="work" className="section shell"><div className="section-heading"><div><p className="section-number">02 / Selected work</p><h2>Products in motion.</h2></div><p>Built thoughtfully, documented honestly, and presented according to their real stage.</p></div><div className="product-grid">{products.map((product, index) => <article className={`product-card ${product.featured ? "featured" : ""}`} key={product.name}><div className="product-top"><span>0{index + 1}</span><span className="status">{product.status}</span></div><div className="product-icon">{index === 0 ? <Sparkles /> : index === 1 ? <Layers3 /> : <Code2 />}</div><h3>{product.name}</h3><p>{product.description}</p><div className="tags">{product.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

    <section id="experience" className="section shell"><div className="section-heading"><div><p className="section-number">03 / Experience</p><h2>Enterprise experience.<br />Product-builder mindset.</h2></div><p>Confirmed professional roles and technologies, presented without inflated claims.</p></div><div className="timeline">{experience.map((item, index) => <article key={`${item.company}-${item.period}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-period">{item.period}</div><div className="timeline-content"><p>{item.company}</p><h3>{item.role}</h3><p className="timeline-summary">{item.summary}</p><div className="tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></article>)}</div></section>

    <section id="education" className="section shell"><div className="section-heading"><div><p className="section-number">04 / Education</p><h2>A foundation that keeps evolving.</h2></div></div><div className="education-grid">{education.map((item) => <article key={item.program}><div><span className="education-status">{item.status}</span><p>{item.period}</p></div><h3>{item.program}</h3><p>{item.institution}</p></article>)}</div></section>

    <section id="skills" className="section shell"><div className="section-heading"><div><p className="section-number">05 / Skills</p><h2>Depth where it matters. Range when the product needs it.</h2></div><p>No fictional proficiency percentages - only technologies that are part of my professional toolkit.</p></div><div className="skill-grid">{skillGroups.map((group, index) => <article key={group.title}><div className="skill-title"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div><div className="expertise-list expertise-summary">{expertise.map((item, index) => <div key={item.area}><span>0{index + 1}</span><h3>{item.area}</h3><p>{item.detail}</p></div>)}</div></section>

    <section id="contact" className="contact-section shell"><p className="section-number">06 / Contact</p><h2>Have a meaningful problem to solve?</h2><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a></section>
  </main><footer><div className="shell"><p>Junior Rafael Carpenter</p><p>Creator of Jeicy Apps - Building JC products.</p><p>&copy; {new Date().getFullYear()}</p></div></footer></>;
}
