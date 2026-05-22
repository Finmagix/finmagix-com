import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finmagix Platform",
  description:
    "The full Platform page is under construction. Twelve areas of structured financial thinking — in plain language, with you in charge.",
};

// Stub for Session 01. The full /platform build is migration order step 4,
// sourced from prototype/uploads/Our_Platform.docx + four product screenshots
// in prototype/site/product-*.png. See docs/tech-debt-marketing.md
// "/platform page exists as a minimal stub."
export default function PlatformPage() {
  return (
    <section className="section">
      <div className="wrap wrap--narrow">
        <div className="eyebrow">Finmagix Platform</div>
        <h1 className="t-page-title" style={{ marginTop: 16 }}>
          The full platform story is on its way.
        </h1>
        <p className="t-lede" style={{ marginTop: 24 }}>
          We&apos;re putting this page together. In the meantime, you can try
          the free Financial Health Checkup, read about what we believe on the{" "}
          <a
            href="/about"
            style={{ color: "var(--accent-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            About page
          </a>
          , or{" "}
          <a
            href="/contact"
            style={{ color: "var(--accent-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            get in touch
          </a>
          .
        </p>
        <div style={{ marginTop: 32 }}>
          <a
            href="https://lite.finmagix.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            Try the free checkup
          </a>
        </div>
      </div>
    </section>
  );
}
