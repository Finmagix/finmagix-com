# Session 02 — Blog MVP — Session Report

**Branch:** `session-02-blog-mvp` (based on `preview`)
**Scope brief:** [session-02-blog-mvp.md](./session-02-blog-mvp.md)
**Status:** ✅ **SHIPPED TO PRODUCTION** — live at finmagix.com/blog + /studio
(Deploy commit `fc1f404`, 2026-06-21). Verified on preview, then promoted to
`main` via a curated `Deploy:` commit. One item remains: the founder registers
the Sanity publish webhook (needs Sanity admin) — see §10.
**Date:** 2026-06-20 (built) · 2026-06-21 (shipped to production)

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
| Studio embedded at `/studio` | ✅ live at finmagix.com/studio (200) |
| `post.status` draft/published (convenience, not a gate) | ✅ |
| `category` schema + seed list (8) | ✅ seeded; all 8 render as filter chips in prod |
| `/blog` + `/blog/[slug]` in the design system, mobile-first, §4.5 floor | ✅ live; verified desktop + mobile on preview |
| Category filter + `/blog/category/[slug]` | ✅ live |
| Photo upload via Sanity image pipeline | ✅ post + photo published end-to-end |
| SEO + social tags; RSS feed | ✅ live (`/blog/rss.xml` → 200) |
| Publish webhook revalidates live site | ⏳ code shipped; **founder registers the webhook** (Sanity admin) — not yet tested in prod |
| Verified on Vercel **preview** before prod | ✅ founder preview check passed |
| One real post end-to-end on a phone | ✅ published, reviewed, approved |
| Code copy §5.1 review at merge | ✅ reviewed — clean (infra only) |
| Session report + reviewer checklist | ✅ this doc |

## 10. Production deployment (shipped 2026-06-21)

**What shipped.** The blog was promoted to production as a single curated
`Deploy:` commit — `fc1f404` "Deploy: blog MVP — Sanity-backed blog at /blog +
Studio at /studio" — onto `main`. It is the **blog delta only** (41 files), which
landed cleanly because `main` was byte-identical to the pre-blog preview baseline
(`bb47312`). Not a raw `preview → main` merge. The full session-01 redesign was
already live in production; this commit is purely additive.

**Production deploy.** Vercel `dpl_DMgMnhpUkyoSpTjv3AU1PTvM6xw5`, target
production, **READY** (clean build, ~63s), aliased to `finmagix.com` +
`www.finmagix.com`.

**Verified live (2026-06-21):**
- `finmagix.com/blog` → 200 (via the apex→www redirect): blog chrome renders, all seeded categories show as filter chips, and the published post(s) render (not the empty state).
- `finmagix.com/studio` → 200 (Studio shell).
- `finmagix.com/blog/rss.xml` → 200.
- `finmagix.com/` (home) → 200 — no regression to the existing site.
- Local `next build` / `tsc` / `eslint` were clean; the production build matched.
- Earlier on preview (founder): renders desktop + mobile, 8 categories seeded, one real post reviewed + approved.

**Still NOT verified / outstanding:**
- **Publish → revalidate webhook.** The `/api/revalidate` route shipped, but the Sanity webhook must be registered by the founder (Sanity admin: Manage → API → Webhooks → `https://finmagix.com/api/revalidate`, POST, secret = `SANITY_REVALIDATE_SECRET`, trigger on `post`/`category`/`author`, projection `{ _type }`). Until then, published edits go live via the **60-second ISR fallback**, not instantly. The instant publish→live path is unverified in production until the webhook is registered and a publish is observed.
- **No automated content compliance gate** (by design) — see `tech-debt-marketing.md`.
- The 15 npm advisories in the Sanity dependency tree (tracked in `tech-debt-marketing.md`) were not triaged this session.

**Apex→www note.** `finmagix.com` 307-redirects to `www.finmagix.com` (pre-existing domain config); all blog URLs resolve correctly through it. `https://finmagix.com/api/revalidate` is a fine webhook target (the POST follows through).
