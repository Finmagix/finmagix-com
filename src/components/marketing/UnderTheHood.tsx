// Home "Under the hood" — engine transparency section.
//
// COMPLIANCE-SENSITIVE. Read docs/CLAUDE_CODE_HANDOFF.md "Compliance check"
// caveat before editing this file. Founder decision (May 2026) selected
// Option B over the stricter Option A (no AI mention) and the rejected
// Option C (AI-led hero).
//
// Option B rules (verified by chat-side gate before merge):
//   1. H2 contains NO "AI" / "intelligent" / "smart" terms — AI lives in
//      body copy only. (This file: H2 is "The engine behind the modules.")
//   2. Section is descriptive, not directive (no "you should ...").
//   3. No "personalized" / "tailored" claims — wording is "grounded in
//      your actual situation," not "personalized for you."
//   4. The section SUPPORTS the home's positioning (CFP-coverage + plain
//      language + you-decide); it does not lead.
//
// The dark forest-green band is a deliberate visual moment for the rigor
// claim. The italic emphasis "the modules" pulls the eye to the structure,
// not the AI underneath it.

const bullets = [
  "Twelve areas of your financial life, one platform",
  "AI-assisted analysis grounded in your actual situation",
  "Trade-offs laid out clearly — the deciding stays with you",
] as const;

export default function UnderTheHood() {
  return (
    <section className="section" data-screen-label="under-the-hood">
      <div className="wrap">
        <div className="engine">
          <div className="engine__layout">
            <div className="engine__left">
              <div className="eyebrow" style={{ color: "#B7C9B8" }}>
                Under the hood
              </div>
              <h2 className="engine__title" style={{ marginTop: 20 }}>
                The engine behind <em>the modules.</em>
              </h2>
              <p className="engine__lede" style={{ marginTop: 24 }}>
                A frontier AI does the analysis work. CFP and CFA advisors wrote the rules it has to follow. You get the structured thinking of a planner without the $250,000 minimum.
              </p>
            </div>

            <ul className="engine__bullets">
              {bullets.map((text, i) => (
                <li key={i} className="engine__bullet">
                  <span className="engine__bullet-num">0{i + 1}</span>
                  <span className="engine__bullet-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
