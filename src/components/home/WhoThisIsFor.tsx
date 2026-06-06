// Section 7 — "Who this is for" with photo LEFT (per brief inversion
// from the mockup's right) and bullet checklist RIGHT.
// Stacks on mobile: heading → bullets → photo.

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const BULLETS = [
  "You plan without an advisor — or only see one now and then.",
  "You're not sure whether you're actually on track for retirement.",
  "You want more than a budgeting app that tallies the past.",
  "You'd like taxes, debt, insurance, estate, and Social Security in one place.",
  "You want structure before a big financial decision — not a sales call.",
];

export default function HomeWhoThisIsFor() {
  return (
    <section className="home-sec">
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head" >
          <span className="home-eyebrow">Built for the 85%</span>
          <h2 style={{ marginTop: 14 }}>This is for you if…</h2>
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
              <span className="big">85%</span>
              <span className="cap">
                of households plan without an advisor
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
