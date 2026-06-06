// Section 15 — Sticky CTA. Appears after the user scrolls past the
// hero. Dismissible. Respects safe-area-inset-bottom on iOS.

"use client";

import { useEffect, useState } from "react";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function HomeStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.querySelector<HTMLElement>(".home-hero");
      if (!hero) return;
      const threshold = hero.offsetHeight - 80;
      setVisible(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`home-sticky ${visible ? "is-visible" : ""}`.trim()}
      role="region"
      aria-label="Get your free checkup"
    >
      <div className="home-sticky__txt">
        Get your free checkup
        <small>No credit card · no bank connection</small>
      </div>
      <a
        href={LITE_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="home-btn home-btn--clay"
        style={{ padding: "0.6em 1.2em", minHeight: 0 }}
        data-analytics="cta_sticky_signup"
      >
        Start now
      </a>
      <button
        type="button"
        className="home-sticky__close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
