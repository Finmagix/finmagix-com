// Section 6 — Trust band row of chips.

import ScrollReveal from "./ScrollReveal";

const CHIPS = [
  "Built on CFP & CFA-inspired frameworks",
  "AI-powered, patent-pending technology",
  "Educational, not advisory",
  "No commissions, no product pushing",
  "No bank connection to begin",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HomeTrustBand() {
  return (
    <section className="home-trust">
      <div className="home-wrap">
        <ScrollReveal className="home-trust__row">
          {CHIPS.map((label) => (
            <span key={label} className="home-chip">
              <CheckIcon />
              {label}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
