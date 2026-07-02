# Session 06 — Legal/compliance copy remediation (marketing site)

**Date:** 2026-07-02
**Branch:** `session-06-legal-compliance-copy` (off `session-04`; PR base `preview`)
**Type:** Copy-only compliance pass. No factual specifics removed; no new claims introduced.
**Scope:** Extend the June-2026 legal/compliance remediation (completed in `finmagix-lite`) to finmagix.com.

## Governing sources
`docs/strategy.md` Part 4 · `docs/cfp-cfa-principles.md` · `docs/tech-debt-marketing.md` · counsel package (`finmagix-lite` `docs/counsel-package-source-artifacts.md` + internal mapping doc).

## Method
Read-only audit of every **live** surface (home `components/home/*`, `/platform`, `/about`, `/advisors`, `/partners`, `/contact`, auth interstitials, legal pages, blog shells, shared chrome, metadata) → findings report grouped by concern → founder Q&A on the stop-and-ask items → remediation.

Confirmed dead (not imported, so excluded from remediation): `src/components/marketing/*` except `LegalPage`; `src/lib/modules.ts` (only consumer is the dead `ModulesShowcase`).

## Founder decisions (audit Q&A)
- CFP/CFA involvement = **informal/advisory input only** → soften authored/reviewed claims.
- Patent-pending = **application on file** → keep.
- Hero "financial planner" positioning = **keep as-is** (home + platform).
- Platform sample screenshots = **add "Sample" labels**.

## Changes (11 files, +199/−9)
- **Advisory-equivalence framing** — `components/home/UnderTheHood.tsx` ("CFP and CFA advisors wrote the rules" → "grounded in CFP and CFA principles"); `app/about/page.tsx` §04 ("financial advisory professionals who keep our principles grounded" → "advisors who challenge our thinking and help us keep the line between education and advice clear"; "shape our principles, review our framework" → "advise us, challenge our thinking, and help keep us honest"); `app/advisors/page.tsx` H1 ("shape our principles" → "advise us").
- **Superlative/causal trims** — `about` "drives outcomes" → "shape financial decisions"; `home/WhoThisIsFor.tsx` "Industrial-grade" → "Thorough".
- **Sample labelling** — "Sample" chip on all 7 `/platform` product screenshots (`platform/Hero.tsx`, `platform/HowItWorks.tsx`, `.pf-sample` in `globals.css`).
- **Testimonial disclosure** — "Individual member experiences. Not a guarantee of results." (`home/SocialProof.tsx`, `.home-proof__disclosure`).
- **Regression guard** — `scripts/check-compliance-copy.mjs` + `npm run check:compliance` (Part 4 forbidden-phrase gate; skips comments, excludes counsel-authored `lib/legal.ts`). Implements the `tech-debt-marketing.md` "CI grep gate" item (script done; CI/husky wiring still pending).

## Kept / not touched (with rationale)
- Hero "financial planner" framing (founder call; on-strategy per Part 1).
- "Patent-pending" (application on file).
- `src/lib/legal.ts` — already exhaustively compliant; counsel-gated separately.
- `/contact` — already compliant; redesign deferred to its own session.
- `src/components/marketing/*` (dead) — left for the existing cleanup task.

## Verification
`check:compliance` ✓ · `tsc --noEmit` ✓ · `lint` ✓ · `build` ✓ (28 routes) · visual confirm (7 Sample chips on `/platform`, testimonial disclosure + softened Under-the-hood on `/`).

## Open items (founder accepted as flagged, 2026-07-02 — not blocking this PR)
1. `/platform` "average American at your age" benchmark — copy unchanged; needs a citable source or reword.
2. Testimonials (Bobby / Allen Mueller, CFA / Badal) — confirm documented, consented statements on file.
3. Legal dangling reference — Terms §5.4 / Disclaimer §8 cite a removed "How Finmagix makes money" page; fix during counsel's legal-page review.

## Follow-ups surfaced
- `tech-debt-marketing.md` has stale entries pointing at now-dead `marketing/*` components (ProofStrip "AI by design", Comparison teal / row-2 / dual-naming) — reconcile against the 2026-06-06 home rebuild.
