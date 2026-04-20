import type { Metadata } from "next";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Finmagix",
  description:
    "The terms that govern your use of Finmagix Lite and the finmagix.com website.",
  openGraph: {
    title: "Terms of Service | Finmagix",
    description:
      "The terms that govern your use of Finmagix Lite and the finmagix.com website.",
    url: "https://finmagix.com/terms",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Finmagix",
    description:
      "The terms that govern your use of Finmagix Lite and the finmagix.com website.",
  },
};

interface Section {
  id: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "service", title: "2. Description of Service" },
  { id: "accounts", title: "3. User Accounts" },
  { id: "acceptable-use", title: "4. Acceptable Use" },
  { id: "educational-disclaimer", title: "5. Educational Disclaimer" },
  { id: "ip", title: "6. Intellectual Property" },
  { id: "termination", title: "7. Termination" },
  { id: "warranties", title: "8. Disclaimer of Warranties" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "law", title: "10. Governing Law" },
  { id: "contact", title: "11. Contact" },
];

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroH1}>Terms of Service</h1>
          <p className={styles.heroSub}>Last updated April 2026.</p>
          <span className={styles.draftBadge}>
            Draft — Under legal review. Not yet effective.
          </span>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.mainInner}>
          <aside className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocLabel}>On this page</p>
            <ul className={styles.tocList}>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={styles.tocLink}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.prose}>
            <div className={styles.notice}>
              <p className={styles.noticeTitle}>Draft notice</p>
              <p>
                This document is a draft template published for transparency
                about the direction of our Terms of Service. It has not been
                reviewed by a licensed attorney and is not yet effective.
                Please consult our final Terms before relying on any
                provision.
              </p>
            </div>

            <section id="acceptance">
              <h2>1. Acceptance of Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of
                the Finmagix Lite application, the finmagix.com website, and
                any related services (collectively, the &quot;Service&quot;)
                operated by Finmagix Inc. (&quot;Finmagix,&quot;
                &quot;we,&quot; &quot;us&quot;). By accessing or using the
                Service you agree to be bound by these Terms. If you do not
                agree, do not use the Service.
              </p>
            </section>

            <section id="service">
              <h2>2. Description of Service</h2>
              <p>
                Finmagix provides educational financial planning tools, scores,
                summaries, and AI-generated analysis based on inputs you
                provide. The Service is designed to help you understand your
                financial picture across 12 planning dimensions.
              </p>
              <div className={styles.notice}>
                <p className={styles.noticeTitle}>
                  Educational tool, not financial advice
                </p>
                <p>
                  Finmagix provides educational tools only. We are not a
                  licensed financial advisor, registered investment adviser,
                  broker-dealer, insurance agent, tax professional, or
                  attorney. Nothing in the Service constitutes personalized
                  financial, investment, tax, legal, or insurance advice. For
                  advice specific to your circumstances, consult a licensed
                  professional.
                </p>
              </div>
            </section>

            <section id="accounts">
              <h2>3. User Accounts</h2>
              <p>
                To access most features you must create an account. You agree
                to (a) provide accurate and current information, (b) keep your
                credentials confidential, and (c) notify us promptly of any
                unauthorized use of your account. You are responsible for all
                activity under your account.
              </p>
              <p>
                You must be at least 18 years old to create an account.
                Accounts are for individual use; you may not share accounts or
                resell access.
              </p>
            </section>

            <section id="acceptable-use">
              <h2>4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>
                  Use the Service in a way that violates any applicable law
                  or regulation
                </li>
                <li>
                  Attempt to gain unauthorized access to other accounts,
                  systems, or networks connected to the Service
                </li>
                <li>
                  Interfere with or disrupt the Service, including through
                  scraping, automated requests, or excessive API use outside
                  of any documented limits
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble any portion of
                  the Service except as permitted by applicable law
                </li>
                <li>
                  Use the Service to generate content that is unlawful,
                  infringing, harassing, or abusive
                </li>
                <li>
                  Impersonate any person or misrepresent your affiliation
                  with any person or entity
                </li>
              </ul>
            </section>

            <section id="educational-disclaimer">
              <h2>5. Educational Disclaimer</h2>
              <p>
                <strong>
                  The Service is provided for educational and informational
                  purposes only. It does not constitute personalized
                  financial, investment, tax, legal, or insurance advice, nor
                  does it constitute a recommendation to buy, sell, or hold
                  any security or other financial instrument.
                </strong>
              </p>
              <p>
                All projections, scores, benchmarks, and suggestions are
                educational estimates based on the inputs you provide and
                publicly available information. Actual outcomes will vary.
                Past performance is not indicative of future results. You are
                solely responsible for financial decisions you make. Consult a
                licensed financial professional, Certified Financial Planner,
                CPA, or attorney for advice tailored to your situation.
              </p>
            </section>

            <section id="ip">
              <h2>6. Intellectual Property</h2>
              <p>
                The Service, including its software, content, design, and
                trademarks, is owned by Finmagix or its licensors and is
                protected by intellectual property laws. We grant you a
                limited, non-exclusive, non-transferable, revocable license to
                access and use the Service for its intended purpose. You
                retain ownership of inputs you submit; you grant us a license
                to process those inputs to operate and improve the Service.
              </p>
            </section>

            <section id="termination">
              <h2>7. Termination</h2>
              <p>
                You may cancel your account at any time from your account
                settings. We may suspend or terminate your access to the
                Service if you materially breach these Terms or use the
                Service in a way that creates risk or harm to Finmagix or its
                users. Sections of these Terms that by their nature should
                survive termination will survive.
              </p>
            </section>

            <section id="warranties">
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                NON-INFRINGEMENT, AND ACCURACY OF INFORMATION. FINMAGIX DOES
                NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE,
                OR ERROR-FREE, OR THAT ANY EDUCATIONAL ANALYSIS IS COMPLETE
                OR ACCURATE.
              </p>
            </section>

            <section id="liability">
              <h2>9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FINMAGIX AND ITS
                AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST
                PROFITS OR LOST DATA, ARISING OUT OF OR RELATED TO YOUR USE
                OF THE SERVICE. OUR TOTAL AGGREGATE LIABILITY WILL NOT
                EXCEED THE GREATER OF (A) THE FEES YOU PAID US IN THE 12
                MONTHS PRECEDING THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS
                ($100).
              </p>
            </section>

            <section id="law">
              <h2>10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                without regard to its conflict-of-laws rules. Any dispute
                arising out of or relating to these Terms or the Service will
                be resolved in the state or federal courts located in
                Delaware, and you consent to the jurisdiction of those
                courts.
              </p>
            </section>

            <section id="contact">
              <h2>11. Contact</h2>
              <p>
                Questions about these Terms? Email{" "}
                <a href="mailto:legal@finmagix.com">legal@finmagix.com</a>.
              </p>
              <p>
                <em>
                  TODO — Have a licensed attorney review these Terms before
                  publishing. This is a draft template.
                </em>
              </p>
            </section>
          </div>
        </div>
      </section>

      <div className={styles.footerDisclaimer}>
        For educational purposes only. Not financial advice.
      </div>
    </>
  );
}
