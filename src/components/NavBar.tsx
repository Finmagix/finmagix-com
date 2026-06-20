"use client";

// Top nav for the marketing site. See:
// - docs/CLAUDE_CODE_HANDOFF.md § "Visual identity" (period-mark wordmark)
// - docs/CLAUDE_CODE_HANDOFF.md § 4.2 + Migration order step 1 (nav structure)
//
// Wordmark renders as live HTML text, not an <img> — keeps it crisp at every
// zoom, accessible to screen readers and find-on-page, trivial to recolor in
// dark sections. The dot is colored via .nav__brand--mark using
// var(--accent-primary).

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuIcon, XIcon } from "./Icons";

const LITE_URL = "https://lite.finmagix.com";
const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

// Per Session 01 founder decision (May 2026): no Pricing link.
// Restoration tracked in docs/tech-debt-marketing.md.
const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Finmagix Platform" },
  { href: "/#modules", label: "Modules" },
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "For partners" },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  // usePathname() is the canonical Next.js way to react to navigation;
  // updating local UI state in response is the standard pattern. The lint
  // rule below catches a general anti-pattern of cascading renders, but here
  // the setState only fires on actual pathname change (deps), and the
  // alternative — adding onClick handlers to every Link — would miss browser
  // back/forward navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    // The Modules link points at /#modules which usePathname() reports as "/".
    // Treating that as "Home active" rather than "Modules active" matches user
    // expectation: the hash just scrolls within the home page.
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link href="/" className="nav__brand" aria-label="Finmagix home">
          Finmagix<span className="nav__brand--mark">.</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "is-active" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__cta">
          <a
            href={LITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__signin"
          >
            Sign in
          </a>
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Try the free checkup
          </a>
          <button
            type="button"
            className="nav__hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}
      >
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={LITE_URL} target="_blank" rel="noopener noreferrer">
          Sign in
        </a>
        <a
          href={LITE_SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary mobile-menu__cta btn--block"
        >
          Try the free checkup
        </a>
      </div>
    </header>
  );
}
