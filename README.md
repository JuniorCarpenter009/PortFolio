# Junior Rafael Carpenter - Portfolio

Personal professional portfolio for Junior Rafael Carpenter, Senior Full Stack Developer and creator of Jeicy Apps.

The site presents verified professional experience, selected case notes, technical capabilities, education, certifications, and the evolving Jeicy Apps product ecosystem. It deliberately separates Junior's professional identity, the Jeicy Apps product brand, and JC Hub as a future platform.

## Highlights

- Professional and Astronaut visual appearances
- Light, dark, and system color themes
- Responsive, accessible portfolio experience
- Verified professional outcomes with responsible disclosure
- Dedicated JC Finance product case study
- Downloadable professional CV
- Secure contact endpoint prepared for Resend
- Static project routes, metadata, sitemap, robots, and social preview image

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- Lucide React

## Local development

Requirements: Node.js 20 or later and pnpm 9.15.9.

```bash
corepack pnpm@9.15.9 install
corepack pnpm@9.15.9 dev
```

The default Next.js address is `http://localhost:3000`. A different port can be selected with `-p` when another application already uses it.

## Contact delivery

Copy `.env.example` to `.env.local` and provide:

```env
RESEND_API_KEY=re_replace_with_your_key
CONTACT_TO_EMAIL=Junior.Rafael.Carpenter@gmail.com
CONTACT_FROM_EMAIL=Junior Carpenter Portfolio <contact@yourdomain.com>
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. Secrets must never be committed. Without these variables, the interface returns a friendly configuration message and directs visitors to the visible email address.

The contact route validates all input on the server, escapes rendered content, uses a honeypot, enforces a minimum completion time, applies a lightweight request limit, and sets the visitor's address as `Reply-To`.

## Quality checks

```bash
corepack pnpm@9.15.9 lint
corepack pnpm@9.15.9 build
```

## Deployment

The project is compatible with Vercel. Configure the three contact variables for Preview and Production, connect the verified domain, then deploy the `main` branch.

The canonical production URL is currently configured as `https://juniorcarpenter.dev`. Update `metadataBase`, `sitemap.ts`, and the Resend sender domain together if a different domain is selected.

## Content policy

Only public-safe and confirmed professional information is published. Planned products are labeled by their real stage, and confidential implementation details are intentionally excluded.

## Author

Junior Rafael Carpenter

- [LinkedIn](https://www.linkedin.com/in/junior-rafael-carpenter-b506481a3/)
- [GitHub](https://github.com/JuniorCarpenter009)
- [Instagram](https://www.instagram.com/jr__carpenter09/)
