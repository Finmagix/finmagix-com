// AuthShell — shared full-viewport layout for /sign-in and /sign-up.
//
// Replaces the brief redirect-interstitial style with the prototype's
// substantial auth-page design (custom header + brand wordmark +
// "back to finmagix.com" link, two-column main with form left + side
// reassurance panel right, custom footer with compliance disclosure).
//
// Marketing chrome (NavBar + Footer + skip link) is hidden via the
// `body:has(.auth-shell) > {nav,footer,a.skip} { display: none; }`
// rules in globals.css, so the auth shell occupies the full viewport
// cleanly without route-group restructuring.
//
// Server Component. Each page passes the form column as `children` and
// the side panel + footer disclosure as props for the parts that
// differ between sign-in and sign-up.

import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

export default function AuthShell({
  children,
  sidePanel,
  footerDisclosure,
}: {
  children: React.ReactNode;
  sidePanel: React.ReactNode;
  footerDisclosure: React.ReactNode;
}) {
  return (
    <div className="auth-shell">
      <header className="auth-header">
        <Link
          href="/"
          className="auth-header__brand"
          aria-label="Finmagix home"
        >
          Finmagix<span className="mark">.</span>
        </Link>
        <Link href="/" className="auth-header__back">
          <ArrowLeftIcon size={14} />
          <span>Back to finmagix.com</span>
        </Link>
      </header>

      <main className="auth-main">
        <section className="auth-form-col">
          <div className="auth-form-card">{children}</div>
        </section>
        <aside className="auth-side">
          <div className="auth-side__inner">{sidePanel}</div>
        </aside>
      </main>

      <footer className="auth-footer">
        <p className="auth-footer__disclosure">{footerDisclosure}</p>
        <div className="auth-footer__links">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy-and-security">Privacy &amp; Security</Link>
          <span>© {new Date().getFullYear()} Finmagix, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
