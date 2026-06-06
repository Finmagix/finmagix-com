// Section 10 — Journey stages (Starting Out → Post-Retirement).

import ScrollReveal from "./ScrollReveal";

const CARDS = [
  {
    h: "Starting Out",
    p: "First job, first big choices. Build a foundation that holds.",
    icon: (
      <>
        <path d="M12 22V11" />
        <path d="M12 11C12 7.5 9.5 5.5 6 5.5c0 3.5 2.5 5.5 6 5.5z" />
        <path d="M12 11c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" />
      </>
    ),
  },
  {
    h: "Building a Family",
    p: "Mortgage, kids, college, coverage. Juggle it all with a plan.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20" />
        <path d="M16 5.5a3 3 0 0 1 0 5" />
        <path d="M21 20v-1.5a4.5 4.5 0 0 0-3-4.2" />
      </>
    ),
  },
  {
    h: "Retirement",
    p: "Will it all add up? Pressure-test the finish line before you cross it.",
    icon: (
      <>
        <path d="M5 21V4" />
        <path d="M5 5h11l-2.5 3.5L16 12H5" />
      </>
    ),
  },
  {
    h: "Post-Retirement",
    p: "Make it last: income, longevity, and the legacy you leave.",
    icon: (
      <>
        <circle cx="12" cy="13" r="3.5" />
        <path d="M12 4v2M5.5 7l1.4 1.4M18.5 7l-1.4 1.4M3 13h2M19 13h2" />
        <path d="M2 20h20" />
      </>
    ),
  },
];

export default function HomeJourneyStages() {
  return (
    <section className="home-sec">
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">Wherever you are</span>
          <h2>Built for every stage of the journey.</h2>
          <p className="home-lede">
            Finmagix meets you where you are today — and keeps up as life
            changes.
          </p>
        </ScrollReveal>
        <div className="home-journey">
          {CARDS.map((c) => (
            <ScrollReveal key={c.h} className="home-jcard">
              <div className="home-jcard__ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {c.icon}
                </svg>
              </div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
