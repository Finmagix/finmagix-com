// Home hero — consolidated rebuild 2026-05-24.
//
// Per founder mini-brief (replaces the Session 01 Hero):
//   - H1 changed from counsel-approved "What a CFP would cover. Without
//     the CFP." to "Top financial advice was built for the wealthy. We
//     built it for everyone else." Founder explicitly opted out of
//     counsel re-review for this swap (Flag 1, founder discretion).
//     Documented in docs/sessions/session-01-finmagix-com-redesign-home.md
//     under Compliance notes.
//   - Eyebrow keeps the original framing but swaps "frameworks" → "principles"
//     to align with the footer Disclosure wording.
//   - Sub-copy is more direct: "Twelve modules covering every part of
//     your financial life — grounded in the same CFP and CFA frameworks
//     the professionals use, in plain language, with you in charge."
//   - CTAs unchanged (primary "Try the free checkup" → lite signup,
//     secondary "See what's inside" → #modules anchor).
//   - Trust line shortened to "Free to start · No credit card · About
//     five minutes" (was four parts; now three).
//   - Photograph unchanged — same family.jpg, same eager-load, same
//     16:10 aspect ratio, same object-position.

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../Icons";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <div className="eyebrow">
            Inspired by CFP and CFA planning principles
          </div>

          <h1 className="t-hero">
            <span>Top financial advice was built for the wealthy.</span>
            <span style={{ color: "var(--accent-primary)" }}>
              We built it for everyone else.
            </span>
          </h1>

          <p className="t-lede hero__sub">
            Twelve modules covering every part of your financial life — grounded in the same CFP and CFA frameworks the professionals use, in plain language,{" "}
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
            <span>About five minutes</span>
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
