import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Mail, MapPin, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { expertise, products, profile, socialLinks } from "@/data/portfolio";

export default function Home() {
  return <><SiteHeader /><main id="top">
    <section className="hero shell"><div className="hero-copy">
      <p className="eyebrow"><span /> Senior Full Stack Developer</p>
      <h1>I build software with <em>purpose, clarity,</em> and room to grow.</h1>
      <p className="hero-summary">{profile.summary}</p>
      <div className="hero-actions"><a className="button primary" href="#work">View selected work <ArrowDownRight size={17} /></a><a className="button secondary" href={`mailto:${profile.email}`}>Let&apos;s talk <Mail size={16} /></a></div>
      <div className="social-row">{socialLinks.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{item.label} <ArrowUpRight size={13} /></a>)}</div>
    </div><aside className="identity-card" aria-label="Professional profile">
      <div className="portrait-mark"><span>JRC</span></div><div><p className="micro-label">Based in</p><p className="location"><MapPin size={15} /> {profile.location}</p></div><div className="identity-rule" />
      <p className="availability"><span /> {profile.availability}</p><div className="identity-stats"><div><strong>8+</strong><span>Years in IT</span></div><div><strong>4+</strong><span>Years building software</span></div></div>
    </aside></section>

    <section id="about" className="section shell split-section"><div><p className="section-number">01 / About</p><h2>Engineering is my craft. Products are how I make it useful.</h2></div><div className="prose"><p>I&apos;m {profile.name}, a software engineer who works across backend systems, modern interfaces, databases, cloud, and delivery. I enjoy turning complex requirements into software that people can understand and trust.</p><p>My name is the identity behind this portfolio. <strong>Jeicy Apps</strong> is the product brand under which I create applications, while <strong>JC Hub</strong> is a future platform—not this website.</p></div></section>

    <section id="work" className="section shell"><div className="section-heading"><div><p className="section-number">02 / Selected work</p><h2>Products in motion.</h2></div><p>Built thoughtfully, documented honestly, and presented according to their real stage.</p></div><div className="product-grid">{products.map((product, index) => <article className={`product-card ${product.featured ? "featured" : ""}`} key={product.name}><div className="product-top"><span>0{index + 1}</span><span className="status">{product.status}</span></div><div className="product-icon">{index === 0 ? <Sparkles /> : index === 1 ? <Layers3 /> : <Code2 />}</div><h3>{product.name}</h3><p>{product.description}</p><div className="tags">{product.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

    <section id="skills" className="section shell"><div className="section-heading"><div><p className="section-number">03 / Expertise</p><h2>Across the stack, focused on the outcome.</h2></div></div><div className="expertise-list">{expertise.map((item, index) => <div key={item.area}><span>0{index + 1}</span><h3>{item.area}</h3><p>{item.detail}</p></div>)}</div></section>

    <section id="experience" className="section shell note-section"><p className="section-number">04 / Experience</p><h2>Enterprise experience.<br />Product-builder mindset.</h2><p>The complete professional timeline, verified certifications, education, and detailed case studies will follow from the confirmed CV content in the next implementation block.</p></section>
    <section id="contact" className="contact-section shell"><p className="section-number">05 / Contact</p><h2>Have a meaningful problem to solve?</h2><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a></section>
  </main><footer><div className="shell"><p>Junior Rafael Carpenter</p><p>Creator of Jeicy Apps · Building JC products.</p><p>© {new Date().getFullYear()}</p></div></footer></>;
}
