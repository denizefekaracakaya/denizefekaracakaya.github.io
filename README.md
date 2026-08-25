# Deniz Efe Karacakaya — Portfolio

A premium personal portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## What's included

- Full-screen animated hero with a signature typing terminal
- About, Skills, Projects, Experience, Contact, Footer sections
- Dark/light mode with `next-themes` (persisted, no flash)
- Scroll-reveal and hover micro-interactions via Framer Motion
- Accessible: visible focus rings, semantic HTML, `prefers-reduced-motion` respected
- SEO: Metadata API, Open Graph, Twitter Cards, dynamic `sitemap.xml` and `robots.txt`
- Custom 404 and loading states
- Static export (`output: "export"`) deployed to GitHub Pages

## Not included yet (intentionally scoped out)

These were in the original brief but are substantial projects on their own —
ask and they can be built as a follow-up:

- 3D/React Three Fiber hero scene
- Live GitHub stats/contribution graph (needs a GitHub API integration)
- AI chat assistant trained on the portfolio content (needs a backend + API key)
- Blog with MDX, syntax highlighting, and search
- Command palette (⌘K), English/Turkish language switcher, visitor counter
- Project detail sub-pages

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, theme provider, analytics
  page.tsx           # assembles all sections
  globals.css        # design tokens, grid background, accessibility
  sitemap.ts
  robots.ts
  not-found.tsx
  loading.tsx
components/
  navbar.tsx
  hero.tsx
  terminal.tsx        # animated terminal — hero's signature element
  about.tsx
  skills.tsx
  projects.tsx
  experience.tsx
  certificates.tsx
  contact.tsx
  footer.tsx
  theme-provider.tsx
lib/
  data.ts             # all editable content lives here
  site.ts             # production URL, shared by layout/sitemap/robots
  utils.ts
```

## Editing content

Everything text-based — name, projects, skills, experience — lives in
`lib/data.ts`. Update that file rather than the components.

Add your resume PDF at `public/DenizEfeKaracakaya_Resume.pdf` so the
"Download CV" buttons work, and update the GitHub/LinkedIn/Kaggle URLs in
`lib/data.ts` to your real profiles.

## Wiring the contact form

The form in `components/contact.tsx` sends through EmailJS directly from the
browser, which is what keeps the site serverless. Copy `.env.example` to
`.env.local` for local development, and mirror the same three keys as GitHub
Actions secrets so the deployed build embeds them.

## Deployment (GitHub Pages)

The site is a fully static export hosted on GitHub Pages at
https://denizefekaracakaya.github.io.

- `next.config.js` sets `output: "export"`, `trailingSlash: true`, and
  `images.unoptimized` — there is no Node server in production.
- `.github/workflows/deploy.yml` builds on every push to `main`, adds
  `out/.nojekyll`, and publishes `out/` via `actions/deploy-pages`.
- Enable it once under **Settings → Pages → Source: GitHub Actions**.
- The contact form reads `NEXT_PUBLIC_EMAILJS_*` at build time, so those three
  values must exist as repository secrets for the form to work in production.
- The production URL lives in one place: `lib/site.ts`.

Local check of the exact artifact that gets deployed:

```bash
npm run build      # writes ./out
npx serve out
```

## Custom domain (not active)

The site currently answers only at `denizefekaracakaya.github.io`.
`denizefekaracakaya.dev` is **not registered** — it resolves NXDOMAIN and has no
RDAP record — so nothing is wired up for it yet. Do not set a custom domain in
Pages before the domain actually resolves: GitHub would start redirecting
`denizefekaracakaya.github.io` to a dead name and take the live site down.

Once the domain is registered, at the DNS provider:

| Type  | Name  | Value                                                                       |
|-------|-------|-----------------------------------------------------------------------------|
| A     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`   |
| AAAA  | `@`   | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `denizefekaracakaya.github.io.`                                              |

Then, on the repo side:

1. Add `public/CNAME` containing the bare domain, so it lands in `out/`.
   Because this repo deploys from a GitHub Actions workflow rather than a
   branch, GitHub does *not* create that file for you.
2. Register the domain with Pages:
   `gh api -X PUT repos/denizefekaracakaya/denizefekaracakaya.github.io/pages -f cname=denizefekaracakaya.dev`
3. Point `siteUrl` in `lib/site.ts` at the new origin and redeploy, so
   `metadataBase`, the canonical link, Open Graph URLs, `sitemap.xml`, and
   `robots.txt` all follow.
4. Wait for the certificate, then enable **Enforce HTTPS** in Settings → Pages.

`.dev` is on the HSTS preload list, so browsers refuse plain HTTP for it
outright — the site will look broken until GitHub finishes issuing the
certificate (up to 24h). That is expected, not a misconfiguration.

## Performance & accessibility notes

- Fonts are loaded via `next/font` (self-hosted, no layout shift).
- Images should use `next/image` once real project screenshots are added.
- Motion respects `prefers-reduced-motion` globally in `globals.css`.
