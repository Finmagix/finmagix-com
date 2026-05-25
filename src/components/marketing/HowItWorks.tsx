// Home "How it works" — three numbered steps with time estimates.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 section 4 + the prototype's home.jsx
// HowItWorks component. Anchor id matches the footer link in Footer.tsx.
//
// Compliance notes:
//   - "About two minutes" / "About one minute" / "Five to ten minutes each"
//     replaces any "Get started in seconds" urgency from the prior site
//     (strategy.md Part 4 + handoff Voice section).
//   - "Suggestions are suggestions" is the non-directive framing per the
//     substitution table.

const steps = [
  {
    num: "1",
    title: "Tell us what's going on.",
    body: "Up to ten short questions about your life, your goals, and what's on your mind. Skip whatever you'd rather not answer.",
    time: "About two minutes",
  },
  {
    num: "2",
    title: "See where to focus first.",
    body: "Based on your answers, we surface up to five modules people in similar spots often start with. Suggestions are suggestions — you can run any module in any order.",
    time: "About one minute",
  },
  {
    num: "3",
    title: "Work through a module when you have a few minutes.",
    body: "Paths to consider, with trade-offs, assumptions, and risks plainly laid out. The platform records your thinking automatically so you have a clean history later.",
    time: "Five to ten minutes each",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">How it works</div>
            <h2 className="t-section-title section-head__title" style={{ marginTop: 16 }}>
              From sign-up to your first useful look in under twenty minutes.
            </h2>
          </div>
          <p className="t-lede section-head__sub">
            No long onboarding. No bank connection on day one. Just a short conversation about what&apos;s going on, then a clear place to start.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__num">{s.num}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
              <span className="step__time">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
