// Home empathy band — "Who this is for."
// $250k + CFP framing per founder decision (May 2026) — the explicit
// competitive frame ships, not the softer "advisor on retainer" version.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 section 2 + prototype's home.jsx
// Empathy component (TWEAK_DEFAULTS sets empathy_competitive="explicit").

export default function EmpathyBand() {
  return (
    <section className="empathy section--tight">
      <div className="wrap empathy__inner">
        <div className="empathy__left">
          <div className="eyebrow empathy__eyebrow">Who this is for</div>
        </div>
        <div className="empathy__copy">
          <p>
            Until now, getting this kind of structured financial thinking meant having{" "}
            <strong>$250,000 in investable assets and a Certified Financial Planner on retainer</strong>. Most of us don&apos;t. Most of us are working two jobs, raising kids, looking after parents, and quietly avoiding the money conversation because every previous attempt felt humiliating.
          </p>
          <p>
            Finmagix is built for the rest of us — the{" "}
            <strong>85% of American adults</strong> the financial industry has skipped over. Same rigor. Plain language.{" "}
            <span className="you-decide">You do the deciding.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
