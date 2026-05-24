"use client";

// Interstitial — visible for ~200ms while JS redirects the user to
// lite.finmagix.com/login. Behavior preserved from the WS-2 build
// (founder direction: keep these pages, just redesign with the new
// design system). Visual swapped to the new period-mark wordmark
// + warm cream canvas + forest-green spinner.

import { useEffect } from "react";
import styles from "./page.module.css";

const TARGET = "https://lite.finmagix.com/login";

export default function SignInPage() {
  useEffect(() => {
    window.location.href = TARGET;
  }, []);

  return (
    <div className={styles.wrap}>
      <span className={styles.brand} aria-label="Finmagix home">
        Finmagix<span className={styles.brandMark}>.</span>
      </span>
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>Taking you to Finmagix&hellip;</p>
    </div>
  );
}
