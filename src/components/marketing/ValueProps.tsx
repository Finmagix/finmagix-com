// Home value props — three columns: complete picture / CFP-inspired structure /
// you decide always. See docs/CLAUDE_CODE_HANDOFF.md § 5 section 3 + the
// prototype's home.jsx ValueProps component.
//
// Note: the "CFP-inspired structure" value-prop title is the canonical
// substitution per the handoff's Part 4 table (replacing "CFP-standard" /
// "CFP-grade"). Do not introduce stronger framing here without re-reading the
// substitution table.

const values = [
  {
    num: "01",
    title: "The complete picture, not one slice.",
    body: "Twelve modules covering every area a CFP would walk through — from a Financial Health Checkup and Stress Test to retirement, tax, debt, protection, college, Social Security, FIRE, estate, and more.",
  },
  {
    num: "02",
    title: "CFP-inspired structure. Plain-language voice.",
    body: "Every module uses the same five-section analysis framework a Certified Financial Planner would — scope, observations, paths to consider, sensitivity drivers, and what's not covered — written like a friend explaining it, not a textbook lecturing you.",
  },
  {
    num: "03",
    title: "You decide. Always.",
    body: 'Finmagix gives you structured ways to think — never single-answer "this is what you should do." No directives, no product pitches, no commissions. Just clarity, and you in charge of what happens next.',
  },
] as const;

export default function ValueProps() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="values">
          {values.map((v) => (
            <div className="value" key={v.num}>
              <div className="value__num">{v.num}</div>
              <h3 className="value__title">{v.title}</h3>
              <p className="value__body">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
