// /platform rebuild — Section 4: What's inside (3 flip tier cards).
//
// Each card shows just the tier ICON on the front. On hover or keyboard
// focus the card flips on the Y axis and reveals the tier NAME and the
// module chip list on the back. Verbatim module lists from
// finmagix-platform-full.html.
//
// On touch / non-hover devices the flip is disabled and both faces'
// content is shown stacked so users see the icon + name + modules
// without needing to hover (handled in globals.css).

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
              {/* Outer focusable container so keyboard users can trigger
                  the flip via focus, not just pointer hover. */}
              <div
                className="pf-tier__flip"
                tabIndex={0}
                aria-label={`${t.name} tier — ${t.modules.join(", ")}`}
              >
                <div className="pf-tier__face pf-tier__face--front">
                  <span className="pf-tier__icon pf-tier__icon--lg">
                    <TierIcon kind={t.iconKind} />
                  </span>
                  {t.badge && (
                    <span className="pf-tier__badge">{t.badge}</span>
                  )}
                </div>
                <div
                  className="pf-tier__face pf-tier__face--back"
                  aria-hidden="true"
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
                </div>
              </div>
              {/* Static fallback content shown on touch / non-hover
                  devices where the flip is disabled. */}
              <div className="pf-tier__static">
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
