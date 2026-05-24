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

### /contact page redesign + form backend — deferred to its own session

**What.** Sessions 02-05 (the all-pages-on-preview push) deferred the entire /contact page redesign per founder direction ("We will work on a separate session for the Contact Us form later"). The current WS-2 /contact page is still in place on `preview` and will ship to `main` on the consolidated merge — design-mismatched against the rest of the new site until its own session.

**Where.** `src/app/contact/page.tsx` + `src/app/contact/page.module.css` (still WS-2).

**Why it matters.** Three things:
1. **Visual mismatch.** Users navigating from any redesigned page to /contact will see the old design jump. Per the founder's all-pages-on-preview workflow, this is the only such mismatch in the site (every other page redesigned).
2. **Form backend.** The redesigned form per the prototype (`other-pages.jsx` ContactPage) is client-side only (sets a `sent` state). It does NOT actually email anyone. Founder direction: submissions should email `support@finmagix.com` (an active email) with the success message "Thank you for your note. We will be in touch with you within two business days."
3. **Email service choice.** A Next.js page can't send email on its own. The contact session needs to pick + wire an email service (Resend recommended, or Web3Forms for quick path). DNS work on `finmagix.com` may be required if Resend.

**Restoration steps (the future /contact session):**
1. Founder picks email service (Resend / Web3Forms / other) and provides API key in Vercel env vars
2. Replace `src/app/contact/page.tsx` with prototype's ContactPage component, translated to Next.js
3. Form: partner-focused (Institution dropdown with 6 options + URL-hash deep-linking), single email destination `support@finmagix.com`
4. Success-state copy: *"Thank you for your note. We will be in touch with you within two business days."* (founder-specified)
5. Add `/api/contact` route (server-side handler that calls email service)
6. Delete `src/app/contact/page.module.css` (WS-2 orphan)
7. Update tech-debt-marketing to mark resolved

**Restoration estimate.** ~2-3 hours including service setup. **Cleanup session.** Founder's call when ready.

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

### Comparison section introduces teal tokens outside the design system

**What.** The 2026-05-24 founder mini-brief on the "Not another budgeting app" comparison section approved use of teal (`--teal-deep #0F6E56`, `--teal-mid #1D9E75`, `--teal-tint #E8F4EE`) for the Finmagix column highlight, instead of translating to the design-system forest green (`--accent-primary #2C5A3E`). Founder decision 1b in the mini-brief.

**Where.** `src/app/globals.css` `:root` block has a new sub-section labeled `COMPARISON SECTION ACCENT — teal palette`. Used in `src/components/marketing/Comparison.tsx` for the band border, fill, and the "yes" icon disc.

**Why it matters.** The home page now has two accent colors visible: forest green everywhere else (Hero CTAs, eyebrow lines, ProofStrip icons, NavBar wordmark dot, PartnerStrip CTA, ClosingCTA CTA) and teal in the Comparison section. The Finmagix wordmark inside the Comparison's middle column header keeps its forest-green period (brand identity, not theming), creating a small green-period-inside-teal-frame visual moment. Not necessarily wrong, but inconsistent.

**Watch items for future review:**
- If the comparison section's teal "succeeds" visually, consider promoting teal as a secondary accent across the design system (would require strategy / design review).
- If teal is later abandoned, this token block and the Comparison's `.comparison__band` + `.comparison__ic--yes circle` rules need to migrate to `--accent-primary`.
- Do not introduce teal in additional components without revisiting this trade-off.

**Effort.** Watch-item only; no immediate action. **Cleanup session.** Folded into the next design-system reconciliation pass (or the eventual `@finmagix/design-system` package extraction).

### Comparison row 2 "AI by design" — flagged as least-defensible row

**What.** The comparison table's second row claims "AI by design" as a Finmagix differentiator from budgeting / spend apps. Most modern budgeting apps now market AI features (Cleo, Mint's redesign, Monarch, YNAB's recent additions). This row is approved per the Claude Design brief, but flagged as the row most likely to be challenged.

**Where.** `src/components/marketing/Comparison.tsx` `rows` array, second item.

**Why it matters.** Compliance + truth-in-marketing exposure. If counsel or a competitive-research review finds the claim weak (e.g., budgeting apps demonstrably ship AI features), the row should be replaced or qualified rather than ship as a clean comparison.

**Resolution paths (founder decision when reviewed):**
- (a) Keep as written. Defend on the grounds that Finmagix's AI is bounded by CFP/CFA frameworks while budget apps' AI is unbounded categorization / forecasting.
- (b) Qualify: "AI grounded in CFP & CFA frameworks" — adds the framing that differentiates.
- (c) Replace with a different proof point.

**Effort.** ~5 minutes when decided. **Cleanup session.** Open — counsel review or competitive-marketing pass.

### Dual naming: "Free Financial Fitness Test" vs "Financial Health Checkup"

**What.** The comparison section's row 5 uses the marketing label **"Free Financial Fitness Test."** The canonical in-app module name (in `prototype/data.js`, in strategy.md Part 5.3 tier composition, and in the home ModulesPreview) is **"Financial Health Checkup."** Founder confirmed the dual naming is intentional (mini-brief decision 5a).

**Where.** Comparison row 5 vs everywhere else on the marketing site + the in-app surface.

**Why it matters.** Users moving from the comparison section ("Free Financial Fitness Test") to the actual product (`lite.finmagix.com` shows "Financial Health Checkup" as the free module) may not immediately recognize the same thing. The marketing-to-product naming bridge is implicit. If discovery friction shows up in analytics, the dual naming is a candidate to align.

**Watch items:**
- If marketing copy diverges further (e.g., other surfaces start saying "Fitness Test" too), evaluate whether to migrate the in-app name to match marketing OR migrate marketing to match in-app.
- Quarterly: re-read the Comparison section + ModulesPreview + Health Checkup module copy as a set; confirm the dual-naming is still intentional.

**Effort.** Either ~5 minutes (align marketing → in-app, single-string edit in Comparison) or ~30 minutes (align in-app → marketing, requires rename across multiple in-app surfaces + URLs). **Cleanup session.** Open; revisit at the next quarterly Part 7 voice review.

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
