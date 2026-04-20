import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact | Finmagix",
  description:
    "Questions, partnerships, or feedback — we respond within one business day.",
  openGraph: {
    title: "Contact | Finmagix",
    description:
      "Questions, partnerships, or feedback — we respond within one business day.",
    url: "https://finmagix.com/contact",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Finmagix",
    description:
      "Questions, partnerships, or feedback — we respond within one business day.",
  },
};

interface InfoCard {
  label: string;
  email: string;
}

const INFO_CARDS: InfoCard[] = [
  { label: "General inquiries", email: "hello@finmagix.com" },
  { label: "Partnerships", email: "partners@finmagix.com" },
  { label: "Support", email: "support@finmagix.com" },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroH1}>We&apos;d love to hear from you</h1>
          <p className={styles.heroSub}>
            Questions, partnerships, or feedback — we respond within one
            business day.
          </p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.mainInner}>
          <ContactForm />

          <aside>
            <h3 className={styles.infoH3}>Other ways to reach us</h3>

            {INFO_CARDS.map((card) => (
              <div key={card.email} className={styles.infoCard}>
                <p className={styles.infoLabel}>{card.label}</p>
                <a
                  href={`mailto:${card.email}`}
                  className={styles.infoLink}
                >
                  {card.email}
                </a>
              </div>
            ))}

            <div className={styles.responseCard}>
              <p className={styles.responseLabel}>Response time</p>
              <p className={styles.responseText}>
                We respond to all inquiries within one business day, Monday
                through Friday.
              </p>
            </div>

            <p className={styles.sideDisclaimer}>
              Finmagix is not a financial advisor. For financial planning
              questions, our tools provide educational analysis only.
            </p>
          </aside>
        </div>
      </section>

      <div className={styles.pageDisclaimer}>
        For educational purposes only. Not financial advice.
      </div>
    </>
  );
}
