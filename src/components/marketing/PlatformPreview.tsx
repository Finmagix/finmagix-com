// Home "A peek inside" — dashboard screenshot below HowItWorks.
//
// Added 2026-05-24 per founder mini-brief. Partially reverses the
// Session 01 design decision to remove dashboard imagery from the
// home (which was driven by the OLD WS-1 mockup's Part 4 violations:
// "$6,200/yr Tax savings found" pill + "Action available" pill).
// The new screenshot ships those compliance fixes:
//   - No dollar-figure pills
//   - No "Action available" pill
//   - Mid-page, below the explanatory arc (not the lead)
//   - Framed observationally ("here's what it looks like"), not
//     promotionally ("here's what Finmagix will improve for you")
//
// Surrounding copy stays descriptive, not directive. Caption is
// serif italic per the visual language we use for editorial moments
// (testimonial em, value-prop emphasis).
//
// Source: prototype/site/product-quiet-index.png (founder-supplied
// May 2026; same image planned for /platform Step 02 build).

import Image from "next/image";

export default function PlatformPreview() {
  return (
    <section className="section platform-preview">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">A peek inside</div>
            <h2
              className="t-section-title section-head__title"
              style={{ marginTop: 16 }}
            >
              What it looks like.
            </h2>
          </div>
          <p className="t-lede section-head__sub">
            A glance at the dashboard once you&apos;ve worked through a couple of modules — your Quiet Index, the scores across what you&apos;ve explored, and the cross-module summary one click away.
          </p>
        </div>

        <figure className="platform-preview__figure">
          <div className="browser-chrome">
            <div className="browser-chrome__bar" aria-hidden="true">
              <span className="browser-chrome__dots">
                <span className="browser-chrome__dot"></span>
                <span className="browser-chrome__dot"></span>
                <span className="browser-chrome__dot"></span>
              </span>
              <span className="browser-chrome__url">
                lite.finmagix.com
              </span>
              <span className="browser-chrome__spacer" aria-hidden="true"></span>
            </div>
            <div className="browser-chrome__body">
              <Image
                src="/product/quiet-index.png"
                alt="The Finmagix dashboard, headed 'Welcome back, Dan.', showing a Quiet Index summary (11 of 12 modules explored, scores averaging 44 across a 10 to 90 range), a horizontal bar chart of module scores, and a 'Get your summary' card with a Generate button."
                width={870}
                height={657}
                sizes="(max-width: 920px) 100vw, 960px"
              />
            </div>
          </div>
          <figcaption className="platform-preview__caption">
            Your Quiet Index — the dashboard you land on once you&apos;ve worked through a few modules.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
