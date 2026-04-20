import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Finmagix",
  description:
    "How Finmagix collects, uses, and protects your personal and financial information.",
  openGraph: {
    title: "Privacy Policy | Finmagix",
    description:
      "How Finmagix collects, uses, and protects your personal and financial information.",
    url: "https://finmagix.com/privacy",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Finmagix",
    description:
      "How Finmagix collects, uses, and protects your personal and financial information.",
  },
};

interface Section {
  id: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "how-we-share", title: "How We Share Your Information" },
  { id: "retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "california", title: "California Residents (CCPA)" },
  { id: "security", title: "Security" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroH1}>Privacy Policy</h1>
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
                This document is a draft under legal review and is not yet
                effective. It is published here for transparency about the
                direction of our privacy practices. Nothing in this draft
                should be relied on as a legal commitment until it is
                finalized.
              </p>
            </div>

            <section id="introduction">
              <h2>Introduction</h2>
              <p>
                Finmagix Inc. (&quot;Finmagix,&quot; &quot;we,&quot;
                &quot;us&quot;) operates the Finmagix Lite financial planning
                platform and the finmagix.com marketing site. This Privacy
                Policy explains what personal information we collect, how we
                use it, how we share it, and the choices you have about your
                information.
              </p>
              <p>
                By using our services you agree to the practices described in
                this policy. If you do not agree, please do not use our
                services.
              </p>
            </section>

            <section id="information-we-collect">
              <h2>Information We Collect</h2>
              <h3>Information you provide</h3>
              <p>
                When you create an account or use our planning modules, you
                provide information such as:
              </p>
              <ul>
                <li>Account details (name, email address, password)</li>
                <li>
                  Financial inputs you choose to enter (income, savings,
                  investments, debts, insurance coverage)
                </li>
                <li>Life-stage and goal inputs from our onboarding flow</li>
                <li>
                  Communications you send us (support requests, partnership
                  inquiries, survey responses)
                </li>
              </ul>
              <h3>Information collected automatically</h3>
              <p>
                When you access our services we automatically collect certain
                technical information:
              </p>
              <ul>
                <li>
                  Log data (IP address, browser type and version, pages
                  visited, timestamps)
                </li>
                <li>Device information (device type, operating system)</li>
                <li>
                  Usage data (features used, assessments started and
                  completed, interactions with the AI assistant)
                </li>
                <li>
                  Cookies and similar technologies for authentication and
                  preferences
                </li>
              </ul>
            </section>

            <section id="how-we-use">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>
                  Provide, maintain, and improve the planning modules and
                  educational analysis you use
                </li>
                <li>
                  Generate your personalized roadmap, scores, and AI-powered
                  insights
                </li>
                <li>Operate accounts, authentication, and billing</li>
                <li>
                  Communicate with you about product updates, security
                  notices, and support requests
                </li>
                <li>
                  Detect, prevent, and address fraud, abuse, or security
                  issues
                </li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p>
                We do not sell your personal information, and we do not use
                your financial inputs to target advertising.
              </p>
            </section>

            <section id="how-we-share">
              <h2>How We Share Your Information</h2>
              <p>We share information only in the following situations:</p>
              <ul>
                <li>
                  <strong>Service providers:</strong> hosting, database,
                  email, and analytics vendors who process information on our
                  behalf under confidentiality obligations.
                </li>
                <li>
                  <strong>AI processing:</strong> selected prompts and
                  assessment context are sent to our AI model provider to
                  generate educational analysis. This data is not used by the
                  provider to train foundation models.
                </li>
                <li>
                  <strong>Legal compliance:</strong> when required by
                  applicable law, subpoena, or other legal process.
                </li>
                <li>
                  <strong>Business transfers:</strong> in connection with a
                  merger, acquisition, or sale of assets, subject to
                  appropriate protections.
                </li>
                <li>
                  <strong>With your consent:</strong> for any other sharing
                  you specifically authorize.
                </li>
              </ul>
            </section>

            <section id="retention">
              <h2>Data Retention</h2>
              <p>
                We retain your account and assessment data for as long as your
                account is active and for a reasonable period afterward to
                meet legal, tax, or operational obligations. You can request
                deletion of your account and associated data at any time — see
                &quot;Your Rights&quot; below.
              </p>
            </section>

            <section id="your-rights">
              <h2>Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights to access,
                correct, export, or delete your personal information, to
                withdraw consent, and to object to certain processing
                activities. To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@finmagix.com">
                  privacy@finmagix.com
                </a>
                . We will respond within the timelines required by applicable
                law.
              </p>
            </section>

            <section id="california">
              <h2>California Residents (CCPA)</h2>
              <p>
                If you are a California resident, you have additional rights
                under the California Consumer Privacy Act (CCPA), including
                the right to know what personal information we collect, the
                right to request deletion, and the right to non-discrimination
                for exercising your rights. We do not sell personal
                information.
              </p>
              <p>
                To exercise your CCPA rights, contact us at{" "}
                <a href="mailto:privacy@finmagix.com">
                  privacy@finmagix.com
                </a>
                . We may need to verify your identity before fulfilling
                certain requests.
              </p>
            </section>

            <section id="security">
              <h2>Security</h2>
              <p>
                We use bank-level encryption in transit (TLS) and at rest,
                row-level database security so that only you can access your
                data, least-privilege access controls for our staff, and
                regular review of our security practices. No system is 100%
                secure, and we encourage you to use a strong, unique password
                and to report any suspected security incidents to{" "}
                <a href="mailto:security@finmagix.com">
                  security@finmagix.com
                </a>
                .
              </p>
            </section>

            <section id="children">
              <h2>Children&apos;s Privacy</h2>
              <p>
                Finmagix is not directed to children under 13, and we do not
                knowingly collect personal information from children under 13.
                If you believe a child has provided us information, please
                contact us at{" "}
                <a href="mailto:privacy@finmagix.com">
                  privacy@finmagix.com
                </a>{" "}
                and we will delete it.
              </p>
            </section>

            <section id="changes">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Material changes
                will be announced via email or a prominent notice on our
                website at least 30 days before they take effect. The
                &quot;Last updated&quot; date at the top of this policy
                reflects the most recent changes.
              </p>
            </section>

            <section id="contact">
              <h2>Contact</h2>
              <p>
                For questions about this policy or our privacy practices,
                email{" "}
                <a href="mailto:privacy@finmagix.com">
                  privacy@finmagix.com
                </a>{" "}
                or write to Finmagix Inc., Attn: Privacy, via the address
                listed on our{" "}
                <a href="/contact">Contact page</a>.
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
