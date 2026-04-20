import Button from "@/components/ui/Button";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.pill}>
          <span className={styles.dot} aria-hidden="true" />
          Start today
        </span>

        <h2 className={styles.h2}>
          Your financial picture
          <br />
          is waiting.
        </h2>

        <p className={styles.sub}>
          Free Financial Health Checkup included. No credit card required.
          Takes 5 minutes to start.
        </p>

        <div className={styles.cta}>
          <Button
            variant="lime"
            size="lg"
            href="https://lite.finmagix.com/signup"
            target="_blank"
          >
            Start your free assessment →
          </Button>
        </div>

        <p className={styles.disclaimer}>
          For educational purposes only. Not financial advice.
        </p>
      </div>
    </section>
  );
}
