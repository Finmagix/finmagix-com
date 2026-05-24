"use client";

// Interstitial — visible for ~200ms while JS redirects the user to
// lite.finmagix.com/signup. See sign-in/page.tsx for the redesign
// rationale; the two pages share styles via page.module.css.

import { useEffect } from "react";
import styles from "../sign-in/page.module.css";

const TARGET = "https://lite.finmagix.com/signup";

export default function SignUpPage() {
  useEffect(() => {
    window.location.href = TARGET;
  }, []);

  return (
    <div className={styles.wrap}>
      <span className={styles.brand} aria-label="Finmagix home">
        Finmagix<span className={styles.brandMark}>.</span>
      </span>
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>Setting up your free checkup&hellip;</p>
    </div>
  );
}
