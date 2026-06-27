// "Built for the 85%" — moved to home section #2 (right after the
// hero) per session-03 founder brief. Photo LEFT, bullets RIGHT.
// Stacks on mobile: heading → bullets → photo.

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const BULLETS = [
  "Industrial-grade tools to get a complete picture of your financial life.",
  "Modules anchored in CFP planning principles.",
  "Taxes, debt, insurance, estate, and Social Security — thought through in one place, not scattered across five apps.",
  "Built for the ~85% of households below the asset minimum most advisors require — not just six-figure portfolios.",
  "Structure before a big financial decision — not a sales call.",
];

export default function HomeWhoThisIsFor() {
  return (
    <section className="home-sec">
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head" >
          <span className="home-eyebrow">Built for the 85%</span>
          <h2 style={{ marginTop: 14 }}>
            Six-figure thinking, no six-figure minimum
          </h2>
        </ScrollReveal>

        <div className="home-who__grid">
          {/* Photo (left on desktop, after-list on mobile via CSS order) */}
          <ScrollReveal as="figure" className="home-who__photo">
            <Image
              src="/home/lifestyle-desk.jpg"
              alt="A person sitting at a home desk in front of a laptop in a softly lit living room — the kind of everyday moment when a money question shows up."
              width={1200}
              height={1200}
              sizes="(max-width: 840px) 100vw, 380px"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 30%",
                display: "block",
              }}
            />
            <figcaption className="home-who__stat">
              {/* "85%" = share of US households below the investable-asset
                  minimum planning-focused advisors typically require
                  ($100K–$1M+; only ~4% of households hold $2M+). Defensible
                  as an asset-gate claim, NOT as "don't use an advisor"
                  (~two-thirds). Reviewed against strategy.md Part 4. */}
              <span className="big">85%</span>
              <span className="cap">
                of households fall below the minimum advisors require
              </span>
              <p>
                Finmagix gives that majority the structured thinking usually
                reserved for six-figure clients.
              </p>
            </figcaption>
          </ScrollReveal>

          <ScrollReveal as="ul" className="home-who__list">
            {BULLETS.map((b) => (
              <li key={b}>
                <span className="ck" aria-hidden="true">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
