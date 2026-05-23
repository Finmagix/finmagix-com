# Engineering handoff — finmagix.com marketing site redesign

**Audience:** the Claude Code session that will rebuild the marketing site at `finmagix.com` (separate from the in-app surface at `lite.finmagix.com`).
**Format:** scope brief per `engineering-standards.md` § 2.1. Founder approves before implementation begins.
**Source-of-truth documents (override this file when in conflict):**
- `docs/strategy.md` (v3.1) — Parts 1, 4, 6, 7, 8 are editorial direction.
- `docs/cfp-cfa-principles.md` — disclosure obligations, eight principles.
- `docs/engineering-standards.md` — § 2 (scope brief), § 4 (forbidden patterns), § 5 (copy review gate).
- `docs/tech-debt.md` — columns and patterns to design *around*, not toward.
- The **Finmagix Marketing Site Brief** (the long document beginning *"# Finmagix.com Redesign — Brief for Claude Design"*).
- The **Finmagix Lite design system** (in this repo: `/finmagix-lite-design-system/`).

---

## Goal

Replace the live finmagix.com marketing site with a redesigned version that:

1. **Inherits the Finmagix Lite design system 1:1.** Same tokens, same fonts, same component primitives. A user clicking "Try the free checkup" should feel like they walked through a door, not changed buildings.
2. **Reuses the *content* of every existing finmagix.com page** (Pricing, Demo, Partners, About, Advisors, Contact, Blog, Privacy, Terms, Disclaimer, Security). The IA is preserved per § 4 of the marketing brief; copy is rewritten only where the substitution table (§ 3.2) or Part 4 compliance lines require it. The **Home page is the one exception** — it is fully rebuilt per the marketing brief § 5, replacing the existing finmagix.com home.
3. **Removes every Part 4 violation** from the current site (Appendix A of the marketing brief).
4. **Adds the persistent disclosure footer** to every page.

After this session: the marketing site ships at finmagix.com with all 11 pages in Section 4.1 of the brief rendered against Finmagix Lite tokens, every Part 4 violation gone, the home page rebuilt, and other pages restyled with their original content carried across through the design system.

## Strategy anchor

- `strategy.md` Part 1 — who we serve (avoidant adult, three minutes to prove worth).
- `strategy.md` Part 4 — the line we will not cross. **The hardest constraint in this session.** No directive language, no CFP-equivalence claims, no false precision on numbers, no streaks/XP/peer-comparison, no automated-execution promises. The current finmagix.com has multiple violations (Appendix A) — they go.
- `strategy.md` Part 5.3 — "no paywalls, only pricing." Every module visible to every visitor with sample output. Pricing page must reflect this; module cards must not show locks.
- `strategy.md` Part 5.8 — How Finmagix makes money. **Reframed in May 2026:** the standalone `/how-finmagix-makes-money` page was removed at founder direction. The subscriptions-only commitment is now stated inline on About (§ 03) and on the Platform page (§ "What we won't do"). The substance of Part 5.8 is preserved; the route is not.
- `strategy.md` Part 6 — what we will not build. No gamification surfaces. The redesign must not introduce any. The current `/social-security` card on the existing site uses "Worth up to $180,000 in lifetime difference" — that's exactly the kind of false-precision number Part 6 forbids. It is removed (or surfaced with full assumptions).
- `strategy.md` Part 7 — voice. The substitution table in § 3.2 of the marketing brief is the enforced microcopy gate. Apply across every page.
- `strategy.md` Part 8 — what good looks like. The marketing voice has slightly more latitude (per § 3 of the brief), but the compliance posture is identical.
- `cfp-cfa-principles.md` § 6.6 — clear, accurate, balanced communication. Disclosure obligation drives the persistent footer.
- `cfp-cfa-principles.md` § 6.7 — data handling. Drives the plain-language summaries on `/privacy` and `/security`.

## Tech-debt anchor

- The current marketing site links **"Security" → `/privacy`**. That's a routing bug. Fix to `/security`.
- The current home page **leads with "AI-powered financial planning"** — directly violates the strategy's "AI is infrastructure, not the pitch" line. Removed.
- The current home page uses a **financial-score dashboard mockup as the hero**. Removed entirely; replaced with a photograph per § 7 of the brief.
- The current `/social-security` card text **"Worth up to $180,000 in lifetime difference"** is false-precision without disclosed assumptions. Either remove the figure or attach the assumptions visibly. Recommended: remove.
- The current `/pricing` page **hides paid modules behind paywalls**. Per strategy Part 5.3, every module must be visible. Restructure so all twelve modules appear on `/pricing` (or the modules anchor on `/`) with tier badges; only the dollar amounts gate.
- **No persistent disclosure on the current site.** Add to every page's footer per § 4.2 of the brief.

This session creates new tech-debt items (acknowledge, do not resolve here):
- Photography is placeholder until the shoot lands. The hero photograph slot per § 7 of the brief is filled with a representative stock image during this session; replace with a real shoot before public launch.
- Legal page bodies are summaries + placeholders for counsel-reviewed legal text. **Do not ship the marketing site publicly until counsel has approved the four legal pages.**
- The recommended hero H1 ("What a CFP would cover. Without the CFP.") is **pending counsel review** per § 5.1 of the marketing brief. Ship with the founder-approved fallback if counsel pushes back. The fallback ladder is encoded in the Tweaks panel of the prototype.

## Compliance check

This is the most important section of the document for this session. The marketing site is the surface where Part 4 violations cost the most.

**Part 4 lines touched:**

> **Important caveat on the "Under the hood" home-page section.** The marketing brief (§ 3.3) and `strategy.md` Part 4 both forbid leading with AI as the pitch. The section sits *mid-page*, not in the hero, and names AI honestly inside the body copy without putting it in the H2. The hero eyebrow remains the CFP-frameworks framing; the hero H1 contains no AI mention. Founder decision (May 2026) selected this "Option B" treatment over both a stricter "no AI on the home page at all" version (Option A) and an "AI-led hero" version (Option C — which was rejected because it would have required rolling back Appendix A of the marketing brief and updating `strategy.md` Part 4). Copy in the section must continue to pass these tests:
> - Does the H2 contain the word "AI" or "intelligent" or "smart"? (Should fail. AI lives in body copy only.)
> - Does it tell the user what to do? (Should fail. Section is descriptive, not directive.)
> - Does it claim "personalized" or "tailored" anything? (Should fail. Wording is "grounded in your actual situation," not "personalized for you.")
> - Would removing the section change the *positioning* of the home page? (Should fail. The positioning is CFP-coverage + plain language + you-decide. The engine section supports the third claim, not a fourth.)

| Forbidden | Where it appears on current finmagix.com | Replacement |
|---|---|---|
| "CFP-standard," "CFP-grade" | Home hero subhead: *"12 CFP-standard planning modules"*; stat card: *"CFP Standard analysis"* | "Inspired by CFP frameworks" / value-prop: *"CFP-inspired structure. Plain-language voice."* |
| "AI-powered" as the pitch | Home hero eyebrow: *"AI-powered financial planning"* | Eyebrow per § 5.1 of brief: *"Inspired by CFP and CFA planning frameworks"* (or the alternative chosen at counsel review) |
| "Personalized roadmap" / "optimized plan" | Home and pricing copy | "Modules to focus on" / "structured thinking" |
| "Next steps:" directive lists | Anywhere it shows up | "Things worth thinking about:" |
| "Get started in seconds" urgency | Home CTA framing | "About five minutes from sign-up to a first useful look" |
| Dashboard screenshot with "Tax savings found $6,200/yr" pill, "Action available" pill | Home hero | The dashboard mockup is removed entirely. The hero shows a photograph per § 7. |
| "$180,000 in lifetime difference" without assumptions | Social Security module card | Soften to "the trade-offs, in plain language" — or attach assumptions in a tooltip if the number stays |
| "Pro tier required" lock framing on modules | Pricing / Modules cards | Tier badge only ("Pro"). No lock icon. Per strategy Part 5.3. |

**Eight principles touched:**
- Principle 6 (clear, accurate, balanced communication) — the marketing-site disclosure footer is the first-class surface for this. It must appear on every page including legal pages.
- Principle 8 (data handling) — drives the plain-language summary at the top of `/privacy` and the existence of `/security` as a separate page.

## Files expected to change

Assuming the marketing site lives in its own Next.js app (likely at `apps/marketing/` if monorepo, or `marketing/` in a single repo — confirm path before starting):

```
# Foundation
marketing/app/layout.tsx                          EDIT — import Fraunces + DM Sans + Geist Mono via next/font/google; set <html lang>; mount persistent disclosure component
marketing/app/globals.css                         REWRITE — replace whatever exists with the contents of finmagix-lite-design-system/colors_and_type.css; KEEP iOS input-zoom fix + min 44px tap targets
marketing/tailwind.config.ts                      REWRITE — replace theme.extend with finmagix-lite-design-system/tailwind-config-snippet.ts contents

# Shared chrome (used by every page)
marketing/components/NavBar.tsx                   NEW or REWRITE — top nav per § 4.2 of brief; primary CTA "Try the free checkup" → lite.finmagix.com/signup; hamburger ≤ 920px
marketing/components/Footer.tsx                   NEW or REWRITE — three columns + persistent disclosure + How-we-make-money link per § 4.2 of brief
marketing/components/Disclosure.tsx               NEW or REUSE from lite design system — footer-disclosure variant, appears under every page's footer

# Home page (FULL REBUILD per § 5 of brief)
marketing/app/page.tsx                            REWRITE — see Home section below
marketing/components/marketing/Hero.tsx           NEW
marketing/components/marketing/EmpathyBand.tsx    NEW
marketing/components/marketing/ValueProps.tsx     NEW
marketing/components/marketing/HowItWorks.tsx    NEW
marketing/components/marketing/UnderTheHood.tsx   NEW — engine transparency section; full-bleed dark forest-green card; see § 5 of brief and Compliance check below
marketing/components/marketing/Testimonial.tsx    NEW — Allen Mueller, CFA / 7 Saturdays Financial; portrait + serif pull quote; see § 6 of home-page direction
marketing/components/marketing/ModulesPreview.tsx NEW — featured-3 layout (Option A in brief § 5.4)
marketing/components/marketing/ModuleCard.tsx     NEW or import from lite — icon + title + blurb + tier badge; no price; no lock
marketing/components/marketing/PartnerStrip.tsx   NEW
marketing/components/marketing/ClosingCTA.tsx     NEW
marketing/public/hero/family.jpg                  NEW asset — porch family photo (real, supplied), 880×395 cropped from source
marketing/public/testimonials/allen-mueller.jpg   NEW asset — supplied portrait, 600×600 cropped square
marketing/public/advisors/william-tincup.jpg      NEW asset — supplied portrait, 600×600 cropped square
marketing/public/platform/quiet-index.png         NEW asset — supplied dashboard capture for /platform step 02 (source: site/product-quiet-index.png in the prototype)
marketing/public/platform/fitness-overview.png    NEW asset — supplied six-dimension charts for /platform step 03 (source: site/product-fitness-overview.png)
marketing/public/platform/finmagicians-read.png   NEW asset — supplied Finmagician's-read capture for /platform step 04 (source: site/product-finmagicians-read.png)
marketing/public/platform/bigger-picture.png      NEW asset — supplied cross-module summary for /platform step 05 (source: site/product-bigger-picture.png)
marketing/public/finmagix-logo.svg                NEW asset — primary wordmark (source: site/finmagix-logo.svg). Used for OG image, partner deck handoff.
marketing/public/finmagix-logo-inverse.svg        NEW asset — inverse wordmark for dark surfaces (source: site/finmagix-logo-inverse.svg)
marketing/app/favicon.svg                         NEW asset — favicon (source: site/favicon.svg); linked from <head> in marketing/app/layout.tsx

# Other pages (RESTYLE — content largely preserved, voice + Part 4 fixes applied, design system swapped in)
marketing/app/pricing/page.tsx                    REWRITE — three tier cards + FAQ; ALL TWELVE MODULES VISIBLE PER STRATEGY 5.3; "no paywalls, only pricing" line
marketing/app/platform/page.tsx                   NEW — "Finmagix Platform" page (replaces the old Interactive Demo). Long-form narrative page driven by Our_Platform.docx (see § 6.2 below). Keep /demo as a permanent 301 alias.
marketing/app/partners/page.tsx                   REWRITE — four sections with anchors (#credit-unions #community-banks #employers #advisors); preserve current per-partner pricing unless founder updates. All section CTAs say "Talk to us" and route to /contact (with optional deep-link hash to pre-select institution).
marketing/app/about/page.tsx                      REWRITE — long-form narrative split into **4 numbered sections + a mission close** (Why we built it · What we believe · How Finmagix is different · Who's behind it · Mission). Two earlier sections (How we hold the line · How we make money) were removed in May 2026; see § 6.5. Top-nav and footer label: "About us".
marketing/app/advisors/page.tsx                   REWRITE — feature-card layout. William Tincup is the named advisor as of May 2026 (workplace/HR/talent-acquisition analyst); profile card with portrait, credentials (MBA, SHRM-SCP, SPHR), role line, and a 4-paragraph bio. See § 6.6.
marketing/app/contact/page.tsx                    REWRITE — partners-only contact: drop the general /hello@/ email; keep partners@finmagix.com; subhead is "We read every message. We respond to most within two days. Love to hear from you and discuss how we can partner with you." Form includes a new **Institution dropdown** (Employers · Benefits Providers · Credit Unions · Community Banks · Non For Profits · Others); URL hash (`#employers` etc.) deep-links and pre-selects.
marketing/app/privacy-and-security/page.tsx       NEW — combined Privacy and Security Policy. /privacy and /security both redirect to this canonical URL. Footer link is "Privacy & Security Policy" (single combined link).
marketing/app/terms/page.tsx                      REWRITE — full Terms of Service from Finmagix_Lite_Beta_Legal_Documents.docx; plain-language summary + 19 numbered sections; structured TOC sidebar.
marketing/app/disclaimer/page.tsx                 REWRITE — full Educational and Financial Information Disclaimer from the same docx; 16 numbered sections; explicit "Finmagix is not a financial advisor, fiduciary, tax preparer, broker, or insurance agent."

# Pages REMOVED (per founder direction, May 2026)
#   /how-finmagix-makes-money   — removed; subscriptions-only framing now lives inside About § 03 (*"Pricing is static and transparent"*) and on the Platform page
#   /blog                       — removed for now; will return later (data in BLOG_POSTS preserved for restore)
#   /security                   — merged into /privacy-and-security; kept as a redirect
#   /demo                       — replaced by /platform; kept as a redirect

# Telemetry / SEO (light touch)
marketing/app/sitemap.ts                          UPDATE — add the 9 live pages: / · /platform · /pricing · /partners · /about · /advisors · /contact · /privacy-and-security · /terms · /disclaimer. Exclude /demo, /security, /blog, /how-finmagix-makes-money.
marketing/app/robots.ts                           CHECK — sane defaults; allow crawl
(open-graph image)                                NEW — neutral OG card; not a dashboard screenshot
```

## Visual identity — logo (May 2026)

The Finmagix wordmark was redesigned in May 2026 following a 20-direction exploration. **Direction 04 — period mark — was selected.**

**Wordmark spec:**
- Word: `Finmagix.` (one word, sentence case, followed by a forest-green period)
- Typeface: Fraunces, weight 500–600, optical size 36–60 depending on size, letter-spacing -0.005em
- Colors: ink `#1F1A14` for the letters, `--accent-primary` (`#2C5A3E`) for the period
- The previous italic-green `magix` treatment (`Fin` + italic green `magix`) is **retired**. Do not reintroduce. Anywhere the old markup appears in production (header brand, footer brand, any duplicate elsewhere), replace it with the new pattern below.

**Production assets (carry over verbatim — these are the sources):**
- `site/finmagix-logo.svg` — primary wordmark, 600×160 viewBox, text-based, Fraunces referenced via embedded `@import`. For maximum portability across design tools, open this file in Illustrator / Figma and convert the text to outlines before handoff to partners.
- `site/finmagix-logo-inverse.svg` — same wordmark on dark backgrounds, cream letters + sage period.
- `site/favicon.svg` — 32×32 mark, serif `F` + forest-green dot. Falls back to Times New Roman / Georgia where Fraunces isn't installed (acceptable at favicon size).

**Header / footer pattern in code (Next.js):**

```tsx
// NavBar.tsx and Footer.tsx
<a href="/" aria-label="Finmagix home" className="nav__brand">
  Finmagix<span className="nav__brand--mark">.</span>
</a>
```

```css
.nav__brand        { font-family: var(--font-serif); font-weight: 600;
                     font-variation-settings: 'opsz' 36; letter-spacing: -0.01em;
                     color: var(--ink-primary); }
.nav__brand--mark  { color: var(--accent-primary); margin-left: 1px; font-weight: 600; }
```

The wordmark is **always rendered as live HTML text** in the header and footer — not as an `<img>`. This keeps it crisp at every zoom, accessible to screen readers and find-on-page, and trivial to recolor in dark sections (the period inherits `var(--accent-primary)`, which the dark band can rebind to sage if needed). The SVG files are for: favicon, OG image, partner-deck handoff, and anywhere outside the running page where the Fraunces webfont isn't loaded.

**Exploration file** (do not ship): the prototype's `/Finmagix Logo Options.html` is a 20-direction sketchbook with light + dark previews and SVG/PNG downloads per card. It exists only to record what was tried and why 04 was chosen.

## Production-state assumptions

- The marketing site is **a separate Next.js app** from the in-app surface. It does **not** import from `apps/lite` directly. Tokens, fonts, and component primitives are duplicated **by reference to the design system package**, not by reaching into the lite app's source. If the codebase doesn't currently package the design system, the cleanest move is to publish the design system as a `@finmagix/design-system` package and consume it from both apps. **In-session shortcut:** copy `colors_and_type.css`, the Tailwind snippet, and the named primitives (Button, Card, Badge, Disclosure, ModuleCard) into `marketing/components/ui/` and add a one-line tech-debt note that they should be deduplicated to a shared package after both surfaces are migrated.
- The marketing site **does not need authentication, Supabase, or any of the app stack**. It's a static-ish Next.js app: pages, components, a contact form posting to a transactional email service, an SEO config. Resist the temptation to import anything app-related.
- **Fraunces is loaded via `next/font/google`** with weights 400/500/600/700, alongside DM Sans (same weights) and Geist Mono (400/500/600).
- **`class-variance-authority`** is added if not present (variant management for Button/Badge/Card mirrors the lite app's pattern).
- The contact form posts to whichever email service the company already uses (likely Resend or Postmark — confirm). If none exists, skip the form and ship a `mailto:` link; do not introduce a new service in this session.

## Done criteria

- `npm run lint` and `npm run build` pass.
- Every page in § 4.1 of the marketing brief renders correctly at 380px, 768px, 1024px, and 1440px viewports.
- Lighthouse on `/` (mobile): performance ≥ 90, accessibility = 100, best-practices = 100, SEO ≥ 95.
- The persistent disclosure footer is present on **every** page (verify by grep: `<Disclosure variant="footer"` or equivalent appears in the shared layout, not per-page).
- Every Part 4 violation in Appendix A of the marketing brief has a code-search return of zero hits on:
  - `"CFP-standard"`, `"CFP Standard"`, `"CFP-grade"`
  - `"AI-powered financial planning"`
  - `"personalized roadmap"`
  - `"$180,000"` unaccompanied by an assumptions tooltip or footnote
  - `"Action available"`, `"Tax savings found"`
  - `"Get started in seconds"`
- `/privacy-and-security` exists and is the single canonical legal page for both privacy and security. `/privacy` and `/security` both 301 to it. Footer shows ONE link labeled "Privacy & Security Policy".
- `/platform` exists and is linked from BOTH the top nav and footer Product column. `/demo` 301s to it.
- `/blog` and `/how-finmagix-makes-money` do NOT exist (removed May 2026).
- The home page does **not** contain a dashboard screenshot, an "AI" badge, or a media-logo strip ("As seen in…") unless the logos are accurate and recent.
- Founder reads the home page out loud at conversational pace, and it lands. (Per § 11.3 of the brief — this is the actual test, not just a Lighthouse number.)
- Counsel reviews and approves the four legal pages (`/privacy`, `/terms`, `/disclaimer`, `/security`) before public launch. If counsel hasn't reviewed yet at end of session, ship behind a feature flag, not to production.
- Counsel reviews the home page H1 per § 5.1 of the brief. If pushback, fall back to the previously-approved headline; update both the brief and the implementation in the same PR.

## Out of scope

- **The app at `lite.finmagix.com`.** No changes to any in-app surface this session.
- **The bot prompt or classifier.** The marketing site does not host a chat widget per § 8.3 of the brief.
- **Authentication, account, dashboard, modules** — all in-app.
- **The design system itself.** This session *consumes* the design system; it does not modify it. If a token is missing for a marketing-only surface (e.g., a hero background color the lite app didn't define), add it **to the design system source** in a separate PR, not inline in the marketing repo.
- **Real photography.** Placeholder per § 7 of the brief is acceptable for this session; the actual shoot is a follow-up task tracked separately.
- **Counsel-supplied legal text.** This session ships summaries + structural placeholders for the full legal body. Counsel fills in the body in a follow-up PR before public launch.
- **The blog content stream itself.** This session ships the blog *index* and one example post layout. Editorial pieces are written separately per strategy § 9.2.

---

## Page-by-page: what to do with existing finmagix.com content

For each page below: the existing finmagix.com page is the starting point. Preserve structure where it works. Apply Finmagix Lite tokens. Replace forbidden copy per the substitution table.

### `/` — Home

**Rebuild from scratch per § 5 of the marketing brief.** The existing home is replaced wholesale. Do not preserve the existing hero, dashboard mockup, or stat cards. Do preserve nothing else from the existing home that isn't explicitly called out in § 5.

Sections (top to bottom):
1. **Hero** — eyebrow + H1 + sub-copy + primary CTA + secondary CTA + trust line + photograph (right column on desktop, below text on mobile). Headline currently set to: *"What a CFP would cover. Without the CFP."* — pending counsel review per § 5.1.
2. **Empathy band** — narrow band with light tier-recommended-surface fill; two paragraphs ending in *"You do the deciding."*. The $250k + CFP line stays per founder decision.
3. **Three value props** — *complete picture / CFP-inspired structure / you decide always.*
4. **How it works** — three numbered steps, "From sign-up to your first useful look in under twenty minutes."
5. **Under the hood (engine transparency)** — full-bleed dark forest-green card. Heading: *"The engine behind the modules."* Lede: *"A frontier AI does the analysis work. CFP and CFA advisors wrote the rules it has to follow. You get the structured thinking of a planner — without the $250,000 minimum."* Three serif bullets numbered 01/02/03 on the right: (1) Twelve areas of your financial life, one platform; (2) AI-assisted analysis grounded in your actual situation; (3) Trade-offs laid out clearly — the deciding stays with you. Powered-by-Claude tag at the bottom of the left column. **This is the deliberate compliance posture on AI: it names AI honestly inside the body but does not lead with it.** The hero still does NOT mention AI. The H2 of this section does NOT contain the word "AI." Per founder decision (May 2026) after weighing Option A (no-AI mention), Option B (AI named in body, not heading — selected), Option C (lead with AI — rejected, would have required pulling Appendix A from the marketing brief and updating the strategy doc).
6. **Testimonial — Allen Mueller, CFA, MBA, Founder of 7 Saturdays Financial.** Light cream band (`--surface-tier-recommended`). Square portrait on the left with name + credentials + firm beneath it; large serif quote on the right with a faded green opening quote mark. Three paragraphs of testimonial copy, with selected phrases ("breakthrough tool," "without a sales pitch") set in green italic for emphasis. **Compliance note for Claude Code:** the quote contains the phrase *"actionable recommendations based on the user's goals"* — first-party Finmagix copy does not use "recommendations" in this sense (substitution table § 3.2). A third-party testimonial may use language we wouldn't use ourselves, because it's their experience. Do not edit the quote. Do not echo the phrase in surrounding first-party copy. If counsel pushes back at launch, the fallback is to truncate the quote to start from *"It also highlights key risk management items…"* — the second paragraph stands alone.
7. **Modules preview** — three featured modules + "See all twelve & pricing" link (Option A per brief § 5.4). No prices on cards.
8. **Partner strip** — narrow dark band, two sentences + "Explore partnerships →". (Optional; show on by default.)
9. **Closing CTA** — restated value, free-to-start framing, single primary CTA.

The prototype in the design directory shows all of these wired up, with the four-headline ladder and other tweakable variants encoded.

### `/pricing` — Pricing

Existing structure: three tier cards. Keep. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- Add the **"no paywalls, only pricing" framing** at the top of the page, per strategy 5.3.
- Show **all twelve modules** with tier badges on this page (or directly link to a `#modules` anchor that does). No modules hidden.
- Tier card CTAs are non-directive: "Start free" / "Try Recommended" / "Try Pro" — never "Buy now," "Upgrade now," "Subscribe."
- Each paid tier has a "Cancel any time, no questions" line.
- Below tiers: a 4-question FAQ strip (preserved or rewritten per substitution table).
- (Previously: link to `/how-finmagix-makes-money` at the bottom. That page was removed in May 2026 — do not re-add the link. The subscriptions-only framing is now in About § 03 and on the Platform page.)

### `/platform` — Finmagix Platform (replaces /demo)

**Replaces the old Interactive Demo.** This is now the long-form narrative product page. Content comes from `Our_Platform.docx` and is reproduced verbatim in the prototype. Keep `/demo` as a permanent redirect/alias so old links don't break.

**Page sections (top to bottom):**
1. **Hero** — centered, large serif H1 *"Like having a friend who actually understands money."* with *"understands money"* in green italic. Subtitle: *"— and won't make you feel dumb for asking."* Lede paragraph naming the 85%, CFP/CFA framing, then **Start free** CTA (→ lite.finmagix.com/signup).
2. **"You've probably tried other things"** — empathy band on `--surface-tier-recommended`. Two paragraphs with *"It is."* and *"We're trying to fix that."* set as serif italic emphasis lines between them.
3. **"What Finmagix Lite is"** — short two-column framing block with *"Just kind structure, honest perspective…"* as the emphasis close.
4. **"How it works"** — five numbered steps on a `--surface-sunken` band. Steps 02, 03, 04, **and 05** each carry a real product screenshot inside mock browser chrome (`lite.finmagix.com` in the URL bar) with a serif caption:
   - Step 02: *Your Quiet Index* (dashboard) — `site/product-quiet-index.png`
   - Step 03: *Six-dimension fitness charts* — `site/product-fitness-overview.png`
   - Step 04: *AI-generated summary / Finmagician's read* — `site/product-finmagicians-read.png`
   - Step 05: *Cross-module summary* — `site/product-bigger-picture.png`
   These captures were supplied by the founder in May 2026 and auto-trimmed against the app's canvas color (uniform-edge trim with 6px breathing room). Step 04's heading was updated in the same revision: *"Read the Finmagician's read."* → *"Read the Finmagician's (your AI friend's) analysis."* If future screenshots replace any of these, keep the tight auto-trim convention so the visual rhythm down the page stays consistent.
5. **"What's inside"** — three-tier card grid (Free / Recommended / Pro) with prices and the modules-in-each-tier line per the docx.
6. **"What we won't do"** — full-bleed `--surface-inverse` band. Five-line `×` list (Tell you what to buy / Pick stocks / Take commissions / Pretend to be your fiduciary / Sell your data). The section ends at the bulleted list; the earlier *"makes money one way: subscriptions…"* footnote callout was **removed in May 2026** per founder direction. Do not reintroduce.
7. **"The promise"** — centered pull quote on `--surface-tier-recommended` with the founder-supplied promise text, **Start free** CTA, and the CFP/CFA "inspired by" disclosure line.

**Notes:**
- The old DemoPage component (sample Health Checkup walkthrough with progressive disclosure) is **not** carried forward. If the founder wants progressive-disclosure demos in the future, treat them as a separate page (e.g. `/demo/health-checkup`) and not the primary product story.
- The original docx referenced a "How Finmagix makes money" nav link inside the *What we won't do* callout. Since that page was removed in May 2026, the link is dropped — but the *substance* (subscriptions only) is preserved in the callout text. Do not re-add the link.
- Do NOT lead the hero with AI. Per § 5 (Under the hood) compliance posture, AI is named *inside* the body of the Under-the-hood section on `/`, not on the platform page hero. The platform page hero is product-language only.

### `/partners` — Partners

Existing structure: four sections (credit unions, community banks, employers, CFP advisors), each with anchor. Keep all anchors. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- Tone shifts to **plain-language B2B**, not "warm friend" — but no jargon for jargon's sake.
- Pricing lines preserved unless founder updates: credit unions & community banks from $8/member/month; employers from $10/employee/month; CFP advisors from $299/month per advisor.
- Per-section CTA: "Talk to us" linking to a partner-specific contact form (or `/contact?intent=partner_<id>` if a unified form already exists).
- If partner logos appear, they must be **real, current, approved partners**. Placeholder logos are removed. If no real logos available, no logo strip — better to omit than fake.

### `/about` — About us

**Founder-supplied copy is the contract.** The May 2026 revision **reduced the page from six numbered sections to four, plus a mission close.** The dark `--surface-inverse` *"How we hold the line"* band was removed entirely — its substance lives on `/platform` in the *"What we won't do"* section, and duplicating it on About muddied the narrative. The standalone *"How we make money"* section was also dropped because subscriptions-only is now stated inside the new section 03 (*"Pricing is static and transparent"*) and on the Platform page.

**Top-nav and footer label:** *"About us"* (sentence case — changed from "About" in May 2026). Internal route still `/about`.

**Page sections (top to bottom):**
1. **Hero** — *"Built for the 85% the financial industry has overlooked."* with *"85%"* in green italic. Two-paragraph lede ending in the strong line *"…AI-powered insight to the people the advisory industry has overlooked."*
2. **01 — Why we built Finmagix** — H2 *"Traditional advisory has a minimum."* The six-figure-minimum framing + the three-line *"You are not bad with money / unsophisticated / behind"* affirmation block (rendered as struck-through pseudo-bullets to visually *negate* the labels). Closes with *"You've been busy living a real life. You deserve a tool that respects that."*
3. **02 — What we believe** — H2 *"Avoidance is exhaustion, not irresponsibility."* One opening paragraph + three card-list items (capable adults / structured thinking / you decide always). Background `--surface-tier-recommended`.
4. **03 — How Finmagix is different** — H2 *"Not another budgeting app."* Four bolded-lead paragraphs: what's covered / show the work / pricing is static and transparent / **inspired by CFP Board and CFA Institute standards** (with the explicit *"We are not a CFP or CFA — and we don't claim to be"* disclosure). The CFP/CFA credit-where-due framing now lives here; do not move it elsewhere.
5. **04 — Who's behind Finmagix** — H2 *"A small team. Real experience."* Three short paragraphs + an advisor callout card linking to `/advisors`. (Renumbered from 05; *"Honest about size."* was trimmed from the H2 line in May 2026.)
6. **Mission close** — centered serif headline *"Make financial clarity available to the people who've been told they don't deserve it."* with *"don't deserve it"* in green italic. Three struck-through *"Not lectures / Not sales pitches / Not one-size-fits-all answers"* lines. Closing lede ending in *"…the dignity of making your own decisions about it."* + **Try the free checkup** CTA.

**Sections REMOVED in May 2026 (do not bring back):**
- *04 — How we hold the line* (dark band, `×` list of four "We do not" lines, *"rewrite, redesign, or don't ship"* pullquote). Substance moved to `/platform` *"What we won't do."*
- *05 — How we make money* (the *"Subscriptions. That's the whole business."* block). Substance is now one sentence inside the new section 03 plus the Platform page.

**Background alternation rhythm:** Hero (cream canvas) → 01 (cream) → 02 (`--surface-tier-recommended`) → 03 (cream) → 04 (cream) → Mission (`--surface-tier-recommended`). Section 04 was flipped back to the cream surface in May 2026 when section 05 was removed, so the page doesn't end on two consecutive tier-recommended bands.

**Compliance note:** the founder's About copy uses *"AI-powered insight"* as a value statement in the hero lede. This is softer than the substitution table allows in CTA / directive surfaces, but the founder has explicitly approved it on About (the strategy-storytelling surface, in the founder's voice). Do not propagate the same phrasing to module surfaces, button labels, or any in-app text.

### `/advisors` — Advisors

**Single feature card layout.** William Tincup is the named advisor as of May 2026. The page does **not** carry a placeholder bench of fictitious CFP/CFAs.

**Page structure:**
1. **Header** — *"The professionals who shape our principles — and challenge our thinking."*
2. **Subhead** — *"Our Advisors make us better every day, helping us build on our mission."* (Note: this is the simplified copy approved May 2026. Earlier draft text about "They review our framework / They do not review every individual analysis output" was REMOVED per founder direction.)
3. **William Tincup feature card** — square portrait left, profile right:
   - Name: William Tincup
   - Credentials: MBA, SHRM-SCP, SPHR
   - Role line (mono): *Editor, Analyst, Advisor & Host · WRKdefined* / *Venture Partner · Evergreen Mountain Equity Partners & Future Wrk Ventures*
   - Four-paragraph bio covering his HR/workplace analyst background, board-advisor work across 25+ HR-tech companies, his angle for Finmagix (workplace-financial-wellness category positioning), and his academic background. Full text in the prototype.
4. (Previously: a "Growing the bench" note and a "What our advisors do, precisely" do/do-not callout. **Both removed in May 2026** per founder direction; do not bring them back.)

**Photo:** supplied by founder, served at `marketing/public/advisors/william-tincup.jpg` (600×600). Casual portrait, not corporate headshot — fits the anti-fintech-suits aesthetic.

### `/contact` — Contact (partner-focused)

**Repositioned in May 2026 as a partner-contact surface.** The general user-support email and `hello@finmagix.com` were removed per founder direction. Page is now optimized for B2B (employers, benefits providers, credit unions, community banks, nonprofits) plus general partnership inquiries.

**Page structure:**
- **Header:** *"Drop us a line."*
- **Subhead:** *"We read every message. We respond to most within two days. Love to hear from you and discuss how we can partner with you."* (exact copy, founder-approved)
- **Left rail:** **For partnerships** label + `partners@finmagix.com` (monospace, legible, not obfuscated). Business hours: Mon–Fri 9am–5pm ET. (Note: do NOT add a general `hello@` email back; that was removed deliberately.)
- **Right rail:** Form with fields, in this order:
  - Your name (text)
  - Email (email)
  - **Institution** — select dropdown with: Employers · Benefits Providers · Credit Unions · Community Banks · Non For Profits · Others. **This is required.** The form should pre-select an option when the URL has a matching hash (e.g. `/contact#employers` selects Employers; `/contact#credit-unions` selects Credit Unions). Map: `employers→Employers`, `benefits-providers→Benefits Providers`, `credit-unions→Credit Unions`, `community-banks→Community Banks`, `non-profits→Non For Profits`, `advisors→Others`.
  - What's this about? (text, optional)
  - Message (textarea, required)
  - Submit button labeled **Send**
- **Success state:** *"Got it. We'll get back to you within two business days. Thanks for reaching out."*

**Partner-page wiring:** every "Talk to us" CTA on `/partners` routes to `/contact` and should append the section hash so the Institution field pre-fills.

### `/blog` — REMOVED (May 2026)

The blog page, route, and footer link were removed in May 2026 per founder direction. *"We will add it later."* The `BLOG_POSTS` data array is preserved in the prototype's `data.js` so the page can be restored later in a single PR — when that happens, restore the route, the `BlogPage` component, the top-nav link, and the footer Company-column link in the same change.

### `/privacy`, `/terms`, `/disclaimer`, `/security` — Legal pages

Existing structure for `/privacy`, `/terms`, `/disclaimer`: full legal text. Keep the text body (counsel-supplied). **Add a plain-language summary at the top of each.**

`/security` does **not exist** on the current site (the "Security" nav link points to `/privacy` — that's the routing bug to fix). Create `/security` as a new page.

**Required for all four:**
- Plain-language summary at the top (3–5 bullets), then the full legal body below.
- The summary is what the avoidant user actually reads. Write it carefully.
- **`/disclaimer`** is the most-linked legal page. It must explicitly name what Finmagix is not: not a financial advisor, not a fiduciary, not a tax preparer, not a broker, not an insurance agent.
- All four: standard footer, no CTAs, no upsells.

### `/how-finmagix-makes-money` — REMOVED (May 2026)

This page was removed per founder direction. The subscriptions-only framing now lives in two places:
- **About § 03 — How Finmagix is different**, bolded line: *"Pricing is static and transparent. Free, Recommended, and Pro contain the same modules for every user. No hidden gates."*
- **`/platform` § 6 — What we won't do**, the `×` list ending at *"Sell your data."*

Do not recreate this page. Do not link to it from any footer or pricing surface. If a future founder decision restores it, treat that as a separate scope-brief PR.

---

## Voice and copy enforcement

The substitution table in § 3.2 of the marketing brief is the canonical reference. Below is a developer-oriented version with grep patterns to add to the copy-review gate.

```
# Patterns that should return ZERO hits in the marketing site source:
grep -ri "CFP-standard\|CFP Standard" marketing/                # → "inspired by CFP frameworks"
grep -ri "CFP-grade\|advisor-quality" marketing/                # → "CFP-inspired structure"
grep -ri "AI-powered financial planning" marketing/             # → drop entirely (the eyebrow violation)
grep -ri "smart \|intelligent \|smarter than\|smarter advisor" marketing/  # → no "smart AI" framing; engine section uses behavior verbs, not adjectives
grep -ri "we recommend\|you should\|recommended next step" marketing/   # → "some people in your spot start with"
grep -ri "optimized plan\|personalized roadmap" marketing/      # → "modules to focus on" / "structured thinking"
grep -ri "next steps:" marketing/                               # → "things worth thinking about:"
grep -ri "take action now\|act now\|don't wait" marketing/      # → "when you're ready, here's where to look"
grep -ri "before it's too late\|failure to act" marketing/      # → "here's what tends to happen if this isn't addressed"
grep -ri "Pro tier required\|upgrade required" marketing/       # → "this one's part of Pro — $29/month or $230/year"
grep -ri "accept this plan\|accept this recommendation" marketing/  # → no equivalent on marketing surface; flag for design review
grep -ri "get started in seconds\|in under 60 seconds" marketing/   # → "about five minutes from sign-up to a first useful look"

# Patterns that should return ZERO hits unless accompanied by visible assumptions:
grep -rE "\\\$[0-9]{3,}" marketing/                             # any large dollar figure needs a tooltip or footnote
grep -rE "save up to|worth up to|save [0-9]+%" marketing/        # any "up to" claim needs the assumption disclosure

# Patterns that should appear at least once across the site:
grep -ri "inspired by CFP" marketing/                            # the credit-where-due framing
grep -ri "you decide\|with you in charge" marketing/             # the non-directive commitment
grep -ri "educational purposes only" marketing/                  # disclosure footer
```

Add the first set to a pre-commit hook or CI check so future PRs can't reintroduce them.

---

## Image direction (developer summary)

Per § 7 of the marketing brief. Engineering doesn't source the photos, but does decide how they're shipped:

- **One photograph per page maximum**, where § 7.3 specifies one. (Home hero is the most important.)
- **WebP with JPEG fallback**, responsive at each breakpoint, lazy-loaded below the fold.
- **Real-people photography only**, not stock smiles, not AI-generated faces. Photo sourcing is a separate task; for this session use a single placeholder image (or a stock library — Stocksy / TONL / Death to Stock — as a temporary measure).
- **Hero photo is `eager` not `lazy`** — it's above the fold and load timing affects LCP.
- **All photos have descriptive alt text** (the family photo on the home hero is the example: describe the scene, not "family photo").

---

## Accessibility floor (developer summary)

Per § 10.2 of the marketing brief and `engineering-standards.md` § 4.5:

- All interactive elements keyboard-reachable; visible focus styles (do not suppress with `outline: none` globally).
- Form fields have associated `<label>` elements (not just placeholders).
- Color is never the only signal for state — use icon + text + color together.
- WCAG AA contrast on all text. The token set is designed to meet this; verify with axe in CI.
- Decorative images have `alt=""`. Meaningful images have descriptive alt text. The image-slot placeholder text is **not** alt text; it's a design comp annotation.
- Heading hierarchy is semantic. One `<h1>` per page. Don't skip levels.
- Mobile design center is 380px. Tap targets ≥ 44×44px. (The design system's `button` token enforces this minimum.)

---

## Migration order

Recommended sequence to ship without breaking anything live (updated May 2026):

1. **Set up the marketing app shell.** Tokens, fonts, NavBar, Footer, persistent disclosure footer, and the new period-mark wordmark (see *Visual identity* section above). Top nav links: Home / Finmagix Platform / Modules (anchor) / Pricing / For partners. Footer: Product (Finmagix Platform · How it works · Modules · Pricing · Privacy & Security) · Partners · Company (**About us** · Our advisors · Contact). No Blog. No How-we-make-money. No standalone Security. **Wordmark in both NavBar and Footer renders as live HTML text:** `Finmagix<span class="...--mark">.</span>`. Favicon at `marketing/app/favicon.svg`.
2. **Build the home page** including the *Under the hood* and *Allen Mueller testimonial* sections. Most-leveraged surface. Founder approves copy before continuing.
3. **Set up redirects** before adding new routes: `/demo` → `/platform`, `/privacy` → `/privacy-and-security`, `/security` → `/privacy-and-security`. Configure as permanent 301s in `next.config.js` / `middleware.ts`.
4. **Build `/platform`** — long-form narrative page replacing the old Interactive Demo. All four product screenshots (steps 02–05) are supplied; carry them across from `site/product-*.png` to `marketing/public/platform/*.png`.
5. **Build `/pricing`** with the all-twelve-modules visibility + FAQ. Founder copy review.
6. **Migrate `/partners`** with the per-section "Talk to us" buttons that deep-link into `/contact#<institution>`.
7. **Build `/contact`** with the new Institution dropdown and partners-only email.
8. **Build `/about`** as the long-form narrative page (founder-supplied copy verbatim, six numbered sections + mission close).
9. **Build `/advisors`** with the William Tincup feature card.
10. **Build the three legal pages** (`/terms`, `/disclaimer`, `/privacy-and-security`) from `Finmagix_Lite_Beta_Legal_Documents.docx`. Ship with the *Version 0.9 · pre-counsel-review draft* stamp visible until counsel sign-off.

Each step is its own PR. Founder reviews copy on each before merge per `engineering-standards.md` § 5.1.

---

## Session report (per `engineering-standards.md` § 2.3)

End-of-session deliverable. Must name:

- Every page changed (with PR / commit references).
- Every component added (with name and source path).
- Every Part 4-adjacent decision made (e.g., "kept the $250k empathy band line per founder direction; flagged for review if partner-page CFP audience pushes back").
- Every copy change reviewed against the substitution table (link to the review).
- Every assumption that was not verified (e.g., "assumed the contact form posts to Resend — confirm before merge").

Founder reviews the session report before merge.

---

## Open questions to settle before starting

1. **Repo layout.** Is the marketing site in `apps/marketing/`, a separate repo, or the same repo as the app? Confirm.
2. **Design system distribution.** Is it published as `@finmagix/design-system`? Or is the in-session shortcut (duplicate primitives, tech-debt note to deduplicate later) acceptable?
3. **Contact form backend.** Resend, Postmark, something else, or `mailto:` only?
4. **Hosting.** Vercel? Different from the app's hosting? Affects routing, caching, ISR decisions.
5. **Analytics.** What's currently on the marketing site? Per strategy Part 5.8, minimize trackers. Confirm the list before this session ships.
6. **Photography.** Real shoot scheduled, or stock for now? Affects timing of public launch (legal pages also gating).
7. **The hero H1.** Has counsel signed off on *"What a CFP would cover. Without the CFP."* yet? If not, ship with the fallback ladder's safer option and prepare a single-line revert PR for after counsel review.

---

## Quick links

- Marketing brief: `/path/to/marketing-brief.md`
- Strategy: `docs/strategy.md`
- CFP/CFA principles: `docs/cfp-cfa-principles.md`
- Engineering standards: `docs/engineering-standards.md`
- Tech debt: `docs/tech-debt.md`
- Design system (this repo): `/finmagix-lite-design-system/`
- Design system tokens: `/finmagix-lite-design-system/colors_and_type.css`
- Tailwind snippet: `/finmagix-lite-design-system/tailwind-config-snippet.ts`
- Prototype (this session): `/index.html` and `/site/`
