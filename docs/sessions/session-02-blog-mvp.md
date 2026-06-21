# Session NN — Blog MVP

**Type:** Net-new feature (marketing site)
**Repo:** `finmagix-com` (the marketing site — separate from the app repo `finmagix-lite`)
**Branch:** `session-NN-blog-mvp`
**Sanity Project ID:** `i7v8b5ym` (public — set via `NEXT_PUBLIC_SANITY_PROJECT_ID`; not a secret)
**Status:** Scope brief — approved. Inputs confirmed (Project ID, categories). One gate remains before code: Claude Code verifies the `finmagix-com` stack (see Production-state assumptions).

> Assign the next sequential number from this repo's `docs/sessions/` before opening the branch. This is standalone marketing-site work, not part of the lettered cleanup sequence (Sessions A–N in tech-debt.md), which lives in the app repo.

---

## Goal

After this session ships, `finmagix.com/blog` exists, matches the site's design system, can be browsed by category, and a non-technical writer can compose posts and upload photos through an embedded editor. Publishing is at the author's discretion — no software gate.

## Strategy anchor

- **Part 7 (Voice and accessibility).** Blog chrome, empty/loading states, and post presentation follow the Part 7 voice rules and the 380px mobile-first design center (7.4).
- **Part 8 (The first experience).** The blog is a public, no-sign-up surface; a reader can land on a post and understand it without an account, consistent with the "no sign-up to see what the platform does" principle.
- **Optional alignment (not required this session):** several natural categories map to module topics (College Planning, Debt, Taxes, Retirement, etc.). A post in such a category may point readers to the matching module the way the bot's Layer 2 does ("the College Planning module is built for this") — informational navigation, never an upgrade pitch. This keeps the blog a compliant on-ramp to the product without crossing Part 4 or the Part 6 "no blending content with upgrade prompts" line.
- Content authored later is governed by Part 4 and Part 7; this session builds the vessel, not the content.

## Tech-debt anchor

- **Resolves:** none. Net-new feature.
- **New debt created (named honestly, per the maintenance rule):**
  1. **There is no enforced review gate, by design (founder decision).** Compliance of published content rests on author judgment, optionally assisted by a review against Claude before publishing. The publish action is never blocked by software. Revisit this if authorship expands beyond the founder or publishing cadence increases — at which point the likely mitigation is a non-blocking pre-publish *warning* (flags a sentinel pattern, author can click past it), not a hard gate.
  2. No automated sentinel linting on blog content (the strategy §5.2 / standards §5.2 pattern checks). Any review is manual and optional. Acceptable for low-volume, single-author publishing; flag if volume grows.

## Compliance check

- **Part 4 lines touched by the infrastructure:** none. Building routes, a schema, and an editor does not itself cross a line.
- **Publication is intentionally not software-gated.** Review is an optional, author-initiated step (e.g., running a draft against Claude against the Part 4 lines and Part 7 voice table). When the author flips a post to `published`, it goes live. No checklist, classifier, or confirmation step can refuse the action. This mirrors the strategy's preference for surfaces the user reaches for over obligation surfaces that pull them along.
- **Code-level copy in this session still goes through normal PR review.** The "Blog" nav label and the index/empty/loading microcopy are *code* in the repo, so they get the standard §5.1 copy review as part of the merge the founder already approves. (The sample test post is *content* in Sanity, published at the author's discretion like any post — not part of the code review.)
- **CFP/CFA principles touched:** Principle 2 (integrity, non-misrepresentation) and Principle 6 (clear, balanced communication) apply to all future posts; Principle 5 (no conflicts/affiliate income) means posts carry no affiliate or sponsored links — subscription-revenue-only commitment holds. Principle 7 (data protection) is **not** engaged: the MVP collects no reader PII (no comments, no email capture, no accounts).

## New dependencies (per standards §6.5)

Adding Sanity and its Next.js helpers. Justification: this replaces building and maintaining a custom CMS (editor, image pipeline, content store) inside our own app — far more than 200 lines of fragile custom code, and ongoing maintenance burden a non-technical founder cannot review. Sanity is hosted (near-zero ops), has a generous free tier we will not outgrow soon, and renders into our own front end so design control is fully retained. Expected packages: `sanity`, `next-sanity`, `@sanity/image-url`, `@sanity/vision`. *(Assumes `finmagix-com` is a Next.js app — see Production-state assumptions. If it is not, the content source stays Sanity but the rendering approach is rescoped.)*

## Files expected to change

Paths below assume `finmagix-com` is a **Next.js App Router** app. Claude Code confirms the actual stack and structure first and surfaces any mismatch before improvising (standards §4.3). Expected:

- **New — Sanity schema:** `sanity.config.ts`; `sanity/schemaTypes/post.ts`, `author.ts`, `category.ts`; `sanity/env.ts`.
  - `post` references one or more `category` documents.
  - `category` is a curated document type (title, slug, optional short description) so the author can add a new category in the Studio with no code change, and so categories stay consistent rather than fragmenting like free-form tags.
- **New — editor route:** `app/studio/[[...tool]]/page.tsx` (Studio embedded at `/studio`).
- **New — blog routes:** `app/blog/page.tsx` (index, with category filter), `app/blog/[slug]/page.tsx` (post), `app/blog/category/[slug]/page.tsx` (category landing page), `app/blog/rss.xml/route.ts` (feed for the future newsletter).
- **New — data layer:** `lib/sanity/client.ts`, `queries.ts`, `image.ts`.
- **Changed — navigation:** the site's main nav/footer component, to add a "Blog" link. *(User-facing copy → §5.1 review at merge.)*
- **Changed — dependencies:** `package.json` + lockfile.
- **Env:** Project ID `i7v8b5ym` is public (`NEXT_PUBLIC_SANITY_PROJECT_ID`). Dataset (`production`), read token, and webhook secret are set in Vercel and `.env.local` by the founder, never committed.
- **New — docs:** this file in `docs/sessions/`.

### Initial categories (confirmed)

Seed list to create in the Studio. Editable and extendable anytime without code:

- Financial Fitness
- College Planning
- Debt
- Retirement
- Taxes
- Insurance & Protection
- Saving & Investing Basics
- Life Events

## Production-state assumptions

Each is flagged **CONFIRMED** or **VERIFY** (Claude Code confirms before writing code, per §3.1).

1. **CONFIRMED — target is the separate `finmagix-com` repo**, the marketing site, distinct from the app repo `finmagix-lite` (which runs at `lite.finmagix.com`).
2. **VERIFY — and now load-bearing: `finmagix-com` is a Next.js (App Router) app.** The whole Sanity-into-the-front-end plan assumes this. If `finmagix-com` is a different framework (Pages Router, Astro, plain static, etc.), file paths and the rendering approach change — Sanity stays as the content source, but this is a stop-and-ask and a rescope. **This is the first thing Claude Code checks on the branch.**
3. **VERIFY — `finmagix-com` uses Tailwind with a shared design-token / component system** the blog can reuse for visual consistency. If the marketing site's styling differs from the app's, "matches the design system" means matching `finmagix-com`'s system, not the app's.
4. **VERIFY — `finmagix-com` deploys via Vercel** (almost certainly its own Vercel project, separate from the app's). Determines where env vars and the revalidation webhook go.
5. **VERIFY — `/blog` and `/studio` are free routes** in `finmagix-com` with no existing collision.
6. **CONFIRMED — the blog does NOT touch the app (Supabase DB, auth, billing).** It lives in a different repo entirely, so there is no path to the app's data or systems. No schema/auth/billing change anywhere.
7. **DEFERRED — email/newsletter (Resend) is a later session.** No assumption needed here beyond building an RSS feed so the newsletter is a clean follow-on, not a rebuild.

## Done criteria

- Sanity project live; Studio embedded at `/studio` and reachable.
- Post schema includes a `status` field (draft / published) used purely as an editorial convenience so unfinished drafts don't render publicly. It is **not** a gate: flipping to `published` publishes immediately, with nothing able to block it.
- `category` schema exists, seeded with the confirmed initial list; a post can be assigned one or more categories.
- `/blog` and `/blog/[slug]` render in `finmagix-com`'s design system, mobile-first, meeting the §4.5 accessibility floor (keyboard-reachable, labeled fields, 44px tap targets, color not the only state signal).
- The blog index can be filtered by category, and each category has its own landing page at `/blog/category/[slug]`.
- Photo upload works end to end through Sanity's image pipeline.
- SEO metadata + social-share tags present; RSS feed available.
- Publish webhook revalidates the live site (publish → live with no manual redeploy).
- Verified on a Vercel **preview** deploy against a preview dataset before production (no straight-to-main).
- **One real post published end-to-end**, in a category, viewed on a phone, photos rendering correctly.
- Code-level copy (nav label, microcopy) passed §5.1 review at merge.
- Session report + founder reviewer checklist written before merge.

## Out of scope (explicitly, to prevent creep — §8.2, §8.8)

- Newsletter, Resend, email capture, or any subscribe form — **deferred to a follow-on session**.
- Comments or any reader-generated content.
- Membership, paid posts, or gating blog content behind tiers.
- Author/user management beyond a simple author reference field.
- Migrating any existing content.
- Free-form tags, nested/hierarchical categories, or per-category access rules. (Flat curated categories are in scope; anything beyond that is deferred.)
- Multi-language.
- Any change to the app repo, the Supabase schema, auth, or billing.

---

*Approved by founder: ____________  Date: ________*
*PR: __________ (append this brief to the PR description on open, per §6.1.)*

---

## Pre-build confirmation (Claude Code — 2026-06-20)

Stack verified on the `session-02-blog-mvp` branch before any feature code, resolving the brief's VERIFY items above:

- **VERIFY #2 → CONFIRMED.** `finmagix-com` is **Next.js 16.2.4, App Router**, React 19.2.4, TypeScript. The Sanity-into-the-front-end plan holds as written; no rescope.
- **VERIFY #3 → CONFIRMED.** **Tailwind v4** (CSS-first; no `tailwind.config.*`). Design tokens live in `src/app/globals.css` (declared the marketing site's design-system source of truth); shared UI primitives in `src/components/ui/` (`Button`, `Badge`, `SectionLabel`). `@tailwindcss/typography` is already installed — available for post-body prose.
- **VERIFY #4 → CONFIRMED.** `finmagix-com` is its **own Vercel project** (`prj_3oObfcsmPKH2qovvzY4UN2kKTm4J`, team `finmagix`), separate from the app's `finmagix-lite` project. Sanity env vars and the revalidation webhook belong on **this** project. Per-branch preview deploys are available (`preview.finmagix.com` tracks the `preview` branch).
- **VERIFY #5 → CONFIRMED.** `/blog` and `/studio` are **free** — no route collision. The only `blog` references in the repo are historical comments in `src/app/sitemap.ts` and `src/components/Footer.tsx` noting the old blog was removed.

**Build notes (carry into the build phase):**

1. **Paths nest under `src/`.** The brief's expected paths map to `src/app/blog/...`, `src/app/studio/[[...tool]]/page.tsx`, and `src/lib/sanity/...` — not root-level `app/` / `lib/`.
2. **Read the local Next 16 docs first.** Per `AGENTS.md`, read `node_modules/next/dist/docs/` before writing any Next code (Next 16 diverges from training data).

**Branch base:** this branch is based on `preview` (the session-01 home redesign is already merged there), independent of the `session-01-*` branch, per the normal `session-NN → preview → main` flow.
