"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Cadence = "monthly" | "annual";

interface PlanCard {
  label: string;
  tier: "free" | "rec" | "pro";
  monthlyPrice: string;
  annualPrice: string;
  period: string;
  annualLineMonthly: string;
  annualLineAnnual: string;
  features: string[];
  cta: { label: string; variant: "lime" | "dark" };
}

const PLANS: PlanCard[] = [
  {
    label: "Free",
    tier: "free",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "forever free",
    annualLineMonthly: "No credit card needed",
    annualLineAnnual: "No credit card needed",
    features: [
      "Financial Health Checkup",
      "Financial Stress Test",
      "Personalized roadmap",
      "AI-powered analysis",
    ],
    cta: { label: "Start free →", variant: "dark" },
  },
  {
    label: "Recommended Pack",
    tier: "rec",
    monthlyPrice: "$19",
    annualPrice: "$12.50",
    period: "/mo",
    annualLineMonthly: "or $150/year — save $78",
    annualLineAnnual: "billed as $150/year",
    features: [
      "Everything in Free",
      "Your 5 roadmap modules",
      "Tax, Debt, Protection & more",
      "Financial Plan Summary PDF",
      "Finmagician AI assistant",
    ],
    cta: { label: "Get Recommended Pack", variant: "lime" },
  },
  {
    label: "Pro",
    tier: "pro",
    monthlyPrice: "$29",
    annualPrice: "$19",
    period: "/mo",
    annualLineMonthly: "or $228/year — save $120",
    annualLineAnnual: "billed as $228/year",
    features: [
      "Everything in Rec Pack",
      "All 12 planning modules",
      "Retirement, Longevity, Estate",
      "Wealth Builder",
      "All future modules",
    ],
    cta: { label: "Upgrade to Pro →", variant: "dark" },
  },
];

function Check() {
  return (
    <svg
      className={styles.cardCheck}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function PricingPlans() {
  const [cadence, setCadence] = useState<Cadence>("monthly");

  return (
    <>
      <div className={styles.toggleWrap}>
        <div className={styles.togglePill} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={cadence === "monthly"}
            className={`${styles.toggleOption} ${
              cadence === "monthly" ? styles.toggleActive : ""
            }`}
            onClick={() => setCadence("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={cadence === "annual"}
            className={`${styles.toggleOption} ${
              cadence === "annual" ? styles.toggleActive : ""
            }`}
            onClick={() => setCadence("annual")}
          >
            Annual
          </button>
        </div>
        {cadence === "annual" && (
          <span className={styles.saveBadge}>Save up to 34%</span>
        )}
      </div>

      <section className={styles.cardsWrap}>
        <div className={styles.cardsInner}>
          {PLANS.map((plan) => {
            const price =
              cadence === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            const annualLine =
              cadence === "monthly"
                ? plan.annualLineMonthly
                : plan.annualLineAnnual;
            const isFree = plan.tier === "free";
            const isRec = plan.tier === "rec";

            return (
              <article
                key={plan.label}
                className={`${styles.card} ${
                  isRec ? styles.cardFeatured : ""
                }`}
              >
                {isRec && (
                  <span className={styles.popularBadge}>Most popular</span>
                )}

                <p className={styles.tierLabel}>{plan.label}</p>

                <div className={styles.priceRow}>
                  <span className={styles.price}>{price}</span>
                  <span className={styles.period}>
                    {isFree ? plan.period : plan.period}
                  </span>
                </div>

                <p
                  className={`${styles.annualLine} ${
                    isFree ? styles.annualLineMuted : ""
                  }`}
                >
                  {annualLine}
                </p>

                <hr className={styles.cardDivider} />

                <ul className={styles.cardFeatures}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.cardFeature}>
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardBtnWrap}>
                  <a
                    href="https://lite.finmagix.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardBtn} ${
                      plan.cta.variant === "lime"
                        ? styles.cardBtnLime
                        : styles.cardBtnDark
                    }`}
                  >
                    {plan.cta.label}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.cardsNote}>
          All plans include bank-level encryption, row-level data security,
          and the ability to cancel anytime. For educational purposes only.
          Not financial advice.
        </p>
      </section>
    </>
  );
}
