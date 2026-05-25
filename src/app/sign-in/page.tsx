// Sign in — brief redirect interstitial. The marketing site doesn't
// handle auth itself; this page exists so that links to
// finmagix.com/sign-in (emails, bookmarks, nav clicks) land on a
// Finmagix-branded page that smoothly hands off to lite, where the
// real sign-in flow lives.
//
// REBUILD (2026-05-25): founder direction — "I simply want their
// design to change to the new design - that's it." So this is a
// pure restyle of the production interstitial. Same redirect
// behavior, same DOM structure; only the styles change to the new
// design system (cream surface, forest-green accent, Fraunces serif
// wordmark with period mark).
//
// No form, no fields, no cross-domain auth. The user clicks
// Sign in in the nav → lands here for ~200ms → ends up on lite,
// where they sign in once.

"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const TARGET = "https://lite.finmagix.com/login";

export default function SignInPage() {
  useEffect(() => {
    window.location.href = TARGET;
  }, []);

  return (
    <div className={styles.wrap}>
      <Link href="/" className={styles.brand} aria-label="Finmagix home">
        Finmagix<span className={styles.mark}>.</span>
      </Link>
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>Taking you to sign in&hellip;</p>
      <p className={styles.fallback}>
        Not redirected automatically?{" "}
        <a href={TARGET}>Continue to sign in</a>.
      </p>
      <p className={styles.disclaimer}>
        <strong>Finmagix</strong> is an educational financial-wellness
        platform — not a financial advisor. Inspired by CFP Board and
        CFA Institute frameworks; not certified by either.
      </p>
    </div>
  );
}
