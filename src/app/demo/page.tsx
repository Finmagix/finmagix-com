import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Demo | Finmagix",
  description:
    "A complete financial plan in under 20 minutes. A walkthrough of Finmagix from sign-up to your personalized financial roadmap.",
  openGraph: {
    title: "Demo | Finmagix",
    description:
      "A complete financial plan in under 20 minutes. A walkthrough of Finmagix from sign-up to your personalized financial roadmap.",
    url: "https://finmagix.com/demo",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo | Finmagix",
    description:
      "A complete financial plan in under 20 minutes.",
  },
};

/* ───────── Step mockups ─────────────────────────────────────────── */

function OnboardingMockup() {
  return (
    <div className={styles.mockupCard}>
      <div className={styles.progressDots} aria-hidden="true">
        <span
          className={`${styles.progressDot} ${styles.progressDotActive}`}
        />
        <span className={styles.progressDot} />
        <span className={styles.progressDot} />
        <span className={styles.progressDot} />
        <span className={styles.progressDot} />
      </div>
      <p className={styles.mockupStepLabel}>Step 1 of 5</p>
      <p className={styles.mockupQuestion}>What is your life stage?</p>
      <div className={styles.optionList}>
        <span className={styles.optionBtn}>Early career (20s)</span>
        <span
          className={`${styles.optionBtn} ${styles.optionBtnSelected}`}
        >
          Family building (30s)
        </span>
        <span className={styles.optionBtn}>Peak earning (40s)</span>
        <span className={styles.optionBtn}>Pre-retirement (50s)</span>
      </div>
      <div className={styles.nextBtn}>Continue →</div>
    </div>
  );
}

function RoadmapMockup() {
  return (
    <div className={styles.mockupCard}>
      <p className={styles.mockupStepLabel}>Recommended for you</p>
      <div className={styles.roadmapCard}>
        <div className={styles.moduleRow}>
          <span
            className={`${styles.moduleBadge} ${styles.moduleBadgeStart}`}
          >
            Start here
          </span>
          <span className={styles.moduleName}>Financial Health Score</span>
          <span className={styles.moduleSub}>Free</span>
        </div>
        <div className={styles.moduleRow}>
          <span
            className={`${styles.moduleBadge} ${styles.moduleBadgeUrgent}`}
          >
            Most urgent
          </span>
          <span className={styles.moduleName}>Protection &amp; Insurance</span>
          <span className={styles.moduleSub}>Recommended Pack</span>
        </div>
        <div className={`${styles.moduleRow} ${styles.moduleRowFaded}`}>
          <span
            className={`${styles.moduleBadge} ${styles.moduleBadgeImpact}`}
          >
            High impact
          </span>
          <span className={styles.moduleName}>Tax Efficiency Score</span>
          <span className={styles.moduleSub}>Recommended Pack</span>
        </div>
      </div>
    </div>
  );
}

function ResultsMockup() {
  const r = 46;
  const circumference = 2 * Math.PI * r;
  const percent = 47;
  const dash = (percent / 100) * circumference;

  return (
    <div className={styles.mockupCard}>
      <p className={styles.resultsLabel}>Tax Efficiency Score</p>

      <div className={styles.scoreWrap}>
        <div className={styles.scoreCircle}>
          <svg
            className={styles.scoreSvg}
            width="110"
            height="110"
            viewBox="0 0 110 110"
            aria-hidden="true"
          >
            <circle
              cx="55"
              cy="55"
              r={r}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="55"
              cy="55"
              r={r}
              stroke="#b8e04a"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${dash} ${circumference}`}
            />
          </svg>
          <div className={styles.scoreCenter}>
            <span className={styles.scoreValue}>47</span>
            <span className={styles.scoreGrade}>Grade D</span>
          </div>
        </div>
      </div>

      <div className={styles.metricRow}>
        <span>Account utilization</span>
        <span>26/100</span>
      </div>
      <div className={styles.metricRow}>
        <span>Rate vs benchmark</span>
        <span>100/100</span>
      </div>
    </div>
  );
}

function SummaryMockup() {
  return (
    <div className={styles.mockupCard}>
      <div className={styles.summaryCard}>
        <p className={styles.summaryLabel}>Your financial summary</p>
        <div className={styles.scoreGrid}>
          {[
            { v: "71", g: "C" },
            { v: "68", g: "D" },
            { v: "47", g: "D" },
            { v: "82", g: "B" },
          ].map((s, i) => (
            <div key={i} className={styles.scoreCell}>
              <span className={styles.scoreCellValue}>{s.v}</span>
              <span className={styles.scoreCellGrade}>{s.g}</span>
            </div>
          ))}
        </div>
        <div className={styles.impactRow}>
          <span className={styles.impactLabel}>Total impact</span>
          <span className={styles.impactAmount}>$127,400</span>
        </div>
      </div>
    </div>
  );
}

/* ───────── Step data ─────────────────────────────────────────────── */

interface StepData {
  title: string;
  body: string;
  mockup: ReactNode;
  reversed?: boolean;
}

const STEPS: StepData[] = [
  {
    title: "Complete your onboarding",
    body: "Answer 5 simple questions about your life stage, financial goals, and priorities. Takes about 2 minutes.",
    mockup: <OnboardingMockup />,
  },
  {
    title: "Get your personalized roadmap",
    body: "We identify the 5 modules most relevant to your situation and show you exactly where to start — with advisor-style explanations of why each one matters for you.",
    mockup: <RoadmapMockup />,
    reversed: true,
  },
  {
    title: "Complete your assessments",
    body: "Each module takes under 5 minutes. Answer questions about your finances and get your personalized score instantly — with AI-powered insights explaining what it means.",
    mockup: <ResultsMockup />,
  },
  {
    title: "Get your financial summary",
    body: "After completing your recommended modules, generate a comprehensive summary of your entire financial picture — with priority actions and estimated lifetime impact.",
    mockup: <SummaryMockup />,
    reversed: true,
  },
];

/* ───────── Page ──────────────────────────────────────────────────── */

export default function DemoPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">See it in action</SectionLabel>
          <h1 className={styles.heroH1}>
            A complete financial plan — in under 20 minutes
          </h1>
          <p className={styles.heroSub}>
            Here&apos;s what Finmagix looks like from sign-up to your
            personalized financial roadmap.
          </p>
        </div>
      </section>

      <section className={styles.tour} aria-label="Demo tour">
        <div className={styles.tourInner}>
          {STEPS.map((step, idx) => (
            <article
              key={step.title}
              className={`${styles.step} ${
                step.reversed ? styles.stepReversed : ""
              }`}
            >
              <div className={styles.stepContent}>
                <span className={styles.stepBadge} aria-hidden="true">
                  {idx + 1}
                </span>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepDesc}>{step.body}</p>
              </div>
              <div className={styles.stepMockup}>{step.mockup}</div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>
            Ready to see your own financial picture?
          </h2>
          <p className={styles.ctaSub}>
            Start with the free Financial Health Checkup. No credit card
            needed. Takes 5 minutes.
          </p>
          <Button
            variant="lime"
            size="lg"
            href="https://lite.finmagix.com/signup"
            target="_blank"
          >
            Start for free →
          </Button>
          <p className={styles.ctaDisclaimer}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
