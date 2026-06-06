// Home rebuild — Hero (section 2 of the brief).
//
// Verbatim copy from finmagix-home.html per the prompt directive.
//
// Layout: two-column on desktop (text left, dashboard preview right),
// stacks on mobile (text above image). 2026-06-06 founder direction:
// reverted from the full-bleed background variant back to the
// side-by-side card layout, with the new (narrower, focused)
// dashboard screenshot at /product/lite-dashboard-v2.png.
//
// CTA destinations:
//   Primary "Start my free checkup" → https://lite.finmagix.com/signup
//   Secondary "Check out our Platform" → /platform

import Image from "next/image";
import Link from "next/link";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__wrap">
        {/* ── Text column ── */}
        <div className="home-hero__copy">
          {/* AI badge — green pill with gold lightning bolt + cream text */}
          <span className="home-hero__ai-badge home-hero__d1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />
            </svg>
            AI-powered · Patent-pending technology
          </span>

          <span className="home-hero__eyebrow home-hero__d1">
            Inspired by CFP &amp; CFA planning principles
          </span>

          <h1 className="home-hero__h1 home-hero__d2">
            A financial planner&apos;s whole playbook.{" "}
            <br />
            Without the $250,000 minimum.
          </h1>

          <p className="home-hero__sub home-hero__d3">
            Budgets look back.{" "}
            <b>Finmagix helps you decide what&apos;s next</b> — across all
            twelve areas of your financial life, in plain language, with you in
            charge.
          </p>

          <div className="home-hero__ctas home-hero__d4">
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
              className="home-btn home-btn--ghost"
              data-analytics="cta_hero_platform"
            >
              Check out our Platform
            </Link>
          </div>

          <div className="home-hero__friction home-hero__d5">
            <span>Free to start</span>
            <i className="home-hero__dot" aria-hidden="true" />
            <span>No credit card</span>
            <i className="home-hero__dot" aria-hidden="true" />
            <span>No bank connection</span>
          </div>
        </div>

        {/* ── Visual column — dashboard preview ── */}
        <div className="home-hero__visual home-hero__d4">
          <Image
            src="/product/lite-dashboard-v2.png"
            alt="Finmagix Lite dashboard — a green 'Create a summary across your modules' card at the top with a Generate button, then 'Get the lay of the land' showing Financial Fitness Score (71) and Financial Stress Test, followed by 'Cover the bases' with Protection & Insurance flagged Recommended."
            width={856}
            height={976}
            priority
            sizes="(max-width: 900px) 90vw, (max-width: 1280px) 45vw, 480px"
            className="home-hero__image"
          />
        </div>
      </div>
    </section>
  );
}
