// Home rebuild — Hero (section 2 of the brief).
//
// Verbatim copy from finmagix-home.html per the prompt directive:
// "All visible copy must come word-for-word from finmagix-home.html."
//
// Layout:
//   - Two-column on desktop: text left, dashboard preview right.
//   - Stacks on mobile (text above image).
//   - Staggered fade-up animation on first paint.
//   - prefers-reduced-motion respected (handled in globals.css).
//
// The mockup faked the dashboard preview in CSS; per the brief,
// we swap in the real /product/lite-dashboard.png via next/image.
//
// CTA destinations (per the brief's "CTA destinations" section):
//   Primary "Start my free checkup" → https://lite.finmagix.com/signup
//   Secondary "Check out our Platform" → /platform
//
// Patent claim status: filed (founder-confirmed in this session).

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

        {/* ── Visual column — real lite dashboard screenshot ── */}
        <div className="home-hero__visual home-hero__d4">
          <Image
            src="/product/lite-dashboard.png"
            alt="Finmagix Lite dashboard — a 'Create a summary across your modules' panel at the top followed by category groups ('Get the lay of the land' and 'Cover the bases') with module rows showing names, tier badges, descriptions, and scores."
            width={1440}
            height={707}
            priority
            sizes="(max-width: 900px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="home-hero__image"
          />
        </div>
      </div>
    </section>
  );
}
