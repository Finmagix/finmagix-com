// /platform rebuild — Section 5: What we won't do (dark green).
// Verbatim list of 5 "cannot do" items from finmagix-platform-full.html.

import ScrollReveal from "@/components/home/ScrollReveal";

const ITEMS = [
  "Tell you what to buy.",
  "Pick stocks, funds, or insurance products for you.",
  "Take commissions, referral fees, or product placements.",
  "Pretend to be your fiduciary.",
  "Sell your data.",
];

export default function PlatformWhatWeWontDo() {
  return (
    <section className="pf-wont">
      <div className="pf-wrap">
        <ScrollReveal>
          <span className="pf-eyebrow">What we won&apos;t do</span>
          <h2 className="pf-wont__h2">
            Five things, structurally, the platform{" "}
            <span className="pf-serif-em">cannot do.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal as="ul" className="pf-wont__list">
          {ITEMS.map((item) => (
            <li key={item}>
              <span className="pf-wont__x" aria-hidden="true">
                ×
              </span>
              {item}
            </li>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
