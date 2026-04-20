import { Fragment } from "react";
import styles from "./TrustBar.module.css";

const STATS: { number: string; label: string }[] = [
  { number: "12", label: "Planning modules" },
  { number: "5 min", label: "Per assessment" },
  { number: "CFP", label: "Standard analysis" },
  { number: "$19", label: "Per month" },
  { number: "Free", label: "To get started" },
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="At a glance">
      <div className={styles.inner}>
        {STATS.map((stat, idx) => (
          <Fragment key={stat.label}>
            <div className={styles.item}>
              <span className={styles.number}>{stat.number}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
            {idx < STATS.length - 1 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
