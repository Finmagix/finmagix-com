"use client";

import { useState } from "react";
import styles from "./page.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is Finmagix financial advice?",
    answer:
      "No. Finmagix provides educational financial planning tools and analysis. We are not a financial advisor and our tools are not personalized advice. For advice specific to your situation, consult a licensed financial advisor or Certified Financial Planner.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Monthly plans cancel immediately and annual plans cancel at the end of your billing period. You keep access to your data and any completed assessments. No cancellation fees, ever.",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "The Free tier includes the Financial Health Checkup (your overall fitness score across 6 dimensions), the Financial Stress Test, your personalized roadmap, and AI-powered analysis. No credit card required to start.",
  },
  {
    question: "How is the Recommended Pack personalized?",
    answer:
      "After you complete our 2-minute onboarding questions, we identify the 5 modules most relevant to your life stage, goals, and financial priorities. The Recommended Pack unlocks those 5 modules plus your Financial Plan Summary PDF and Finmagician AI assistant.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes. We use bank-level encryption in transit and at rest, row-level database security so only you can see your data, and we never sell or share your information. You can export or delete your data at any time.",
  },
];

export default function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className={styles.faqInner}>
        <h2 className={styles.faqH2}>Common questions</h2>

        {FAQS.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={item.question} className={styles.faqItem}>
              <button
                type="button"
                className={styles.faqQuestion}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && <p className={styles.faqAnswer}>{item.answer}</p>}
            </div>
          );
        })}

        <p className={styles.faqDisclaimer}>
          For educational purposes only. Not financial advice.
        </p>
      </div>
    </section>
  );
}
