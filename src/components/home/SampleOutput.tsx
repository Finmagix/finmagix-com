// Section 3 — Sample Output (dark green Quiet Index snapshot).
// Verbatim copy from finmagix-home.html. The Quiet Index card uses
// HTML markup for the score, bars, pills, and "next step" — these
// are illustrative sample values (clearly labeled in the corner).

import ScrollReveal from "./ScrollReveal";

export default function HomeSampleOutput() {
  return (
    <section className="home-sample" id="sample">
      <div className="home-wrap">
        <ScrollReveal className="home-sec__head">
          <span className="home-eyebrow">What you actually get back</span>
          <h2>
            Not a chart of last month&apos;s lattes.{" "}
            <span className="serif-em">A read on where you stand.</span>
          </h2>
          <p className="home-lede">
            Here&apos;s a sample snapshot — the Quiet Index you land on once
            you&apos;ve worked through a few modules. You see this{" "}
            <em>before</em> you ever connect a bank.
          </p>
        </ScrollReveal>

        <ScrollReveal className="home-sample__grid">
          <div className="home-sample__device" style={{ position: "relative" }}>
            <div
              className="home-sample__data-label"
              aria-label="Sample data, not real user information"
            >
              Sample
            </div>
            <div className="home-sample__device-bar">
              <i></i>
              <i></i>
              <i></i>
              <span className="home-sample__url">
                lite.finmagix.com — Your Quiet Index
              </span>
            </div>
            <div className="home-qi">
              <div className="home-qi__left">
                <div className="home-qi__score">
                  68<sup>/100</sup>
                </div>
                <div className="home-qi__label">Financial Fitness Score</div>
                <div className="home-qi__meta">
                  11 of 12 areas explored.
                  <br />
                  Scores across what you&apos;ve reviewed:
                </div>
                <div className="home-qi__bars" aria-hidden="true">
                  <i style={{ height: "60%" }} />
                  <i style={{ height: "80%" }} />
                  <i className="hi" style={{ height: "95%" }} />
                  <i style={{ height: "45%" }} />
                  <i style={{ height: "70%" }} />
                  <i style={{ height: "35%" }} />
                  <i className="hi" style={{ height: "88%" }} />
                  <i style={{ height: "52%" }} />
                  <i style={{ height: "64%" }} />
                  <i style={{ height: "40%" }} />
                  <i style={{ height: "75%" }} />
                </div>
              </div>
              <div className="home-qi__right">
                <div className="home-qi__section">
                  <div className="home-qi__h good">Strengths</div>
                  <span className="home-pill good">Emergency savings</span>
                  <span className="home-pill good">Debt under control</span>
                </div>
                <div className="home-qi__section">
                  <div className="home-qi__h warn">Needs attention</div>
                  <span className="home-pill warn">Retirement readiness</span>
                  <span className="home-pill warn">Estate basics</span>
                  <span className="home-pill warn">Life insurance gap</span>
                </div>
                <div className="home-qi__next">
                  <div className="l">Suggested next step</div>
                  <div className="v">
                    Review your retirement timeline &amp; contribution rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badal quote caption */}
          <div className="home-sample__quote">
            <div className="home-sample__mark">&ldquo;</div>
            <div>
              <div className="home-sample__qt">
                It created an{" "}
                <b>income statement and balance sheet</b> of my household
                finances, plus useful breakouts on debt, net worth, and how
                much life insurance I should carry.{" "}
                <b>A comprehensive view in one place.</b> Highly recommend.
              </div>
              <div className="home-sample__who">Badal · Finmagix member</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
