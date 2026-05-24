// Home proof strip — 4 short proof points sitting immediately below the
// hero. Replaces what was EmpathyBand + ValueProps (3 columns) in
// Session 01. See founder mini-brief 2026-05-24 and the updated
// session report Compliance notes.
//
// COMPLIANCE-SENSITIVE — proof point 3 ("AI by design") is a deliberate
// founder override of strategy.md Part 7 (home page does not lead with
// AI). The override is recorded in docs/tech-debt-marketing.md and the
// session report. The "you make every call" clause on that proof point
// is load-bearing for the no-directive compliance posture and must stay.
//
// Other Part 4 lines held:
//   - "Built for the 85%" carries the wealth-gap framing without
//     claiming financial outcomes.
//   - "CFP & CFA principles" is the approved framing (substitution for
//     forbidden "CFP-grade" / "CFP-certified").
//   - "Understanding, not tracking" / "real clarity" stay educational —
//     no "improve your finances" / "save you money" claims.

import {
  UsersIcon,
  ScrollTextIcon,
  SparklesIcon,
  CompassIcon,
} from "../Icons";

const proofs = [
  {
    title: "Built for the 85%",
    body: "For people who plan without an advisor — or only see one now and then.",
    Icon: UsersIcon,
  },
  {
    title: "CFP & CFA principles",
    body: "Twelve modules covering every area of your financial life.",
    Icon: ScrollTextIcon,
  },
  {
    title: "AI by design",
    body: "Modern technology does the heavy lifting; you make every call.",
    Icon: SparklesIcon,
  },
  {
    title: "Understanding, not tracking",
    body: "A wellness platform built for real clarity — not another budgeting app.",
    Icon: CompassIcon,
  },
] as const;

export default function ProofStrip() {
  return (
    <section className="proof-strip section--tight">
      <div className="wrap">
        <div className="proof-strip__grid">
          {proofs.map((p) => (
            <div className="proof-item" key={p.title}>
              <div className="proof-item__icon" aria-hidden="true">
                <p.Icon size={22} />
              </div>
              <div className="proof-item__title">{p.title}</div>
              <p className="proof-item__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
