// Home hero — Concept F mockup (Monarch-style centered hero).
//
// 2026-06-04 (v3): founder iteration — pivoted from the rotating-
// questions Concept A v2 to a Monarch-Money-style centered hero:
//   - Banner ("Financial Fitness Transformed!") full-width green
//     strip at the very top (carried over from v2).
//   - Centered large serif headline.
//   - Centered subtitle.
//   - Single centered green CTA.
//   - Large dashboard screenshot below the CTA (placeholder uses
//     /product/quiet-index.png; will be swapped to the lite
//     dashboard screenshot once that file is saved to public/).
//
// Compliance flags (founder-approved per direction, flagged for
// future tone-consistency review):
//   - "Financial Planning Your way" elevates Finmagix from
//     "thinking tool" toward "planning provider" — shift in
//     brand positioning.
//   - "AI powered tool" in the H1 is the fourth on-page AI mention;
//     ProofStrip + Comparison + About + /platform are already
//     tracked as Part 7 overrides in docs/tech-debt-marketing.md.
//     Adding the hero moves AI from "documented exception" toward
//     "central pitch."
//   - "take control of your financial planning" is directive
//     language; brand voice has been non-directive ("we help"
//     not "we tell you to do X").

import Image from "next/image";
import { ArrowRightIcon } from "../Icons";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function Hero() {
  return (
    <section className="hero">
      {/* Promotional banner — full-width green strip at the top. */}
      <div className="hero__banner">Financial Fitness Transformed!</div>

      <div className="wrap hero__inner">
        {/* Centered headline. Pipe character preserved per founder
            copy; CSS adds spacing around it as a soft separator. */}
        <h1 className="hero__h1">
          Financial Planning Your way{" "}
          <span className="hero__h1-divider" aria-hidden="true">
            |
          </span>{" "}
          <span className="hero__h1-secondary">
            Inspired by CFP, CFA Principles
          </span>
        </h1>

        <p className="hero__sub">
          Finmagix is AI powered tool to help you take control of your financial planning.
        </p>

        <div className="hero__cta">
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            Try the free checkup
            <ArrowRightIcon size={16} />
          </a>
        </div>

        {/* Lite dashboard screenshot — 2026-06-04 cropped from a live
            lite.finmagix.com/dashboard capture. Shows the "Create a
            summary" generate panel + "Get the lay of the land" and
            "Cover the bases" module category groups with module rows
            and per-module scores. */}
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
            sizes="(max-width: 920px) 100vw, 1080px"
            className="hero__screenshot-img"
          />
        </div>
      </div>
    </section>
  );
}
