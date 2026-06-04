// Home hero — single-column centered stack (2026-06-04 v7).
//
// Founder-supplied detailed handoff spec. Replaces the prior
// Concept F variants with a clean, single-column centered hero:
//
//   announcement bar
//   ─────────────────────
//   eyebrow (uppercase, 16px, green, letter-spaced)
//   H1 ("Financial Planning done [Your Way]" — "Your Way" italic, weight 400)
//   lede (centered, max-width 760px)
//   CTAs (Sign Up + Sign In, centered, gap --space-4)
//   ─────────────────────
//   dashboard screenshot (1120px max, --radius-xl, fade-to-canvas
//   gradient at the bottom 140px so the cut-off peek blends into
//   the surface)
//
// Standalone tagline "Your financial life done your way!" REMOVED.
//
// All spacing uses the --space-* 8px scale. No new tokens introduced.
//
// Compliance flags carried over (founder-approved verbatim; logged in
// docs/tech-debt-marketing.md Part 7 override):
//   - Banner "Financial Fitness Transformed!" is more promotional
//     than the rest of the site's voice.
//   - Lede includes "FIRST AI powered" (superlative claim) and
//     fourth on-page AI mention.

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Announcement bar — full-width forest-green strip directly
          under the nav. Smaller padding + font than prior versions
          per spec. */}
      <div className="hero__banner">Financial Fitness Transformed!</div>

      <div className="wrap hero__inner">
        <div className="hero__eyebrow">
          Inspired by CFP and CFA Planning Principles
        </div>

        <h1 className="hero__h1">
          Financial Planning done <em>Your Way</em>
        </h1>

        <p className="hero__sub">
          Finmagix is the FIRST AI powered FINANCIAL FITNESS PLATFORM with 12 comprehensive modules to help you plan and assess every part of your financial life.
        </p>

        <div className="hero__cta">
          <Link href="/sign-up" className="btn btn--primary">
            Sign Up
          </Link>
          <Link href="/sign-in" className="btn btn--secondary">
            Sign In
          </Link>
        </div>
      </div>

      {/* Dashboard preview — centered, 1120px max, with a bottom
          fade-to-canvas gradient overlay (~140px) so the cut-off
          peek blends into the page surface rather than ending in a
          hard edge. */}
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
            sizes="(max-width: 920px) 100vw, 1120px"
            className="hero__screenshot-img"
          />
        </div>
      </div>
    </section>
  );
}
