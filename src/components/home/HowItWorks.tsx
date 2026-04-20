import { Fragment } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./HowItWorks.module.css";

const STEPS: { title: string; description: string }[] = [
  {
    title: "Tell us about yourself",
    description:
      "Answer 5 questions about your life stage, goals, and financial priorities. Takes 2 minutes.",
  },
  {
    title: "Get your personal roadmap",
    description:
      "We identify the modules most relevant to your situation and show you where to start.",
  },
  {
    title: "Build your financial picture",
    description:
      "Complete each assessment at your own pace. Each one takes under 5 minutes and gives you actionable insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel>How it works</SectionLabel>
          <h2 className={styles.h2}>
            From sign-up to financial clarity in under 20 minutes
          </h2>
        </div>

        <div className={styles.row}>
          {STEPS.map((step, idx) => (
            <Fragment key={step.title}>
              <div className={styles.step}>
                <div className={styles.circle} aria-hidden="true">
                  {idx + 1}
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.description}</p>
              </div>
              {idx < STEPS.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
