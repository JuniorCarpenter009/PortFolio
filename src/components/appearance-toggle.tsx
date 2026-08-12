"use client";
import { BriefcaseBusiness, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
type Appearance = "professional" | "astronaut";
function applyAppearance(value: Appearance) { document.documentElement.dataset.appearance = value; localStorage.setItem("portfolio-appearance", value); }
export function AppearanceToggle() {
  const [appearance, setAppearance] = useState<Appearance>("professional"); const [mounted, setMounted] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("portfolio-appearance"); const initial = saved === "astronaut" ? "astronaut" : "professional"; setAppearance(initial); applyAppearance(initial); setMounted(true); }, []);
  function select(value: Appearance) { setAppearance(value); applyAppearance(value); }
  if (!mounted) return <span className="appearance-toggle appearance-placeholder" aria-hidden />;
  return <div className="appearance-toggle" aria-label="Portfolio appearance"><button type="button" onClick={() => select("professional")} aria-pressed={appearance === "professional"} title="Professional mode"><BriefcaseBusiness size={15} /><span>Professional</span></button><button type="button" onClick={() => select("astronaut")} aria-pressed={appearance === "astronaut"} title="Astronaut mode"><Rocket size={15} /><span>Astronaut</span></button></div>;
}
