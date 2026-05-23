import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Security",
  description:
    "How Finmagix handles your personal information and protects your data. Combined privacy and security policy — full text coming soon.",
};

// Stub for Session 01. The full combined /privacy-and-security page (replacing
// standalone /privacy and /security) is part of the legal-pages migration step
// (handoff migration order step 10). Counsel-approved body sourced from
// prototype/uploads/Finmagix_Lite_Beta_Legal_Documents.docx is the eventual
// content. See docs/tech-debt-marketing.md "Legal pages awaiting counsel review."
//
// Until then this stub satisfies the footer link and lets users know the
// policy is being prepared. The existing /privacy page (WS-3 build) stays
// reachable at its own URL; the redirect from /privacy to /privacy-and-security
// will be set up in the legal-pages session per handoff migration order step 3.
export default function PrivacyAndSecurityPage() {
  return (
    <section className="section">
      <div className="wrap wrap--narrow">
        <div className="eyebrow">Privacy &amp; Security</div>
        <h1 className="t-page-title" style={{ marginTop: 16 }}>
          We&apos;re working on the policy.
        </h1>
        <p className="t-lede" style={{ marginTop: 24 }}>
          Finmagix treats your information as private and secures it with industry-standard practices. The full Privacy &amp; Security Policy is being prepared with counsel; we&apos;ll publish it here shortly.
        </p>
        <p className="t-body" style={{ marginTop: 32, color: "var(--ink-secondary)" }}>
          In the meantime, if you have a specific question about how your data is handled, please{" "}
          <a
            href="/contact"
            style={{ color: "var(--accent-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            reach out
          </a>
          .
        </p>
      </div>
    </section>
  );
}
