import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const PRODUCT_LINKS: FooterLink[] = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
  { label: "Security", href: "/privacy" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Security Policy", href: "/security" },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={styles.link}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.brand} aria-label="Finmagix home">
              <span>FIN</span>
              <span
                style={{ color: "rgba(255,255,255,0.4)", margin: "0 4px" }}
              >
                /
              </span>
              <span>MAGIX</span>
              <span className={styles.brandLite}>Lite</span>
            </Link>
            <p className={styles.tagline}>
              CFP-standard financial planning tools for everyone.
            </p>
            <p className={styles.disclaimer}>
              For educational purposes only. Not financial advice.
            </p>
          </div>

          <div>
            <p className={styles.heading}>Product</p>
            {PRODUCT_LINKS.map((link) => (
              <FooterLinkItem key={link.href} link={link} />
            ))}
          </div>

          <div>
            <p className={styles.heading}>Company</p>
            {COMPANY_LINKS.map((link) => (
              <FooterLinkItem key={link.href} link={link} />
            ))}
          </div>

          <div>
            <p className={styles.heading}>Legal</p>
            {LEGAL_LINKS.map((link) => (
              <FooterLinkItem key={link.href} link={link} />
            ))}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.bottomText}>
            © 2026 Finmagix Inc. All rights reserved.
          </p>
          <p className={styles.bottomText}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
