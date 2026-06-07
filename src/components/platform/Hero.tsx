// /platform rebuild — Hero (dashboard left, text right).
// Verbatim copy from finmagix-platform-full.html.

import Image from "next/image";
import Link from "next/link";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function PlatformHero() {
  return (
    <section className="pf-hero">
      <div className="pf-wrap pf-hero__grid">
        <div className="pf-hero__shot">
          <figure className="pf-shot">
            <div className="pf-shot__bar">
              <i />
              <i />
              <i />
              <span className="pf-shot__url">
                lite.finmagix.com — Your Quiet Index
              </span>
            </div>
            <Image
              src="/product/quiet-index.png"
              alt="Finmagix Lite — Your Quiet Index dashboard showing 11 of 12 modules explored with an overall score gauge and bar chart of scores by area."
              width={1740}
              height={1314}
              priority
              sizes="(max-width: 920px) 100vw, 560px"
            />
          </figure>
        </div>
        <div className="pf-hero__text">
          <span className="pf-eyebrow">Our platform</span>
          <h1 className="pf-hero__h1">
            The thinking of a financial planner,{" "}
            <span className="pf-serif-em">finally priced for the rest of us.</span>
          </h1>
          <p className="pf-hero__sub">
            Twelve AI-driven modules informed by CFP and CFA principles,
            covering every part of your financial life. For{" "}
            <b>the 85%</b> who plan without an advisor on speed dial — or want
            to crunch the numbers on their own.
          </p>
          <div className="pf-hero__ctas">
            <a
              href={LITE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn home-btn--primary"
              data-analytics="cta_platform_hero_signup"
            >
              Start free
            </a>
            <Link
              href="/#modules"
              className="home-btn home-btn--ghost"
              data-analytics="cta_platform_hero_modules"
            >
              See the modules
            </Link>
          </div>
          <div className="pf-friction">
            <span>Free to start</span>
            <i className="pf-friction__dot" aria-hidden="true" />
            <span>No credit card</span>
            <i className="pf-friction__dot" aria-hidden="true" />
            <span>No bank connection</span>
          </div>
        </div>
      </div>
    </section>
  );
}
