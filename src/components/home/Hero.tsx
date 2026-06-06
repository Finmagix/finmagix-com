// Home rebuild — Hero section.
//
// Two-column on desktop (text left, dashboard preview right);
// stacks on mobile with text above image.
//
// Staggered fade-up animation on first paint:
//   badge → eyebrow → H1 → subhead → CTAs → friction line.
// The dashboard image fades in slightly later. All animations
// respect prefers-reduced-motion (handled in globals.css).
//
// Copy mapping (per founder direction 2026-06-06):
//   - Eyebrow + H1 + subhead retained from v7 production hero.
//   - Patent-pending badge added per brief (application filed,
//     confirmed).
//   - CTAs swapped to "Start my free checkup" (primary, →
//     lite.finmagix.com/signup) + "Check out our Platform"
//     (secondary, → /platform) per brief.
//   - Friction line is the existing trust-line phrasing.
//
// Analytics: each CTA carries a data-analytics attribute for
// downstream click-tracking wiring (cta_hero_signup,
// cta_hero_platform) per brief acceptance criteria.

import Image from "next/image";
import Link from "next/link";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__wrap">
        {/* ── Text column ── */}
        <div className="home-hero__copy">
          <div className="home-hero__badge">
            <span className="home-hero__badge-dot" aria-hidden="true" />
            Patent-pending technology
          </div>

          <div className="home-hero__eyebrow">
            Inspired by CFP and CFA Planning Principles
          </div>

          <h1 className="home-hero__h1">
            Financial Planning done <em>Your Way</em>
          </h1>

          <p className="home-hero__sub">
            Finmagix is the FIRST AI powered FINANCIAL FITNESS PLATFORM with 12 comprehensive modules to help you plan and assess every part of your financial life.
          </p>

          <div className="home-hero__ctas">
            <a
              href={LITE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn home-btn--primary"
              data-analytics="cta_hero_signup"
            >
              Start my free checkup
            </a>
            <Link
              href="/platform"
              className="home-btn home-btn--secondary"
              data-analytics="cta_hero_platform"
            >
              Check out our Platform
            </Link>
          </div>

          <p className="home-hero__friction">
            Free to start · No credit card · About five minutes
          </p>
        </div>

        {/* ── Visual column ── */}
        <div className="home-hero__visual">
          <Image
            src="/product/lite-dashboard.png"
            alt="Finmagix Lite dashboard — a 'Create a summary across your modules' panel at the top with a Generate button and '11 modules completed' status, followed by category groups ('Get the lay of the land' with Financial Fitness Score and Financial Stress Test, and 'Cover the bases' with Protection & Insurance Optimizer and Debt Strategy), each module showing its name, tier badge, one-line description, and current score."
            width={1440}
            height={707}
            priority
            sizes="(max-width: 900px) 100vw, (max-width: 1280px) 50vw, 720px"
            className="home-hero__image"
          />
        </div>
      </div>
    </section>
  );
}
