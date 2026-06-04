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
        {/* Title row — H1 centered + Sign Up/Sign In buttons right-
            aligned. Uses a CSS grid (1fr auto 1fr) so the H1 sits
            in the centered middle column while the buttons live in
            the right column with justify-self: end (their right
            edge aligns with the 1080px screenshot border below).
            On <=920px the grid collapses to a single column with
            H1 above buttons, both centered. */}
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

        {/* "Inspired by..." moved below the title row 2026-06-04.
            Sentence case + no dash prefix per founder direction. */}
        <div className="hero__inspired">
          Inspired by CFP and CFA Planning Principles
        </div>
      </div>

      {/* Subtitle block — outside the .wrap so it can match the
          screenshot's 1080px container width. Main paragraph is
          LEFT-aligned (so its left edge meets the screenshot border).
          Closing tagline is centered on its own line below. */}
      <div className="hero__sub-wrap">
        <p className="hero__sub">
          Finmagix is the FIRST AI powered FINANCIAL FITNESS PLATFORM with 12 comprehensive modules to help you plan and assess every part of your financial life.
        </p>
        <p className="hero__tagline">
          Your financial life done your way!
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
