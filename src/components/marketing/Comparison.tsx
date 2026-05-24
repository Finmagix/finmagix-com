// Home comparison section — "Not another budgeting app".
//
// Added 2026-05-24 per founder mini-brief. Sits between ProofStrip
// and HowItWorks. Source reference: finmagix-comparison_1.html
// (Claude Design mockup, 13:11).
//
// LAYOUT NOTE — the highlight on the middle (Finmagix) column is
// applied PER-CELL (background + side borders + top/bottom borders
// + radii on the first/last middle cells) rather than via a floating
// `grid-row: 1 / -1` band overlay. The band approach broke CSS Grid
// auto-placement: items with `grid-row: 1 / -1` claim cells the
// auto-placer then skips, so the header row's column-2 cell would
// flow into column 3 and column-3 cell would wrap to row 2. Per-cell
// styling keeps every cell in its intended slot. (This is the
// alignment bug the original Claude Design brief warned about.)
//
// COPY GATE (per Claude Design brief, locked):
//   Row 1 "Built on CFP & CFA principles" is APPROVED wording.
//     Do NOT change to "CFP-grade," "CFP-certified," "advisor-quality,"
//     or anything implying Finmagix IS a CFP/CFA. Part 4 hard line.
//   Row 2 "AI by design" is APPROVED but is the least-defensible row
//     (most budget apps now market AI features). Flagged for counsel
//     review — see docs/tech-debt-marketing.md.
//   Row 5 "Free Financial Fitness Test" is a MARKETING label. The
//     canonical in-app module name is "Financial Health Checkup."
//     Founder-confirmed dual naming. See tech-debt-marketing.md.
//
// COMPLIANCE — in-component disclaimer line DELIBERATELY omitted per
// founder decision. Page-level disclosure satisfied by the persistent
// <Disclosure variant="footer" /> in shared layout.
//
// COLOR — teal token set (--teal-mid, --teal-tint) is a localized
// design-system exception per founder mini-brief decision 1b.

import { Fragment } from "react";

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

// Finmagix wordmark — inline SVG using design-system tokens. Renders
// in Fraunces (via the next/font CSS variable) with the period in
// forest green (brand identity).
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
            {/* HEADER ROW — exactly 3 cells, no wrappers between them. */}
            <div
              className="comparison__cell comparison__head comparison__head--feat"
              role="columnheader"
            >
              Product features
            </div>
            <div
              className="comparison__cell comparison__head comparison__head--fin comparison__cell--middle comparison__cell--middle-top"
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

            {/* DATA ROWS — each iteration emits 3 cells via Fragment
                (not a div wrapper); auto-placement flows them into
                the next 3 grid cells row by row. */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const lineCls = isLast ? "" : " comparison__row-line";
              const middleCls = isLast
                ? " comparison__cell--middle comparison__cell--middle-bottom"
                : " comparison__cell--middle";
              return (
                <Fragment key={row.text}>
                  <div
                    className={`comparison__cell comparison__feat${
                      row.lead ? " comparison__feat--lead" : ""
                    }${lineCls}`}
                    role="cell"
                  >
                    {row.text}
                  </div>
                  <div
                    className={`comparison__cell comparison__cell--icon${middleCls}`}
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
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
