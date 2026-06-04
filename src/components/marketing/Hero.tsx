// Home hero — Concept F mockup v2 (Monarch-style, tighter sizing).
//
// 2026-06-04 (v3 of Concept F): founder iteration —
//   - Headline split: eyebrow "Inspired by CFP and CFA planning
//     principles" (small uppercase) now sits ABOVE the H1; the H1
//     itself is the cleaner "Financial Planning | Your Way."
//   - H1 + subtitle font sizes reduced for a more measured top
//     section.
//   - Subtitle copy updated to the 12-modules wording.
//   - Dashboard screenshot moved OUTSIDE the .wrap so it can extend
//     wider (Monarch-style near-full-width), and the gap between
//     CTA and screenshot tightened.
//
// Banner ("Financial Fitness Transformed!") unchanged.
//
// Compliance flags (founder-approved per direction; flagged for
// future tone-consistency review): "AI powered financial fitness
// platform" in the subtitle continues the AI-prominent positioning
// (4th on-page AI mention, see tech-debt-marketing.md Part 7
// override entry). "assess and plan every aspect of your financial
// life" is more directive than the brand's typical voice. Both
// shipped verbatim per founder direction.

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Promotional banner — full-width green strip at the top. */}
      <div className="hero__banner">Financial Fitness Transformed!</div>

      <div className="wrap hero__inner">
        <div className="eyebrow hero__eyebrow">
          Inspired by CFP and CFA planning principles
        </div>

        {/* H1 + CTA in the same horizontal row (founder direction
            2026-06-04). Centered as a pair, with the H1 on the left
            and the Sign Up / Sign In buttons immediately to its
            right. On <=920px the row wraps to a column, both
            centered. */}
        <div className="hero__title-row">
          <h1 className="hero__h1">
            Financial Planning{" "}
            <span className="hero__h1-divider" aria-hidden="true">
              |
            </span>{" "}
            Your Way
          </h1>
          <div className="hero__cta">
            <Link href="/sign-up" className="btn btn--primary">
              Sign Up
            </Link>
            <Link href="/sign-in" className="btn btn--secondary">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Subtitle — outside the .wrap so it can extend wider than
          the 1180px wrap max-width and stay on a single line at
          standard desktop sizes. Falls back to wrapping on smaller
          viewports. */}
      <div className="hero__sub-wrap">
        <p className="hero__sub">
          Finmagix is an AI powered financial fitness platform with 12 modules to help you assess and plan every aspect of your financial life.
        </p>
      </div>

      {/* Dashboard screenshot — sits OUTSIDE the .wrap so it can
          extend beyond the 1180px wrap max-width (Monarch-style
          near-full-width). Tight margin-top pulls it up close to
          the CTA. */}
      <div className="hero__screenshot-wrap">
        <div className="hero__screenshot">
          <div className="hero__screenshot-chrome" aria-hidden="true">
            <span className="hero__screenshot-dot"></span>
            <span className="hero__screenshot-dot"></span>
            <span className="hero__screenshot-dot"></span>
            <span className="hero__screenshot-path">lite.finmagix.com/dashboard</span>
          </div>
          <Image
            src="/product/lite-dashboard.png"
            alt="Finmagix Lite dashboard — a 'Create a summary across your modules' panel at the top with a Generate button and '11 modules completed' status, followed by category groups ('Get the lay of the land' with Financial Fitness Score and Financial Stress Test, and 'Cover the bases' with Protection & Insurance Optimizer and Debt Strategy), each module showing its name, tier badge (Free / Recommended), one-line description, and current score."
            width={1440}
            height={707}
            priority
            sizes="(max-width: 920px) 100vw, 1400px"
            className="hero__screenshot-img"
          />
        </div>
      </div>
    </section>
  );
}
