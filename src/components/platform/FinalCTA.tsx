// /platform rebuild — Section 7: Final CTA.
// Verbatim from finmagix-platform-full.html.

import ScrollReveal from "@/components/home/ScrollReveal";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function PlatformFinalCTA() {
  return (
    <section className="pf-final">
      <div className="pf-wrap">
        <ScrollReveal as="h2" className="pf-final__h2">
          A small thing worth thinking about this week.
        </ScrollReveal>
        <ScrollReveal>
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn--clay pf-final__btn"
            data-analytics="cta_platform_final_signup"
          >
            Start free
          </a>
        </ScrollReveal>
        <ScrollReveal className="pf-friction pf-final__friction">
          <span>Free to start</span>
          <i className="pf-friction__dot" aria-hidden="true" />
          <span>No credit card</span>
          <i className="pf-friction__dot" aria-hidden="true" />
          <span>No bank connection</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
