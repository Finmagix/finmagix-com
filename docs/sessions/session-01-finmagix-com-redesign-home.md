# Session 01 — Marketing redesign: home page + shared chrome

**Branch:** `session-01-finmagix-com-redesign-home`
**Status:** Awaiting founder QA on `preview.finmagix.com`. Pending merge to `main`.
**Brief:** Approved 2026-05-22 in chat; reflected in this directory under [`session-01-scope-brief.md`](#scope-brief-summary) (inline below).
**Outcome:** Marketing site at `finmagix.com/` is replaced with a CFP-frameworks-inspired, Part-4-compliant home page; period-mark wordmark and persistent disclosure inherited by every page via the shared layout.

---

## What changed

For a non-technical reviewer, in plain language. Each item links to the commit that introduced it.

1. **The home page is rebuilt from scratch.** Nine sections in order: Hero, Empathy band, Three value props, How it works, Under the hood (engine transparency), Allen Mueller testimonial, Modules preview (3 featured), Partner strip, Closing CTA. No dashboard screenshot anywhere; one family photograph on the hero. (`afcce3c`, `9051d12`, `2c8ecc9`, `010413a`)

2. **The hero leads with the counsel-approved headline.** *"What a CFP would cover. Without the CFP."* Eyebrow above it: *"Inspired by CFP and CFA planning frameworks."* No mention of AI in the hero. (`afcce3c`)

3. **The "Under the hood" section is the deliberate AI compliance moment.** Dark forest-green band. H2 is *"The engine behind the modules."* — contains no "AI", "intelligent", or "smart" terms. AI is named once, in body copy, in a single descriptive sentence. The section supports the home's positioning rather than leading it. Option B compliance posture per founder decision (May 2026). (`9051d12`)

4. **Persistent compliance disclosure on every page.** Mounted once in the shared layout via the new `<Disclosure variant="footer" />` component inside the Footer. Wording: *"Finmagix is a thinking tool, not a financial advisor. Inspired by CFP Board and CFA Institute principles; not certified by either. For educational purposes only."* (`5f6868c`)

5. **Period-mark wordmark replaces the old italic-green `magix` treatment.** Rendered as live HTML text — `Finmagix.` with a green period — in both header and footer, never as an `<img>`. (`5d65f97`, `5f6868c`)

6. **Top nav restructured per handoff.** Home / Finmagix Platform / Modules (anchor) / For partners. **No Pricing link** (per Session 01 founder decision; restoration tracked in `docs/tech-debt-marketing.md`). Primary CTA "Try the free checkup" → `lite.finmagix.com/signup`. Hamburger menu under 920px. (`5d65f97`)

7. **Footer restructured.** Three link columns (Product / Partners / Company) plus a brand column. No Pricing. No Blog. No standalone Security. No How-we-make-money. Legal strip below with Privacy & Security Policy / Terms of service / Disclaimer. (`5f6868c`)

8. **`/pricing` route deleted for the beta.** Page design and content fully preserved in `prototype/site/pages/pricing-demo.jsx`. Restoration plan after beta + Stripe is in `docs/tech-debt-marketing.md`. The strategy.md Part 5.3 deviation is documented as a beta-posture decision, not silent drift. (`e8bc22a`)

9. **Three minimal stubs added so chrome links don't 404:** `/platform`, `/privacy-and-security`, `/disclaimer`. Each carries a "we're working on it" placeholder with a link back to relevant existing pages. The full builds happen in their own future sessions per the migration order. (`ad59733`)

10. **Design tokens installed.** Replaced the old cream / forest / sage palette with the verified Finmagix Lite design system from `prototype/site/tokens.css` — warm cream surface (`#FAF7F2`), deep forest green accent (`#2C5A3E`), muted semantic colors. Old tokens kept temporarily for pages still on WS-1/2/3 styling. (`096471f`)

11. **Font stack switched to next/font/google.** Fraunces (variable, opsz axis) for serif headlines; DM Sans (variable, opsz axis) for body and UI; Geist Mono for technical labels. DM Serif Display kept temporarily as a legacy fallback for h1/h2/h3 on unmigrated pages. (`096471f`)

12. **Metadata cleaned of Part 4 violations.** Old: *"12 CFP-standard ... Personalized roadmap. AI-powered insights"* — three forbidden phrases. New: *"A plain-language thinking platform ... Inspired by CFP and CFA frameworks."* (`096471f`)

13. **Sitemap updated to reflect Session 01 page set.** Includes the 9 pages currently promoted; excludes `/pricing`, `/blog`, `/demo`, `/privacy` (legacy), `/sign-in`, `/sign-up`. (`e8bc22a`)

14. **Orphan cleanup.** Deleted 16 files from the WS-1 `src/components/home/` and WS-1 `src/components/layout/` directories that became dead code as the new components landed. 1,979 lines removed. (`010413a`)

15. **`prototype/` and `*.zip` added to `.gitignore`.** The extracted design package (~5.4 MB of HTML/CSS/JS/JPG/PNG) is local-only reference; production code is the rewritten `src/`. (`e25de82`)

---

## What was verified

- **`npm run build` passes** on every commit. End state: 23 prerendered routes including `/`, `/platform`, `/privacy-and-security`, `/disclaimer`, the 9 sitemap URLs, and 11 unmigrated WS-1/2/3 pages.
- **`npm run lint` clean** at end of session (0 errors, 0 warnings) — down from 70 errors at session start.
- **Part 4 forbidden-pattern grep** on the Session 01 surface: zero violations. All grep matches in new components are code comments documenting the substitution rules (false positives). Pre-existing WS-1/2/3 pages still contain known violations (listed below in "What was not verified").
- **Positive-pattern grep** for the required phrases: present.
  - *"Inspired by CFP and CFA"* — Hero eyebrow.
  - *"You decide"* / *"With you in charge"* / *"You do the deciding"* — Hero, ValueProps, EmpathyBand, UnderTheHood.
  - *"educational purposes only"* — Disclosure component.
- **Compile-and-render check** on every section using the prototype as the visual contract.
- **`preview.finmagix.com` deploy** triggered via merge of `session-01-finmagix-com-redesign-home` → `preview` and push. Vercel build pending verification by founder.

---

## What was NOT verified

- **Lighthouse on `/`** (mobile) for performance ≥ 90, accessibility = 100, best-practices = 100, SEO ≥ 95. Needs the live `preview.finmagix.com` build to test. Founder to verify (or surface a chat run) before merge to `main`.
- **Viewport rendering at 380 / 768 / 1024 / 1440 px.** Same — needs the live preview. Particularly important for the hero photograph aspect ratio, the Under the hood section's responsive layout, and the Allen Mueller testimonial grid.
- **Reading the home page out loud** at conversational pace (per handoff § 11.3). Founder's check, not mine.
- **Cross-page navigation.** Especially the footer links to `/platform`, `/privacy-and-security`, `/disclaimer` — all three are stubs; check that they render correctly even if minimal.
- **NavBar hamburger menu** on a real touch device under 920px. Verified to compile and pass lint, but interaction not exercised.
- **Real-photograph swap.** Hero uses the prototype placeholder. Real shoot tracked in `docs/tech-debt-marketing.md`.

---

## What's still in tech-debt

New marketing-side debt items added to `docs/tech-debt-marketing.md`:

1. **Hero photograph is a placeholder.** Replace before public launch.
2. **Three Session 01 stubs** (`/platform`, `/privacy-and-security`, `/disclaimer`) need their full builds. Tracked per migration step (4 and 10).
3. **`/pricing` restoration after beta + Stripe.** Full restoration plan documented including the exact files to recreate and the labels/links to re-add.
4. **Design-system primitives duplicated in-session.** Long-term: dedupe to a `@finmagix/design-system` npm package shared between `lite.finmagix.com` and `finmagix.com`.
5. **Other pages still on WS-2/WS-3 styling** with known Part 4 violations: `/about`, `/demo`, `/privacy`, `/blog`. Each gets its own future session per the handoff migration order.
6. **Sitemap excludes routes that still exist** as files. `next.config.ts` redirects (per migration step 3) will resolve `/demo → /platform`, `/privacy → /privacy-and-security`, `/security → /privacy-and-security`.
7. **CI grep gate** for Part 4 forbidden patterns. Currently enforced manually; could be automated.
8. **Open-graph image** still uses Next.js default. Custom OG card is post-launch polish.

Items resolved in this session:
- Persistent disclosure footer missing on the live site → mounted in shared layout, present on every page.
- Eight Part 4 violations on the home page → all removed.
- Dashboard screenshot used as hero → removed, replaced with photograph.
- "Security" nav link → /privacy bug → footer "Privacy & Security Policy" now points at `/privacy-and-security` (stub, but correct URL).
- Missing period-mark wordmark → installed as live HTML text in nav + footer.

---

## Compliance notes (Part 4-adjacent decisions)

1. **The $250,000 industry-threshold reference is kept** in the Empathy band ("$250,000 in investable assets and a Certified Financial Planner on retainer") and Under the hood ("without the $250,000 minimum"). Founder-approved per the May 2026 handoff. This is a contextual reference to the industry's stated minimum, not a false-precision claim about user benefit (no "save $X" or "earn $X").

2. **The Allen Mueller testimonial contains "actionable recommendations based on the user's goals."** This is third-party language (Allen's words), allowed because testimonials may use language we wouldn't use ourselves. First-party Finmagix copy does NOT propagate this phrasing. If counsel pushes back at launch, the fallback is to truncate the quote to start from "It also highlights key risk management items…" (the second paragraph stands alone). Documented inline in `src/components/marketing/Testimonial.tsx`.

3. **The ValueProps section quotes "this is what you should do" in a rejecting context.** *"Finmagix gives you structured ways to think — never single-answer 'this is what you should do.'"* The grep finds "you should" — but the quote is naming what we DON'T do, not directing the user. Founder-approved per the prototype.

4. **Option B compliance posture on the AI engine section.** The H2 "The engine behind the modules" contains no "AI" / "intelligent" / "smart" terms. AI is named only in body copy. Tested via grep. Section supports rather than leads the home positioning.

5. **`/pricing` removal deviates from strategy.md Part 5.3** ("no paywalls, only pricing"). Documented as a beta-posture decision, not silent drift. Restoration plan in `docs/tech-debt-marketing.md`.

6. **All forbidden-pattern grep matches in new Session 01 files are code comments** documenting the substitution rules. None are user-facing strings.

---

## Reviewer checklist (for founder)

Five-ish things to click, read, or sanity-check on `preview.finmagix.com` before approving the merge to `main`:

1. **Visit `preview.finmagix.com` and read the home page out loud** at conversational pace. Per handoff § 11.3 — this is the real test, not just a Lighthouse number. Does it land?

2. **Resize the browser to 380 px, 768 px, 1024 px, 1440 px.** Eyeball the hero photograph, the value-props 3-up grid (collapses to 1 column on mobile), the Under the hood band (forest-green; bullets stack on mobile), the Testimonial (photo above quote on mobile), the Partner strip (chips stack), and the Closing CTA. Anything visibly broken?

3. **Open the NavBar hamburger** at mobile width. Menu opens, lists all 4 links + Sign in + the CTA, closes when you tap a link or the X.

4. **Click every footer link** including the legal strip. Verify:
   - `/platform` → stub renders, "we're working on it" copy
   - `/privacy-and-security` → stub renders
   - `/disclaimer` → stub renders with the bare-minimum disclaimer
   - `/about`, `/advisors`, `/partners`, `/contact`, `/terms` → existing WS-2/3 pages (will look design-mismatched vs. the new home until each migrates)

5. **Run Lighthouse on `/` (mobile)** in Chrome DevTools. Targets per the handoff: perf ≥ 90, accessibility = 100, best-practices = 100, SEO ≥ 95. Surface any failure modes in chat.

6. **Spot-check the visible copy** against the prototype HTML — the prototype is the visual + content contract. Specifically:
   - Hero H1 is exactly "What a CFP would cover. Without the CFP." (counsel-approved)
   - Eyebrow is "Inspired by CFP and CFA planning frameworks"
   - Under the hood H2 contains NO "AI" / "intelligent" / "smart"
   - Allen Mueller testimonial credits read "CFA, MBA" + "Founder, 7 Saturdays Financial"

7. **Confirm the persistent disclosure** appears at the bottom of every page (home + every other page on the site, since the layout mounts it).

If anything fails, reply in chat with what you saw. Otherwise: approve, and I'll do the final merge `preview` → `main` to ship.

---

## Scope brief (summary)

Approved 2026-05-22 in chat after a back-and-forth that locked in:

1. **Hero H1 counsel-approved** — *"What a CFP would cover. Without the CFP."*
2. **`/pricing` dropped entirely for the beta** — page deleted, links removed, $ amounts stripped from About §03 (positioning copy stays) and Platform §5 stub. Reversible post-beta + post-Stripe.
3. **Marketing tech-debt has its own home** — `docs/tech-debt-marketing.md`, sibling to `docs/tech-debt.md`.
4. **Path translation** — handoff's `marketing/...` translates to repo's `src/...`.

Out of scope: every page except `/` + the new stubs + shared chrome; `lite.finmagix.com`; real photography; counsel-supplied legal text; editorial blog content; contact-form backend; analytics decisions; modifying the design system source; introducing a test runner.

---

## Deployment trail

Branch `session-01-finmagix-com-redesign-home` is **12 commits** ahead of `main`:

```
e8bc22a  chore: delete /pricing route + update sitemap for Session 01 scope
010413a  feat: wire home page + remove WS-1/WS-2 orphan components
2c8ecc9  feat: home bottom — ModuleCard, ModulesPreview, PartnerStrip, ClosingCTA
9051d12  feat: home middle — UnderTheHood + Testimonial
afcce3c  feat: home top half — Hero, EmpathyBand, ValueProps, HowItWorks
ad59733  feat: minimal stubs for /platform, /privacy-and-security, /disclaimer
5f6868c  feat: replace Footer with persistent Disclosure component
5d65f97  feat: replace NavBar with period-mark wordmark + new design system
2b09d5d  feat: migrate Session 01 assets from prototype/ to public/
096471f  feat: install design system tokens + next/font/google
e25de82  docs: lock in May 2026 handoff + Session 01 decisions
(15a92fb empty trigger commit on `preview` for initial Vercel build)
```

Currently merged into `preview` (commit `b3170b5`, no-ff merge). `preview.finmagix.com` is the QA URL.

Next step after founder approval on `preview.finmagix.com`: squash-merge `preview` → `main` to ship at `finmagix.com`.
