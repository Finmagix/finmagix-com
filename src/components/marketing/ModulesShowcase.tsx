// Home modules showcase — two-column split layout (copy + CTA left,
// 4×3 module-tile grid right). On desktop, hovering or keyboard-
// focusing a tile flips it on the Y axis to reveal the module name.
// On touch / non-hover devices, the name renders as a static label
// below each tile (no flip — no "hover" instructions to touch users).
//
// HISTORY:
//   2026-05-25 (this commit): renamed from ClosingCTA.tsx and moved
//     up the page to sit just above HowItWorks. The previous standalone
//     "Twelve sides of your financial life" ModulesPreview section was
//     removed in the same commit — this section now plays both roles
//     (modules showcase + inline CTA). New supporting copy adopted from
//     the old ModulesPreview sub-text to match the new role.
//   2026-05-25 (earlier same day): originally built as the home closing
//     band with the headline "Your whole financial life, covered." plus
//     a 12-tile module grid that flips on hover. The headline + grid +
//     CTA button + trust line all carry over unchanged; only the
//     supporting paragraph changed in this move.
//
// Module data sourced from src/lib/modules.ts (the canonical 12-module
// catalog). Future home-section changes that need module data should
// import MODULES from there.
//
// Compliance (Part 4):
//   - Tiles are display-only — single CTA on the section (the green
//     button). No twelve competing link targets.
//   - No prices on tiles. Module name only on the back face.
//   - No directive language.
//
// Accessibility (engineering-standards §4.5):
//   - Each tile is keyboard-reachable (tabindex="0").
//   - Each tile has aria-label="<module title>" so screen readers
//     announce the name without depending on the visual flip.
//   - Icons are aria-hidden (decorative; name is conveyed via the
//     aria-label and the visible static label on touch).
//   - Focus state is visibly indicated (flip on focus-within +
//     focus ring via :focus-visible).
//   - Reduced-motion respected: flip is wrapped in @media
//     (prefers-reduced-motion: no-preference) in globals.css; users
//     who prefer reduced motion get an instant cross-fade.
//
// CSS class names (.closing-cta, .closing-cta__grid, etc.) are
// preserved despite the component rename to minimize diff churn —
// they're scoped to globals.css and not user-visible. The comment on
// the CSS block notes the historical name + the new section role.

import { ArrowRightIcon, IconByName } from "../Icons";
import { MODULES } from "@/lib/modules";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function ModulesShowcase() {
  return (
    <section className="closing-cta" id="modules">
      <div className="wrap">
        <div className="closing-cta__grid">
          {/* Left column — headline + supporting copy + CTA */}
          <div className="closing-cta__copy">
            <h2 className="t-section-title closing-cta__title">
              Your whole financial life,{" "}
              <em>covered.</em>
            </h2>
            <p className="closing-cta__body">
              Each module is a structured way of thinking about one area. Start with whichever feels most relevant — or follow the suggestions we surface after the intake. Every module in every tier is visible. No paywalls — just clear, plain-language thinking.
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
              <span>Cancel any time</span>
            </div>
          </div>

          {/* Right column — 4×3 module-tile grid */}
          <ul
            className="closing-cta__tiles"
            aria-label="The twelve Finmagix modules"
          >
            {MODULES.map((m) => (
              <li
                key={m.id}
                className="closing-cta__tile"
                tabIndex={0}
                aria-label={m.title}
              >
                <div className="closing-cta__tile-inner">
                  <div className="closing-cta__tile-face closing-cta__tile-face--front">
                    <IconByName name={m.icon} size={28} />
                  </div>
                  <div
                    className="closing-cta__tile-face closing-cta__tile-face--back"
                    aria-hidden="true"
                  >
                    <span>{m.title}</span>
                  </div>
                </div>
                {/* Static name label — shown on touch / non-hover
                    devices (CSS-gated via @media (hover: none)).
                    Hidden on desktop where the flip is the reveal. */}
                <span className="closing-cta__tile-label" aria-hidden="true">
                  {m.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
