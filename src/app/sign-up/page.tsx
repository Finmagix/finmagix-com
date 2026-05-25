// Sign up — brief redirect interstitial. See sign-in/page.tsx for
// the full architecture comment; this is the sign-up equivalent
// (target → lite.finmagix.com/signup).

"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const TARGET = "https://lite.finmagix.com/signup";

export default function SignUpPage() {
  useEffect(() => {
    window.location.href = TARGET;
  }, []);

  return (
    <div className={styles.wrap}>
      <Link href="/" className={styles.brand} aria-label="Finmagix home">
        Finmagix<span className={styles.mark}>.</span>
      </Link>
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>Taking you to sign up&hellip;</p>
      <p className={styles.fallback}>
        Not redirected automatically?{" "}
        <a href={TARGET}>Continue to sign up</a>.
      </p>
      <p className={styles.disclaimer}>
        <strong>Finmagix</strong> is an educational financial-wellness
        platform — not a financial advisor. Inspired by CFP Board and
        CFA Institute frameworks; not certified by either.
      </p>
    </div>
  );
}
