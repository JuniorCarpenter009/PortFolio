"use client";
import { Rocket, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
export function AstronautEasterEgg() {
  const [launched, setLaunched] = useState(false); const sequence = useRef("");
  useEffect(() => { const handler = (event: KeyboardEvent) => { if (event.key === "Escape") { setLaunched(false); sequence.current = ""; return; } if (event.ctrlKey || event.metaKey || event.altKey || event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return; sequence.current = `${sequence.current}${event.key.toLowerCase()}`.slice(-6); if (sequence.current === "launch" && document.documentElement.dataset.appearance === "astronaut") { setLaunched(true); sequence.current = ""; } }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, []);
  if (!launched) return null;
  return <div className="mission-overlay" role="dialog" aria-modal="true" aria-label="Astronaut mission launched"><button type="button" onClick={() => setLaunched(false)} aria-label="Close mission"><X /></button><div className="mission-orbit"><Rocket /></div><div className="mission-copy"><p>MISSION CONTROL</p><h2>Launch confirmed.</h2><span>Keep building useful things.</span><small>Press Esc to return to Earth.</small></div></div>;
}
