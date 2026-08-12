"use client";
import { FileText, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const commands = [
  { label: "About", detail: "Professional identity", href: "/#about" }, { label: "Selected work", detail: "Projects and verified outcomes", href: "/#work" },
  { label: "Jeicy Apps", detail: "Product ecosystem", href: "/#jeicy-apps" }, { label: "Experience", detail: "Professional timeline", href: "/#experience" },
  { label: "Skills", detail: "Technical capabilities", href: "/#skills" }, { label: "Engineering principles", detail: "How I approach the craft", href: "/#principles" },
  { label: "Availability", detail: "Opportunities, location, and languages", href: "/#availability" },
  { label: "JC Finance", detail: "Product case study", href: "/projects/jc-finance" }, { label: "Contact", detail: "Start a conversation", href: "/contact" },
  { label: "Download CV", detail: "PDF document", href: "/documents/junior-rafael-carpenter-cv.pdf" },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState(""); const inputRef = useRef<HTMLInputElement>(null); const router = useRouter();
  const results = useMemo(() => commands.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase())), [query]);
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen((value) => !value); } if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, []);
  useEffect(() => { if (open) requestAnimationFrame(() => inputRef.current?.focus()); else setQuery(""); }, [open]);
  function visit(href: string) { setOpen(false); if (href.endsWith(".pdf")) window.location.href = href; else router.push(href); }
  return <>{open ? <button className="command-trigger" type="button" onClick={() => setOpen(false)} aria-label="Close command palette"><X size={15} /><span>Close</span></button> : <button className="command-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open command palette"><Search size={15} /><span>Search</span><kbd>Ctrl K</kbd></button>}{open && <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}><section className="command-dialog" role="dialog" aria-modal="true" aria-label="Navigate portfolio" onMouseDown={(event) => event.stopPropagation()}><div className="command-input"><Search size={18} /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && results[0]) visit(results[0].href); }} placeholder="Search projects, experience, skills..." aria-label="Search portfolio" /><kbd>Esc</kbd></div><div className="command-results">{results.map((item) => <button type="button" key={item.href} onClick={() => visit(item.href)}><span><FileText size={16} /><strong>{item.label}</strong></span><small>{item.detail}</small></button>)}{results.length === 0 && <p>No matching destination.</p>}</div><footer>In Astronaut mode, close this and type <strong>launch</strong> for a hidden mission.</footer></section></div>}</>;
}
