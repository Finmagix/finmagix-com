import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./Partners.module.css";

interface PartnerCard {
  type: string;
  title: string;
  description: string;
  price: string;
}

const CARDS: PartnerCard[] = [
  {
    type: "Credit Unions & Community Banks",
    title: "Member financial wellness",
    description:
      "Give every member a personalized financial plan. Deepen engagement and differentiate from larger banks.",
    price: "From $8/member/month",
  },
  {
    type: "Employers",
    title: "Employee wellness benefit",
    description:
      "Reduce financial stress in your workforce. Financially healthy employees are more productive and engaged.",
    price: "From $10/employee/month",
  },
  {
    type: "CFP Advisors",
    title: "Client planning tool",
    description:
      "Use Finmagix as your client onboarding and planning tool. White-labeled with your firm's branding.",
    price: "From $299/month per advisor",
  },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel tone="dark">Partnership opportunities</SectionLabel>
          <h2 className={styles.h2}>Built for institutions too</h2>
          <p className={styles.sub}>
            Offer Finmagix as a financial wellness benefit to your members,
            employees, or clients.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <p className={styles.typeLabel}>{card.type}</p>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.description}</p>
              <p className={styles.price}>{card.price}</p>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button variant="lime" size="md" href="/partners">
            Explore partnerships →
          </Button>
        </div>
      </div>
    </section>
  );
}
