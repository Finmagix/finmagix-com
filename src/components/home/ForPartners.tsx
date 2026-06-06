// Section 13 — For partners (audience tag pills).

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const TAGS = [
  { label: "Credit unions", href: "/partners#credit-unions" },
  { label: "Community banks", href: "/partners#community-banks" },
  { label: "Employers", href: "/partners#employers" },
  { label: "CFP advisors", href: "/partners#cfp-advisors" },
];

export default function HomeForPartners() {
  return (
    <section className="home-sec home-partners" id="partners">
      <div className="home-wrap">
        <ScrollReveal style={{ maxWidth: "40em", margin: "0 auto" } as React.CSSProperties}>
          <span className="home-eyebrow">For partners</span>
          <h2 style={{ marginTop: 14 }} className="home-sec__head">
            <span style={{ display: "block" }}>
              Bring Finmagix to the people you already serve.
            </span>
          </h2>
          <p className="home-lede" style={{ margin: "16px auto 0" }}>
            We partner with credit unions, community banks, employers, and
            CFP advisors. Quiet integration. Same plain-language voice. No
            commission strings.
          </p>
          <div className="home-partners__tags">
            {TAGS.map((t) => (
              <Link key={t.label} href={t.href}>
                {t.label}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
