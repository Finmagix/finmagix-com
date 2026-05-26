// Shared module catalog — the canonical list of Finmagix's twelve
// modules and their metadata. Sourced from prototype/site/data.js
// (the team's source of truth since pre-WS-1) and brought into
// src/ on 2026-05-25 alongside the home closing-band redesign.
//
// Consumers:
//   - src/components/marketing/ClosingCTA.tsx (12-tile grid)
//
// Future consumers (when those sessions land):
//   - src/components/marketing/ModulesPreview.tsx — already uses 3 of
//     these (health / stress / tax) but with the entries duplicated
//     inline. Switch to importing from here once we're confident the
//     shape is stable.
//   - src/app/platform/page.tsx — full 12-module list (currently
//     comma-separated strings in the "What's inside" tier cards).
//   - src/app/pricing/page.tsx — when /pricing returns post-beta +
//     Stripe.
//   - src/lib/legal.ts §5.1 table — three rows of module names per
//     tier. Currently duplicated literal strings; could be derived.
//
// Per founder Session 01 decisions: NO prices live on this data.
// Pricing lives in src/lib/legal.ts (Terms §5.1, currently TBA) and
// nowhere else. The `tier` field tells you which tier a module
// belongs to; the dollar amount is decoupled.

import type { IconName } from "@/components/Icons";

export type ModuleTier = "Free" | "Recommended" | "Pro";

export type Module = {
  /** Stable slug used for anchors, keys, future deep links. */
  id: string;
  /** Resolves to a component in src/components/Icons.tsx via IconByName. */
  icon: IconName;
  /** Display name. Marketing-facing wording — keep aligned with
   *  Terms §5.1 table in src/lib/legal.ts. */
  title: string;
  /** Tier this module belongs to. */
  tier: ModuleTier;
  /** One-line teaser for cards / list views. Plain language, no
   *  directive verbs (Part 4). */
  blurb: string;
  /** Longer description for module-detail surfaces. Same Part 4
   *  posture as `blurb`. */
  longBlurb: string;
};

/** All twelve modules, in the order the prototype declares them.
 *  This order isn't tier-grouped — it reflects the team's narrative
 *  ordering (health and stress first as the always-free anchors,
 *  then tax / debt / protection / social, then the longer-horizon
 *  modules). The closing-band tile grid renders them in this order
 *  to stay consistent with what ModulesPreview already uses for its
 *  three featured entries (health, stress, tax — positions 1-3). */
export const MODULES: ReadonlyArray<Module> = [
  {
    id: "health",
    icon: "Activity",
    title: "Financial Health Checkup",
    tier: "Free",
    blurb:
      "A look at how things sit across six everyday parts of your money life.",
    longBlurb:
      "A starting picture — cash flow, debt, savings, protection, retirement direction, estate basics — in plain language. About ten minutes. No score, no grade.",
  },
  {
    id: "stress",
    icon: "Shield",
    title: "Financial Stress Test",
    tier: "Free",
    blurb: "How long would things hold up if income paused for a while?",
    longBlurb:
      "Three honest scenarios — short pause, longer pause, big surprise — and what shifts in each. Useful before the actual surprise.",
  },
  {
    id: "tax",
    icon: "Receipt",
    title: "Tax Efficiency",
    tier: "Recommended",
    blurb:
      "Common places people leave money on the table without meaning to.",
    longBlurb:
      "Account types, deduction patterns, timing trade-offs. Tax law is a quilt; this is a map of the quilt.",
  },
  {
    id: "debt",
    icon: "Wallet",
    title: "Debt Strategy",
    tier: "Recommended",
    blurb:
      "Different ways to think about what to pay off first, and why.",
    longBlurb:
      "Avalanche, snowball, hybrid, and the honest case for each. Includes the emotional math, not just the spreadsheet math.",
  },
  {
    id: "protection",
    icon: "Umbrella",
    title: "Protection Review",
    tier: "Recommended",
    blurb:
      "What kinds of insurance tend to matter at each life stage, and what tends not to.",
    longBlurb:
      "Life, disability, umbrella, property — the categories, the trade-offs, the assumptions. No carrier names, no quotes.",
  },
  {
    id: "social",
    icon: "Landmark",
    title: "Social Security",
    tier: "Recommended",
    blurb: "When to claim — the trade-offs, in plain language.",
    longBlurb:
      "Claim ages, spousal benefits, the break-even questions. Not a single answer; a way to think about your version of the question.",
  },
  {
    id: "college",
    icon: "GraduationCap",
    title: "College Funding",
    tier: "Pro",
    blurb: "Saving for school without putting retirement second.",
    longBlurb:
      "529s, the financial-aid mechanics, the honest conversation about how much is enough. No false precision on tuition forecasts.",
  },
  {
    id: "fire",
    icon: "Flame",
    title: "FIRE Planning",
    tier: "Pro",
    blurb: "Some structured ways to think about leaving work earlier.",
    longBlurb:
      "Withdrawal frameworks, the bridge-years math, the difference between Lean, Regular, and Fat FIRE. With the assumptions visible.",
  },
  {
    id: "retirement",
    icon: "TreePine",
    title: "Retirement Planning",
    tier: "Recommended",
    blurb:
      "Some structured ways to think about retirement on your timeline.",
    longBlurb:
      "Income strategies, account drawdown order, the difference between 'enough' and 'comfortable'. Not a target number; a way of looking.",
  },
  {
    id: "longevity",
    icon: "HeartPulse",
    title: "Longevity Planning",
    tier: "Pro",
    blurb:
      "Planning for a life that lasts longer than the planning brochures assume.",
    longBlurb:
      "Healthcare costs, late-life housing, the years that matter most. Honest about the parts that are hard to predict.",
  },
  {
    id: "estate",
    icon: "ScrollText",
    title: "Estate Basics",
    tier: "Recommended",
    blurb:
      "The documents most adults need — and what they actually do.",
    longBlurb:
      "Wills, powers of attorney, beneficiary alignment. Not legal advice; a checklist of conversations to have.",
  },
  {
    id: "investment",
    icon: "Compass",
    title: "Investment Frameworks",
    tier: "Pro",
    blurb:
      "How to think about risk, time, and your own actual nervousness about markets.",
    longBlurb:
      "No fund picks, no allocations. Just the frameworks a thoughtful person uses to make their own decisions.",
  },
];
