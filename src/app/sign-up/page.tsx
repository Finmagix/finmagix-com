// Sign up — full landing page mirroring lite.finmagix.com/signup.
//
// REBUILD (2026-05-24, post-founder-review): the previous version
// shipped a marketing-style email-only handoff form. Founder
// direction: mirror lite's exact field set (Google OAuth + Full
// name + Email + Password + Confirm password + Terms checkbox +
// Beta access code + Sign Up), styled in the Finmagix Quiet Index
// design system.
//
// See sign-in/page.tsx for full architecture notes — same submission
// pattern (native HTML POST to lite's URL, OAuth handoff to lite's
// own button) and same compliance treatment of side-panel copy.

import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import { ArrowRightIcon, GoogleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Start free",
  description:
    "Create your Finmagix account. Free to start. No credit card required. Your first module takes about five minutes.",
};

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function SignUpPage() {
  return (
    <AuthShell
      sidePanel={
        <>
          <h2 className="auth-side__h2">
            Start your financial thinking today.
          </h2>
          <p className="auth-side__sub">
            Free to start. No credit card required. Your first module takes about five minutes.
          </p>
          <ul className="auth-side__list">
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Financial Health Checkup — free, always included
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Your Quiet Index — a starting picture across all twelve modules
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Twelve modules covering retirement, tax, debt, protection, and more
              </span>
            </li>
            <li className="auth-side__item">
              <div className="auth-side__bullet" />
              <span className="auth-side__item-text">
                Plain-language reads — no jargon, no scolding
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
          <strong>Finmagix</strong> is an educational financial-wellness platform — not a financial advisor, fiduciary, broker, or insurance agent. Inspired by CFP Board and CFA Institute frameworks; not certified by either. Subscriptions only — no commissions, no referral fees, no data sales.
        </>
      }
    >
      <h1 className="auth-h1">Create your free account</h1>
      <p className="auth-sub auth-sub--tight">
        Get started with your financial-thinking journey
      </p>

      {/* Google OAuth — hands off to lite where the OAuth flow lives. */}
      <a href={LITE_SIGNUP_URL} className="auth-oauth">
        <GoogleIcon size={18} />
        Sign up with Google
      </a>

      <div className="auth-divider">
        <span>or sign up with email</span>
      </div>

      {/* Full signup form. Native HTML POST to lite's /signup. */}
      <form className="auth-form" action={LITE_SIGNUP_URL} method="POST">
        <div className="auth-field">
          <label className="auth-label" htmlFor="fullName">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className="auth-input"
            placeholder="Alex Rivera"
            required
            autoFocus
          />
        </div>

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
          />
        </div>

        {/* Password + confirm — side-by-side on desktop, stacked under 480px. */}
        <div className="auth-fields-row">
          <div className="auth-field">
            <label className="auth-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              className="auth-input"
              placeholder="Min. 8 characters"
              required
            />
          </div>
          <div className="auth-field">
            <label className="auth-label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              minLength={8}
              className="auth-input"
              required
            />
          </div>
        </div>

        {/* Terms agreement — required. Links go to our own /terms and
            /privacy-and-security pages, not lite's. */}
        <label className="auth-checkbox" htmlFor="termsAgree">
          <input
            id="termsAgree"
            name="termsAgree"
            type="checkbox"
            required
          />
          <span>
            I have read and agree to the{" "}
            <Link href="/terms">Terms of Use</Link> and{" "}
            <Link href="/privacy-and-security">Privacy Policy</Link>, including the disclaimers stating that Finmagix does not provide financial, legal, or investment advice.
          </span>
        </label>

        <div className="auth-field">
          <label className="auth-label" htmlFor="betaCode">
            Beta access code
          </label>
          <input
            id="betaCode"
            name="betaCode"
            type="text"
            autoComplete="off"
            className="auth-input"
            placeholder="E.G. BETA2026"
          />
        </div>

        <button type="submit" className="auth-button auth-button--primary">
          Sign up
          <ArrowRightIcon size={16} />
        </button>

        <p className="auth-alt-link">
          Already have an account?
          <Link href="/sign-in">
            Sign in
            <ArrowRightIcon size={14} />
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
