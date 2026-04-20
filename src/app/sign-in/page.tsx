"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

const TARGET = "https://lite.finmagix.com/login";

export default function SignInPage() {
  useEffect(() => {
    window.location.href = TARGET;
  }, []);

  return (
    <div className={styles.wrap}>
      <span className={styles.brand} aria-label="Finmagix Lite">
        <span>FIN</span>
        <span className={styles.brandSlash}>/</span>
        <span>MAGIX</span>
        <span className={styles.brandLite}>Lite</span>
      </span>
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>Taking you to Finmagix Lite...</p>
      <p className={styles.disclaimer}>
        For educational purposes only. Not financial advice.
      </p>
    </div>
  );
}
