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
4. **Adds the persistent disclosure footer** to every page and the missing `/how-finmagix-makes-money` page.

After this session: the marketing site ships at finmagix.com with all 11 pages in Section 4.1 of the brief rendered against Finmagix Lite tokens, every Part 4 violation gone, the home page rebuilt, and other pages restyled with their original content carried across through the design system.

## Strategy anchor

- `strategy.md` Part 1 — who we serve (avoidant adult, three minutes to prove worth).
- `strategy.md` Part 4 — the line we will not cross. **The hardest constraint in this session.** No directive language, no CFP-equivalence claims, no false precision on numbers, no streaks/XP/peer-comparison, no automated-execution promises. The current finmagix.com has multiple violations (Appendix A) — they go.
- `strategy.md` Part 5.3 — "no paywalls, only pricing." Every module visible to every visitor with sample output. Pricing page must reflect this; module cards must not show locks.
- `strategy.md` Part 5.8 — How Finmagix makes money. A page must exist for this and be linked from every footer.
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
marketing/components/marketing/ModulesPreview.tsx NEW — featured-3 layout (Option A in brief § 5.4)
marketing/components/marketing/ModuleCard.tsx     NEW or import from lite — icon + title + blurb + tier badge; no price; no lock
marketing/components/marketing/PartnerStrip.tsx   NEW
marketing/components/marketing/ClosingCTA.tsx     NEW
marketing/public/hero/family.jpg                  NEW asset — placeholder photo per § 7 of brief; replace before launch

# Other pages (RESTYLE — content largely preserved, voice + Part 4 fixes applied, design system swapped in)
marketing/app/pricing/page.tsx                    REWRITE — three tier cards + FAQ; ALL TWELVE MODULES VISIBLE PER STRATEGY 5.3; "no paywalls, only pricing" line; link to /how-finmagix-makes-money
marketing/app/demo/page.tsx                       REWRITE — interactive sample-output walkthrough of Financial Health Checkup with progressive disclosure (§ 6.2)
marketing/app/partners/page.tsx                   REWRITE — four sections with anchors (#credit-unions #community-banks #employers #advisors); preserve current per-partner pricing unless founder updates
marketing/app/blog/page.tsx                       REWRITE — editorial archive; no engagement counters, no trending tags
marketing/app/about/page.tsx                      REWRITE — 600–900 word strategic story; structure per § 6.5
marketing/app/advisors/page.tsx                   REWRITE — names, photos, credentials, brief bios; explicit "what advisors do / what they don't" callout per § 6.6
marketing/app/contact/page.tsx                    REWRITE — email, optional form, business hours, response-time expectation
marketing/app/privacy/page.tsx                    REWRITE — plain-language summary at top, full legal body below (counsel-supplied)
marketing/app/terms/page.tsx                      REWRITE — same structure as /privacy
marketing/app/disclaimer/page.tsx                 REWRITE — same structure; this is the most-linked legal page; explicit "Finmagix is not a financial advisor, fiduciary, tax preparer, broker, or insurance agent"
marketing/app/security/page.tsx                   NEW or REWRITE — separate from /privacy; encryption, access controls, incident response

# New page that must exist (per strategy 5.8)
marketing/app/how-finmagix-makes-money/page.tsx   NEW — full transparency page; subscriptions only, no commissions, no data sales; linked from every footer

# Routing fix
(wherever the existing nav config lives)          EDIT — "Security" link points to /security, not /privacy

# Telemetry / SEO (light touch)
marketing/app/sitemap.ts                          UPDATE — add all 11 pages + /how-finmagix-makes-money
marketing/app/robots.ts                           CHECK — sane defaults; allow crawl
(open-graph image)                                NEW — neutral OG card; not a dashboard screenshot
```

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
- `/security` exists and is what the "Security" nav link points to.
- `/how-finmagix-makes-money` exists and is linked from the footer of every page.
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
5. **Modules preview** — three featured modules + "See all twelve & pricing" link (Option A per brief § 5.4). No prices on cards.
6. **Partner strip** — narrow dark band, two sentences + "Explore partnerships →". (Optional; show on by default.)
7. **Closing CTA** — restated value, free-to-start framing, single primary CTA.

The prototype in the design directory shows all of these wired up, with the four-headline ladder and other tweakable variants encoded.

### `/pricing` — Pricing

Existing structure: three tier cards. Keep. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- Add the **"no paywalls, only pricing" framing** at the top of the page, per strategy 5.3.
- Show **all twelve modules** with tier badges on this page (or directly link to a `#modules` anchor that does). No modules hidden.
- Tier card CTAs are non-directive: "Start free" / "Try Recommended" / "Try Pro" — never "Buy now," "Upgrade now," "Subscribe."
- Each paid tier has a "Cancel any time, no questions" line.
- Below tiers: a 4-question FAQ strip (preserved or rewritten per substitution table).
- At the bottom: link to `/how-finmagix-makes-money`.

### `/demo` — Interactive demo

Existing structure: a walk-through of the Health Checkup. Keep concept. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- The demo must show **progressive disclosure** per strategy 5.4 and 7.2: headline observation + two-or-three paths shown briefly, with "See the assumptions" expand-on-demand.
- The five-section analysis framework (scope / observations / paths / sensitivity drivers / what's not covered) must be visible and labeled.
- The "what this doesn't cover" section is **not optional**. Per strategy Part 4: every analysis output makes its own limits visible.
- The disclosure footer line appears under the sample output, linking to `/disclaimer`.
- End-of-demo CTA: "Try the real thing — free" linking to `lite.finmagix.com/signup`.
- The demo does **not** require sign-up to view.

### `/partners` — Partners

Existing structure: four sections (credit unions, community banks, employers, CFP advisors), each with anchor. Keep all anchors. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- Tone shifts to **plain-language B2B**, not "warm friend" — but no jargon for jargon's sake.
- Pricing lines preserved unless founder updates: credit unions & community banks from $8/member/month; employers from $10/employee/month; CFP advisors from $299/month per advisor.
- Per-section CTA: "Talk to us" linking to a partner-specific contact form (or `/contact?intent=partner_<id>` if a unified form already exists).
- If partner logos appear, they must be **real, current, approved partners**. Placeholder logos are removed. If no real logos available, no logo strip — better to omit than fake.

### `/about` — About

Existing structure: founder story + team. Keep concept. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- 600–900 word strategic story per § 6.5 of brief.
- Sections: *Why we built this* / *What we believe* / *How we hold the line* / *Who's behind it*.
- "How we hold the line" must summarize the strategy Part 3 & Part 4 commitments in plain language. This is the page where Finmagix explains, publicly, what it will *not* do.
- No "founder letter" framing unless it's actually a letter. No performative humility.

### `/advisors` — Advisors

Existing structure: names + photos + bios. Keep concept. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- Each advisor entry has **credentials and a specific bio**, not vague "guides our principles" language.
- **Explicit callout** on the page: "What our advisors do, precisely" — listing what they do (review principles, prohibited zones, framework) and what they don't (review individual analyses). Per strategy Part 4: no appearance of professional review without actual professional review.

### `/contact` — Contact

Existing structure: form + email. Keep. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- Email address is **legible**, not obfuscated. (Obfuscation is a relic of a different web.)
- Response-time expectation stated: "We respond to most messages within two business days."
- Business hours stated if applicable.
- Two email addresses: `hello@finmagix.com` (general) and `partners@finmagix.com` (B2B). Confirm with founder.

### `/blog` — Blog index

Existing structure: card grid of posts. Keep. Apply Finmagix Lite tokens.

**Required changes from existing site:**
- **No engagement counters**, trending tags, related-posts rabbit hole, social-share buttons. Per § 8.3 of brief.
- Each card: image (if any) + tag + title + deck + date + reading time. Nothing else.
- The blog tone matches the rest of the site: plain language, no urgency, no FOMO.

### `/privacy`, `/terms`, `/disclaimer`, `/security` — Legal pages

Existing structure for `/privacy`, `/terms`, `/disclaimer`: full legal text. Keep the text body (counsel-supplied). **Add a plain-language summary at the top of each.**

`/security` does **not exist** on the current site (the "Security" nav link points to `/privacy` — that's the routing bug to fix). Create `/security` as a new page.

**Required for all four:**
- Plain-language summary at the top (3–5 bullets), then the full legal body below.
- The summary is what the avoidant user actually reads. Write it carefully.
- **`/disclaimer`** is the most-linked legal page. It must explicitly name what Finmagix is not: not a financial advisor, not a fiduciary, not a tax preparer, not a broker, not an insurance agent.
- All four: standard footer, no CTAs, no upsells.

### `/how-finmagix-makes-money` — Transparency

**This page must exist** per strategy 5.8. If it doesn't on the current site, create it. Content: subscriptions only; no commissions; no data sales; no affiliate links; no advertising. Linked from every footer.

---

## Voice and copy enforcement

The substitution table in § 3.2 of the marketing brief is the canonical reference. Below is a developer-oriented version with grep patterns to add to the copy-review gate.

```
# Patterns that should return ZERO hits in the marketing site source:
grep -ri "CFP-standard\|CFP Standard" marketing/                # → "inspired by CFP frameworks"
grep -ri "CFP-grade\|advisor-quality" marketing/                # → "CFP-inspired structure"
grep -ri "AI-powered financial planning" marketing/             # → drop entirely
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

Recommended sequence to ship without breaking anything live:

1. **Set up the marketing app shell.** Tokens, fonts, NavBar, Footer, persistent Disclosure. Verify by rendering a blank `/` with the chrome only.
2. **Build the home page.** Most-leveraged surface. Until it's right, the rest is decoration. Get founder approval before continuing.
3. **Ship `/how-finmagix-makes-money`** — small page, but the footer link breaks until it exists.
4. **Fix the `/security` route.** New page + nav-link fix. Removes the visible routing bug on the current site.
5. **Build `/pricing` and `/demo`.** These are the next-most-leveraged conversion surfaces.
6. **Migrate `/partners`.** Apply tokens, restyle, preserve content.
7. **Migrate `/about` and `/advisors`.** Lower-traffic, but the strategic story is on `/about` — it deserves care.
8. **Migrate `/blog`** (index only; individual post template if time).
9. **Migrate `/contact`.**
10. **Migrate the four legal pages.** Plain-language summaries are the engineering deliverable; the legal body comes from counsel.

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
