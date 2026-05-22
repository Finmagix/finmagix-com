# finmagix-com — Marketing-side tech debt

**Last updated:** Session 01 (2026-05-22)
**Status:** Living document. New items added when scope-brief decisions create deferred work or when sessions discover marketing-side debt. Sibling document to `docs/tech-debt.md`, which tracks Finmagix Lite (in-app) debt.

This file tracks deferred work, design-system shortcuts, and cleanup items specific to the finmagix.com marketing site. Items are organized by priority and group into planned cleanup sessions.

---

## High priority (address before public launch)

### Hero photograph is a placeholder

**What.** Home hero currently uses `public/hero/family.jpg` copied verbatim from the prototype (`prototype/site/hero-family.jpg`). This is a representative placeholder — a real photo shoot is the eventual deliverable per § 7 of the marketing brief.

**Where.** `src/components/marketing/Hero.tsx`, `public/hero/family.jpg`.

**Why it matters.** Per § 7 of the brief: "real-people photography only, not stock smiles, not AI-generated faces." The placeholder is acceptable for preview / beta but not for public launch.

**Effort.** Photo sourcing is the founder's task; engineering effort is ~15 min (swap file, update alt text if scene changes, regenerate WebP). **Cleanup session.** Pre-launch.

### Legal pages awaiting counsel review

**What.** `/terms`, `/disclaimer`, `/privacy-and-security` ship with plain-language summaries + structural placeholders for the legal body, sourced from `prototype/uploads/Finmagix_Lite_Beta_Legal_Documents.docx`. Counsel must approve the full legal body before public launch.

**Where.** Future session — not built in Session 01.

**Why it matters.** Per `CLAUDE_CODE_HANDOFF.md` Done criteria: "Counsel reviews and approves the four legal pages before public launch. If counsel hasn't reviewed yet at end of session, ship behind a feature flag, not to production."

**Effort.** Engineering ~2-3 hours; counsel review timeline external. **Cleanup session.** Pre-launch.

### Restore `/pricing` page after beta + Stripe

**What.** Per Session 01 founder decision (May 2026), the `/pricing` route was dropped from the site for the beta phase. No `$` amounts appear anywhere on the marketing surface; pricing is revealed only inside `lite.finmagix.com` after sign-up. Page design and content spec are fully preserved.

**Where.** Currently deleted: `src/app/pricing/` was removed in Session 01. Re-implementation source: `prototype/site/pages/pricing-demo.jsx` (3 tier cards + FAQ + all twelve modules visible). Handoff spec preserved at `docs/CLAUDE_CODE_HANDOFF.md` line ~237.

**Why it matters.** Documented deviation from `strategy.md` Part 5.3 ("no paywalls, only pricing"). This is a deliberate beta-posture decision, not silent drift. The intent is that the value proposition lands before money comes up; quarterly strategy reviews should confirm the deviation is still desired or flag for restoration.

**Restoration gates.**
- (a) Beta exit
- (b) Stripe checkout wired in `lite.finmagix.com`

**Restoration steps.**
1. Re-create `src/app/pricing/page.tsx` from `prototype/site/pages/pricing-demo.jsx`
2. Re-add Pricing link to top nav (`src/components/NavBar.tsx`) and footer Product column (`src/components/Footer.tsx`)
3. Re-add tier price lines (`$19/mo · $150/yr`, `$29/mo · $230/yr`) to Platform §5 "What's inside" cards
4. Re-add `"Pricing is static and transparent…"` line to About §03 (currently `"Tiers are static and transparent…"`)
5. Update Home `ModulesPreview` CTA from "See all twelve modules" → "See all twelve modules & pricing"; link target back to `/pricing#modules`
6. Update `src/app/sitemap.ts` to include `/pricing`

**Effort.** ~4 hours including copy review. **Cleanup session.** Future scope-brief session after beta + Stripe milestones.

### `/platform` page exists as a minimal stub

**What.** Session 01 created `src/app/platform/page.tsx` as a minimal placeholder so the home's "See all twelve modules" link (and any other internal references) don't 404. The full Platform page build (long-form narrative from `prototype/uploads/Our_Platform.docx`, five numbered steps with product screenshots, "What we won't do" callout, etc.) is migration step 4.

**Where.** `src/app/platform/page.tsx`. Source content: `prototype/uploads/Our_Platform.docx` + `prototype/site/pages/pricing-demo.jsx` (which contains the platform page logic).

**Why it matters.** Stub is intentionally minimal to avoid scope creep in Session 01. Full build is its own session per the handoff migration order.

**Effort.** ~6-8 hours for the full Platform page build. **Cleanup session.** Step 4 of migration order — next session after Session 01.

---

## Medium priority (address as sessions progress)

### Design-system primitives duplicated in-session

**What.** Per `CLAUDE_CODE_HANDOFF.md` "Production-state assumptions" section, the design system was duplicated into `src/app/globals.css` and `src/components/marketing/` rather than consumed from a `@finmagix/design-system` package. The handoff explicitly named this as an acceptable in-session shortcut.

**Where.** `src/app/globals.css` (tokens copied from `prototype/site/tokens.css`); `src/components/marketing/` (primitives translated from `prototype/site/components.jsx`).

**Why it matters.** Long-term, both `lite.finmagix.com` (the app at `C:\Projects\finmagix-lite\`) and `finmagix.com` should consume the same `@finmagix/design-system` package so token / component / type changes propagate in one place. Today they're two separate copies.

**Effort.** ~1-2 days to extract design system as an npm package, publish privately, and refactor both consumers. **Cleanup session.** After both marketing site and in-app reach design-system parity (i.e., after the full marketing migration completes + the in-app design-system Sessions G.1+ land).

### Other pages still on WS-2/WS-3 styling

**What.** Session 01 ships only `/` and the shared chrome (NavBar, Footer, persistent Disclosure in `layout.tsx`). The existing pages `/about`, `/advisors`, `/partners`, `/contact`, `/blog`, `/privacy`, `/terms`, `/disclaimer`, `/demo`, `/sign-in`, `/sign-up` (from WS-1/2/3 commits) retain their pre-redesign styling and likely retain Part 4 violations.

**Where.** Everything under `src/app/` other than `/` and `/platform/`.

**Why it matters.** Post-Session-01 merge to main, finmagix.com displays a visually mixed site: new home + chrome, old everything else. Users clicking from `/` to any other page experience a design jump. Persistent disclosure footer WILL appear on every page (because it lives in shared `layout.tsx`) so the disclosure-presence rule is satisfied immediately.

**Effort.** Tracked per page in the handoff migration order (steps 3-10). **Cleanup session.** One session per page or per group, sequenced.

### Sitemap excludes pages that still exist but shouldn't be promoted

**What.** Per handoff direction, `src/app/sitemap.ts` is to exclude `/demo`, `/security`, `/blog`, `/how-finmagix-makes-money`. Of those, `/demo`, `/blog`, `/sign-in`, `/sign-up` currently exist as route files from WS-2/WS-3 but should not be promoted to search engines. `/security` and `/how-finmagix-makes-money` don't exist as routes.

**Where.** `src/app/sitemap.ts`.

**Why it matters.** Search engines may still index routes that exist but aren't in sitemap. May need explicit `noindex` meta or removal of the route files in the corresponding migration step.

**Effort.** 30 minutes when sitemap is built. **Cleanup session.** Sitemap update task, likely part of Session 01 verification.

---

## Low priority (post-launch polish)

### CI grep gate for Part 4 forbidden patterns

**What.** Manual grep gate per `CLAUDE_CODE_HANDOFF.md` "Voice and copy enforcement" section. Could be automated as a pre-commit hook or CI check so future PRs can't reintroduce forbidden phrasings.

**Where.** `.github/workflows/` or `.husky/pre-commit` (TBD which repo convention).

**Why it matters.** Today the gate is enforced by Claude (chat) reviewing copy diffs in session report. Automated gate catches accidental regressions.

**Effort.** 1-2 hours. **Cleanup session.** Post-public-launch operational improvement.

### Open-graph image is not yet specified

**What.** Per handoff "Files expected to change" — "(open-graph image) NEW — neutral OG card; not a dashboard screenshot." Not yet defined.

**Where.** `public/og-image.png` (TBD path/dimensions).

**Why it matters.** Social link previews are a first-impression surface. Default Next.js auto-generated OG images aren't on-brand.

**Effort.** Design + ship ~1 hour. **Cleanup session.** Pre-launch polish.

---

## Resolved

(Track resolved items here once cleanup sessions complete.)

---

## How to use this file

When a new marketing-side debt item appears (deferred work, design shortcut, copy review pending, etc.):
1. Add to the appropriate priority section
2. State What / Where / Why / Effort / Cleanup session
3. When resolved, move to the Resolved section with a brief note on the resolution

When in doubt about whether an item belongs here vs. in `docs/tech-debt.md` (in-app): if the work happens in `C:\Projects\finmagix-com` it lives here. If it happens in `C:\Projects\finmagix-lite` it lives in `tech-debt.md`.
