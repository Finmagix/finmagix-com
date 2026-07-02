// Section 12 — Engine ("Under the hood").

import ScrollReveal from "./ScrollReveal";

const POINTS = [
  {
    n: "01",
    h: "Twelve areas, one platform",
    p: "Every part of your financial life in a single structured place.",
  },
  {
    n: "02",
    h: "Grounded in your actual situation",
    p: "AI-assisted analysis based on what's true for you — not generic tips.",
  },
  {
    n: "03",
    h: "The deciding stays with you",
    p: "Trade-offs laid out clearly. You make every call.",
  },
];

export default function HomeUnderTheHood() {
  return (
    <section className="home-sec home-engine">
      <div className="home-wrap home-engine__grid">
        <ScrollReveal>
          <span className="home-eyebrow">Under the hood</span>
          <h2 style={{ marginTop: 14 }} className="home-sec__head">
            <span style={{ display: "block" }}>
              The engine behind{" "}
              <span className="serif-em">the modules.</span>
            </span>
          </h2>
          <p className="home-lede" style={{ marginTop: 16 }}>
            A frontier AI does the analysis. Its rules are grounded in CFP and
            CFA principles. You get a planner&apos;s structured thinking —
            without the six-figure minimum.
          </p>
        </ScrollReveal>
        <ScrollReveal as="ul" className="home-engine__list">
          {POINTS.map((p) => (
            <li key={p.n}>
              <span className="en">{p.n}</span>
              <div>
                <h4>{p.h}</h4>
                <p>{p.p}</p>
              </div>
            </li>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
