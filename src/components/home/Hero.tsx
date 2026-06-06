// Home rebuild — Hero (section 2 of the brief).
//
// Verbatim copy from finmagix-home.html per the prompt directive.
//
// 2026-06-06 layout change: dashboard screenshot is now a full-width
// faded background BEHIND the centered text (single-column hero)
// instead of a side-by-side card. The image still uses next/image
// for responsive sizing; a paper-tinted gradient overlay keeps the
// hero text legible at every viewport.
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
      {/* Full-width dashboard preview behind the text. The image is
          decorative in this layout (the same dashboard appears in
          the sample-output section below with a richer caption), so
          alt is empty to avoid double-announcement to assistive
          tech. The descriptive alt lives on the sample-output card. */}
      <div className="home-hero__bg" aria-hidden="true">
        <Image
          src="/product/lite-dashboard.png"
          alt=""
          width={1440}
          height={707}
          priority
          sizes="100vw"
          className="home-hero__bg-img"
        />
        <div className="home-hero__bg-veil" />
      </div>

      <div className="home-hero__wrap">
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
      </div>
    </section>
  );
}
