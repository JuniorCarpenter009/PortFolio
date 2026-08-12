export const professionalProjects = [
  { slug: "mobile-application-development", title: "Mobile Application Development", outcome: "50%", outcomeLabel: "faster processing", description: "Barcode-scanning optimization work that improved processing speed by 50%.", disclosure: "Additional technical details remain private until they can be shared safely." },
  { slug: "printing-module", title: "Printing Module", outcome: "30%", outcomeLabel: "faster response", description: "A printing module improvement that reduced response time by 30%.", disclosure: "Presented as a verified outcome without exposing confidential implementation details." },
  { slug: "application-migration", title: "Application Migration", outcome: "20%", outcomeLabel: "less downtime", description: "Application migration work that reduced downtime by 20%.", disclosure: "The organization and internal architecture are intentionally not disclosed." },
] as const;

export type ProfessionalProjectSlug = (typeof professionalProjects)[number]["slug"];

export const projectCaseStudies = {
  "jc-finance": {
    slug: "jc-finance",
    name: "JC Finance",
    eyebrow: "Jeicy Apps / Product in development",
    summary: "A personal finance management and deterministic financial intelligence application designed to make spending, budgets, goals, and financial behavior easier to understand.",
    repository: "https://github.com/JuniorCarpenter009/FinanceAssistant",
    status: "In development",
    stack: ["Next.js 15", "React 19", "TypeScript", "NestJS", "PostgreSQL 16", "Prisma", "Docker", "Turborepo"],
    problem: "Personal finance data often lives in disconnected lists and static totals. The product explores how to turn those records into an understandable monthly picture and explainable decision support.",
    solution: "JC Finance combines transaction management, budgets, goals, recurring commitments, analytics, projections, scenarios, and safe-to-spend guidance in one responsive experience. Phase 2 intelligence remains deterministic and explainable - it does not depend on an LLM.",
    architecture: [
      { label: "Web application", value: "Next.js App Router, React, Tailwind CSS, Recharts" },
      { label: "REST API", value: "NestJS, Swagger, class-validator, modular application services" },
      { label: "Data layer", value: "PostgreSQL, Prisma ORM, Decimal(19,4) financial values" },
      { label: "Security", value: "Argon2, JWT access tokens, rotating refresh sessions, Helmet, CORS, per-user ownership" },
    ],
    features: ["Monthly financial dashboard", "Accounts, transactions, categories, and CSV imports", "Budgets, goals, subscriptions, and recurring payments", "Safe to Spend and real available balance", "Financial health score and explainable insights", "Historical analytics, anomaly detection, projections, affordability, and scenarios", "Spanish and English interface", "Multiple currencies, themes, and dashboard personalization"],
    decisions: ["Money calculations use decimal arithmetic rather than binary floating point.", "Protected queries derive ownership from the authenticated user instead of accepting userId from the browser.", "The web and API remain independently deployable while sharing one monorepo workflow.", "Advanced recommendations expose assumptions and reason codes instead of behaving like opaque advice."],
    roadmap: ["Complete final product documentation and certification guide", "Configure production social authentication credentials", "Deployment and monitoring", "Future AI assistant as a separate, later phase"],
  },
} as const;

export type ProjectSlug = keyof typeof projectCaseStudies;
