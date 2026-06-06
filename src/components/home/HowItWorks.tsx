// Section 8 — How it works (3 numbered steps on paper-2 band).

import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    n: "1",
    h: "Tell us what's going on.",
    p: "Up to ten short questions about your life, goals, and what's on your mind. Skip anything you'd rather not answer.",
    time: "About two minutes",
  },
  {
    n: "2",
    h: "See where to focus first.",
    p: "We surface up to five modules people in similar spots often start with. Suggestions are suggestions — run any module in any order.",
    time: "About one minute",
  },
  {
    n: "3",
    h: "Work through a module.",
    p: "Paths to consider, with trade-offs, assumptions, and risks plainly laid out. Your thinking is recorded automatically.",
    time: "Five to ten minutes each",
  },
];

export default function HomeHowItWorks() {
  return (
    <section
      className="home-sec"
      style={{
        background: "var(--home-paper-2)",
        borderTop: "1px solid var(--home-line)",
        borderBottom: "1px solid var(--home-line)",
      }}
    >
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">How it works</span>
          <h2>From sign-up to your first useful look in under twenty minutes.</h2>
          <p className="home-lede">
            No long onboarding. No bank connection on day one. Just a short
            conversation, then a clear place to start.
          </p>
        </ScrollReveal>
        <div className="home-steps">
          {STEPS.map((s) => (
            <ScrollReveal key={s.n} className="home-step">
              <div className="home-step__num" aria-hidden="true">
                {s.n}
              </div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
              <div className="home-step__time">{s.time}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
