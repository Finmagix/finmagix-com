// Footer for the marketing site. Mounted once in src/app/layout.tsx
// so every page inherits the columns + legal strip + persistent
// disclosure. See docs/CLAUDE_CODE_HANDOFF.md § 4.2 + Migration
// order step 1 for the link structure.
//
// Per Session 01 founder decisions (May 2026):
//   - No Pricing link in Product column (page dropped for beta; see
//     docs/tech-debt-marketing.md for restoration plan)
//   - No Blog link in Company column (page removed; data preserved)
//   - No standalone Security link — merged into /privacy-and-security
//   - No How-we-make-money link — substance now in About §03 +
//     Platform "What we won't do"

import Link from "next/link";
import Disclosure from "./Disclosure";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Finmagix Platform" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#modules", label: "Modules" },
      { href: "/privacy-and-security", label: "Privacy & Security" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { href: "/partners#credit-unions", label: "Credit unions" },
      { href: "/partners#community-banks", label: "Community banks" },
      { href: "/partners#employers", label: "Employers" },
      { href: "/partners#advisors", label: "CFP advisors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/advisors", label: "Our advisors" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

const legalLinks = [
  { href: "/privacy-and-security", label: "Privacy & Security Policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div className="footer__brand-col">
            <Link href="/" className="footer__brand" aria-label="Finmagix home">
              Finmagix<span className="footer__brand-mark">.</span>
            </Link>
            <p className="footer__tagline">
              A plain-language thinking platform for getting clearer on money. Built for the rest of us.
            </p>
          </div>

          {columns.map((col) => (
            <div className="footer__col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("http") ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__legal">
          <div className="footer__legal-links">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer__copyright">© {year} Finmagix, Inc.</div>
        </div>

        <Disclosure variant="footer" />
      </div>
    </footer>
  );
}
