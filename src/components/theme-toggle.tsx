"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const options = [{ value: "light", label: "Light", icon: Sun }, { value: "dark", label: "Dark", icon: Moon }, { value: "system", label: "System", icon: Monitor }] as const;
export function ThemeToggle() {
  const { theme, setTheme } = useTheme(); const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="theme-toggle h-9 w-[108px]" aria-hidden />;
  return <div className="theme-toggle" aria-label="Color theme">{options.map(({ value, label, icon: Icon }) => <button key={value} type="button" onClick={() => setTheme(value)} aria-label={`${label} theme`} aria-pressed={theme === value}><Icon size={15} /></button>)}</div>;
}
