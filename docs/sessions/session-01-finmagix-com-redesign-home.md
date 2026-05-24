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

## Mid-session founder revisions (2026-05-24)

After the original Session 01 work was merged into `preview` and the founder QA'd `preview.finmagix.com`, the founder issued a mini-brief replacing the top sections and adding a new mid-page screenshot. Implemented in three commits (`8aa70d6`, `11c8e6f`, plus the docs commit landing this update).

### What changed in the mid-session revision

1. **Top sections consolidated.** What was three sections (Hero + EmpathyBand + ValueProps) became two tighter sections (consolidated Hero + new 4-item ProofStrip). Section count went 9 → 8 → 9 again (the PlatformPreview addition below restored the count). (`8aa70d6`)

2. **New H1.** *"What a CFP would cover. Without the CFP."* → *"Top financial advice was built for the wealthy. We built it for everyone else."* Second sentence in `var(--accent-primary)` green. Framing shifts from "what" (scope of coverage) to "who" (wealth-class critique).

3. **Eyebrow word swap.** *"Inspired by CFP and CFA planning frameworks"* → *"Inspired by CFP and CFA planning principles"* — aligns with the footer Disclosure wording (which has always used "principles").

4. **Sub-copy rewritten.** *"Twelve modules covering every part of your financial life — grounded in the same CFP and CFA frameworks the professionals use, in plain language, with you in charge."* The italic-green `<span class="you-decide">with you in charge</span>` emphasis preserved.

5. **Trust line shortened.** From 4 parts to 3: *"Free to start · No credit card · About five minutes"*. Dropped *"to a first useful look"*.

6. **New ProofStrip section (4 items).** Replaces the structure of the old EmpathyBand + ValueProps. Each item is an icon (green) + bold short title + one supporting line. Items: *Built for the 85%* / *CFP & CFA principles* / **AI by design** / *Understanding, not tracking*. 4-col desktop / 2×2 tablet / 1-col narrowest. (`8aa70d6`)

7. **New PlatformPreview section.** Added between HowItWorks and UnderTheHood. Section head + a mock-browser-chrome wrapper around `public/product/quiet-index.png` (the Your Quiet Index dashboard capture) + serif italic caption. (`11c8e6f`)

8. **New icons:** Users, ScrollText, Sparkles, Compass added to `src/components/Icons.tsx`. (`8aa70d6`)

9. **Deleted:** `src/components/marketing/EmpathyBand.tsx`, `src/components/marketing/ValueProps.tsx`, the `.empathy` and `.values` style blocks in `globals.css`. (`8aa70d6`)

10. **Added:** `.proof-strip` + `.proof-item` + `.platform-preview` + `.browser-chrome` style blocks in `globals.css`. (`8aa70d6`, `11c8e6f`)

### Compliance notes — mid-session revisions

These are recorded as **deliberate**, not silent drift. Each one was surfaced to the founder before code; the founder made an explicit decision.

7. **New H1 ships without counsel re-review.** Founder explicitly chose this (Flag 1 in the mini-brief, founder discretion). The H1 the original Session 01 brief shipped (*"What a CFP would cover. Without the CFP."*) was counsel-approved per Session 01 decision #1; the new H1 has not been counsel-reviewed. Founder accepts this risk for the beta-period launch. **Watch item:** if counsel later flags the new H1, the revert to the counsel-approved version is a one-line edit in `Hero.tsx`.

8. **Eyebrow word swap (frameworks → principles)** — same compliance posture as the original ("Inspired by CFP and CFA…"), just aligned to the footer Disclosure's already-counsel-approved language. Low risk.

9. **"AI by design" proof point overrides strategy.md Part 7.** Founder-acknowledged override. Tracked as its own item in `docs/tech-debt-marketing.md` under "Strategy / compliance — deliberate overrides to revisit." Resolution paths documented there: amend strategy.md, revisit the proof point, or hold the override. The "you make every call" clause is load-bearing for the no-directive posture — flagged in code comments as not-to-be-removed.

10. **Dashboard screenshot reintroduced on home.** Partial reversal of the original Session 01 decision to remove dashboard imagery. The new image is materially different from the OLD WS-1 mockup that triggered the original removal:

    | Old WS-1 hero mockup | New screenshot |
    |---|---|
    | ❌ "$6,200/yr Tax savings found" pill | ✅ No dollar pills |
    | ❌ "Action available" pill | ✅ No action pills |
    | ❌ Dashboard as the lead | ✅ Mid-page, below How-it-works |
    | ❌ Replaces the empathy story | ✅ Sits inside the explanatory arc |

    Things in the screenshot worth noting for future review:
    - *"Best score: 90 (Social Security Planner)"* — score, not dollars; the app's own UI showing user data, not a marketing claim about benefit.
    - Bar chart red bars imply "lower scores need attention" — visual cue from the in-app UI; surrounding marketing copy stays observational.

    Tracked in `docs/tech-debt-marketing.md` under "Home reintroduces a dashboard screenshot" as a watch item for future home-page sessions.

11. **Dropped content from the consolidated rebuild** (founder-confirmed intentional in Flag 4):
    - *"$250,000 in investable assets and a Certified Financial Planner on retainer"* specific framing → replaced thematically by the new H1's wealth-gap claim.
    - *"working two jobs / raising kids / quietly avoiding the money conversation"* empathy texture → gone. This was the most emotionally specific copy on the home; future sessions may want to reintroduce this texture elsewhere (e.g., on `/about`).
    - *"scope, observations, paths to consider, sensitivity drivers, what's not covered"* — the 5-section rigor explanation from the old ValueProp #2 — gone. The substance lives on `/platform`'s structured-analysis treatment; not promised on home.

### Reviewer checklist — what changed for the re-QA

When you re-QA `preview.finmagix.com` after the re-merge, the items below are the **new things to focus on** (the original checklist still applies for everything else):

a. **New hero copy reads cleanly.** Read the new H1 + sub aloud at conversational pace. The wealth-gap framing should land without sounding combative.

b. **ProofStrip layout at 4 viewports.** Desktop should be 4 columns; tablet ≈ 768px should be 2×2; mobile ≈ 380px should be 1 column. Icons green; titles bold; bodies muted.

c. **"AI by design" copy.** Confirm the third proof point reads exactly *"AI by design"* + *"Modern technology does the heavy lifting; you make every call."* If the "you make every call" half is missing, the no-directive compliance guardrail is broken — flag immediately.

d. **PlatformPreview section.** Should appear between HowItWorks and UnderTheHood. Browser chrome has three muted dots on the left, a centered URL pill showing *lite.finmagix.com*, and the screenshot below. Caption is serif italic and centered.

e. **Screenshot quality.** The screenshot is 870×657 PNG; should be crisp on retina. If blurry or stretched, the wrapper sizing needs adjustment.

f. **Eyebrow swap is visible.** New eyebrow reads *"Inspired by CFP and CFA planning principles"* (with "principles", not "frameworks"). Same green dash + uppercase tracking as before.

---

## Mid-session addition — Comparison section (2026-05-24)

After the consolidated-hero + ProofStrip + PlatformPreview revisions, founder added a third mini-brief asking for a comparison section on the home page. Implemented in `e1636ac` (+ the docs commit landing this update).

### What changed

1. **New `Comparison` section** between `ProofStrip` and `HowItWorks`. Section count: 9 → 10. Reference mockup: `C:\Users\amita\Downloads\finmagix-comparison_1.html` (Claude Design 13:11). Mockup translated into our component + token conventions; raw HTML/inline styles not copied verbatim. (`e1636ac`)

2. **Structure** — left-aligned section intro (kicker / H2 / sub) sitting above a 3-column comparison table. Table uses semantic `role="table"` + `role="columnheader"` + `role="cell"` markup with `aria-label` on the icons so the comparison is screen-reader navigable.

3. **Copy** (5 rows, locked order):
   1. *Built on CFP & CFA principles* — APPROVED Part 4 wording; not to be changed to "CFP-grade" / "CFP-certified" / etc.
   2. *AI by design* — APPROVED but flagged as least-defensible row (most budget apps now market AI features). Tech-debt entry tracks the watch item.
   3. *Decision tool, not just tracking*
   4. *Complete picture, every age*
   5. *Free Financial Fitness Test* — marketing label; canonical in-app name is "Financial Health Checkup." Dual naming founder-confirmed intentional. Tech-debt entry tracks.

4. **No in-component disclaimer line** — founder removed it in the brief. Page-level disclosure via the persistent `<Disclosure variant="footer" />` in shared layout satisfies the Principle 6 obligation.

5. **Highlight implementation** — uses a grid-placed `<div class="comparison__band">` with `grid-column: 2; grid-row: 1 / -1`, avoiding the absolute-positioning alignment bug the Claude Design brief warned about.

### New design-system + compliance flags

12. **Teal tokens introduced as a localized design-system exception** (founder decision 1b). New `--teal-deep / --teal-mid / --teal-tint` variables in `:root`. The home now has two visible accent colors: forest green everywhere else, teal in the Comparison. The Finmagix wordmark inside the comparison's middle-column header retains its forest-green period (brand identity). Tracked as a watch item in `docs/tech-debt-marketing.md` — "Comparison section introduces teal tokens outside the design system."

13. **Logo asset deviation** (founder decision 3b). The public `logos/finmagix-logo.svg` is a bare SVG (no embedded styles); rendering it via `<img>` would show browser-default serif text. Resolved by inlining the SVG element inside `Comparison.tsx` with our design-system tokens (`var(--font-serif)`, `var(--ink-primary)`, `var(--accent-primary)`). Matches the "use the SVG" decision while rendering correctly via the next/font-loaded Fraunces.

14. **Row 5 — no CTA wired** (founder decision 4a). The mockup shows row 5 as text + icons only, no link. The canonical Health Checkup is reachable via the home Hero's primary CTA, the Closing CTA, and the NavBar CTA — those satisfy the "wire to Health Checkup" intent the brief raised conditionally. Tech-debt note tracks the dual-naming question separately.

15. **Dark mode deferred** (founder decision 2a). Section ships in light mode only, consistent with the rest of the site. Site-wide dark-mode support would be its own cross-cutting session.

16. **"AI by design" appears on home twice now** — once in `ProofStrip` (proof point 3) and once in `Comparison` (row 2). Both are deliberate per separate founder decisions. The earlier `ProofStrip` instance is documented as a strategy.md Part 7 override; the Comparison row is documented as the least-defensible comparison row. Watch item: if AI prominence grows further, revisit Part 7 wholesale rather than accumulating individual exceptions.

### Reviewer checklist — Comparison-specific

When you re-QA `preview.finmagix.com` after the re-merge, in addition to the earlier checklists:

g. **Comparison section appears between ProofStrip and HowItWorks.** Section eyebrow reads *"A different kind of money tool"*, H2 reads *"Not another budgeting app"*, sub reads *"Budgets track the past. Finmagix helps you decide what's next."*

h. **Middle (Finmagix) column is visually framed** in teal — light teal background fill + 2px teal border, rounded corners. Columns to either side stay neutral.

i. **Finmagix wordmark in the middle column header** renders in Fraunces with a forest-green period (brand identity — NOT teal). About 22px tall. Width auto.

j. **Icons:** Finmagix column has filled teal discs with white checks; budgeting column has hairline grey rings with muted x marks. Each gets a screen-reader-readable "Yes" or "No" label.

k. **5 rows, in this order:** CFP & CFA principles → AI by design → Decision tool not just tracking → Complete picture, every age → Free Financial Fitness Test. The first row's title is slightly bolder (lead-weight) than the rest.

l. **Mobile 380px check:** all 3 columns stay visible and aligned. Column ratios narrow but no overflow. Logo shrinks to ~18px tall.

m. **No disclaimer line under the table** — the in-component disclaimer is deliberately gone. The persistent footer disclosure still appears at the bottom of the page.

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

Branch `session-01-finmagix-com-redesign-home` after mid-session revisions (2026-05-24):

```
(docs commit landing this update)
e1636ac  feat: add Comparison section — "Not another budgeting app"
0de195e  docs: record mid-session revisions + AI-by-design strategy override
11c8e6f  feat: add PlatformPreview section — dashboard screenshot below HowItWorks
8aa70d6  feat: replace top sections with consolidated hero + proof strip
f588c87  docs: session 01 report
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

The original `b3170b5` merge into `preview` captured commits through `f588c87`. The mid-session revisions (`8aa70d6` + `11c8e6f` + this docs commit) need to be re-merged into `preview` for re-QA — that's the next step.

Next steps:
1. Re-merge `session-01-finmagix-com-redesign-home` → `preview` (no-ff) to bring the mid-session revisions onto `preview.finmagix.com`.
2. Founder re-QA on `preview.finmagix.com` using the mid-session reviewer checklist above + the original reviewer checklist below.
3. After approval, squash-merge `preview` → `main` to ship at `finmagix.com`.
