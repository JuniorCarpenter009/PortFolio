export const profile = {
  name: "Junior Rafael Carpenter",
  title: "Senior Full Stack Developer",
  location: "Dominican Republic",
  email: "Junior.Rafael.Carpenter@gmail.com",
  summary: "I design and build scalable software products, backend systems, and modern applications with a strong focus on clarity, reliability, and real-world value.",
  availability: "Open to meaningful opportunities and collaborations",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/junior-rafael-carpenter-b506481a3/" },
  { label: "GitHub", href: "https://github.com/JuniorCarpenter009" },
  { label: "Instagram", href: "https://www.instagram.com/jr__carpenter09/" },
  { label: "Email", href: `mailto:${profile.email}` },
] as const;

export const navigation = [
  { label: "About", href: "/#about" }, { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" }, { label: "Education", href: "/#education" }, { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
] as const;

export const engineeringPrinciples = [
  { title: "Clarity before complexity", detail: "Understand the problem, constraints, and desired outcome before choosing an architecture." },
  { title: "Security is part of the design", detail: "Ownership, validation, secrets, and safe defaults belong in the foundation, not in a final checklist." },
  { title: "Make decisions explainable", detail: "Code and product behavior should reveal intent so people can maintain, trust, and improve them." },
  { title: "Deliver useful increments", detail: "Build the smallest coherent step that creates value while preserving room for responsible growth." },
  { title: "Measure what improved", detail: "A technical change matters when its effect can be observed in reliability, speed, quality, or user experience." },
  { title: "Protect what is entrusted", detail: "Useful storytelling never requires exposing confidential systems, data, or organizational details." },
] as const;

export const products = [
  { name: "JC Finance", status: "In development", description: "A personal finance and financial intelligence product that helps people understand spending, budgets, goals, and financial behavior.", stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"], featured: true, href: "/projects/jc-finance" },
  { name: "JC Hub", status: "Architecture stage", description: "A future unified platform for accessing and organizing the growing family of JC applications.", stack: ["Platform", "Product ecosystem"], featured: true, href: null },
  { name: "JC Fitness", status: "Planned", description: "A focused product concept for building healthier routines and tracking progress.", stack: ["Product research"], featured: false, href: null },
  { name: "JC Books", status: "Planned", description: "A product concept for organizing reading, discovery, and personal knowledge around books.", stack: ["Product concept"], featured: false, href: null },
  { name: "JC Knowledge", status: "Research", description: "An exploration of practical ways to capture, connect, and retrieve useful personal knowledge.", stack: ["Product research"], featured: false, href: null },
  { name: "JC Goals", status: "Planned", description: "A future product for translating meaningful goals into visible, sustainable progress.", stack: ["Product concept"], featured: false, href: null },
] as const;

export const expertise = [
  { area: "Backend engineering", detail: ".NET, C#, APIs, microservices, integration, and enterprise systems" },
  { area: "Modern frontend", detail: "React, Angular, Next.js, TypeScript, and thoughtful product interfaces" },
  { area: "Data & architecture", detail: "SQL Server, PostgreSQL, clean architecture, testing, and maintainability" },
  { area: "Cloud & delivery", detail: "Azure, Docker, Kubernetes, Git, and continuous delivery workflows" },
] as const;

export const experience = [
  {
    role: "Senior Backend Developer", company: "Wepsys", period: "Jan 2025 - Present",
    summary: "Designing and maintaining backend services and delivery workflows for modern enterprise applications.",
    technologies: [".NET 8", "Clean Architecture", "MediatR", "Repository Pattern", "RabbitMQ", "Docker", "Kubernetes", "CI/CD", "AWS WorkSpaces"],
  },
  {
    role: "Senior Software Developer", company: "Novacomp", period: "Apr 2025 - Aug 2025",
    summary: "Contributed to backend application development and secure data exchange using established enterprise technologies.",
    technologies: [".NET", "Web API", "Dapper", "SQL Server", "SFTP"],
  },
  {
    role: "Senior Backend Developer", company: "Banco Ademi", period: "Jul 2024 - Aug 2025",
    summary: "Worked on transactional systems, service integrations, and database performance in a financial environment.",
    technologies: ["Oracle", "SQL optimization", "CQRS", "REST", "SOAP", "Transaction systems"],
  },
] as const;

export const education = [
  { program: "Software Engineering", institution: "UNICARIBE University", period: "2024 - Present", status: "In progress" },
  { program: "Software Development Technologist", institution: "Instituto Tecnologico de Las Americas (ITLA)", period: "2019 - 2022", status: "Completed" },
] as const;

export const skillGroups = [
  { title: "Backend", items: [".NET 8", "C#", "ASP.NET Core Web API", "Microservices", "REST APIs", "Entity Framework Core", "Dapper", "Node.js", "Spring Boot", "Quarkus", "Hibernate", "Micronaut", "JSF"] },
  { title: "Frontend", items: ["Angular", "React", "Next.js", "JavaScript", "TypeScript"] },
  { title: "Database", items: ["SQL Server", "PostgreSQL", "Oracle", "SQL"] },
  { title: "Cloud & DevOps", items: ["Azure", "Docker", "Kubernetes", "Git", "CI/CD"] },
  { title: "Testing & Architecture", items: ["Unit Testing", "xUnit", "NUnit", "Clean Architecture", "Continuous Integration"] },
  { title: "Artificial Intelligence", items: ["Python", "Scikit-learn", "Microsoft Semantic Kernel", "OpenAI API", "Prompt Engineering"] },
] as const;

export const certifications = [
  { title: "Foundational C# with Microsoft", category: "Backend" },
  { title: "Fundamentals of DevOps, APIs, and Microservices Architecture", category: "Architecture" },
  { title: "Master's in SQL Server", category: "Database" },
  { title: "Kubernetes and Docker with .NET", category: "Cloud & DevOps" },
  { title: "Git & GitHub", category: "Developer tools" },
  { title: "Unit Testing .NET", category: "Testing" },
  { title: "React", category: "Frontend" },
  { title: "Introduction to Artificial Intelligence", category: "Artificial Intelligence" },
] as const;
