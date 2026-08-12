"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner">
    <a href="#top" className="brand" aria-label="Junior Carpenter, home"><span>JC</span><strong>Junior Carpenter</strong></a>
    <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
    <div className="header-actions"><ThemeToggle /><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
  </div></header>;
}
