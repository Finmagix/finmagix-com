// /platform rebuild — Section 4: What's inside (3 compact tier cards).
// Verbatim modules from finmagix-platform-full.html.

import ScrollReveal from "@/components/home/ScrollReveal";

type Tier = {
  name: "Free" | "Recommended" | "Pro";
  modules: string[];
  badge?: string;
  iconKind: "bolt" | "star" | "graph";
};

const TIERS: Tier[] = [
  {
    name: "Free",
    modules: ["Financial Fitness Score", "Financial Stress Test"],
    iconKind: "bolt",
  },
  {
    name: "Recommended",
    badge: "Most popular",
    modules: [
      "Tax Efficiency",
      "Insurance",
      "Debt Strategy",
      "Social Security",
      "College",
      "FIRE",
    ],
    iconKind: "star",
  },
  {
    name: "Pro",
    modules: [
      "Retirement Planner",
      "Wealth Builder",
      "Longevity Calculator",
      "Estate & Legacy",
    ],
    iconKind: "graph",
  },
];

function TierIcon({ kind }: { kind: Tier["iconKind"] }) {
  if (kind === "bolt") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />
      </svg>
    );
  }
  if (kind === "star") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l2.7 6.2 6.8.5-5.2 4.4 1.6 6.6L12 17.7 6.1 21.2l1.6-6.6L2.5 9.7l6.8-.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 8l4.5 4L12 5l4.5 7L21 8v10H3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12l4 4L19 7" />
    </svg>
  );
}

export default function PlatformWhatsInside() {
  return (
    <section className="pf-sec pf-tiers">
      <div className="pf-wrap">
        <ScrollReveal className="pf-sec-head">
          <span className="pf-eyebrow">What&apos;s inside</span>
          <h2 className="pf-sec-head__h2">
            Three tiers. <span className="pf-serif-em">No paywalls.</span>
          </h2>
          <p className="pf-lede">
            Every module is visible to every user. You can read about what Pro
            does before you decide if Pro is for you.
          </p>
        </ScrollReveal>
        <div className="pf-tier-grid">
          {TIERS.map((t) => (
            <ScrollReveal
              key={t.name}
              className={`pf-tier${t.badge ? " pf-tier--rec" : ""}`}
            >
              <div className="pf-tier__head">
                <span className="pf-tier__icon">
                  <TierIcon kind={t.iconKind} />
                </span>
                <span className="pf-tier__name">{t.name}</span>
                {t.badge && (
                  <span className="pf-tier__badge">{t.badge}</span>
                )}
              </div>
              <ul className="pf-tier__chips">
                {t.modules.map((m) => (
                  <li key={m}>
                    <CheckIcon />
                    {m}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
