// Home closing CTA — centered, restated value, single primary CTA.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 section 9.
//
// Compliance notes:
//   - "Cancel any paid tier any time, no questions" — non-directive
//     reassurance per Part 7 voice.
//   - "About five minutes from sign-up to your first useful look" replaces
//     any "get started in seconds" urgency.
//   - Two free modules (Health Checkup + Stress Test) explicitly named —
//     matches strategy.md Part 5.3 tier composition.

import { ArrowRightIcon } from "../Icons";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="wrap">
        <h2 className="t-section-title closing-cta__title">
          Your complete financial picture, free to start.
        </h2>
        <p className="closing-cta__body">
          The Financial Health Checkup and Financial Stress Test are always free. About five minutes from sign-up to your first useful look. No credit card. Cancel any paid tier any time, no questions.
        </p>
        <div className="closing-cta__cta">
          <a
            href={LITE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            Try the free checkup
            <ArrowRightIcon size={16} />
          </a>
        </div>
        <div className="closing-cta__trust">
          <span>Free to start</span> · <span>No credit card</span> ·{" "}
          <span>You can cancel paid tiers any time</span>
        </div>
      </div>
    </section>
  );
}
