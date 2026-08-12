export const profile = {
  name: "Junior Rafael Carpenter",
  title: "Senior Full Stack Developer",
  location: "Dominican Republic",
  email: "Junior.Rafael.Carpenter@gmail.com",
  summary: "I design and build scalable software products, backend systems, and modern applications with a strong focus on clarity, reliability, and real-world value.",
  availability: "Open to meaningful opportunities and collaborations",
} as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/JuniorCarpenter009" },
  { label: "Instagram", href: "https://www.instagram.com/jr__carpenter09/" },
  { label: "Email", href: `mailto:${profile.email}` },
] as const;

export const navigation = [
  { label: "About", href: "#about" }, { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" }, { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const products = [
  { name: "JC Finance", status: "In development", description: "A personal finance and financial intelligence product that helps people understand spending, budgets, goals, and financial behavior.", stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"], featured: true },
  { name: "JC Hub", status: "Architecture stage", description: "A future unified platform for accessing and organizing the growing family of JC applications.", stack: ["Platform", "Product ecosystem"], featured: true },
  { name: "JC Fitness", status: "Planned", description: "A focused product concept for building healthier routines and tracking progress.", stack: ["Product research"], featured: false },
] as const;

export const expertise = [
  { area: "Backend engineering", detail: ".NET, C#, APIs, microservices, integration, and enterprise systems" },
  { area: "Modern frontend", detail: "React, Angular, Next.js, TypeScript, and thoughtful product interfaces" },
  { area: "Data & architecture", detail: "SQL Server, PostgreSQL, clean architecture, testing, and maintainability" },
  { area: "Cloud & delivery", detail: "Azure, Docker, Kubernetes, Git, and continuous delivery workflows" },
] as const;
