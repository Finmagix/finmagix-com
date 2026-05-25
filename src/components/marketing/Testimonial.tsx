// Home Testimonial — Allen Mueller, CFA, MBA / Founder, 7 Saturdays Financial.
//
// COMPLIANCE NOTE. The quote contains the phrase "actionable recommendations
// based on the user's goals" — this is THIRD-PARTY copy (Allen's words from
// the prototype). First-party Finmagix copy does NOT use "recommendations"
// in this sense (handoff § 3.2 substitution table). Do not echo this phrase
// in any surrounding first-party copy.
//
// Counsel fallback if the quote is flagged at launch: truncate to start
// from "It also highlights key risk management items..." — the second
// paragraph stands alone. See docs/CLAUDE_CODE_HANDOFF.md § 5 section 6.
//
// Portrait is a real photo of Allen, supplied by founder, in
// public/testimonials/allen-mueller.jpg. Square crop, 600×600.

import Image from "next/image";

export default function Testimonial() {
  return (
    <section
      className="section testimonial-section"
      data-screen-label="testimonial"
    >
      <div className="wrap">
        <div className="testimonial">
          <div className="testimonial__media">
            <div className="testimonial__photo">
              <Image
                src="/testimonials/allen-mueller.jpg"
                alt="Allen Mueller, a smiling man with short dark hair and a beard, wearing a black v-neck shirt, photographed against a soft grey backdrop."
                fill
                sizes="(max-width: 920px) 280px, 360px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="testimonial__credit">
              <div className="testimonial__name">Allen Mueller</div>
              <div className="testimonial__creds">CFA, MBA</div>
              <div className="testimonial__firm">
                Founder, 7 Saturdays Financial
              </div>
            </div>
          </div>

          <div className="testimonial__body">
            <div className="testimonial__eyebrow">
              <span className="eyebrow">A planner&apos;s take</span>
            </div>
            <blockquote className="testimonial__quote">
              <span className="testimonial__mark" aria-hidden="true">
                &ldquo;
              </span>
              <p>
                Finmagix is a <em>breakthrough tool</em> for helping individuals and families take the next step toward their financial fitness. Unlike traditional tools that simply display metrics like net worth and cash flow, Finmagix takes it further with actionable recommendations based on the user&apos;s goals.
              </p>
              <p>
                It also highlights key risk management items like disability insurance and estate planning — <em>without a sales pitch.</em> With this cutting-edge solution, people can get an assessment of their financial &ldquo;vital signs&rdquo; in minutes.
              </p>
              <p>
                Finmagix is changing the game when it comes to personal finance, and I highly recommend it as a starting point.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
