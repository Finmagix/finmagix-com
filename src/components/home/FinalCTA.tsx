// Section 14 — Final CTA band (dark green, centered).

import ScrollReveal from "./ScrollReveal";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function HomeFinalCTA() {
  return (
    <section className="home-final">
      <div className="home-wrap">
        <ScrollReveal as="h2">
          See where you stand — in about twenty minutes.
        </ScrollReveal>
        <ScrollReveal as="p">
          Run the free checkup, get your Financial Fitness Score, and find the
          one or two things worth your attention first.
        </ScrollReveal>
        <ScrollReveal style={{ marginTop: 28 } as React.CSSProperties}>
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn--clay"
            data-analytics="cta_final_signup"
          >
            Start my free checkup
          </a>
        </ScrollReveal>
        <ScrollReveal className="home-final__friction">
          <span>Free to start</span>
          <i className="home-hero__dot" aria-hidden="true" />
          <span>No credit card</span>
          <i className="home-hero__dot" aria-hidden="true" />
          <span>No bank connection</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
