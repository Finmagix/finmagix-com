// Home partner strip — dark forest-green band with partnership pitch.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 section 8. Default is visible
// (TWEAK_DEFAULTS sets show_partner_strip: true).
//
// "No commission strings" is a strategy.md Part 4 / Principle 5 line.

import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "../Icons";

const partners = [
  { id: "credit-unions", name: "Credit unions" },
  { id: "community-banks", name: "Community banks" },
  { id: "employers", name: "Employers" },
  { id: "advisors", name: "CFP advisors" },
] as const;

export default function PartnerStrip() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="partner-strip">
          <div>
            <div
              className="eyebrow"
              style={{ color: "var(--ink-inverse-secondary)" }}
            >
              For partners
            </div>
            <h2 style={{ marginTop: 16 }}>
              Bring Finmagix to the people you already serve.
            </h2>
            <p>
              We partner with credit unions, community banks, employers, and CFP advisors who want to offer this to their members, employees, or clients. Quiet integration. Same plain-language voice. No commission strings.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/partners" className="btn btn--secondary">
                Explore partnerships
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>

          <div className="partner-strip__chips">
            {partners.map((p) => (
              <Link
                key={p.id}
                href={`/partners#${p.id}`}
                className="partner-strip__chip"
              >
                {p.name}
                <span>
                  <ArrowUpRightIcon size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
