// Home closing CTA band — two-column split layout (copy + CTA left,
// 4×3 module-tile grid right). On desktop, hovering or keyboard-
// focusing a tile flips it on the Y axis to reveal the module name.
// On touch / non-hover devices, the name renders as a static label
// below each tile (no flip — no "hover" instructions to touch users).
//
// REBUILD (2026-05-25, post-Production deploy): replaces the
// centered single-column band that left too much empty vertical
// space. Same compliance posture as before:
//   - Single CTA (Try the free checkup). Tiles are display-only —
//     no twelve competing link targets.
//   - No prices on tiles. Module name only on the back face.
//   - No directive language.
//
// Module data sourced from src/lib/modules.ts (the canonical 12-
// module catalog, created in this same commit). Future home-section
// changes that need module data should import MODULES from there.
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

import { ArrowRightIcon, IconByName } from "../Icons";
import { MODULES } from "@/lib/modules";

const LITE_SIGNUP_URL = "https://lite.finmagix.com/signup";

export default function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="wrap">
        <div className="closing-cta__grid">
          {/* Left column — headline + CTA */}
          <div className="closing-cta__copy">
            <h2 className="t-section-title closing-cta__title">
              Your whole financial life,{" "}
              <em>covered.</em>
            </h2>
            <p className="closing-cta__body">
              Twelve modules, two of them free forever.{" "}
              {/* Responsive copy swap: "Hover any tile to see what
                  it covers" on devices with a fine pointer + hover;
                  "Each tile is one part of your financial life." on
                  touch / non-hover devices. */}
              <span className="closing-cta__hover-copy">
                Hover any tile to see what it covers
              </span>
              <span className="closing-cta__touch-copy">
                Each tile is one part of your financial life
              </span>
              {" "}— start with a checkup and explore the rest whenever you&apos;re ready.
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
