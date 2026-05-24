// Finmagix Platform — long-form narrative product story.
//
// Source: prototype/uploads/Our_Platform.docx (founder-supplied verbatim)
// + prototype/site/pages/other-pages.jsx PlatformPage component.
//
// Per founder Session 02 mini-brief decisions:
//   B1: tier cards strip the dollar amounts ($19/$150 + $29/$230) — show
//       tier name + what's inside, no $. Consistent with Session 01
//       pricing-drop decision (no $ amounts anywhere on marketing pages).
//   B2: "subscriptions only" footnote from docx is omitted — handoff
//       confirmed removed May 2026. Substance lives on About §03 instead.
//   B3: step 04 title is "Read the Finmagician's (your AI friend's)
//       analysis." per handoff revision (prototype JSX had earlier
//       "Read the Finmagician's read.")
//
// Replaces the Session 01 stub. /demo redirects here via next.config.ts.

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Finmagix Platform",
  description:
    "A structured-thinking platform for personal financial decisions. Plain-language financial thinking, informed by CFP and CFA frameworks. Built for the 85% of American adults who don't have a financial advisor on speed dial.",
};

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

type Step = {
  n: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  caption?: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Tell us a little.",
    body: "Up to ten short questions. About three minutes. Skip what you want.",
  },
  {
    n: "02",
    title: "We point you somewhere to start.",
    body: "Based on what you told us, we suggest up to five places to start — the ones people in similar spots often find useful first. You can ignore us. You can start anywhere.",
    image: "/product/quiet-index.png",
    imageAlt:
      "Your Quiet Index dashboard showing 11 of 12 areas explored, average score 44, and a list of completed modules.",
    imageWidth: 870,
    imageHeight: 657,
    caption:
      "Your dashboard — we call it Your Quiet Index — shows where you've explored, what scored where, and where the next interesting thread might be. No streaks. No shame. Just a clean read of where you are.",
  },
  {
    n: "03",
    title: "Run a module.",
    body: "Five to fifteen minutes. Each one gives you a structured read of one slice of your financial picture.",
    image: "/product/fitness-overview.png",
    imageAlt:
      "Financial Fitness Overview with a radar chart of six dimensions, an overall score gauge, and bar charts comparing your scores to peers.",
    imageWidth: 895,
    imageHeight: 730,
    caption:
      "Intuitive charts that show where you stand. Six dimensions of financial fitness, with how you compare to the average American at your age. Color-coded, plain-language, glance-readable on your phone.",
  },
  {
    n: "04",
    // B3: handoff revision — was "Read the Finmagician's read." in the prototype JSX
    title: "Read the Finmagician's (your AI friend's) analysis.",
    body: "After every analysis, you get a human-language summary. Not a list of \"next steps.\" Not a sales pitch. A read of your situation, with paths worth thinking about and what to watch for.",
    image: "/product/finmagicians-read.png",
    imageAlt:
      "A Finmagician's read for Social Security: a structured snapshot, case for claiming at 67, and things to watch out for.",
    imageWidth: 765,
    imageHeight: 842,
    caption:
      "AI-generated summaries pull the structured analysis into a plain-language read. Explicit assumptions. Alternative paths. Honest limitations. Always closing with the reminder that this is for thinking, not prescribing.",
  },
  {
    n: "05",
    title: "See the bigger picture.",
    body: "Once you've run a couple of modules, we surface what they confirm, where they pull in different directions, and what we still don't know enough to speak to. We don't pick winners. You do.",
    image: "/product/bigger-picture.png",
    imageAlt:
      "A cross-module summary showing scores across eight assessments, an overall-health read, key findings, and a ranked list of priority areas to explore.",
    imageWidth: 657,
    imageHeight: 769,
    caption:
      "A cross-module summary pulls every analysis you've run into one read — scores at a glance, where things converge, where they pull apart, and a ranked list of areas worth thinking about next. No winners picked. Just the picture.",
  },
];

// B1: no `price` field. Tier cards show name + what's inside only.
const inside = [
  {
    tier: "Free",
    what: "Financial Fitness Score, Financial Stress Test",
  },
  {
    tier: "Recommended",
    what: "Tax Efficiency, Insurance, Debt Strategy, Social Security, College, FIRE",
  },
  {
    tier: "Pro",
    what: "Retirement Planner, Wealth Builder, Longevity Calculator, Estate & Legacy",
  },
];

const wont = [
  "Tell you what to buy.",
  "Pick stocks, funds, or insurance products for you.",
  "Take commissions, referral fees, or product placements.",
  "Pretend to be your fiduciary.",
  "Sell your data.",
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section--tight platform-hero">
        <div className="wrap">
          <div className="platform-hero__inner">
            <div
              className="eyebrow eyebrow--centered"
              style={{ justifyContent: "center", display: "inline-flex" }}
            >
              Our platform
            </div>
            <h1 className="platform-hero__h1">
              Like having a friend who actually <em>understands money.</em>
            </h1>
            <p className="platform-hero__sub">
              — and won&apos;t make you feel dumb for asking.
            </p>
            <p className="platform-hero__lede">
              Finmagix Lite is plain-language financial thinking, informed by CFP and CFA frameworks. Built for the{" "}
              <strong>85% of American adults</strong> who don&apos;t have a financial advisor on speed dial — and shouldn&apos;t need one to feel a little less lost.
            </p>
            <div className="platform-hero__cta">
              <a
                href={LITE_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                Start free
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* You've probably tried other things */}
      <section className="section platform-empathy">
        <div className="wrap">
          <div className="platform-empathy__inner">
            <h2 className="t-section-title">
              You&apos;ve probably tried{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent-primary)" }}>
                other things.
              </em>
            </h2>
            <div className="platform-empathy__body">
              <p>
                Apps that felt like spreadsheets in a coat of paint. Advisors who didn&apos;t return calls. Articles full of jargon you had to Google three times. Each one made you a little more sure this stuff wasn&apos;t for you.
              </p>
              <p className="platform-emphasis">It is.</p>
              <p>
                You&apos;re not behind. You&apos;re not bad with money. You&apos;re busy — and the financial industry has been remarkably bad at meeting you where you are.
              </p>
              <p className="platform-emphasis">We&apos;re trying to fix that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Finmagix Lite is */}
      <section className="section platform-what">
        <div className="wrap">
          <div className="platform-what__inner">
            <div>
              <div className="section-label">What Finmagix Lite is</div>
              <h2 className="t-section-title" style={{ marginTop: 12 }}>
                A structured-thinking platform for personal financial decisions.
              </h2>
            </div>
            <div className="platform-what__body">
              <p>
                Not an advisor. Not a robo. Not a 200-question intake before you get any value.
              </p>
              <p className="platform-emphasis">
                Just kind structure, honest perspective, and a small thing worth thinking about this week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section platform-steps">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">How it works</div>
              <h2
                className="t-section-title section-head__title"
                style={{ marginTop: 16 }}
              >
                Five small steps. Nothing demanding.
              </h2>
            </div>
            <p className="t-lede section-head__sub">
              From a three-minute intake to a structured read of your financial life. You move at your pace.
            </p>
          </div>

          <ol className="platform-step-list">
            {steps.map((step) => (
              <li
                key={step.n}
                className={`platform-step${
                  step.image ? " platform-step--with-screenshot" : ""
                }`}
              >
                <div className="platform-step__head">
                  <span className="platform-step__num">{step.n}</span>
                  <div>
                    <h3 className="platform-step__title">{step.title}</h3>
                    <p className="platform-step__body">{step.body}</p>
                  </div>
                </div>

                {step.image && step.imageAlt && step.caption && (
                  <div className="platform-step__visual">
                    <div className="platform-screenshot">
                      <div className="platform-screenshot__chrome">
                        <span className="platform-screenshot__dot"></span>
                        <span className="platform-screenshot__dot"></span>
                        <span className="platform-screenshot__dot"></span>
                        <span className="platform-screenshot__path">
                          lite.finmagix.com
                        </span>
                      </div>
                      <div className="platform-screenshot__body">
                        <Image
                          className="platform-screenshot__img"
                          src={step.image}
                          alt={step.imageAlt}
                          width={step.imageWidth ?? 800}
                          height={step.imageHeight ?? 600}
                          sizes="(max-width: 920px) 100vw, 800px"
                        />
                      </div>
                    </div>
                    <p className="platform-step__caption">{step.caption}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What's inside */}
      <section className="section platform-inside">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">What&apos;s inside</div>
              <h2
                className="t-section-title section-head__title"
                style={{ marginTop: 16 }}
              >
                Three tiers. No paywalls.
              </h2>
            </div>
            <p className="t-lede section-head__sub">
              Every module is visible to every user. You can read about what Pro does before you decide if Pro is for you.
            </p>
          </div>

          <div className="platform-tiers">
            {inside.map((row) => (
              <div
                key={row.tier}
                className={`platform-tier platform-tier--${row.tier.toLowerCase()}`}
              >
                <div className="platform-tier__head">
                  <h3 className="platform-tier__name">{row.tier}</h3>
                </div>
                <p className="platform-tier__what">{row.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we won't do */}
      <section className="section platform-wont">
        <div className="wrap">
          <div className="platform-wont__inner">
            <div>
              <div className="section-label" style={{ color: "#D8A693" }}>
                What we won&apos;t do
              </div>
              <h2
                className="t-section-title"
                style={{
                  marginTop: 12,
                  color: "var(--ink-inverse-primary)",
                }}
              >
                Five things, structurally, the platform{" "}
                <em
                  style={{ fontStyle: "italic", color: "#D8A693" }}
                >
                  cannot do.
                </em>
              </h2>
            </div>
            <ul className="platform-wont__list">
              {wont.map((w, i) => (
                <li key={i}>
                  <span className="platform-wont__x" aria-hidden="true">
                    ×
                  </span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The promise */}
      <section className="section platform-promise">
        <div className="wrap">
          <div
            className="section-label"
            style={{ color: "var(--accent-primary)" }}
          >
            The promise
          </div>
          <blockquote className="platform-promise__quote">
            <span className="platform-promise__mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>
              It&apos;s like having a friend who actually{" "}
              <em
                style={{ fontStyle: "italic", color: "var(--accent-primary)" }}
              >
                understands money
              </em>{" "}
              — and won&apos;t make you feel dumb for asking.
            </p>
          </blockquote>
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            Start free
            <ArrowRightIcon size={16} />
          </a>
          <p className="platform-promise__disclosure">
            Inspired by — and informed by — CFP Board and CFA Institute standards. Finmagix Lite is an educational decision-support platform; it is not a registered investment adviser and does not provide personalized investment, tax, or legal advice. For advice tailored to your situation, consult a licensed professional.
          </p>
        </div>
      </section>
    </>
  );
}
