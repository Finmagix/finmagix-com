import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./Features.module.css";

type Tier = "Free" | "Recommended Pack" | "Pro";

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
      "Your overall financial fitness score across 6 key dimensions",
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
    name: "Financial Stress Test",
    description:
      "How long would your finances survive a job loss or emergency?",
    tier: "Free",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
          {...stroke}
          strokeLinejoin="round"
        />
        <path d="M12 9v4M12 16v.5" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Retirement Readiness Planner",
    description: "Are you on track to retire when you want to?",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...stroke} />
        <path d="M12 7v5l3 2" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Longevity Calculator",
    description: "Will your money last as long as you do?",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 12c4-6 12-6 16 0"
          {...stroke}
          strokeLinecap="round"
        />
        <path
          d="M4 17c4-4 12-4 16 0"
          {...stroke}
          strokeLinecap="round"
        />
        <circle cx="12" cy="7" r="2" {...stroke} />
      </svg>
    ),
  },
  {
    name: "Tax Efficiency Score",
    description: "Are you paying more tax than you need to?",
    tier: "Recommended Pack",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10l2 4v12H5V8z" {...stroke} strokeLinejoin="round" />
        <path d="M9 12h6M9 16h4" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Debt Strategy Optimizer",
    description:
      "The fastest, cheapest path out of debt — built around your numbers",
    tier: "Recommended Pack",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 16l5-5 4 4 7-8"
          {...stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 7h5v5" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Protection & Insurance Optimizer",
    description:
      "Are your family and income properly protected against the unexpected?",
    tier: "Recommended Pack",
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
    name: "Estate & Legacy Planner",
    description:
      "Make sure your assets go where you intend — not to probate",
    tier: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v16H7z" {...stroke} strokeLinejoin="round" />
        <path d="M10 9h4M10 13h4M10 17h4" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "College Savings Planner",
    description:
      "Are you on track to cover college costs for each child?",
    tier: "Recommended Pack",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9l9-5 9 5-9 5-9-5z" {...stroke} strokeLinejoin="round" />
        <path d="M7 11v5c3 2 7 2 10 0v-5" {...stroke} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Social Security Optimizer",
    description:
      "When should you claim? Worth up to $180,000 in lifetime difference",
    tier: "Recommended Pack",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...stroke} />
        <path
          d="M9 10a2 2 0 014 0c0 2-3 2-3 4M12 16.5v.01"
          {...stroke}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "FIRE Calculator",
    description:
      "What would it actually take for you to retire early?",
    tier: "Recommended Pack",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3c1 3 4 4 4 8a4 4 0 01-8 0c0-2 2-3 2-5 2 1 2 3 2 3"
          {...stroke}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Wealth Builder",
    description:
      "Is your investment strategy working for your goals and time horizon?",
    tier: "Pro",
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
];

function tierClass(tier: Tier) {
  if (tier === "Free") return styles.tierFree;
  if (tier === "Recommended Pack") return styles.tierRecommended;
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
