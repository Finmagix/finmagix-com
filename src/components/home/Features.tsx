import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./Features.module.css";

type Tier = "Free" | "Recommended" | "Pro";

interface ModuleCard {
  name: string;
  description: string;
  tier: Tier;
  icon: ReactNode;
}

const stroke = { stroke: "currentColor", strokeWidth: 1.5, fill: "none" };

const MODULES: ModuleCard[] = [
  {
    name: "Financial Health Checkup",
    description:
      "Baseline your overall financial picture across the six core planning areas.",
    tier: "Free",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 12h4l2-6 4 12 2-6h6"
          {...stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Cash Flow & Budget",
    description:
      "See where money actually goes each month and where surplus can be built.",
    tier: "Free",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 7h16M4 12h10M4 17h16"
          {...stroke}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Emergency Fund",
    description:
      "Size the right safety net for your household and map a path to it.",
    tier: "Free",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
          {...stroke}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Debt Strategy",
    description:
      "Compare avalanche, snowball, and consolidation to pay off what you owe.",
    tier: "Recommended",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 20V10l8-6 8 6v10M9 20v-6h6v6"
          {...stroke}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Retirement Planning",
    description:
      "Project your retirement trajectory and identify gaps worth closing.",
    tier: "Recommended",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...stroke} />
        <path d="M12 7v5l3 2" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tax Optimization",
    description:
      "Spot opportunities in deductions, credits, and tax-advantaged accounts.",
    tier: "Recommended",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10l2 4v12H5V8z" {...stroke} strokeLinejoin="round" />
        <path d="M9 12h6M9 16h4" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Investment Allocation",
    description:
      "Benchmark your portfolio's risk, diversification, and cost profile.",
    tier: "Recommended",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 19L10 11L14 15L20 7"
          {...stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 7h5v5" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Insurance Coverage",
    description:
      "Check gaps in life, disability, health, and property coverage vs. benchmarks.",
    tier: "Recommended",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z"
          {...stroke}
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Education Funding",
    description:
      "Plan for college or future tuition goals using 529 and alternative vehicles.",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9l9-5 9 5-9 5-9-5z" {...stroke} strokeLinejoin="round" />
        <path d="M7 11v5c3 2 7 2 10 0v-5" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Estate & Legacy",
    description:
      "Check if your wishes are documented and your heirs protected.",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v16H7z" {...stroke} strokeLinejoin="round" />
        <path d="M10 9h4M10 13h4M10 17h4" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Real Estate",
    description:
      "Weigh rent-vs-buy, refinance, and home equity against your other goals.",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7v9H3z" {...stroke} strokeLinejoin="round" />
        <path d="M10 20v-6h4v6" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Small Business & Equity",
    description:
      "Model business cashflow, RSUs, and equity against your household plan.",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 8h18v12H3zM8 8V5h8v3"
          {...stroke}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function tierClass(tier: Tier) {
  if (tier === "Free") return styles.tierFree;
  if (tier === "Recommended") return styles.tierRecommended;
  return styles.tierPro;
}

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel>What Finmagix covers</SectionLabel>
          <h2 className={styles.h2}>Every area of your financial life</h2>
          <p className={styles.sub}>
            Most planning tools cover one thing. Finmagix covers all 12 — in
            one personalized roadmap.
          </p>
        </div>

        <div className={styles.grid}>
          {MODULES.map((mod) => (
            <article key={mod.name} className={styles.card}>
              <div className={styles.iconBox}>{mod.icon}</div>
              <h3 className={styles.name}>{mod.name}</h3>
              <p className={styles.desc}>{mod.description}</p>
              <span className={`${styles.tier} ${tierClass(mod.tier)}`}>
                {mod.tier}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
