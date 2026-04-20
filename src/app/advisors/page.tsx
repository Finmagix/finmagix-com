import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Advisors — Finmagix",
  description:
    "Meet the experts behind Finmagix. Advisor profiles coming soon.",
};

export default function AdvisorsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">Our advisors</SectionLabel>
          <h1 className={styles.heroH1}>Meet the experts behind Finmagix</h1>
          <p className={styles.heroSub}>
            Our platform is built on the expertise of seasoned financial
            professionals committed to making quality financial planning
            accessible to everyone.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.placeholder}>
            <h2 className={styles.placeholderTitle}>
              Advisor profiles coming soon
            </h2>
            <p className={styles.placeholderSub}>
              We&apos;re preparing detailed profiles of our advisory board and
              financial experts. Check back soon.
            </p>
          </div>

          <Button variant="lime" size="md" href="/about">
            Learn about our approach →
          </Button>

          <p className={styles.disclaimer}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
