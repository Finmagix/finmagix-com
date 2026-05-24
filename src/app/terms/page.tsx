import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of Finmagix Lite and the finmagix.com website. Full text coming soon.",
};

// Stub. The full /terms page is built in Batch 6 of the all-pages
// session — sourced from prototype/uploads/Finmagix_Lite_Beta_Legal_Documents.docx
// (19 numbered sections) and rendered by the LegalPage component pattern.
// This stub replaces a WS-3 build that imported the now-deleted /privacy
// page.module.css. See docs/tech-debt-marketing.md "Legal pages awaiting
// counsel review."
export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap wrap--narrow">
        <div className="eyebrow">Terms of service</div>
        <h1 className="t-page-title" style={{ marginTop: 16 }}>
          We&apos;re finalizing the terms.
        </h1>
        <p className="t-lede" style={{ marginTop: 24 }}>
          The full Terms of Service is being prepared with counsel; we&apos;ll publish it here shortly. Until then, please refer to the Disclaimer and Privacy &amp; Security pages for the scope of what Finmagix is and how your data is handled.
        </p>
      </div>
    </section>
  );
}
