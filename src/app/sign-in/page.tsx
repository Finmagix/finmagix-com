// Sign in — full landing page mirroring lite.finmagix.com/login.
//
// REBUILD (2026-05-24, post-founder-review): the previous version
// shipped a marketing-style email-only handoff form. Founder
// direction: mirror lite's exact field set (Google OAuth button +
// email + password + Forgot password + Sign in), styled in the
// Finmagix Quiet Index design system. AuthShell now uses a dark-
// left / cream-right polarity matching lite.
//
// Form submission target: native HTML POST to lite.finmagix.com/login.
// If lite's backend handles cross-origin POSTs from finmagix.com it
// authenticates directly; if lite is purely a client-side SPA without
// a POST handler, the browser navigates to lite's login page and the
// SPA re-renders cleanly (graceful fallback). Either way, marketing
// never stores credentials — they live in the POST body for the
// duration of one request.
//
// Google OAuth: links to lite's /login page where the OAuth flow
// lives. Deep-linking to a specific Google OAuth initiation URL
// would require knowing lite's auth provider setup; safer to just
// hand off and let lite's own button drive the flow.
//
// Side-panel copy mirrors lite's marketing intent but uses Part 4
// compliant language: "CFP-standard" → "inspired by CFP and CFA
// frameworks", "personalized financial roadmap" → "Financial
// Health Checkup", "AI-powered analysis" → "structured reads".

import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import { ArrowRightIcon, GoogleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to Finmagix — the plain-language financial-thinking platform.",
};

const LITE_LOGIN_URL = "https://lite.finmagix.com/login";

export default function SignInPage() {
  return (
    <AuthShell
      sidePanel={
        <>
          <h2 className="auth-side__h2">
            Your complete financial picture — in one place.
          </h2>
          <p className="auth-side__sub">
            Twelve modules covering retirement, tax, debt, protection, and more — in plain language, inspired by CFP and CFA frameworks.
          </p>
          <ul className="auth-side__list">
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Your Financial Health Checkup in about five minutes
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Modules across retirement, tax, debt, protection, and more
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Structured reads that explain what your scores mean
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Save your work and pick up where you left off
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Download a structured read of your full picture as a PDF
              </span>
            </li>
          </ul>
          <div className="auth-side__badge">
            <div className="auth-side__badge-eyebrow">Educational tool</div>
            <p className="auth-side__badge-text">
              Finmagix is a thinking tool for your money — not a financial advisor. Inspired by CFP and CFA principles.
            </p>
          </div>
        </>
      }
      footerDisclosure={
        <>
          <strong>Finmagix</strong> is an educational financial-wellness platform — not a financial advisor, fiduciary, broker, or insurance agent. Inspired by CFP Board and CFA Institute frameworks; not certified by either. For educational purposes only.
        </>
      }
    >
      <h1 className="auth-h1">Welcome back</h1>
      <p className="auth-sub auth-sub--tight">
        Sign in to your Finmagix account
      </p>

      {/* Google OAuth — hands off to lite where the OAuth flow lives. */}
      <a href={LITE_LOGIN_URL} className="auth-oauth">
        <GoogleIcon size={18} />
        Continue with Google
      </a>

      <div className="auth-divider">
        <span>or sign in with email</span>
      </div>

      {/* Email + password form. Native HTML POST to lite's /login.
          See header comment for cross-domain submission notes. */}
      <form className="auth-form" action={LITE_LOGIN_URL} method="POST">
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

        <div className="auth-field">
          <div className="auth-label-row">
            <label className="auth-label" htmlFor="password">
              Password
            </label>
            <a
              href={`${LITE_LOGIN_URL}?reset=1`}
              className="auth-forgot"
            >
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="auth-input"
            required
          />
        </div>

        <button type="submit" className="auth-button auth-button--primary">
          Sign in
          <ArrowRightIcon size={16} />
        </button>

        <p className="auth-alt-link">
          Don&apos;t have an account?
          <Link href="/sign-up">
            Create one free
            <ArrowRightIcon size={14} />
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
