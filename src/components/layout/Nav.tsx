"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownGroup {
  label: string;
  items: DropdownItem[];
}

const PRODUCT_GROUP: DropdownGroup = {
  label: "Product",
  items: [
    { label: "Features", href: "/#features" },
    { label: "Interactive Demo", href: "/demo" },
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "/privacy" },
  ],
};

const PARTNERS_GROUP: DropdownGroup = {
  label: "Partners",
  items: [
    { label: "Credit Unions", href: "/partners#credit-unions" },
    { label: "Community Banks", href: "/partners#community-banks" },
    { label: "Employers", href: "/partners#employers" },
    { label: "CFP Advisors", href: "/partners#advisors" },
  ],
};

const COMPANY_GROUP: DropdownGroup = {
  label: "Company",
  items: [
    { label: "About Us", href: "/about" },
    { label: "Our Advisors", href: "/advisors" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
};

const PLAIN_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const SIGNIN_URL = "https://lite.finmagix.com/login";
const SIGNUP_URL = "https://lite.finmagix.com/signup";

function Caret() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand() {
  return (
    <Link href="/" className={styles.brand} aria-label="Finmagix home">
      <span>FIN</span>
      <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 4px" }}>
        /
      </span>
      <span>MAGIX</span>
      <span className={styles.brandLite}>Lite</span>
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const renderDropdown = (group: DropdownGroup) => (
    <div className={styles.dropdown} key={group.label}>
      <button
        type="button"
        className={styles.navLink}
        aria-haspopup="true"
        tabIndex={0}
      >
        {group.label}
        <Caret />
      </button>
      <div className={styles.dropdownPanel} role="menu">
        {group.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.dropdownItem}
            role="menuitem"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.inner}>
          <Brand />

          <div className={styles.desktopNav}>
            {PLAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive(link.href) ? styles.activeUnderline : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            {renderDropdown(PRODUCT_GROUP)}
            {renderDropdown(PARTNERS_GROUP)}
            {renderDropdown(COMPANY_GROUP)}
          </div>

          <div className={styles.ctaRow}>
            <a
              href={SIGNIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.signIn}
            >
              Sign in
            </a>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Get started free
            </a>
          </div>

          <button
            type="button"
            className={styles.hamburger}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              className={styles.hamburgerIcon}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.drawerBackdrop} ${
          drawerOpen ? styles.drawerBackdropOpen : ""
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!drawerOpen}
      >
        <div className={styles.drawerHeader}>
          <Brand />
          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            ×
          </button>
        </div>

        <div>
          <Link href="/" className={styles.drawerLink}>
            Home
          </Link>
          <Link href="/pricing" className={styles.drawerLink}>
            Pricing
          </Link>
          <Link href="/blog" className={styles.drawerLink}>
            Blog
          </Link>

          <span className={styles.drawerGroupLabel}>Product</span>
          {PRODUCT_GROUP.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.drawerSublink}
            >
              {item.label}
            </Link>
          ))}

          <span className={styles.drawerGroupLabel}>Partners</span>
          {PARTNERS_GROUP.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.drawerSublink}
            >
              {item.label}
            </Link>
          ))}

          <span className={styles.drawerGroupLabel}>Company</span>
          {COMPANY_GROUP.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.drawerSublink}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={SIGNIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerLink}
          >
            Sign in
          </a>

          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerCta}
          >
            Get started free
          </a>
        </div>
      </aside>
    </>
  );
}
