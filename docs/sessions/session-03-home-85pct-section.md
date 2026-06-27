# Session 03 — "Built for the 85%" section: copy rewrite + relocate to position #2

**Branch:** `session-03-home-85pct-section`
**Date:** 2026-06-27
**Strategy anchor:** strategy.md Part 1 (who we serve — the ~85% below the
advisor asset gate) + Part 8 (first experience / marketing site).
**Tech-debt anchor:** None. No new debt introduced; none repaid.

## What changed (plain language)

Two things, in two files:

1. The "Built for the 85%" section on the home page — the one with the
   man-at-desk photo and five checkmark bullets — got a copy rewrite.
   The headline, the five bullets, and the photo caption overlay are
   new. The eyebrow ("Built for the 85%"), the photograph itself, and
   the sub-caption ("Finmagix gives that majority the structured
   thinking usually reserved for six-figure clients.") are unchanged.

2. That same section was moved on the home page. It used to be the 6th
   section down (after Sample Output, What You Get, Social Proof,
   Trust Band). It is now the 2nd section, directly below the hero.
   Every other section's order is preserved.

## Files touched

- `src/components/home/WhoThisIsFor.tsx` — copy rewrite + data-basis
  code comment above the "85%" stat.
- `src/app/page.tsx` — moved `<HomeWhoThisIsFor />` from position 6 to
  position 2.

That's it. No CSS changes, no photo treatment changes, no other
component or page touched. Verified by `grep` — nothing in the codebase
references this section by nav anchor, in-page link, or analytics
event, so the move broke nothing.

## Before / after of user-facing copy (for founder side-by-side review)

### Eyebrow

| | |
|---|---|
| Before | Built for the 85% |
| After | Built for the 85% (unchanged) |

### Headline

| | |
|---|---|
| Before | This is for you if… |
| After | Six-figure thinking, no six-figure minimum |

### Bullets

| | Before | After |
|---|---|---|
| 1 | You plan without an advisor — or only see one now and then. | Industrial-grade tools to get a complete picture of your financial life. |
| 2 | You're not sure whether you're actually on track for retirement. | Modules anchored in CFP planning principles. |
| 3 | You want more than a budgeting app that tallies the past. | Taxes, debt, insurance, estate, and Social Security — thought through in one place, not scattered across five apps. |
| 4 | You'd like taxes, debt, insurance, estate, and Social Security in one place. | Built for the ~85% of households below the asset minimum most advisors require — not just six-figure portfolios. |
| 5 | You want structure before a big financial decision — not a sales call. | Structure before a big financial decision — not a sales call. |

### Photo caption overlay

| | Before | After |
|---|---|---|
| Big stat | 85% | 85% (unchanged) |
| Caption line | of households plan without an advisor | of households fall below the minimum advisors require |
| Sub-caption | Finmagix gives that majority the structured thinking usually reserved for six-figure clients. | Finmagix gives that majority the structured thinking usually reserved for six-figure clients. (unchanged) |

The caption-line change is the strategically important one — the
"don't use an advisor" framing is the ~two-thirds figure and would not
defend an 85% claim under scrutiny. The new "fall below the minimum
advisors require" framing is the asset-gate claim that the 85% number
actually supports, per the data-basis comment now embedded above the
stat in source.

## What was verified

- **Local `next build` passes clean** — `/` renders statically with
  the new section order; the 85% section moved without breaking any
  other route in the manifest.
- **Inbound-link sweep** — `grep` across `src/` finds zero references
  to `WhoThisIsFor` or any `#who-this-is-for` anchor outside the file
  itself and the page.tsx import. The move did not orphan a nav
  anchor, in-page link, or scroll target.

## What was NOT verified

- **Vercel preview deploy** — pending merge of this branch into
  `preview`. Will verify visually on `preview.finmagix.com` before
  promoting to main.
- **Mobile rendering of the moved section** in the new flow position —
  no CSS changes were made, but the section now sits between the hero
  and SampleOutput rather than between TrustBand and HowItWorks, so a
  visual eye on 360/390/414px is the right final check before the
  main merge.

## Compliance check — Part 4 sentinels

Both flagged items in the brief were preserved exactly:

- **"Modules anchored in CFP planning principles"** — bullet 2, kept
  verbatim with "planning" lowercase. Sits in the "informed by /
  inspired by" lane per strategy.md Part 4 and cfp-cfa-principles.md
  Section 7. Not rephrased to "CFP-grade," "CFP-certified," or
  anything implying professional equivalence.
- **"~85% of households below the asset minimum most advisors
  require"** — bullet 4 + caption-line "of households fall below the
  minimum advisors require." Asset-gate framing preserved as the
  source of defensibility. Not silently reworded to "85% don't have
  an advisor."

No other Part 4 sentinels touched: no allocation percentages, no
tickers/funds/carriers, no "Accept"/directive buttons, no
tier-composition personalization, no brokerage/tax-position language,
no streaks/peer-comparison.

## Tech-debt delta

Zero. No new debt, no debt paid down. tech-debt.md and
tech-debt-marketing.md unchanged.
