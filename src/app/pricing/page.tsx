import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingPlans from "./PricingPlans";
import PricingFaq from "./PricingFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pricing — Finmagix",
  description:
    "Start free. Upgrade when you're ready. Monthly or annual plans, cancel anytime.",
};

type Mark = "check" | "dash" | string;

interface CompareRow {
  feature: string;
  free: Mark;
  rec: Mark;
  pro: Mark;
}

const COMPARE_ROWS: CompareRow[] = [
  { feature: "Planning modules", free: "2", rec: "7", pro: "All 12" },
  {
    feature: "Personalized roadmap",
    free: "check",
    rec: "check",
    pro: "check",
  },
  {
    feature: "AI-powered analysis",
    free: "check",
    rec: "check",
    pro: "check",
  },
  {
    feature: "Financial Health Checkup",
    free: "check",
    rec: "check",
    pro: "check",
  },
  {
    feature: "Financial Stress Test",
    free: "check",
    rec: "check",
    pro: "check",
  },
  {
    feature: "Tax, Debt & Protection modules",
    free: "dash",
    rec: "check",
    pro: "check",
  },
  {
    feature: "College Savings & Social Security",
    free: "dash",
    rec: "check",
    pro: "check",
  },
  {
    feature: "Financial Plan Summary PDF",
    free: "dash",
    rec: "check",
    pro: "check",
  },
  {
    feature: "Finmagician AI assistant",
    free: "dash",
    rec: "check",
    pro: "check",
  },
  {
    feature: "Retirement & Longevity modules",
    free: "dash",
    rec: "dash",
    pro: "check",
  },
  {
    feature: "Estate & Legacy Planner",
    free: "dash",
    rec: "dash",
    pro: "check",
  },
  { feature: "Wealth Builder", free: "dash", rec: "dash", pro: "check" },
  { feature: "All future modules", free: "dash", rec: "dash", pro: "check" },
  {
    feature: "Bank-level security",
    free: "check",
    rec: "check",
    pro: "check",
  },
  { feature: "Cancel anytime", free: "check", rec: "check", pro: "check" },
];

function Check() {
  return (
    <svg
      className={styles.tableCheck}
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

function MarkCell({ value }: { value: Mark }) {
  if (value === "check") return <Check />;
  if (value === "dash")
    return (
      <span className={styles.tableDash} aria-label="Not included">
        —
      </span>
    );
  return <span className={styles.tableCount}>{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">Simple pricing</SectionLabel>
          <h1 className={styles.heroH1}>
            Less than one hour with a financial planner
          </h1>
          <p className={styles.heroSub}>
            Start free. Upgrade when you&apos;re ready. Cancel anytime.
          </p>
        </div>
      </section>

      <PricingPlans />

      <section className={styles.compare}>
        <div className={styles.compareInner}>
          <h2 className={styles.compareH2}>Compare all plans</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className={styles.colAlignCenter}>Free</th>
                  <th
                    className={`${styles.colAlignCenter} ${styles.colRecommended}`}
                  >
                    Recommended Pack
                  </th>
                  <th className={styles.colAlignCenter}>Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td className={styles.colAlignCenter}>
                      <MarkCell value={row.free} />
                    </td>
                    <td
                      className={`${styles.colAlignCenter} ${styles.colRecommended}`}
                    >
                      <MarkCell value={row.rec} />
                    </td>
                    <td className={styles.colAlignCenter}>
                      <MarkCell value={row.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PricingFaq />
    </>
  );
}
