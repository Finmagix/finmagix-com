// Home "Modules" section — three featured modules (Option A layout per
// handoff § 5.4) plus a CTA to see all twelve.
//
// Per Session 01 founder decision (May 2026): /pricing was dropped. The
// prototype's "See all twelve modules & pricing" link is replaced with
// "See all twelve modules" pointing at /platform (where the full module
// list will live once /platform's full build lands in migration step 4).
// See docs/tech-debt-marketing.md for the restoration plan when /pricing
// returns post-beta + post-Stripe.

import ModuleCard, { type ModuleSummary } from "./ModuleCard";
import { ArrowRightIcon } from "../Icons";

// Three featured modules (health, stress, tax) — matches the prototype's
// featuredIds = ['health', 'stress', 'tax']. Full 12-module catalog lives
// in the prototype's data.js and will be sourced into a shared
// src/lib/modules.ts when /platform and /pricing get built.
const featured: ModuleSummary[] = [
  {
    id: "health",
    icon: "Activity",
    title: "Financial Health Checkup",
    tier: "Free",
    blurb:
      "A look at how things sit across six everyday parts of your money life.",
  },
  {
    id: "stress",
    icon: "Shield",
    title: "Financial Stress Test",
    tier: "Free",
    blurb:
      "How long would things hold up if income paused for a while?",
  },
  {
    id: "tax",
    icon: "Receipt",
    title: "Tax Efficiency",
    tier: "Recommended",
    blurb:
      "Common places people leave money on the table without meaning to.",
  },
];

export default function ModulesPreview() {
  return (
    <section
      className="section"
      id="modules"
      style={{ background: "var(--surface-sunken)" }}
    >
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Modules</div>
            <h2
              className="t-section-title section-head__title"
              style={{ marginTop: 16 }}
            >
              Twelve sides of your financial life.
            </h2>
          </div>
          <p className="t-lede section-head__sub">
            Each module is a structured way of thinking about one area. Start with whichever feels most relevant — or follow the suggestions we surface after the intake. Every module in every tier is visible. No paywalls — just clear, plain-language thinking.
          </p>
        </div>

        <div className="module-grid">
          {featured.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="/platform#modules" className="btn btn--secondary">
            See all twelve modules
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
