// Home hero. Counsel-approved H1 + eyebrow per Session 01 founder decision.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 (Home structure) and the prototype's
// site/pages/home.jsx Hero component. Photograph is the placeholder from
// prototype/site/hero-family.jpg (tracked as deferred work in
// docs/tech-debt-marketing.md "Hero photograph is a placeholder").

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../Icons";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <div className="eyebrow">Inspired by CFP and CFA planning frameworks</div>

          <h1 className="t-hero">
            <span>What a CFP would cover.</span>
            <span style={{ color: "var(--accent-primary)" }}>
              Without the CFP.
            </span>
          </h1>

          <p className="t-lede hero__sub">
            Twelve areas of structured financial thinking — retirement, tax, debt, estate, college, Social Security, and more — in plain language,{" "}
            <span className="you-decide">with you in charge</span>.
          </p>

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
            <span>About five minutes to a first useful look</span>
          </div>
        </div>

        <div className="hero__image-wrap">
          <Image
            src="/hero/family.jpg"
            alt="A family of four sitting on the front porch of their home in autumn light — mom and dad in casual clothes with two young kids, pumpkins and mums on the steps, an everyday lived-in moment."
            fill
            priority
            sizes="(max-width: 920px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
          />
        </div>
      </div>
    </section>
  );
}
