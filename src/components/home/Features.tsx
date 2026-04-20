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

interface IconProps {
  children: ReactNode;
}

function Icon({ children }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#b8e04a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const MODULES: ModuleCard[] = [
  {
    name: "Financial Health Checkup",
    description:
      "Your overall financial fitness score across 6 key dimensions",
    tier: "Free",
    icon: (
      <Icon>
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </Icon>
    ),
  },
  {
    name: "Financial Stress Test",
    description:
      "How long would your finances survive a job loss or emergency?",
    tier: "Free",
    icon: (
      <Icon>
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
        <path d="M12 9v4" />
        <path d="M12 16v.5" />
      </Icon>
    ),
  },
  {
    name: "Retirement Readiness Planner",
    description: "Are you on track to retire when you want to?",
    tier: "Pro",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </Icon>
    ),
  },
  {
    name: "Longevity Calculator",
    description: "Will your money last as long as you do?",
    tier: "Pro",
    icon: (
      <Icon>
        <path d="M4 12c4-6 12-6 16 0" />
        <path d="M4 17c4-4 12-4 16 0" />
        <circle cx="12" cy="7" r="2" />
      </Icon>
    ),
  },
  {
    name: "Tax Efficiency Score",
    description: "Are you paying more tax than you need to?",
    tier: "Recommended Pack",
    icon: (
      <Icon>
        <path d="M7 4h10l2 4v12H5V8z" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
      </Icon>
    ),
  },
  {
    name: "Debt Strategy Optimizer",
    description:
      "The fastest, cheapest path out of debt — built around your numbers",
    tier: "Recommended Pack",
    icon: (
      <Icon>
        <path d="M4 16l5-5 4 4 7-8" />
        <path d="M15 7h5v5" />
      </Icon>
    ),
  },
  {
    name: "Protection & Insurance Optimizer",
    description:
      "Are your family and income properly protected against the unexpected?",
    tier: "Recommended Pack",
    icon: (
      <Icon>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </Icon>
    ),
  },
  {
    name: "Estate & Legacy Planner",
    description:
      "Make sure your assets go where you intend — not to probate",
    tier: "Pro",
    icon: (
      <Icon>
        <path d="M7 4h10v16H7z" />
        <path d="M10 9h4" />
        <path d="M10 13h4" />
        <path d="M10 17h4" />
      </Icon>
    ),
  },
  {
    name: "College Savings Planner",
    description: "Are you on track to cover college costs for each child?",
    tier: "Recommended Pack",
    icon: (
      <Icon>
        <path d="M3 9l9-5 9 5-9 5-9-5z" />
        <path d="M7 11v5c3 2 7 2 10 0v-5" />
      </Icon>
    ),
  },
  {
    name: "Social Security Optimizer",
    description:
      "When should you claim? Worth up to $180,000 in lifetime difference",
    tier: "Recommended Pack",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10a2 2 0 014 0c0 2-3 2-3 4" />
        <path d="M12 16.5v.01" />
      </Icon>
    ),
  },
  {
    name: "FIRE Calculator",
    description: "What would it actually take for you to retire early?",
    tier: "Recommended Pack",
    icon: (
      <Icon>
        <path d="M12 3c1 3 4 4 4 8a4 4 0 01-8 0c0-2 2-3 2-5 2 1 2 3 2 3z" />
      </Icon>
    ),
  },
  {
    name: "Wealth Builder",
    description:
      "Is your investment strategy working for your goals and time horizon?",
    tier: "Pro",
    icon: (
      <Icon>
        <path d="M4 19L10 11L14 15L20 7" />
        <path d="M15 7h5v5" />
      </Icon>
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
