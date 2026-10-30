# AGENTS.md

## Active branch

**`VERSION_2`** is the working branch. Do not use `main`.

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Typecheck | `npx tsc --noEmit` (no npm script; `next build` also catches TS errors) |
| Format | `npx prettier --write .` (Prettier configured but no npm script) |

No test infrastructure exists. No CI workflows. No pre-commit hooks.

## Architecture

- **Next.js 14 App Router**, single package (not a monorepo).
- **`@/` path alias** maps to root.
- **All content is hardcoded** in `config/*.ts` (projects, skills, blog, career). No CMS or database.
- **shadcn/ui** components live in `components/ui/`, configured in `components.json`.
- **Root layout:** `app/layout.tsx` (fonts, theme, analytics, structured data, providers).
- **Marketing layout:** `app/(root)/layout.tsx` (header, footer, nav).
- **Homepage:** `app/(root)/page.tsx`.

## Design

- Paper-and-ink look: tokens in `app/globals.css` (`--brand` is the single rust accent), fonts in `app/layout.tsx` (Newsreader headings, IBM Plex Sans body, IBM Plex Mono labels).
- Shared classes: `.page-shell`, `.section-rule`, `.eyebrow`, `.ink-link`, `.tag`, `.figure-frame`.
- Project covers are generated SVG diagrams: add a `cover(...)` call in `scripts/generate-covers.py` and run `python3 scripts/generate-covers.py`.
- Homepage "Now" section reads `config/now.ts`; bump `updatedAt` when editing it.
- Projects support `featured`, `highlight` and `install` fields in `config/experience.ts`.

## Contact form

The form at `components/contact/` submits to a Google Form fallback. Requires env vars:
`GOOGLE_FORM_LINK`, `GOOGLE_FORM_FIELD_ID_*`, `NEXT_PUBLIC_RESUME_LINK`.

## Notable quirks

- Webpack cache is **disabled in dev** (`NEXT_DISABLE_WEBPACK_CACHE=1`, `config.cache = false`) — prevents ENOENT errors but restarts are slower.
- `config/routes.ts` uses `any` type for `routesConfig`.
- OG image route runs on Edge runtime.
- Content is duplicated in a few spots (e.g., Person schema on homepage + `structured-data.tsx`).
- `.env.copy` in root lists all expected environment variables.
