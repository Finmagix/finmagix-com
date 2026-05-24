// Sign in — full landing page with branded shell + email-only form.
//
// Replaces the brief redirect-interstitial. Per founder direction:
// "redesign" — full prototype-style auth experience on marketing
// site, while keeping the real auth (password / magic-link) on
// lite.finmagix.com where the auth backend actually lives.
//
// Architecture:
//   - Server Component (native HTML form, no client state)
//   - Email-only form (no password capture on marketing — that's
//     lite's job; cross-domain password POST would be a security
//     anti-pattern)
//   - Form submits via GET to lite.finmagix.com/login?email=<email>
//   - Lite's login page receives the email as a query param and
//     pre-fills its own email field, then prompts for password
//   - If lite doesn't support ?email= pre-fill, the user just sees
//     an empty email field on lite — graceful degradation
//
// Marketing chrome (NavBar/Footer) is hidden via CSS :has() rule in
// globals.css — the auth-shell is full-viewport with its own header
// + footer per the prototype design.

import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to Finmagix Lite — the plain-language financial-thinking platform.",
};

const LITE_LOGIN_URL = "https://lite.finmagix.com/login";

export default function SignInPage() {
  return (
    <AuthShell
      sidePanel={
        <>
          <div className="auth-side__eyebrow">What&apos;s waiting</div>
          <h2 className="auth-side__h2">
            Your timeline is right where you left it.
          </h2>
          <ul className="auth-side__list">
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <div className="auth-side__item-text">
                <strong className="auth-side__item-title">
                  Your Quiet Index
                </strong>
                Where you&apos;ve explored and where the next interesting thread might be.
              </div>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <div className="auth-side__item-text">
                <strong className="auth-side__item-title">
                  The modules you&apos;ve run
                </strong>
                Scores, notes, and the structured reads you generated.
              </div>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <div className="auth-side__item-text">
                <strong className="auth-side__item-title">
                  Anything you saved
                </strong>
                Quietly stored. No streaks, no shame, no nudges.
              </div>
            </li>
          </ul>
          <p className="auth-side__close">
            Finmagix is educational — a thinking tool, not a financial advisor.
          </p>
        </>
      }
      footerDisclosure={
        <>
          <strong>Finmagix Lite</strong> is an educational financial-wellness platform — not a financial advisor, fiduciary, broker, or insurance agent. Inspired by CFP Board and CFA Institute frameworks; not certified by either. For educational purposes only.
        </>
      }
    >
      <div className="auth-eyebrow">Sign in</div>
      <h1 className="auth-h1">
        Welcome <span className="accent">back.</span>
      </h1>
      <p className="auth-sub">Pick up where you left off.</p>

      <form className="auth-form" action={LITE_LOGIN_URL} method="GET">
        <div className="auth-field">
          <label className="auth-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="auth-input"
            placeholder="you@example.com"
            required
            autoFocus
          />
        </div>

        <button type="submit" className="auth-button auth-button--primary">
          Continue
          <ArrowRightIcon size={16} />
        </button>

        <p
          className="auth-help"
          style={{ textAlign: "center", marginTop: 4 }}
        >
          You&apos;ll enter your password on the next screen.
        </p>

        <p className="auth-alt-link">
          New here?
          <Link href="/sign-up">
            Start free
            <ArrowRightIcon size={14} />
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
