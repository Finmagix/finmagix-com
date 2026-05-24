// About us — long-form strategic story.
//
// Source: prototype/site/pages/other-pages.jsx AboutPage (founder copy
// verbatim). 4 numbered sections + mission close per handoff May 2026
// revision. Replaces WS-2 /about page which carried multiple Part 4
// violations ("CFP-standard calculations," "personalized roadmap").
//
// Founder Session 02 decisions applied:
//   E1: Section 03 line is "Tiers are static and transparent" (was
//       "Pricing is static and transparent" in prototype — swapped per
//       Session 01 pricing-drop decision; same idea, no $ word).
//   E2: Hero lede contains "AI-powered insight" — explicit founder
//       EXCEPTION to Part 4 (handoff Compliance note: "the founder's
//       About copy uses 'AI-powered insight' as a value statement in
//       the hero lede ... explicitly approved on About"). Do not
//       propagate this phrasing to any other surface; About-only.
//       Tracked in docs/tech-debt-marketing.md.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Built for the 85% of American adults the financial industry has overlooked. Working adults, parents, caregivers, late starters — anyone who has carried money stress for years.",
};

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section--tight about-hero">
        <div className="wrap">
          <div className="about-hero__inner">
            <div className="eyebrow">About Finmagix</div>
            <h1
              className="t-page-title"
              style={{ marginTop: 16, marginBottom: 24 }}
            >
              Built for the{" "}
              <em
                style={{ fontStyle: "italic", color: "var(--accent-primary)" }}
              >
                85%
              </em>{" "}
              the financial industry has overlooked.
            </h1>
            <p className="t-lede" style={{ maxWidth: 720 }}>
              Most financial advice is built for people who already have it figured out. Finmagix is for everyone else — working adults, parents, caregivers, late starters, and the financially avoidant who have carried money stress for years.
            </p>
            <p className="t-lede" style={{ maxWidth: 720, marginTop: 20 }}>
              Clarity shouldn&apos;t require a six-figure portfolio.{" "}
              <strong style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
                We bring real planning frameworks and AI-powered insight to the people the advisory industry has overlooked.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* 01 — Why we built it */}
      <section className="section about-section">
        <div className="wrap">
          <div className="about-block">
            <div className="about-block__head">
              <div className="section-label">01 — Why we built Finmagix</div>
              <h2 className="t-section-title" style={{ marginTop: 12 }}>
                Traditional advisory has a minimum.
              </h2>
            </div>
            <div className="about-block__body">
              <p>
                Often six figures of investable assets. Don&apos;t clear it and you&apos;re left with budgeting apps that lecture, calculators that don&apos;t talk to each other, and &ldquo;advice&rdquo; from someone earning a commission to push it.
              </p>
              <p>
                <strong>That&apos;s the gap Finmagix fills.</strong>
              </p>
              <div className="about-affirm">
                <span>You are not bad with money.</span>
                <span>You are not unsophisticated.</span>
                <span>You are not behind.</span>
              </div>
              <p>
                You&apos;ve been busy living a real life. You deserve a tool that respects that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — What we believe */}
      <section className="section about-section about-section--alt">
        <div className="wrap">
          <div className="about-block">
            <div className="about-block__head">
              <div className="section-label">02 — What we believe</div>
              <h2 className="t-section-title" style={{ marginTop: 12 }}>
                Avoidance is exhaustion, not irresponsibility.
              </h2>
            </div>
            <div className="about-block__body">
              <p>
                Most people who avoid money have tried to engage and been made to feel small.{" "}
                <em>So they stopped trying.</em> That isn&apos;t a character flaw — it&apos;s a rational response to an industry that hasn&apos;t made room for them.
              </p>
              <ul className="about-list">
                <li>
                  <strong>Capable adults deserve tools that treat them as capable.</strong> Plain language. Education, not lectures. Trade-offs, not directives.
                </li>
                <li>
                  <strong>Structured thinking beats one more calculator.</strong> Clarity comes from seeing how income, debt, savings, risk, and goals fit together — not from tracking spending alone.
                </li>
                <li>
                  <strong>You decide. Always.</strong> We lay out the picture. You choose.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — How Finmagix is different */}
      <section className="section about-section">
        <div className="wrap">
          <div className="about-block">
            <div className="about-block__head">
              <div className="section-label">
                03 — How Finmagix is different
              </div>
              <h2 className="t-section-title" style={{ marginTop: 12 }}>
                Not another budgeting app.
              </h2>
            </div>
            <div className="about-block__body">
              <p>
                <strong>Finmagix Lite covers what actually drives outcomes</strong> — financial health, taxes, debt, retirement, longevity, insurance, college, Social Security, FIRE, estate, and wealth building. Each is a structured module that produces a real analysis.
              </p>
              <p>
                <strong>Every analysis shows the work.</strong> What we looked at. What we assumed. What the options are. What each one trades off. You get a structured way to think — not a verdict.
              </p>
              <p>
                {/* E1: "Pricing is static" → "Tiers are static" per founder Session 02 decision */}
                <strong>Tiers are static and transparent.</strong> Free, Recommended, and Pro contain the same modules for every user. No hidden gates. The whole menu is visible before you subscribe.
              </p>
              <p>
                <strong>Inspired by CFP Board and CFA Institute standards.</strong> The planning logic underneath is grounded in the same principles that guide regulated professionals. We are not a CFP or CFA — and we don&apos;t claim to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Who's behind it */}
      <section className="section about-section">
        <div className="wrap">
          <div className="about-block">
            <div className="about-block__head">
              <div className="section-label">
                04 — Who&apos;s behind Finmagix
              </div>
              <h2 className="t-section-title" style={{ marginTop: 12 }}>
                A small team. Real experience.
              </h2>
            </div>
            <div className="about-block__body">
              <p>
                Finmagix is built by a small team with deep experience in financial services, software, and financial education.
              </p>
              <p>
                Our founder spent years inside the industry and watched the same pattern repeat:{" "}
                <strong>
                  capable adults turned away — not because their questions were hard, but because their balances were small.
                </strong>
              </p>
              <p>
                We work with experienced financial advisory professionals who keep our planning principles grounded and our boundaries honest.
              </p>
              <div className="about-advisor-cta">
                <div>
                  <div className="about-advisor-cta__label">
                    Meet our advisors
                  </div>
                  <p className="about-advisor-cta__body">
                    The professionals who shape our principles, review our framework, and challenge our thinking.
                  </p>
                </div>
                <Link href="/advisors" className="btn btn--secondary">
                  See the advisors
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission close */}
      <section className="section about-mission">
        <div className="wrap wrap--medium" style={{ textAlign: "center" }}>
          <div
            className="eyebrow eyebrow--centered"
            style={{ justifyContent: "center", display: "inline-flex" }}
          >
            Our mission
          </div>
          <h2
            className="t-section-title"
            style={{ marginTop: 16, marginBottom: 24, textAlign: "center" }}
          >
            Make financial clarity available to the people who&apos;ve been told they{" "}
            <em
              style={{ fontStyle: "italic", color: "var(--accent-primary)" }}
            >
              don&apos;t deserve it.
            </em>
          </h2>
          <div className="about-not">
            <span>Not lectures.</span>
            <span>Not sales pitches.</span>
            <span>Not one-size-fits-all answers.</span>
          </div>
          <p
            className="t-lede"
            style={{ maxWidth: 680, margin: "32px auto 40px" }}
          >
            A clearer view of your money — and{" "}
            <strong style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
              the dignity of making your own decisions about it.
            </strong>
          </p>
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            Try the free checkup
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
