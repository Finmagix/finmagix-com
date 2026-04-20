import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

const BARS: { label: string; percent: number }[] = [
  { label: "Savings", percent: 85 },
  { label: "Retirement", percent: 62 },
  { label: "Tax", percent: 78 },
  { label: "Protection", percent: 55 },
  { label: "Debt", percent: 70 },
];

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.bgCircleLarge} aria-hidden="true" />
      <div className={styles.bgCircleSmall} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={`${styles.pulseDot} fm-pulse`} />
            AI-powered financial planning
          </div>

          <h1 className={styles.h1}>
            Know your complete{" "}
            <span className={styles.h1Highlight}>financial picture</span> — in
            minutes
          </h1>

          <p className={styles.subhead}>
            12 CFP-standard planning modules. Personalized to your life stage
            and goals. For less than the cost of one coffee a week.
          </p>

          <div className={styles.buttonRow}>
            <Button
              variant="lime"
              size="lg"
              href="https://lite.finmagix.com/signup"
              target="_blank"
            >
              Start for free →
            </Button>
            <Button variant="outline" size="md" href="/demo">
              See how it works
            </Button>
          </div>

          <p className={styles.trustLine}>
            No credit card required · Free Health Checkup included
          </p>
        </div>

        <div className={styles.right} aria-hidden="true">
          <div className={styles.mainCard}>
            <p className={styles.cardLabel}>Financial Health Score</p>
            <p className={styles.score}>82</p>
            <p className={styles.grade}>Grade B · Strong</p>

            {BARS.map((bar) => (
              <div key={bar.label} className={styles.barRow}>
                <span className={styles.barLabel}>{bar.label}</span>
                <span className={styles.barTrack}>
                  <span
                    className={styles.barFill}
                    style={{ width: `${bar.percent}%` }}
                  />
                </span>
              </div>
            ))}
          </div>

          <div className={styles.card2}>
            <p className={styles.card2Label}>Retirement</p>
            <p className={styles.card2Value}>Gap: $180K</p>
            <p className={styles.card2Sub}>Action available</p>
          </div>

          <div className={styles.card3}>
            <p className={styles.card3Label}>Tax savings found</p>
            <p className={styles.card3Value}>$6,200/yr</p>
            <p className={styles.card3Sub}>Worth exploring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
