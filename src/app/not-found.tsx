import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SpaceCanvas } from "@/components/space-canvas";
export default function NotFound() {
  return <><SpaceCanvas /><SiteHeader /><main id="top" className="not-found-page shell"><div className="lost-orbit" aria-hidden><span>4</span><div><i /><i /><i /></div><span>4</span></div><p className="eyebrow"><span /> Navigation error</p><h1>Lost in <em>orbit.</em></h1><p>The page you were looking for is not part of this mission, or its coordinates may have changed.</p><div className="hero-actions"><Link className="button primary" href="/"><ArrowLeft size={16} /> Return home</Link><Link className="button secondary" href="/#work"><Search size={16} /> Explore selected work</Link></div><small>Tip: use Ctrl + K from any page to navigate the portfolio.</small></main></>;
}
