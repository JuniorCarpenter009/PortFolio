import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://juniorcarpenter.dev"),
  title: { default: "Junior Rafael Carpenter | Software Engineer", template: "%s | Junior Carpenter" },
  description: "Senior Full Stack Developer and product builder creating scalable software, backend systems, and useful products under Jeicy Apps.",
  openGraph: { title: "Junior Rafael Carpenter", description: "Software engineer, full stack developer, and creator of Jeicy Apps.", type: "website", locale: "en_US", url: "/", siteName: "Junior Rafael Carpenter" },
  twitter: { card: "summary_large_image", title: "Junior Rafael Carpenter", description: "Senior Full Stack Developer and creator of Jeicy Apps." },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-appearance="professional" suppressHydrationWarning><body className={`${sans.variable} ${mono.variable}`}><ThemeProvider>{children}</ThemeProvider></body></html>;
}
