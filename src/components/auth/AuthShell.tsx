// AuthShell — shared full-viewport layout for /sign-in and /sign-up.
//
// REBUILD (2026-05-24, post-founder-review): polarity flipped to
// mirror lite.finmagix.com — dark forest-green LEFT column with the
// marketing copy / bullets / "educational tool" badge, cream RIGHT
// column with the actual form. Previous version (2026-05-22) had
// both columns cream with form-LEFT / side-RIGHT, which the founder
// flagged as not matching the lite reference. This is a one-for-one
// redo of the polarity / structure — design language stays the same
// (Finmagix Quiet Index design system).
//
// DOM ORDER is now <aside> first, <section> (form) second so screen
// readers and source order match the visual order (dark column
// first, form second). On mobile (≤920px) the stack is REVERSED
// via grid row ordering so the form is on top — users who came here
// to sign in shouldn't have to scroll past a marketing panel first.
//
// Marketing chrome (NavBar + Footer + skip link) is hidden via the
// `body:has(.auth-shell) > {nav,footer,a.skip}` rules in globals.css
// so the auth shell occupies the full viewport with its own outer
// header (brand + "back to finmagix.com") and footer (disclosure +
// legal links).
//
// Server Component. Each page passes the form column as `children`
// and the side panel + footer disclosure as props.

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
        {/* Dark column — marketing copy + bullets + educational tool
            badge. Visually FIRST on desktop, SECOND on mobile (the
            form is the primary intent on small screens). */}
        <aside className="auth-side">
          <div className="auth-side__inner">{sidePanel}</div>
        </aside>

        {/* Cream column — the actual form. */}
        <section className="auth-form-col">
          <div className="auth-form-card">{children}</div>
        </section>
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
