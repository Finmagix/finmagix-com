// LegalPage — renders a LegalDoc (terms / disclaimer / privacy-and-
// security) with plain-language summary, intro callout, sticky TOC,
// and numbered sections.
//
// Per founder Session 02 decision G1: the v0.9 / "pre-counsel-review
// draft" indicators are NOT shown. The header meta line drops the
// "Version 0.9" tag; the footer-note drops the "beta-stage document,
// will be reviewed by counsel before public launch" sentence. Counsel
// review still gates public launch — tracked in
// docs/tech-debt-marketing.md "Legal pages awaiting counsel review."

import type { LegalBlock, LegalDoc } from "@/lib/legal";

function Block({ block }: { block: LegalBlock }) {
  if ("h3" in block) {
    return <h3 className="legal-sub">{block.h3}</h3>;
  }
  if ("ul" in block) {
    return (
      <ul className="legal-ul">
        {block.ul.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if ("table" in block) {
    return (
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              {block.table.head.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if ("p" in block) {
    return (
      <p className={block.strong ? "legal-p legal-p--strong" : "legal-p"}>
        {block.p}
      </p>
    );
  }
  return null;
}

type LegalPageProps = {
  doc: LegalDoc;
  /** When true, omits the cream "The plain-language version" summary
   *  callout above the legal sections. Set per-page when the founder
   *  wants the page to start straight into the numbered sections. */
  hideSummary?: boolean;
  /** When true, omits the green-bordered intro callout that sits above
   *  the numbered sections. */
  hideIntro?: boolean;
};

export default function LegalPage({
  doc,
  hideSummary = false,
  hideIntro = false,
}: LegalPageProps) {
  return (
    <>
      {/* Header */}
      <section className="section section--tight legal-header">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1
            className="t-page-title"
            style={{ marginTop: 16, marginBottom: 12, maxWidth: 820 }}
          >
            {doc.title}
          </h1>
          <div className="legal-meta">
            <span>Effective date: {doc.effectiveDate}</span>
          </div>
        </div>
      </section>

      {/* Summary + intro + sections */}
      <section className="section--tight">
        <div className="wrap">
          <div className="legal-shell">
            <aside className="legal-toc">
              <div
                className="section-label"
                style={{ marginBottom: 14 }}
              >
                On this page
              </div>
              <ol>
                {doc.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#sec-${i}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <article className="legal-article">
              {!hideSummary && (
                <div className="legal-summary">
                  <h2 className="legal-summary__title">
                    The plain-language version
                  </h2>
                  <ul>
                    {doc.summary.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {!hideIntro && doc.intro && (
                <div
                  className={`legal-callout${
                    doc.intro.strong ? " legal-callout--strong" : ""
                  }`}
                >
                  {doc.intro.text}
                </div>
              )}

              {doc.sections.map((section, i) => (
                <section
                  key={i}
                  id={`sec-${i}`}
                  className="legal-section"
                >
                  <h2 className="legal-h2">{section.heading}</h2>
                  {section.body.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </section>
              ))}

              <div className="legal-footer-note">
                <p>
                  <strong>Last updated:</strong> {doc.effectiveDate}.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
