// Home hero — Concept A mockup (rotating questions).
//
// 2026-06-03 mockup: pivoted from the 4-line H1 + family photo
// layout to a centered, single-column hero with rotating questions
// as the primary visual hook. The questions speak the user's voice
// (real money questions they'd actually ask); the static line below
// reframes in the brand voice. CSS-only rotation (no JS, no React
// state) — works fine in a Server Component, respects
// prefers-reduced-motion, and pauses on hover/focus.
//
// Family photograph removed from the hero. The emotional "this is
// for real people" signal is now carried by the rotating questions
// themselves (real, plain-language questions real people ask).
//
// If this mockup is approved, the orphaned styles for
// .hero__grid / .hero__text / .hero__image-wrap / .hero__sub /
// .you-decide / .t-hero will be removed in a cleanup pass. They're
// kept temporarily so a revert is trivial if the founder rejects.
//
// Previous compliance gates preserved:
//   - Eyebrow keeps "Inspired by CFP and CFA planning principles".
//   - No directive language, no advice claims.
//   - Trust line unchanged.
//   - CTAs unchanged (primary → lite/signup, secondary → /#modules).
//   - Static line ("We help you think it through, plainly.") is
//     non-directive — "we help" framing, not "we tell you."

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
// Order chosen to spread topics across the visible loop (no two
// adjacent retirement-ish questions).
const QUESTIONS = [
  "Should I claim Social Security at 62 or 67?",
  "Pay off the mortgage or invest the difference?",
  "Is this much life insurance enough?",
  "Roth or traditional — which one for me?",
  "When could I think about retiring?",
];

// Each question shows for ~4 seconds within a cycle that loops every
// QUESTIONS.length * 4 seconds. Total loop here = 20s.
const SLOT_SECONDS = 4;

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__inner">
        <div className="eyebrow hero__eyebrow">
          Inspired by CFP and CFA planning principles
        </div>

        {/* Rotating questions — pure CSS animation. Each question
            has the same keyframe but a staggered delay so only one
            is fully visible at a time. The container reserves
            vertical space (min-height) so the layout doesn't reflow
            as questions cycle. Reduced-motion users see just the
            first question statically (see globals.css). */}
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

        {/* The H1 is the static brand reframe — kept stable for
            SEO + screen readers + as the page's primary heading. */}
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
    </section>
  );
}
