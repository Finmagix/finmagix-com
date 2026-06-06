// Section 9 — Comparison table (Budgeting app / Traditional advisor /
// Finmagix). Wrapped in a horizontal-scroll container on mobile so
// the table never forces the page wider than the viewport.

import ScrollReveal from "./ScrollReveal";

const ROWS = [
  ["Your whole financial picture", ["mid", "Limited"], ["yes", "Yes"], "Yes — 12 areas"],
  ["Helps you decide what's next", ["no", "Tracks the past"], ["yes", "Yes"], "Yes — by design"],
  ["CFP / CFA-inspired structure", ["no", "Usually no"], ["yes", "Yes"], "Yes"],
  ["Works with no asset minimum", ["yes", "Yes"], ["no", "Often no"], "Yes"],
  ["Free checkup to start", ["mid", "Sometimes"], ["no", "Rarely"], "Yes"],
  ["No sales pressure", ["mid", "Varies"], ["mid", "Varies"], "Never"],
] as const;

export default function HomeComparisonTable() {
  return (
    <section className="home-sec">
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">A different kind of money tool</span>
          <h2>
            Not a budgeting app. Not a $250k advisor.{" "}
            <span className="serif-em">Something in between.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal className="home-cmp__scroll">
          <table className="home-cmp">
            <thead>
              <tr>
                <th>What you want</th>
                <th>Budgeting app</th>
                <th>Traditional advisor</th>
                <th className="fin">Finmagix</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, ba, advisor, fin]) => (
                <tr key={feature}>
                  <td className="feat">{feature}</td>
                  <td className={ba[0]}>{ba[1]}</td>
                  <td className={advisor[0]}>{advisor[1]}</td>
                  <td className="fin">{fin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
      </div>
    </section>
  );
}
