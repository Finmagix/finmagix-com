import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Finmagix",
  description:
    "Financial fitness should be measurable, understandable, and accessible to everyone. Our mission, approach, and principles.",
  openGraph: {
    title: "About | Finmagix",
    description:
      "Financial fitness should be measurable, understandable, and accessible to everyone.",
    url: "https://finmagix.com/about",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Finmagix",
    description:
      "Financial fitness should be measurable, understandable, and accessible to everyone.",
  },
};

interface ValueCardData {
  title: string;
  body: string;
  icon: ReactNode;
}

function ValueIconWrap({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      stroke="#b8e04a"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const VALUES: ValueCardData[] = [
  {
    title: "Accessible to everyone",
    body: "Financial planning tools that work for every American — not just those who can afford a private advisor. We believe financial clarity is a right, not a privilege.",
    icon: (
      <ValueIconWrap>
        <path d="M3 14s-1-1-1-4a5 5 0 0110 0c0 3-1 4-1 4" />
        <circle cx="8" cy="6" r="3" />
      </ValueIconWrap>
    ),
  },
  {
    title: "Educational, not advisory",
    body: "We provide planning tools, not financial advice. Every insight is educational, helping you understand your complete financial picture so you can make informed decisions.",
    icon: (
      <ValueIconWrap>
        <path d="M8 4L2 7l6 3 6-3-6-3z" />
        <path d="M5 8.5v3c0 1 1.5 2 3 2s3-1 3-2v-3" />
      </ValueIconWrap>
    ),
  },
  {
    title: "Trustworthy by design",
    body: "CFP-standard calculations, transparent methodology, bank-level encryption, and your data protected with row-level security. We never sell your data.",
    icon: (
      <ValueIconWrap>
        <path d="M8 2L3 4v4c0 3.5 2.5 6 5 7 2.5-1 5-3.5 5-7V4L8 2z" />
        <path d="M5.5 8l2 2 3-3" />
      </ValueIconWrap>
    ),
  },
];

const STATS: { number: string; label: string }[] = [
  { number: "12", label: "Planning modules" },
  {
    number: "$2,000+",
    label: "Typical CFP plan cost — we do it for $19/month",
  },
  { number: "5 min", label: "Average per assessment" },
  { number: "Free", label: "To get started" },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">Our story</SectionLabel>
          <h1 className={styles.heroH1}>
            Financial fitness should be measurable, understandable, and
            accessible to everyone
          </h1>
          <p className={styles.heroSub}>
            We built Finmagix because quality financial planning was out of
            reach for most people. A comprehensive financial plan from a CFP
            costs $2,000–$5,000 and takes weeks. We deliver the same analytical
            depth in minutes — for less than $19/month.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <div>
            <h2 className={styles.missionH2}>Our mission</h2>
            <hr className={styles.divider} />
            <div className={styles.missionPBlock}>
              <p className={styles.missionP}>
                Our mission is simple — we want to help you improve your
                financial fitness. Without understanding your financial
                fitness, you cannot put yourself on the path to financial
                freedom.
              </p>
            </div>
            <div className={styles.missionPBlock}>
              <p className={styles.missionP}>
                Developed by experts with a passion for personal finance,
                Finmagix brings our users a holistic view of their finances,
                helps them understand their financial fitness, and creates a
                personalized plan to improve it.
              </p>
            </div>
          </div>

          <div>
            <h2 className={styles.missionH2}>What makes us different</h2>
            <hr className={styles.divider} />
            <div className={styles.missionPBlock}>
              <p className={styles.missionP}>
                We have patent-pending technology that powers our platform,
                and we use industry best practices so you can analyze your own
                financial fitness and take steps to improve it.
              </p>
            </div>
            <div className={styles.missionPBlock}>
              <p className={styles.missionP}>
                Unlike traditional financial tools that focus on one area,
                Finmagix gives you a complete picture across 12 dimensions of
                your financial life — all in one personalized roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <div className={styles.valuesHeader}>
            <SectionLabel>What we stand for</SectionLabel>
            <h2 className={styles.valuesH2}>
              Built on three core principles
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueH3}>{v.title}</h3>
                <p className={styles.valueP}>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsInner}>
          <h2 className={styles.statsH2}>Finmagix by the numbers</h2>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCell}>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.join}>
        <div className={styles.joinInner}>
          <h2 className={styles.joinH2}>Join our mission</h2>
          <p className={styles.joinP}>
            We are on a mission to improve the financial fitness of our users
            and help them achieve financial freedom. If you want to join our
            rapidly growing team, we&apos;d love to hear from you.
          </p>
          <div className={styles.joinBtnRow}>
            <Button
              variant="lime"
              size="md"
              href="https://lite.finmagix.com/signup"
              target="_blank"
            >
              Get started free →
            </Button>
            <a
              href="mailto:contactus@finmagix.com"
              className={styles.workOutline}
            >
              Work with us
            </a>
          </div>
          <p className={styles.joinDisclaimer}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
