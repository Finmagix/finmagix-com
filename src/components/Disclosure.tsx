// Persistent compliance disclosure. Per docs/CLAUDE_CODE_HANDOFF.md
// "Done criteria" — must appear on every page via the shared layout,
// not added per-page. The grep verification (`<Disclosure` in shared
// chrome) finds this component used inside Footer.tsx, which is
// mounted once in src/app/layout.tsx.
//
// Driven by strategy.md Part 5.8 and CFP/CFA Principle 6 (clear,
// accurate, balanced communication). Wording sourced from the
// prototype's components.jsx Footer.
//
// The `variant` prop is forward-looking for future surfaces
// (e.g., under-analysis disclosures inside modules); only "footer"
// is implemented in Session 01.

type Variant = "footer";

export default function Disclosure({ variant = "footer" }: { variant?: Variant }) {
  if (variant === "footer") {
    return (
      <p className="footer__disclosure">
        Finmagix is a thinking tool, not a financial advisor. Inspired by CFP Board and CFA Institute principles; not certified by either. For educational purposes only.
      </p>
    );
  }
  return null;
}
