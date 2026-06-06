// Section 11 — Twelve modules (3-across grid with icons).
// Each module's icon + name + one-line descriptor is verbatim from
// finmagix-home.html.

import ScrollReveal from "./ScrollReveal";

type Mod = { h: string; p: string; icon: React.ReactNode };

const MODS: Mod[] = [
  {
    h: "Financial Health Checkup",
    p: "Your whole picture in one clear score.",
    icon: <path d="M3 12h3l2 5 4-10 2 5h7" />,
  },
  {
    h: "Financial Stress Test",
    p: "How a sudden shock would hit you.",
    icon: (
      <>
        <path d="M3.5 18a9 9 0 1 1 17 0" />
        <path d="M12 14l3.5-3.5" />
      </>
    ),
  },
  {
    h: "Tax Efficiency",
    p: "Keep more of what you already earn.",
    icon: (
      <>
        <path d="M19 5L5 19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </>
    ),
  },
  {
    h: "Debt Strategy",
    p: "A payoff order that actually makes sense.",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  {
    h: "Protection Review",
    p: "Whether your coverage truly holds up.",
    icon: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
  },
  {
    h: "Social Security",
    p: "Time your claim for the most benefit.",
    icon: (
      <path d="M3 21h18M5 10l7-6 7 6M6 10v8M10 10v8M14 10v8M18 10v8" />
    ),
  },
  {
    h: "College Funding",
    p: "Fund school without derailing retirement.",
    icon: (
      <>
        <path d="M22 9L12 5 2 9l10 4 10-4z" />
        <path d="M6 11.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5" />
      </>
    ),
  },
  {
    h: "FIRE Planning",
    p: "Map an earlier, financially independent exit.",
    icon: (
      <path d="M12 2C9.5 6 7.5 8 7.5 12a4.5 4.5 0 0 0 9 0c0-2-1-3.5-2-5-1 1-1.5 1.5-2.5 1.5C13 7 13 4 12 2z" />
    ),
  },
  {
    h: "Retirement Planning",
    p: "Will your money last as long as you?",
    icon: (
      <path d="M6 3h12M6 21h12M7.5 3c0 4.5 4.5 5.5 4.5 9s-4.5 4.5-4.5 9M16.5 3c0 4.5-4.5 5.5-4.5 9s4.5 4.5 4.5 9" />
    ),
  },
  {
    h: "Longevity Planning",
    p: "Plan for a long, well-funded life.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    h: "Estate Basics",
    p: "Make sure your wishes are documented.",
    icon: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 12h6M9 16h5" />
      </>
    ),
  },
  {
    h: "Investment Frameworks",
    p: "Invest with structure, not guesswork.",
    icon: (
      <>
        <path d="M3 17l5-5 4 4 8-8" />
        <path d="M16 8h5v5" />
      </>
    ),
  },
];

export default function HomeTwelveModules() {
  return (
    <section
      className="home-sec"
      id="modules"
      style={{
        background: "var(--home-paper-2)",
        borderTop: "1px solid var(--home-line)",
        borderBottom: "1px solid var(--home-line)",
      }}
    >
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">Twelve modules</span>
          <h2>
            Your whole financial life,{" "}
            <span className="serif-em">covered.</span>
          </h2>
          <p className="home-lede">
            Each module is a structured way of thinking about one area. Start
            wherever feels most relevant. Every module is visible — no
            paywalls, just clear thinking.
          </p>
        </ScrollReveal>
        <div className="home-mods">
          {MODS.map((m) => (
            <ScrollReveal key={m.h} className="home-mod">
              <div className="home-mod__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">{m.icon}</svg>
              </div>
              <div>
                <h4>{m.h}</h4>
                <p>{m.p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
