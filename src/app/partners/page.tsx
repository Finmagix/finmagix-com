import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Partnerships — Finmagix",
  description:
    "White-label or co-branded financial planning tools for credit unions, community banks, employers, and CFP firms.",
};

interface WhyCardData {
  title: string;
  desc: string;
  icon: ReactNode;
}

function IconSvg({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#b8e04a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const WHY_CARDS: WhyCardData[] = [
  {
    title: "Deepen member relationships",
    desc: "Give members a reason to engage beyond transactions. Financial wellness tools increase product adoption, loyalty, and lifetime value.",
    icon: (
      <IconSvg>
        <path d="M8 12l3 3 5-6" />
        <path d="M4 8l4-4h8l4 4" />
        <path d="M4 8v8a2 2 0 002 2h12a2 2 0 002-2V8" />
      </IconSvg>
    ),
  },
  {
    title: "Differentiate from competitors",
    desc: "Offer something the big banks don't. A personalized financial planning experience that genuinely helps your members improve their financial health.",
    icon: (
      <IconSvg>
        <path d="M4 21V10l8-5 8 5v11" />
        <path d="M9 21v-6h6v6" />
        <path d="M12 5V3" />
      </IconSvg>
    ),
  },
  {
    title: "Reduce financial stress",
    desc: "Financially stressed members and employees make poorer financial decisions. Finmagix helps them find clarity and take action.",
    icon: (
      <IconSvg>
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M14 20c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" />
      </IconSvg>
    ),
  },
  {
    title: "White-label ready",
    desc: "Your brand, your members, our technology. Full co-branding available on all partner tiers. Deploy in days, not months.",
    icon: (
      <IconSvg>
        <path d="M20.5 12l-7.5 7.5a2 2 0 01-2.8 0L3 12V4h8z" />
        <circle cx="8" cy="9" r="1.5" />
      </IconSvg>
    ),
  },
];

interface TierData {
  id: string[];
  label: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

const TIERS: TierData[] = [
  {
    id: ["credit-unions", "community-banks"],
    label: "Credit unions & community banks",
    title: "Member financial wellness benefit",
    description:
      "Give every member access to 12 financial planning modules as part of their membership. Deepen engagement, improve financial outcomes, and differentiate your institution from larger banks.",
    features: [
      "All 12 planning modules",
      "White-label branding available",
      "Member analytics dashboard",
      "Dedicated onboarding support",
    ],
    ctaLabel: "Request a demo →",
  },
  {
    id: ["employers"],
    label: "Employers",
    title: "Employee financial wellness program",
    description:
      "Reduce financial stress in your workforce. Employees with strong financial health are more productive, more engaged, and less likely to leave. Finmagix gives every employee a personalized financial plan.",
    features: [
      "All 12 planning modules per employee",
      "Anonymous usage reporting",
      "HR dashboard and utilization metrics",
      "Custom SSO integration available",
    ],
    ctaLabel: "Schedule a call →",
  },
  {
    id: ["advisors"],
    label: "CFP advisors & RIA firms",
    title: "Planning tool for your clients",
    description:
      "Use Finmagix as your client onboarding and ongoing planning tool. White-labeled with your firm's branding. Give every client a comprehensive financial assessment before their first meeting.",
    features: [
      "White-label client portal",
      "All 12 planning modules",
      "Client PDF reports with your branding",
      "Bulk client management dashboard",
    ],
    ctaLabel: "Learn more →",
  },
];

function CheckIcon() {
  return (
    <svg
      className={styles.tierCheck}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function InquiryForm() {
  return (
    <form
      action="mailto:partners@finmagix.com"
      method="post"
      encType="text/plain"
      className={styles.form}
    >
      <div className={styles.field}>
        <label htmlFor="p-org" className={styles.label}>
          Organization name
        </label>
        <input
          id="p-org"
          name="organization"
          type="text"
          required
          className={styles.input}
        />
      </div>

      <div className={`${styles.formRow} ${styles.formRow2}`}>
        <div className={styles.field}>
          <label htmlFor="p-first" className={styles.label}>
            First name
          </label>
          <input
            id="p-first"
            name="firstName"
            type="text"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="p-last" className={styles.label}>
            Last name
          </label>
          <input
            id="p-last"
            name="lastName"
            type="text"
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="p-email" className={styles.label}>
          Email
        </label>
        <input
          id="p-email"
          name="email"
          type="email"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="p-type" className={styles.label}>
          Organization type
        </label>
        <select
          id="p-type"
          name="organizationType"
          className={styles.select}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select one
          </option>
          <option>Credit Union</option>
          <option>Community Bank</option>
          <option>Employer (&lt; 500 employees)</option>
          <option>Employer (500+ employees)</option>
          <option>CFP Firm / RIA</option>
          <option>Other</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="p-size" className={styles.label}>
          Estimated members / employees
        </label>
        <select
          id="p-size"
          name="size"
          className={styles.select}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a range
          </option>
          <option>Under 100</option>
          <option>100–500</option>
          <option>500–2,000</option>
          <option>2,000–10,000</option>
          <option>Over 10,000</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="p-msg" className={styles.label}>
          Message
        </label>
        <textarea
          id="p-msg"
          name="message"
          className={styles.textarea}
          placeholder="Tell us a bit about your goals for a partnership."
        />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Send partnership inquiry →
      </button>
    </form>
  );
}

export default function PartnersPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">Partnership program</SectionLabel>
          <h1 className={styles.heroH1}>
            Offer financial wellness to your community
          </h1>
          <p className={styles.heroSub}>
            White-label or co-branded financial planning tools for credit
            unions, community banks, employers, and CFP firms.
          </p>
          <div className={styles.heroBtnRow}>
            <Button variant="lime" size="md" href="/contact">
              Request a partnership demo →
            </Button>
            <Button variant="outline" size="md" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.whyHeader}>
            <SectionLabel>Why partner with us</SectionLabel>
            <h2 className={styles.whyH2}>
              Your members deserve a complete financial picture
            </h2>
            <p className={styles.whySub}>
              Most financial institutions offer account access. Finmagix gives
              your members the planning tools to understand their entire
              financial life.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card) => (
              <article key={card.title} className={styles.whyCard}>
                <div className={styles.whyIcon}>{card.icon}</div>
                <h3 className={styles.whyTitle}>{card.title}</h3>
                <p className={styles.whyDesc}>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.tiers} ${styles.tiersWhiteBg}`}
        aria-label="Partnership tiers"
      >
        <div className={styles.tiersInner}>
          <div className={styles.tiersHeader}>
            <h2 className={styles.tiersH2}>Partnership options</h2>
            <p className={styles.tiersSub}>
              Flexible partnership structures for every type of institution.
            </p>
          </div>

          {TIERS.map((tier) => (
            <div key={tier.label} id={tier.id[0]} className={styles.tier}>
              {tier.id.slice(1).map((anchor) => (
                <span
                  key={anchor}
                  id={anchor}
                  className={styles.anchorOffset}
                  aria-hidden="true"
                />
              ))}
              <div className={styles.tierContent}>
                <span className={styles.tierLabel}>{tier.label}</span>
                <h3 className={styles.tierH3}>{tier.title}</h3>
                <p className={styles.tierP}>{tier.description}</p>
                <ul className={styles.tierFeatures}>
                  {tier.features.map((f) => (
                    <li key={f} className={styles.tierFeatureItem}>
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="lime" size="md" href="/contact">
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.inquiry}>
        <div className={styles.inquiryInner}>
          <div className={styles.inquiryHeader}>
            <h2 className={styles.inquiryH2}>Interested in partnering?</h2>
            <p className={styles.inquirySub}>
              Tell us about your organization. We respond within one business
              day.
            </p>
          </div>

          <InquiryForm />

          <p className={styles.disclaimer}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
