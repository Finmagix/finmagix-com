# Engineering handoff — Re-skin Sign In & Sign Up (preserve existing copy)

**Audience:** the Claude Code (or human) session that will re-skin the **existing** sign-in and sign-up pages in **`lite.finmagix.com`**.
**Sibling doc:** `CLAUDE_CODE_HANDOFF_AUTH.md` — that brief proposes a *new* copy set. **This brief overrides it on copy and content.** Where the two conflict, follow *this* doc.
**Format:** scope brief per `engineering-standards.md` § 2.1.
**Source-of-truth documents (override this file when in conflict):**
- The **live app source code** at `apps/lite/` (or wherever the current `/login` and `/signup` routes live). That source is the canonical inventory of strings, fields, validation rules, and behavior to preserve.
- `docs/engineering-standards.md` — § 4 (forbidden patterns), § 5.5 (accessibility floor).
- **Finmagix Lite design system** in this repo: `/finmagix-lite-design-system/`.
- **Visual prototypes (this session):** `/Finmagix Sign In.html`, `/Finmagix Sign Up.html`, shared styles at `/site/auth.css`, tokens at `/site/tokens.css`. These are the **visual contract only** — the copy in them is illustrative and should be discarded in favor of the live app's existing strings.

---

## Goal — and what makes this brief different from the sibling

We have two existing, working pages live today:
- `https://lite.finmagix.com/login?redirect=%2Fdashboard`
- `https://lite.finmagix.com/signup`

The copy, field set, validation behavior, and flow on those pages are **correct as shipped** and should not be touched in this session. What's wrong is only the **visual layer** — it predates the Finmagix Lite design system.

This session **re-skins** those two pages and nothing else. Specifically:

| Preserve verbatim from current source | Replace with new design system |
|---|---|
| All visible strings (labels, placeholders, button text, helper text, error messages, link text, page titles, meta descriptions) | Layout, grid, spacing, typography |
| Field set (which inputs exist, in what order) | Form chrome (input borders, focus rings, button styles) |
| Validation rules (client + server-side) | Color palette (warm cream canvas, deep forest green accent) |
| Submit / redirect behavior | Header wordmark + footer disclosure styling |
| OAuth / social provider buttons, if any exist | Side panel / reassurance column (add per prototype) |
| Email-link / magic-link flow, if it exists | Eyebrow + serif H1 + Fraunces sub-headline pattern |
| Anti-enumeration behavior on the magic-link endpoint | The "back to finmagix.com" header link |
| Terms-acceptance checkbox copy + link targets | Checkbox visual treatment |

If a piece of UI exists on the live page and isn't covered in the prototypes (e.g. a "Remember me" checkbox, a captcha, a reCAPTCHA badge, an OAuth provider row), **keep it** and style it consistent with the new system. Don't quietly drop UI just because the prototype omits it.

If the prototype shows UI that the live page doesn't have (e.g. the side reassurance panel, the eyebrow label, the period-mark wordmark), **add it** — those are the design-system upgrade.

---

## Procedure

### Step 1 — Inventory the existing pages from source

Before touching anything, open the existing route handlers and write down, into a working notes file:

1. **Every visible string**, in source order, with the JSX/template location it came from. Group by: page title & meta, header, form labels, placeholders, helper text, button labels, error messages, link text, footer.
2. **The field set** — name, type, required?, validation pattern, autocomplete attribute.
3. **The submit behavior** — endpoint, method, expected response shape, redirect-on-success target, error rendering.
4. **Any conditional UI** — magic-link toggle? OAuth row? Captcha? Remember-me? Forgot-password link target?
5. **Any client-side state machine** the form runs through (idle → submitting → success / error). The exact transitions stay; only the visuals around them change.

This inventory is the contract for the rest of the session. Anything not in the inventory is out of scope.

### Step 2 — Read the visual prototypes

Open `/Finmagix Sign In.html` and `/Finmagix Sign Up.html` in this repo. They give you:

- The shell layout (header, two-column grid, footer)
- The form column anatomy (eyebrow → H1 → Fraunces sub → fields → primary → secondary → alt-link)
- The side reassurance panel structure
- The footer disclosure structure
- The token usage from `/site/tokens.css` and the class set in `/site/auth.css`

Treat the prototype HTML as a layout reference. Treat the prototype's *copy* as discardable — the inventory from Step 1 wins.

### Step 3 — Build the shell once, render two pages

Extract the shared chrome to a single component:

```
apps/lite/app/(auth)/
  layout.tsx                   # AuthShell — header + main grid + footer
  login/page.tsx               # SignInPage — keeps the current /login route
  signup/page.tsx              # SignUpPage — keeps the current /signup route

apps/lite/components/auth/
  AuthShell.tsx                # Header (period-mark wordmark + back-to-marketing link) + footer disclosure + the responsive grid
  AuthFormCard.tsx             # Eyebrow + H1 + Fraunces sub + children
  AuthSidePanel.tsx            # Eyebrow + serif H2 + list slot + close line
  AuthField.tsx                # Label + (optional inline) link + input
  AuthInput.tsx                # 48px-min input with focus ring
  AuthPasswordInput.tsx        # AuthInput + eye toggle (+ strength meter on sign-up if the live page has one)
  AuthCheckbox.tsx             # 20px box, accent-primary on check
  AuthButton.tsx               # primary | secondary, full-width default
  AuthDivider.tsx              # "or" with hairline rules — only if the live page has a divider
  AuthErrorBanner.tsx          # role="alert", semantic-error background
```

**Do not preserve any of the old page's styling** — the CSS modules / inline styles / Tailwind classes on the existing pages can be deleted along with the old markup. The visual reset is total. The *behavior* and the *strings* are what survive.

### Step 4 — Map every preserved string into the new components

For each string from Step 1, drop it into the equivalent slot in the new component tree. If a string doesn't have an obvious slot (e.g. the live page has a "Why sign up?" blurb the prototype has no place for), **leave it in place** and surface the question in the session report — don't invent a slot and don't quietly delete the copy.

If the live page uses sentence case where the design system prefers ALL-CAPS tracked labels (e.g. field labels), **convert the case but not the words**. "Email address" stays "Email address," rendered in the design system's label style.

### Step 5 — Visual upgrade pass per the prototype

Apply only after Step 4 is mechanically complete:

- Header: replace whatever brand mark exists with the period-mark wordmark (`Finmagix.` — live HTML text, not an image). Link it to `https://finmagix.com/`.
- Background: swap to the cream canvas (`--surface-canvas`).
- Form column: cap at 440px, vertically center.
- Side panel: introduce on viewports ≥ 920px per the prototype. On the sign-in page, the panel describes what's waiting after sign-in. On the sign-up page, the panel describes what happens after sign-up. **If you don't have approved side-panel copy, leave the panel as a styled placeholder and surface the question in the session report — do not write new copy in this session.**
- Footer: introduce the compliance disclosure line on both pages. Copy comes from whichever of these is canonical *in source today*:
  - The current footer of `lite.finmagix.com`, if it has one.
  - Otherwise, the marketing site's footer at `finmagix.com`.
  - Otherwise, raise it as an open question. Do not invent disclosure copy.

---

## Routes — preserve as-is

```
/login                 → SignInPage   (current route; do NOT rename to /signin in this session)
/signup                → SignUpPage   (current route)
/login?redirect=<path> → after auth, route to <path>; preserve current redirect-handling
```

The sibling brief (`CLAUDE_CODE_HANDOFF_AUTH.md`) proposed moving `/login` → `/signin`. **Skip that change in this session.** Renaming routes is a separate scope (marketing CTAs, email templates, bookmarks, SEO redirects all touch it).

---

## Behavior — preserve as-is

Anything the live page does today, the re-skinned page must still do:

- Same field order, same `autocomplete` attributes, same `inputmode` hints, same `required` flags.
- Same client-side validation rules and the same error wording.
- Same submit endpoint, payload shape, and success-redirect target.
- Same anti-enumeration behavior on the magic-link path, if it exists.
- Same rate-limit handling and the same throttle message.
- Same `agreedAt` recording on sign-up, if the current implementation records it.
- Same session cookie / token handling.

If the inventory in Step 1 reveals a behavior that **looks wrong** (e.g. the server-side error leaks which field was bad, the magic-link endpoint enumerates accounts, the password field has no `autocomplete="current-password"`), **document it in the session report** as a finding. Do not fix it in this session — security-sensitive behavior changes are their own scope brief with their own review.

---

## Accessibility floor (applies to the new visual layer)

- Every interactive element keyboard-reachable with a visible focus ring (2px `--accent-primary` per the design system).
- The password eye toggle has `aria-label="Show password" / "Hide password"`.
- The error banner has `role="alert"`.
- Real `<label>` elements, not placeholders.
- Real `<input type="checkbox">` for the terms checkbox (the visible box is a styled sibling).
- Tap targets ≥ 44×44px.
- WCAG AA contrast on every text element.

If the current pages fail any of these, the re-skin fixes them as a side effect — that's expected. Note each fix in the session report.

---

## What is OUT of scope

- **Any copy change.** Period. The whole point of this brief is the strings don't move.
- **Route changes.** `/login` stays `/login`. `/signup` stays `/signup`.
- **API changes.** Endpoint paths, payload shapes, and response shapes are untouched.
- **New auth methods.** No adding OAuth, passkeys, 2FA, magic links, or anything else the current pages don't already have. (Removing one is also out of scope.)
- **Password reset flow.** Whatever the "Forgot password" link points at today, it keeps pointing at.
- **The marketing site.** No changes to `finmagix.com`.
- **The post-auth destinations.** The dashboard and onboarding flow are untouched.
- **The legal pages** linked from the terms checkbox.

If during the work it becomes obvious that *something* needs to change that isn't on the preserve list (e.g. the live page has an OAuth button pointing at a dead endpoint), **raise it as an open question** — don't fix it in this session.

---

## Done criteria

- `/login` and `/signup` render at 380px, 768px, 1024px, and 1440px viewports without overflow or layout breakage.
- Diff of visible strings between pre-session and post-session is **empty** (modulo case-style changes for labels, which are listed in the session report).
- Diff of form-field set (name, type, required, autocomplete) between pre-session and post-session is **empty**.
- Diff of submit-endpoint, payload-shape, and success-redirect behavior between pre-session and post-session is **empty**.
- Both pages share `<AuthShell>` and the same form primitives. No duplicate inline styles.
- The period-mark wordmark renders correctly in the header (live HTML text, not an `<img>`) and links to `https://finmagix.com/`.
- Lighthouse accessibility = 100 on both pages (mobile).
- Visual QA against `/Finmagix Sign In.html` and `/Finmagix Sign Up.html` at the four breakpoints — layout, spacing, type scale, color tokens all match the prototype's *visual* spec.

---

## Session report (per `engineering-standards.md` § 2.3)

End-of-session deliverable. Must name:

1. **String inventory** from Step 1 — the full list, preserved verbatim, with source locations. This is the audit artifact that proves no copy moved.
2. **Field-set inventory** — same idea, for inputs.
3. **Behavior inventory** — endpoints, validation rules, redirect targets.
4. **Case-style changes** — any label where the visible casing changed (e.g. `Email address` → label rendered ALL-CAPS by the design system). Words unchanged.
5. **UI added** — every element the prototype introduced that the live page didn't have (side panel, eyebrow, footer disclosure, etc.).
6. **UI preserved-but-restyled** — every element from the live page that survived, with the old and new class names.
7. **Open questions carried forward** — every place the live page had copy the prototype has no slot for, every security-adjacent behavior that looked wrong, every missing side-panel / footer-disclosure string that this session left as a placeholder.
8. **Accessibility deltas** — every WCAG / keyboard / aria issue the re-skin fixed as a side effect.

---

## Open questions to settle before starting

1. **Where does the current auth code live?** Confirm `apps/lite/app/login/` and `apps/lite/app/signup/` (or the equivalent paths). The Step-1 inventory can't start until this is settled.
2. **Side-panel copy.** Does product / content have approved copy for the reassurance column on each page, or does this session ship the panel as a styled placeholder?
3. **Footer disclosure copy.** Same question — is there a canonical disclosure string in the lite app's source, or should this session pull the marketing-site disclosure verbatim, or leave a placeholder?
4. **Case-style policy on labels.** The design system renders field labels ALL-CAPS tracked. Confirm with content that this is a *visual* transformation, not a copy change requiring review.
5. **Test coverage.** Are there existing e2e tests against `/login` and `/signup` (Playwright / Cypress)? They should pass unchanged after the re-skin — that's the strongest signal we preserved behavior. If there aren't tests, flag it as a follow-up.

---

## Quick links

- Visual prototype — sign in: `/Finmagix Sign In.html`
- Visual prototype — sign up: `/Finmagix Sign Up.html`
- Shared auth styles: `/site/auth.css`
- Design system tokens: `/site/tokens.css`
- Sibling brief (proposes new copy — overridden by this doc): `/CLAUDE_CODE_HANDOFF_AUTH.md`
- Design system: `/finmagix-lite-design-system/`
