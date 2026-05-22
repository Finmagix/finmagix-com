import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Finmagix is a structured-thinking platform, not a financial advisor. Important information about the scope and limits of what Finmagix does.",
};

// Stub for Session 01. The full /disclaimer page — sourced from
// prototype/uploads/Finmagix_Lite_Beta_Legal_Documents.docx (16 numbered
// sections) — is part of the legal-pages migration step (handoff migration
// order step 10). See docs/tech-debt-marketing.md "Legal pages awaiting
// counsel review."
//
// The bare-minimum disclaimer copy here is sufficient to satisfy the footer
// link while the full legal body is being prepared with counsel.
export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="wrap wrap--narrow">
        <div className="eyebrow">Disclaimer</div>
        <h1 className="t-page-title" style={{ marginTop: 16 }}>
          Finmagix is a thinking tool, not a financial advisor.
        </h1>

        <div style={{ marginTop: 32 }}>
          <p className="t-body" style={{ color: "var(--ink-secondary)" }}>
            Finmagix is <strong style={{ color: "var(--ink-primary)" }}>not</strong> a financial advisor, fiduciary, tax preparer, broker, or insurance agent. The information you see on the platform is for educational purposes only. It is not personalized investment, tax, legal, or insurance advice.
          </p>

          <p className="t-body" style={{ marginTop: 18, color: "var(--ink-secondary)" }}>
            The structured analyses Finmagix produces are intended to help you think through your own situation more clearly. The decisions are always yours. For decisions that warrant professional advice — particularly involving complex tax positions, estate planning, business ownership, or specific investment products — please consult a qualified professional.
          </p>

          <p className="t-body" style={{ marginTop: 18, color: "var(--ink-secondary)" }}>
            The full disclaimer, with the additional detail counsel is reviewing, will publish here shortly.
          </p>
        </div>
      </div>
    </section>
  );
}
