// Home comparison section — "Not another budgeting app".
//
// Added 2026-05-24 per founder mini-brief. Sits between ProofStrip
// and HowItWorks. Source reference: finmagix-comparison_1.html
// (Claude Design mockup, 13:11) — adapted from inline HTML/CSS into
// our component conventions and tokens.
//
// COPY GATE (per Claude Design brief, locked):
//   Row 1 "Built on CFP & CFA principles" is APPROVED wording.
//     Do NOT change to "CFP-grade," "CFP-certified," "advisor-quality,"
//     or anything implying Finmagix IS a CFP/CFA. This is a hard Part 4
//     line per strategy.md.
//   Row 2 "AI by design" is APPROVED but is the least-defensible row
//     (most budget apps now market AI features). Flagged for counsel
//     review in the session report.
//   Row 5 "Free Financial Fitness Test" is a MARKETING label. The
//     canonical in-app module name is "Financial Health Checkup."
//     Founder confirmed dual naming is intentional (mini-brief 5a).
//     Tracked in docs/tech-debt-marketing.md.
//
// COMPLIANCE — in-component disclaimer line is DELIBERATELY omitted
// per founder decision in the brief. Page-level disclosure is provided
// by the persistent <Disclosure variant="footer" /> mounted in
// src/app/layout.tsx, satisfying CFP/CFA Principle 6 + strategy 5.8.
//
// COLOR — uses the teal token set (--teal-mid, --teal-tint) introduced
// for this component per founder mini-brief decision 1b. These deviate
// from the design-system forest green. Tracked as a watch item in
// docs/tech-debt-marketing.md.
//
// HIGHLIGHT — uses a grid-placed band (grid-column: 2; grid-row:
// 1 / -1) rather than an absolutely positioned overlay. This avoids
// the alignment bug the brief warned about, while still giving the
// middle column the framed visual treatment the mockup specifies.

// Yes icon — solid teal disc + white check
function YesIcon() {
  return (
    <svg
      className="comparison__ic comparison__ic--yes"
      viewBox="0 0 28 28"
      role="img"
      aria-label="Yes"
    >
      <circle cx="14" cy="14" r="13" />
      <path d="M8 14.3l4 4 8-8.6" />
    </svg>
  );
}

// No icon — hairline ring + muted x
function NoIcon() {
  return (
    <svg
      className="comparison__ic comparison__ic--no"
      viewBox="0 0 28 28"
      role="img"
      aria-label="No"
    >
      <circle cx="14" cy="14" r="13" />
      <path d="M9.5 9.5l9 9M18.5 9.5l-9 9" />
    </svg>
  );
}

// Finmagix wordmark — inline SVG with the period-mark in
// var(--accent-primary) (forest green, brand identity). Uses
// var(--font-serif) which resolves to the next/font Fraunces variable
// via the parent page's class chain.
function FinmagixLogo() {
  return (
    <svg
      className="comparison__logo"
      viewBox="0 0 600 160"
      role="img"
      aria-label="Finmagix"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="300"
        y="115"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          fontSize: "100px",
          fontVariationSettings: "'opsz' 96",
          letterSpacing: "-0.01em",
          fill: "var(--ink-primary)",
        }}
      >
        Finmagix
        <tspan style={{ fill: "var(--accent-primary)" }}>.</tspan>
      </text>
    </svg>
  );
}

// Rows — 5 in this exact order; do not reorder per Claude Design brief.
const rows = [
  { text: "Built on CFP & CFA principles", lead: true },
  { text: "AI by design", lead: false },
  { text: "Decision tool, not just tracking", lead: false },
  { text: "Complete picture, every age", lead: false },
  { text: "Free Financial Fitness Test", lead: false },
] as const;

export default function Comparison() {
  return (
    <section className="section comparison" data-screen-label="comparison">
      <div className="wrap">
        <div className="comparison__wrap">
          <div className="comparison__intro">
            <div className="eyebrow">A different kind of money tool</div>
            <h2 className="t-section-title comparison__title">
              Not another budgeting app
            </h2>
            <p className="t-lede comparison__sub">
              Budgets track the past. Finmagix helps you decide what&apos;s next.
            </p>
          </div>

          <div
            className="comparison__table"
            role="table"
            aria-label="Product feature comparison: Finmagix versus budgeting and spend apps"
          >
            <div className="comparison__band" aria-hidden="true" />

            {/* Header row */}
            <div
              className="comparison__cell comparison__head comparison__head--feat"
              role="columnheader"
            >
              Product features
            </div>
            <div
              className="comparison__cell comparison__head comparison__head--fin"
              role="columnheader"
            >
              <FinmagixLogo />
            </div>
            <div
              className="comparison__cell comparison__head comparison__head--app"
              role="columnheader"
            >
              Budgeting /<br />
              Spend apps
            </div>

            {/* Data rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const lineCls = isLast ? "" : " comparison__row-line";
              return (
                <div key={row.text} style={{ display: "contents" }}>
                  <div
                    className={`comparison__cell comparison__feat${
                      row.lead ? " comparison__feat--lead" : ""
                    }${lineCls}`}
                    role="cell"
                  >
                    {row.text}
                  </div>
                  <div
                    className={`comparison__cell comparison__cell--icon${lineCls}`}
                    role="cell"
                  >
                    <YesIcon />
                  </div>
                  <div
                    className={`comparison__cell comparison__cell--icon${lineCls}`}
                    role="cell"
                  >
                    <NoIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
