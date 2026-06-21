# Session 02 — Blog MVP — Session Report

**Branch:** `session-02-blog-mvp` (based on `preview`)
**Scope brief:** [session-02-blog-mvp.md](./session-02-blog-mvp.md)
**Status:** Built and locally verified. **Not merged.** Awaiting founder review +
the env-var setup below, then preview-deploy verification, then merge.
**Date:** 2026-06-20

---

## 1. What shipped

A Sanity-backed blog for finmagix.com, matching the redesigned design system.

| Area | Files |
|---|---|
| **Schema** | `src/sanity/schemaTypes/{post,author,category,blockContent,index}.ts` |
| **Studio** | `src/app/studio/[[...tool]]/{page,Studio}.tsx`, `sanity.config.ts`, `sanity.cli.ts`, `src/sanity/structure.ts` |
| **Data layer** | `src/lib/sanity/{client,image,queries,fetch,types}.ts`, `src/sanity/env.ts` |
| **Routes** | `src/app/blog/{page,loading}.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/blog/category/[slug]/page.tsx`, `src/app/blog/rss.xml/route.ts`, `src/app/api/revalidate/route.ts` |
| **Components** | `src/components/blog/{PostCard,CategoryChips,PortableBody}.tsx` |
| **Chrome / SEO** | `src/components/SiteShell.tsx`, `layout.tsx`, `NavBar.tsx`, `Footer.tsx`, `sitemap.ts`, `robots.ts`, `next.config.ts` (image host), `globals.css` (blog block) |
| **Ops** | `.env.example`, `scripts/seed-categories.ts` |

Three feature commits (`fe74603`, `f2d1c79`, `79dc5b4`) on top of the brief +
housekeeping commits.

## 2. Stack confirmation (resolved the brief's VERIFY items)

- **Next.js 16.2.4, App Router, React 19.2.4, TypeScript** — the Sanity-into-the-front-end plan held; no rescope.
- **Tailwind v4 + design tokens** in `globals.css`; the blog reuses `--accent-primary` / `--ink-*` / `--surface-*` tokens and `.t-*` / `.wrap` / `.section` utilities.
- **finmagix-com is its own Vercel project** (`prj_3oObfcsmPKH2qovvzY4UN2kKTm4J`), separate from the app — env + webhook go here.
- **`/blog` and `/studio` were free** — no collision.

Packages added: `next-sanity@13.1.1`, `sanity@6.1.0`, `@sanity/image-url@2.1.1`,
`@sanity/vision@6.1.0` (peers `styled-components`, `@sanity/client`, etc. pulled in).

## 3. Decisions & surprises surfaced (per "surface, don't absorb")

1. **Matched the redesigned design system, not `src/components/ui/`.** Those `ui/` primitives (`Button`/`Badge`/`SectionLabel`) are the **legacy WS-2 lime/`--deep` palette**; the redesigned pages (home/about/platform) use the `.btn` / `.t-*` / `.badge` CSS classes + `--accent-primary`. The blog matches the redesigned system so it's visually consistent with the rest of the new site. *(Deviation from the literal "use ui/ components" note — flagged here.)*
2. **`/studio` chrome via a conditional `SiteShell`, not a route-group restructure.** The Studio must render without the marketing nav/footer. Rather than move all 11 existing pages into an `app/(site)/` group (large, risky, out of scope), a small client `SiteShell` omits the chrome on `/studio`. Single root layout preserved; existing pages untouched.
3. **Studio client wrapper** (`Studio.tsx`, `"use client"`). The Studio's `sanity` import calls `React.createContext` at load; importing it in the server page broke the build (`createContext is not a function`). Moving the config import behind a client boundary is the canonical fix.
4. **Paths nested under `src/`** as noted pre-build: `src/sanity/*` (schema/env/structure), `src/lib/sanity/*` (data layer), `src/app/blog/*`, `src/app/studio/*`.
5. **Three Next-16 / version corrections** caught at typecheck (exactly why AGENTS.md mandates reading the local docs): `params`/`searchParams` are `Promise`s (`await`ed); `revalidateTag(tag, profile)` now requires a profile arg (used `"max"` — stale-while-revalidate, recommended for blogs); `SanityImageSource` import moved to the package root and `createImageUrlBuilder` replaces the deprecated default export.
6. **Caching model.** Cache Components is off, so we use the classic model: reads go through `unstable_cache` with a shared `sanity` tag (+ per-type tags); the webhook calls `revalidateTag`. `client` uses `useCdn:false` + `perspective:"published"` so revalidation fetches fresh data and drafts never reach readers.

## 4. Compliance check

- **Part 4 lines touched by the infrastructure:** none. Routes/schema/editor don't cross a line.
- **Code-level copy** (the only user-facing copy in this diff) → needs §5.1 review at merge:
  - Nav + footer label: **"Blog"**.
  - Blog index hero: "The Finmagix blog" / "Money, in plain language." / lede ("…written to inform, never to pressure. You decide what to do with it.").
  - Empty/loading microcopy; "← All posts"; category page copy.
  - Reviewed against the Part 4 line list — clean (no forbidden patterns; the "you decide" framing reinforces the no-directive posture).
- **Publication is intentionally not software-gated** (founder decision). New debt recorded in [tech-debt-marketing.md](../tech-debt-marketing.md).
- **No reader PII** collected (no comments, email capture, or accounts) — Principle 7 not engaged.

## 5. New tech debt (named honestly)

Added to [tech-debt-marketing.md](../tech-debt-marketing.md):
- **No enforced pre-publish review gate** (by design) + no automated sentinel linting on blog content.
- **Sanity dependency tree:** 15 npm advisories (14 moderate, 1 high) + one peer-override on install. `npm audit fix --force` deliberately not run. The dead MDX deps note from the prep step also remains.

## 6. Verification status

**Verified locally:**
- `tsc --noEmit` clean · `next build` clean (exit 0) · `eslint` clean.
- Route table generated correctly: `/blog` (ISR 1m), `/blog/[slug]` + `/blog/category/[slug]` (SSG via `generateStaticParams`), `/blog/rss.xml` + `/api/revalidate` (dynamic), `/studio/[[...tool]]` (static shell), sitemap + robots.
- All 11 existing marketing pages still build unchanged.
- Data layer degrades gracefully (empty state) when Sanity has no data / is unreachable, so the build never hard-fails on content.

**Pending (needs the live Sanity project + Vercel env — see §7):**
- Studio reachable + login; seed the 8 categories; publish one real post with a photo.
- `/blog` + `/blog/[slug]` render real content; category filter; OG/RSS.
- Publish → live via webhook with no redeploy.
- Phone view; photos render. → all to be done on a **preview** deploy, not production.

## 7. Env vars to set on the finmagix-com Vercel project (your trigger)

| Var | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `i7v8b5ym` | Public. (Has a safe default in code.) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Use a separate `preview`-style dataset first if you prefer. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-12-01` | Optional; defaulted. |
| `SANITY_API_READ_TOKEN` | *(token)* | **Only if the dataset is private.** A read/viewer token — never a write token. |
| `SANITY_REVALIDATE_SECRET` | *(your secret)* | Required for publish→live. Must match the Sanity webhook secret. |

Also in the Sanity project (Manage): add **CORS origins** (localhost:3000, the preview
URL, finmagix.com) so the Studio can talk to the API, and create a **webhook**
(Manage → API → Webhooks) → `https://<deploy>/api/revalidate`, projecting at least
`{ _type }`, with the secret above.

Seed categories: `npx sanity exec scripts/seed-categories.ts --with-user-token`
(or create the 8 in the Studio).

## 8. Founder reviewer checklist

**Code / copy review (now):**
- [ ] "Blog" nav + footer label and blog microcopy read right (§5.1).
- [ ] Comfortable with the no-publish-gate posture (compliance rests on author judgment).
- [ ] Decisions in §3 (design-system match, `SiteShell`, paths) look right.

**Setup (you):**
- [ ] Confirm Sanity project `i7v8b5ym` + `production` dataset exist (create if not).
- [ ] Decide dataset public vs private (private → provide a read token).
- [ ] Set the env vars (§7) on the finmagix-com Vercel project.
- [ ] Add CORS origins + create the publish webhook in Sanity.
- [ ] Seed the 8 categories.

**Verify on a preview deploy (you + me):**
- [ ] `/studio` loads, you can log in and edit.
- [ ] Publish one real post in a category, with a photo.
- [ ] `/blog`, `/blog/[slug]`, `/blog/category/[slug]` render it; filter works.
- [ ] Edit + publish again → change appears live without a redeploy.
- [ ] View on a phone; photos render; tap targets comfortable.
- [ ] OG/Twitter tags + `/blog/rss.xml` present.

**Approve:**
- [ ] Approve merge `session-02-blog-mvp` → `preview` → `main`.

## 9. Done-criteria status (from the brief)

| Criterion | Status |
|---|---|
| Studio embedded at `/studio` | ✅ built (reachable once env + CORS set) |
| `post.status` draft/published (convenience, not a gate) | ✅ |
| `category` schema + seed list (8) | ✅ schema + seed script (run pending) |
| `/blog` + `/blog/[slug]` in the design system, mobile-first, §4.5 floor | ✅ built |
| Category filter + `/blog/category/[slug]` | ✅ |
| Photo upload via Sanity image pipeline | ✅ schema + render path (E2E pending content) |
| SEO + social tags; RSS feed | ✅ |
| Publish webhook revalidates live site | ✅ built (needs secret + webhook config) |
| Verified on Vercel **preview** before prod | ⏳ pending env + deploy |
| One real post end-to-end on a phone | ⏳ pending content |
| Code copy §5.1 review at merge | ⏳ at merge |
| Session report + reviewer checklist | ✅ this doc |
