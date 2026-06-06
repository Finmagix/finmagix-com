// Section 4 — "What you get after signup" 5-cell strip.

import ScrollReveal from "./ScrollReveal";

const CELLS = [
  {
    ic: "✦",
    h: "Financial Fitness Score",
    p: "One clear number for where you stand today.",
  },
  {
    ic: "▲",
    h: "Your top gaps",
    p: "The few areas quietly working against you.",
  },
  {
    ic: "◎",
    h: "Where to focus first",
    p: "Modules people in your spot tend to start with.",
  },
  {
    ic: "→",
    h: "Plain-language steps",
    p: "Trade-offs laid out — the deciding stays yours.",
  },
  {
    ic: "○",
    h: "No bank, no card",
    p: "Nothing to connect, nothing to pay, to begin.",
  },
];

export default function HomeWhatYouGet() {
  return (
    <section className="home-sec" style={{ paddingBottom: 40 }}>
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">The free checkup includes</span>
          <h2>Five things, in about twenty minutes.</h2>
        </ScrollReveal>
        <ScrollReveal className="home-getgrid">
          {CELLS.map((c) => (
            <div key={c.h} className="home-getgrid__cell">
              <div className="home-getgrid__ic" aria-hidden="true">
                {c.ic}
              </div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
