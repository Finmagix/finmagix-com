// Section 5 — Social Proof band (Bobby + Allen Mueller testimonials).
// Verbatim quotes from finmagix-home.html / brief.

import ScrollReveal from "./ScrollReveal";

export default function HomeSocialProof() {
  return (
    <section className="home-proof home-sec">
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">What people say</span>
          <h2>Clarity, not another login to dread.</h2>
        </ScrollReveal>
        <ScrollReveal className="home-proof__grid">
          <div className="home-tcard">
            <div className="home-tcard__stars" aria-label="Five stars">
              ★★★★★
            </div>
            <blockquote>
              It&apos;s so simple it walks you step by step through what to
              enter — and the analysis is intuitive enough to actually plan
              your way to retirement.
            </blockquote>
            <div className="home-tcard__att">
              <div className="home-tcard__av" aria-hidden="true">B</div>
              <div>
                <div className="home-tcard__nm">Bobby</div>
                <div className="home-tcard__rl">Finmagix member</div>
              </div>
            </div>
          </div>
          <div className="home-tcard">
            <div className="home-tcard__stars" aria-label="Five stars">
              ★★★★★
            </div>
            <blockquote>
              A breakthrough tool. It flags real risk items — disability
              insurance, estate planning — without a sales pitch. Financial
              &ldquo;vital signs&rdquo; in minutes.
            </blockquote>
            <div className="home-tcard__att">
              <div className="home-tcard__av" aria-hidden="true">A</div>
              <div>
                <div className="home-tcard__nm">
                  Allen Mueller, CFA, MBA
                </div>
                <div className="home-tcard__rl">
                  Founder, 7 Saturdays Financial
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <p className="home-proof__disclosure">
          Individual member experiences. Not a guarantee of results.
        </p>
      </div>
    </section>
  );
}
