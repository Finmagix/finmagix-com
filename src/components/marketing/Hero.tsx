// Home hero — Concept A mockup v2 (banner + image-left + rotating questions).
//
// 2026-06-03 (v2): founder iteration on Concept A —
//   - Added "Financial Fitness Transformed!" banner as a full-width
//     green strip at the very top of the hero, above the eyebrow.
//   - Restored the family photograph on the LEFT (was removed in v1).
//     Two-column layout: photo left, eyebrow + rotating questions +
//     static reframe + CTAs + trust line on the right.
//
// 2026-06-03 (v1): pivoted from the 4-line H1 + family-photo-right
// layout to a centered single-column hero with rotating questions
// as the primary visual hook. v2 retains the rotating questions
// concept but reintroduces the photo and adds the banner.
//
// CSS-only rotation, no JS / React state. Server Component.
//
// Compliance notes:
//   - Banner "Financial Fitness Transformed!" is more promotional
//     than the rest of the site's voice. Founder approved this
//     specific wording. Not a Part 4 hard violation (no CFP-grade,
//     no personalized-roadmap claim) but flagged for tone consistency
//     review pre-launch.
//   - Eyebrow + CTAs + trust line + brand voice all preserved.
//   - The static H1 reframe is non-directive ("we help" framing).
//   - Questions speak the user's voice (literal questions, not claims).

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../Icons";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

// Five real plain-language questions, in rotation order. Each ties
// loosely to one of the twelve modules in src/lib/modules.ts:
//   1. Social Security
//   2. Debt Strategy
//   3. Protection Review
//   4. Tax Efficiency
//   5. Retirement Planning
// Order chosen to spread topics across the visible loop.
const QUESTIONS = [
  "Should I claim Social Security at 62 or 67?",
  "Pay off the mortgage or invest the difference?",
  "Is this much life insurance enough?",
  "Roth or traditional — which one for me?",
  "When could I think about retiring?",
];

// Each question shows for ~4 seconds within a loop that runs every
// QUESTIONS.length * 4 seconds. Total loop here = 20s.
const SLOT_SECONDS = 4;

export default function Hero() {
  return (
    <section className="hero">
      {/* Promotional banner — full-width green strip at the very top
          of the hero, above the eyebrow. */}
      <div className="hero__banner">Financial Fitness Transformed!</div>

      <div className="wrap hero__grid">
        {/* Left column — family photograph */}
        <div className="hero__image-wrap">
          <Image
            src="/hero/family.jpg"
            alt="A family of four sitting on the front porch of their home in autumn light — mom and dad in casual clothes with two young kids, pumpkins and mums on the steps, an everyday lived-in moment."
            fill
            priority
            sizes="(max-width: 920px) 100vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
          />
        </div>

        {/* Right column — eyebrow + rotator + reframe + CTAs + trust */}
        <div className="hero__text">
          <div className="eyebrow hero__eyebrow">
            Inspired by CFP and CFA planning principles
          </div>

          {/* Rotating questions — pure CSS animation. Each question
              has the same keyframe but a staggered delay so only one
              is fully visible at a time. */}
          <div
            className="hero__questions"
            aria-label="Examples of money questions Finmagix helps you think through"
          >
            {QUESTIONS.map((q, i) => (
              <span
                key={q}
                className="hero__question"
                style={
                  {
                    "--q-delay": `${i * SLOT_SECONDS}s`,
                  } as React.CSSProperties
                }
              >
                &ldquo;{q}&rdquo;
              </span>
            ))}
          </div>

          {/* Static H1 — stable for SEO + screen readers + as the
              primary heading. Smaller than the rotating questions on
              purpose: questions are the hook, reframe is the calm
              answer below them. */}
          <h1 className="hero__reframe">
            We help you think it through, <em>plainly.</em>
          </h1>

          <div className="hero__ctas">
            <a
              href={LITE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              Try the free checkup
              <ArrowRightIcon size={16} />
            </a>
            <Link href="/#modules" className="btn btn--secondary btn--lg">
              See what&apos;s inside
            </Link>
          </div>

          <div className="hero__trust">
            <span>Free to start</span>
            <span className="dot" aria-hidden="true"></span>
            <span>No credit card</span>
            <span className="dot" aria-hidden="true"></span>
            <span>About five minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
