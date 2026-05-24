// Sign up — full landing page with branded shell + email-only form.
//
// Replaces the brief redirect-interstitial. Per founder direction:
// "redesign" — full prototype-style auth experience on marketing
// site, while keeping the real auth (password / magic-link) on
// lite.finmagix.com where the auth backend actually lives.
//
// See sign-in/page.tsx for the architecture rationale (email-only
// form, native HTML GET to lite, no password capture on marketing).

import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Start free",
  description:
    "Create your Finmagix account. About three minutes. No card. Skip what you want.",
};

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function SignUpPage() {
  return (
    <AuthShell
      sidePanel={
        <>
          <div className="auth-side__eyebrow">What happens today</div>
          <h2 className="auth-side__h2">
            Three small steps. Nothing demanding.
          </h2>
          <ul className="auth-side__list">
            <li className="auth-side__item">
              <span className="auth-side__num">01</span>
              <div className="auth-side__item-text">
                <strong className="auth-side__item-title">
                  Tell us a little.
                </strong>
                Up to ten short questions. About three minutes. Skip any you don&apos;t want to answer.
              </div>
            </li>
            <li className="auth-side__item">
              <span className="auth-side__num">02</span>
              <div className="auth-side__item-text">
                <strong className="auth-side__item-title">
                  We point you somewhere to start.
                </strong>
                Based on what you told us — never a sales pitch. You can ignore us.
              </div>
            </li>
            <li className="auth-side__item">
              <span className="auth-side__num">03</span>
              <div className="auth-side__item-text">
                <strong className="auth-side__item-title">
                  Run your first free module.
                </strong>
                Five to fifteen minutes. A structured read of one slice of your financial picture.
              </div>
            </li>
          </ul>
          <p className="auth-side__close">
            No card. No commitment. The Free tier stays Free for as long as you want.
          </p>
        </>
      }
      footerDisclosure={
        <>
          <strong>Finmagix</strong> is an educational financial-wellness platform — not a financial advisor, fiduciary, broker, or insurance agent. Inspired by CFP Board and CFA Institute frameworks; not certified by either. Subscriptions only — no commissions, no referral fees, no data sales.
        </>
      }
    >
      <div className="auth-eyebrow">Create your account</div>
      <h1 className="auth-h1">
        Let&apos;s start with the <span className="accent">easy part.</span>
      </h1>
      <p className="auth-sub">
        About three minutes. No card. Skip what you want.
      </p>

      <form className="auth-form" action={LITE_SIGNUP_URL} method="GET">
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
          You&apos;ll create your password on the next screen.
        </p>

        <p className="auth-alt-link">
          Already with us?
          <Link href="/sign-in">
            Sign in
            <ArrowRightIcon size={14} />
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
