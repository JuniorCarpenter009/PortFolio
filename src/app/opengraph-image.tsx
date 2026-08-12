import { ImageResponse } from "next/og";

export const alt = "Junior Rafael Carpenter - Senior Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#f3f1eb", background: "radial-gradient(circle at 82% 18%, #176b59 0, #101714 38%, #070d18 100%)", fontFamily: "Arial, sans-serif" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}><div style={{ width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #75cdb5", borderRadius: 32, color: "#75cdb5", fontSize: 18, fontWeight: 700 }}>JC</div><div style={{ fontSize: 22, color: "#a2aaa5" }}>Junior Rafael Carpenter</div></div>
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}><div style={{ color: "#75cdb5", fontSize: 18, letterSpacing: 5, textTransform: "uppercase" }}>Senior Full Stack Developer</div><div style={{ marginTop: 24, fontSize: 72, lineHeight: 1.02, fontWeight: 700, letterSpacing: -3 }}>Software with purpose, clarity, and room to grow.</div></div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#a2aaa5" }}><span>Creator of Jeicy Apps</span><span>Dominican Republic</span></div>
  </div>, size);
}
