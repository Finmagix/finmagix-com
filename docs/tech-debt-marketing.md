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

### Three route stubs landed in Session 01 to avoid 404s on chrome links

**What.** Session 01 added three minimal placeholder pages so the new NavBar / Footer don't 404 in preview. Each contains a "we're working on it" message + a link back to the relevant existing page. These are scope-honoring stubs, not real content.

| Route | File | Real content lives in |
|---|---|---|
| `/platform` | `src/app/platform/page.tsx` | `prototype/uploads/Our_Platform.docx` + `prototype/site/pages/pricing-demo.jsx` (the prototype's platform page logic). Migration order step 4. |
| `/privacy-and-security` | `src/app/privacy-and-security/page.tsx` | `prototype/uploads/Finmagix_Lite_Beta_Legal_Documents.docx`. Legal-pages migration step (step 10). Counsel-supplied body required before public launch. |
| `/disclaimer` | `src/app/disclaimer/page.tsx` | Same docx. Bare-minimum disclaimer copy is in the stub today; full 16-section legal text waits for counsel. |

**Why three stubs landed in Session 01** (the brief originally proposed only `/platform`): the new Footer links to `/privacy-and-security` and `/disclaimer` as part of the legal strip. Pointing the Footer at existing `/privacy` would deceive users (the label says "Privacy & Security Policy" but the page is privacy-only). Dropping the links would deviate from the handoff's footer structure. Stubs preserve the canonical URLs and let founder QA the chrome without 404s.

**Effort to fully build out.** `/platform` ~6-8 hours; `/privacy-and-security` and `/disclaimer` ~2-3 hours each plus external counsel review. **Cleanup sessions.** Steps 4 + 10 of migration order.

**Redirects still TBD.** Per handoff: `/demo → /platform`, `/privacy → /privacy-and-security`, `/security → /privacy-and-security`. These are migration order step 3 — `next.config.ts` redirects, separate session.

---

## Strategy / compliance — deliberate overrides to revisit

### "AI by design" proof point on home — overrides strategy.md Part 7

**What.** The 2026-05-24 mini-brief rebuild of the home top sections introduced a 4-item ProofStrip immediately below the hero. Proof point 3 is "AI by design" with the supporting line *"Modern technology does the heavy lifting; you make every call."*

**Why it matters.** `strategy.md` Part 7 states the home page **does not lead with AI** ("AI is infrastructure, not the pitch"). The Session 01 handoff's Compliance check table reinforces this — "AI-powered" as the pitch is in the forbidden column. The new "AI by design" proof point names AI prominently on the home, above the fold (or close to it), in a position structurally analogous to the value-prop strip that previously did not mention AI at all.

**Why it's not silent drift.** Founder approved this deliberately in the 2026-05-24 mini-brief. The brief explicitly states: *"this is a deliberate founder override of strategy.md Part 7 and the redesign brief Section 3.3, both of which state the home page does not lead with AI."* Recorded as deliberate, not absorbed.

**Why the override is structurally bounded.** The "you make every call" half of the supporting line is load-bearing for the no-directive compliance posture (Part 4 — "We will not produce single-answer optimized plans" / "The voice can be warm; the structure stays optional"). That clause **must not be softened or removed** without re-opening the override decision.

**Where.** `src/components/marketing/ProofStrip.tsx` — the third item in the `proofs` array. `docs/sessions/session-01-finmagix-com-redesign-home.md` Compliance notes section.

**Resolution paths (pick one in a future session):**
- (a) **Amend `strategy.md` Part 7** to reflect the new posture — AI may be named on home in a single bounded surface, with the "you make every call" non-directive guardrail required. Requires founder sign-off + counsel review.
- (b) **Revisit the proof point** — replace "AI by design" with a non-AI proof point or move the AI mention back into the body-only Under the hood section (where it currently lives twice: in the body lede + the bullets). Requires founder sign-off.
- (c) **Hold the override indefinitely** — accept the strategy/page disagreement as a known beta-posture deviation, document quarterly.

**Effort.** (a) ~30 min strategy edit + counsel review; (b) ~15 min code edit + new proof copy; (c) ~0 (already current state). **Cleanup session.** Open — flag for the next quarterly Part 4/7 review.

### Home reintroduces a dashboard screenshot (partial reversal of Session 01 decision)

**What.** The 2026-05-24 mini-brief added a `PlatformPreview` section below `HowItWorks`, displaying `public/product/quiet-index.png` inside a mock browser chrome.

**Why it matters.** The original Session 01 brief (May 2026) explicitly removed dashboard imagery from the home in response to Part 4 violations on the OLD WS-1 mockup. The new screenshot is materially different from the old one (no "$6,200/yr" pill, no "Action available" pill, no false-precision figures), and it sits mid-page rather than as the hero. The framing surrounding it is observational ("what it looks like"), not promotional.

**Why it's not silent drift.** Founder approved adding this section in the 2026-05-24 mini-brief response after seeing a compliance-difference table comparing the new image to the old mockup. Documented in session report.

**Watch items for future review:**
- If the screenshot is ever re-captured, verify no new directive UI elements (pills, "Get started now" CTAs, "$X" promises) sneak in.
- If marketing copy around the screenshot drifts toward "Finmagix improves your finances" / "saves you money" framing, that's the override creeping; revert to observational.
- The bar-chart red bars in the screenshot imply "lower scores need attention" — a visual directive cue from the in-app UI. If future product design changes the color semantics (e.g., neutral grey for low scores), update the screenshot to match.

**Effort.** Watch-item only; no immediate action. **Cleanup session.** Reviewed alongside any future home-page session that touches the PlatformPreview section.

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
