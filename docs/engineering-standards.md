# Finmagix Lite — Engineering Standards & AI Working Agreement

**Version:** 1.0
**Status:** Living document. Governs how Claude (chat) and Claude Code execute work on Finmagix Lite. Sits alongside strategy.md, cfp-cfa-principles.md, and tech-debt.md as a fourth governing document.
**Last updated:** May 2026
**Audience:** Claude (chat), Claude Code (terminal), and any future AI or human contributor working on this codebase.

---

## How this document is meant to be used

This document is read at the start of every working session. Claude Code reads it as part of session bootstrap. Claude (chat) re-reads it when scoping any session. The founder is non-technical and is relying on AI execution to apply the rigor a senior engineer would apply if one were on staff. This document is the substitute for that engineer's judgment in places where AI tends to drift.

**Three failure modes this document is built to prevent:**

- **Reality drift.** AI confidently shipping code that disagrees with production state — schema, deployed behavior, real data shapes. The repo is not the source of truth on its own; production is. Section 3 governs this.
- **Shortcut drift.** AI taking shortcuts a non-technical founder cannot catch in code review — disabling type checks, swallowing errors, hard-coding values, faking tests. Section 4 governs this.
- **Strategy drift.** Many small sessions each individually fine, collectively crossing a Part 4 line from strategy.md — accumulated warmth becoming directive language, accumulated convenience becoming personalization. Section 5 governs this.

When this document conflicts with a request, this document wins. When it conflicts with strategy.md Part 4, strategy.md wins. When it conflicts with cfp-cfa-principles.md, the principles document wins. The order of precedence is:

**Part 4 of strategy → CFP/CFA principles → rest of strategy → this document → tech-debt.md → session-specific instructions.**

---

## Section 1 — Identity and roles

**Founder.** Decision-maker. Non-technical. Approves architectural direction. Reads strategy and product reasoning carefully; does not read code line-by-line.

**Claude (chat).** Structured-thinking partner. Scopes sessions, reasons through trade-offs, drafts strategy and copy, reviews Claude Code output before it is treated as final. Does not commit code.

**Claude Code.** Execution engine. Writes, edits, and runs code in the repo. Operates inside the constraints of this document. Surfaces surprises; does not power through them.

**The contract between the three.** Founder authorizes; Claude (chat) plans; Claude Code executes; Claude (chat) reviews; Founder approves before merge to main. No step is skipped. The founder is never asked to evaluate code on its merits — only on whether the explanation of what it does, in plain language, matches the intent.

---

## Section 2 — Session contract

Every working session, regardless of scope, follows this contract.

### 2.1 Before any code is written

The session begins with a written **scope brief** in chat that the founder approves. The brief contains:

- **Goal.** One sentence on what changes after the session ships.
- **Strategy anchor.** Which part of strategy.md this serves, by section number. If the work is not anchored to a strategy section, the brief explains why.
- **Tech-debt anchor.** Which item(s) in tech-debt.md this resolves, fully or partially. If the work creates new debt, that debt is named.
- **Compliance check.** Which Part 4 lines and which of the eight CFP/CFA principles are touched by this work. If none, state "none touched" — do not skip.
- **Files expected to change.** A list. Surprises against this list during execution are surfaced, not absorbed silently.
- **Production-state assumptions.** Anything the work assumes about deployed Supabase, Vercel, Stripe, or production data. Each assumption either cites a verified source (a query result, a screenshot, a prior session's confirmation) or is flagged as needing verification before code is written.
- **Done criteria.** What "this is shipped" looks like — tests passing, migration applied, copy reviewed, etc.
- **Out of scope.** What this session is explicitly not doing. Things that look adjacent and tempting are listed here so they don't quietly creep in.

The founder approves the brief before code is written. The brief is appended to the session's commit message or PR description so future sessions can see it.

### 2.2 During the session

- Claude Code surfaces surprises immediately. A "surprise" is anything that contradicts the scope brief: an extra file needs to change, a production assumption was wrong, a dependency behaves differently than documented, the work is larger than estimated. The session stops and the founder is consulted before the surprise is absorbed into the work.
- Claude Code does not expand scope to "while I'm here" fixes. If a related issue is noticed, it is added to tech-debt.md and left alone.
- Claude Code asks before making decisions the founder would want to make: data shape changes, copy changes that touch user-facing surfaces, anything that affects the schema, anything that affects auth or billing.
- All work happens on a branch, never directly on main.

### 2.3 At session end

A **session report** is written before the work is considered shippable. It contains:

- **What changed.** Plain-language list of changes, suitable for a non-technical reader.
- **What was verified.** Tests that ran, manual verifications performed, production checks made.
- **What was not verified.** Anything that should have been verified but wasn't, with a reason.
- **What's still in tech-debt.** New items added, items resolved, items partially addressed.
- **Compliance notes.** Any user-facing copy changed, any disclosure touched, any Part 4-adjacent decision made.
- **Reviewer checklist.** Five to eight specific things the founder should click through, read, or sanity-check before approving the merge.

The founder approves the session report. The PR is then merged.

---

## Section 3 — Reality-first development

The repo lies. Production is the truth. This is the most expensive lesson the codebase has already taught (see tech-debt.md item #1). The defaults below exist to prevent it from being learned again.

### 3.1 Production state is verified, not assumed

Before any work touches schema, auth, billing, or deployed behavior, Claude Code verifies the relevant production state directly. "I assume the column exists" is not acceptable. Acceptable patterns:

- Querying the production Supabase via a read-only check.
- Reading the live deployed `/api` response.
- Checking Stripe dashboard or API for billing state.
- Confirming with the founder if no programmatic check is available.

If verification is impossible, the work is paused and the founder is told why.

### 3.2 Schema changes follow a strict order

When schema changes:

- The migration is written first, as a versioned file in `supabase/migrations/`.
- The migration is applied in a non-production branch / preview environment first.
- Types are regenerated from the new schema, not hand-written.
- Code that depends on the new shape is updated.
- The migration is applied to production only with founder approval, and only after the application code is ready to handle both pre- and post-migration states.
- `supabase/schema.sql` is regenerated from production after the migration applies, and the regeneration is committed.

Hand-edited schema files that diverge from production are forbidden. CI drift check (per tech-debt.md Session A) enforces this once shipped.

### 3.3 Type system is a contract, not a suggestion

- `@ts-nocheck`, `@ts-ignore`, and `@ts-expect-error` are not added. If one is encountered (see tech-debt.md item #6), it is treated as tech debt to remove, not as a license to add more.
- `any` is not used as an escape hatch. If a type is genuinely unknown, `unknown` is used and narrowed with a runtime check.
- Database row types are derived from generated Supabase types, not redeclared.
- Enum values appearing in TypeScript types must also appear as DB CHECK constraints. Drift between the two is the bug class that already cost us `life_stage` (see tech-debt.md item #1).

### 3.4 Tests verify behavior, not just compile

- New business logic ships with unit tests covering the mapped cases. The suggestion engine, governance layer, and tier-access logic all have unit-test coverage as a non-negotiable.
- Tests assert behavior, not implementation. A passing test that doesn't actually verify the user-facing outcome is worse than no test, because it provides false confidence.
- Tests that have been disabled, skipped, or marked `.only` are surfaced in the session report. They are not silently left in that state.
- Test data uses canonical values from the strategy (e.g., engine canonical `life_stage` values), not whatever happened to be in production at the time the test was written.

### 3.5 No silent error swallowing

- `try`/`catch` blocks that catch and discard are forbidden. If an error is caught, it is either handled meaningfully, logged with context, or rethrown.
- API routes return structured error responses; they do not return 200 OK with a hidden failure payload.
- Client-side errors that affect the user are shown to the user in voice consistent with strategy.md Part 7 (the microcopy table). Generic "Something went wrong" is not acceptable.

---

## Section 4 — Code quality standards

These are the things a senior engineer would catch in code review. The founder cannot catch them. The AI must self-enforce.

### 4.1 Forbidden patterns

The following are not introduced. If found in existing code, they go to tech-debt.md.

- `@ts-nocheck`, `@ts-ignore`, `@ts-expect-error`
- `any` outside of explicitly-justified library boundaries (justified in a comment)
- Hard-coded user IDs, emails, or test data in production code paths
- Hard-coded API keys, secrets, or environment values — all secrets via env vars
- `console.log` left in production code (use the logging utility, gated by env)
- `// TODO` comments without a tech-debt.md entry referenced by ID
- Commented-out code blocks (delete; git history is the archive)
- Duplicate components or utilities that diverge over time (extract or pick one)
- Inline styles where a Tailwind class or design token exists
- Magic numbers without a named constant
- `setTimeout` or `setInterval` used to "fix" race conditions (find the actual race)

### 4.2 Required patterns

- **Server-side validation on every API route.** Client-side validation is UX; server-side is correctness. Both exist.
- **Auth check on every protected route.** A helper like `requireUser(req)` is used; ad-hoc checks are not. The same helper is used everywhere so a tier-access bug like tech-debt.md item #2 cannot recur.
- **Tier-access via a single helper.** `canUserAccessModule(profile, moduleSlug)` per tech-debt.md Session B. No route writes its own tier check.
- **Engine versioning on every analysis.** Every analysis row records the engine version that produced it. This is non-negotiable for the audit trail (strategy.md Part 5.6).
- **Immutable event logging.** User actions that matter for the compliance audit trail are written to the events log as well as their primary table. The events log is append-only.
- **Idempotent migrations.** Migrations can be re-run without breaking. `IF NOT EXISTS` and `IF EXISTS` guards are the default.
- **Idempotent webhooks.** Stripe webhooks check for already-processed events before acting. A re-delivered webhook does not double-charge or double-grant access.

### 4.3 File organization

- New files follow the existing repo structure. If the existing structure is unclear or inconsistent, ask the founder before improvising.
- Components co-locate their tests, types, and styles. A file's dependencies should be visible without spelunking.
- Server-only code is in `app/api/`, `lib/server/`, or marked with `import 'server-only'` at the top. Client code does not import server code.
- Shared types live in `types/` and are imported, not redeclared.

### 4.4 Performance defaults

- N+1 queries are not introduced. If a list view fetches related data, the related data is fetched in a single query (Supabase RPC, join, or batched select).
- Client bundles are not bloated by accidental imports. Lucide icons are imported individually; Recharts components are imported individually; lodash is imported as `lodash-es` per function.
- Images use `next/image` with explicit width and height.
- Routes that hit external APIs (Anthropic, Stripe) cache where appropriate and document the cache key.

### 4.5 Accessibility floor

- All interactive elements are keyboard-reachable.
- Form fields have associated labels (not just placeholders).
- Color is not the only signal for state (error, success, etc.).
- Tap targets on mobile are at least 44px square.
- The avoidant user is on a phone in stolen moments (strategy.md Part 7.4); the floor is the design center.

---

## Section 5 — Compliance and copy gates

This section operationalizes strategy.md Part 4 and the eight CFP/CFA principles for the moment of writing code and copy.

### 5.1 Copy review gate

Any change that adds or modifies user-facing text — a button, a heading, an email, an error message, a tooltip, a module output template — passes a copy review gate before merge. The gate checks:

- **Part 4 lines.** No directive language. No personalized allocation %, securities, fund names, or carrier names. No "Accept" buttons. No "we recommend." No language implying CFP/CFA equivalence.
- **Voice patterns.** Plain language, 8th-grade reading level, no shame, no infantilization. Cross-reference `docs/voice-patterns.md` once it exists; until then, cross-reference the table in strategy.md Part 7.5.
- **Disclosure presence.** If the surface displays an analysis, projection, or comparison, the appropriate scope/assumption/limitations disclosure is present and accessible.
- **Three-layer scope (bot only).** If the change touches bot behavior, the three-layer scope from strategy.md Part 9.1 is honored — Layer 3 questions redirect, they do not get answered.

The gate is run by Claude (chat), not Claude Code. Claude Code surfaces every copy-touching change for chat review before merge. The founder is shown the before/after diff with the gate's findings.

### 5.2 The ten Part 4 sentinels

Claude Code maintains a sensitivity list in code review. If any of the following patterns appear in a diff, the change is paused and surfaced to chat for review, even if the change "looks fine":

- Numerical percentages applied to user-specific allocation (`%`, `percent`, `allocation`)
- Specific ticker symbols, fund names, or carrier names (regex on common patterns)
- The strings "recommend," "you should," "we suggest you," "best for you"
- The strings "CFP-grade," "advisor-quality," "professional advice"
- Button labels containing "Accept," "Confirm," "I'll do this," "Agree"
- Personalization of tier composition — any code path that makes module visibility a function of the user's profile
- Anything that writes to or reads from a brokerage, retirement plan, or insurance carrier API
- Tax position recommendations (specific filing positions, specific deductions)
- "Next steps," "Next 3 moves," ranked sequenced actions
- Streak counters, badges, XP, peer comparison ("users like you")

These are not a regex check that blocks merge. They are a human-in-the-loop check: any match goes to chat review.

### 5.3 The Anthropic API in the bot is constrained

When the bot's prompt or behavior is modified:

- The system prompt is version-controlled in a single canonical file. There is no shadow system prompt assembled at runtime from scattered constants.
- The post-generation Layer 3 classifier is not bypassed for any code path.
- Conversations are logged for compliance review. The logging schema is stable; if it changes, downstream review tooling is updated in the same session.
- A new prompt version is tested against a fixture set of Layer 1, 2, and 3 questions before deploy. Layer 3 questions must redirect; Layer 1 and 2 must answer.

### 5.4 Audit trail integrity

The audit trail is the legal posture, not a debugging aid. Treat it accordingly.

- Every analysis row is immutable after creation. Updates are forbidden; corrections are new rows.
- Engine version, input snapshot, assumptions, alternatives considered, and governance checks passed are populated on every row. Rows missing any of these are a bug, not a degraded state to tolerate.
- Timeline entries are automatically populated. The user is not asked to maintain them (strategy.md Part 5.7).
- Disclosures shown to the user at decision time are recorded with the analysis, not just the disclosure-component version. If the disclosure copy changes, prior analyses still display the disclosure they were shown at the time.

---

## Section 6 — Tooling, environments, and deploy

### 6.1 Branch and merge discipline

- Work happens on feature branches named `session-NN-<short-slug>` matching the session log.
- Direct commits to main are forbidden. Hotfixes go through a one-commit PR with explicit founder approval.
- PR descriptions include the scope brief and the session report.
- PRs are merged via squash-merge so the commit history matches the session log.

### 6.2 Environments

- **Local** — for development. Uses a separate Supabase project (or local Supabase) and Stripe test mode.
- **Preview** — Vercel preview deploys per PR. Uses preview Supabase / preview Stripe keys.
- **Production** — main only. Real users, real money, real audit trail.

Code paths must not branch on environment in ways that hide production behavior locally. If a feature only works in production, it has no test coverage and is fragile.

### 6.3 Secrets

- All secrets live in environment variables. Vercel manages production and preview secrets; `.env.local` manages local.
- `.env.local` is in `.gitignore` and stays there.
- Secrets are never logged, never sent to the Anthropic API, never embedded in client bundles. Client-visible env vars use the `NEXT_PUBLIC_` prefix and contain only non-sensitive values.
- Secret rotation is documented per provider (Supabase, Stripe, Anthropic, Resend or whatever email provider is in use).

### 6.4 Logging and observability

- Structured logging with a stable shape (timestamp, level, route, user_id where applicable, event name, context).
- Errors that reach the user are also logged server-side with enough context to reproduce.
- PII is not logged. User IDs are; emails, names, financial details are not.
- Logs are reviewed during the session report for unexpected errors introduced by the change.

### 6.5 Dependencies

- New dependencies require justification in the scope brief. "It would be convenient" is not justification; "this replaces 200 lines of fragile custom code" is.
- Major version bumps of Next.js, React, Supabase client, or Stripe SDK are their own session, never bundled with feature work.
- Lockfile is committed. `npm ci` reproduces the working tree exactly.

---

## Section 7 — Documentation discipline

### 7.1 The four governing documents

- **strategy.md** — what we are building and why. Canonical product direction.
- **cfp-cfa-principles.md** — compliance baseline.
- **tech-debt.md** — known issues. Living tracker.
- **engineering-standards.md** (this document) — how the work is done.

These four are the source of truth. When they conflict with code, the documents are not wrong by default; the conflict is investigated and the resolution is documented. Updates to these documents go through the founder.

### 7.2 The session log

A `docs/sessions/` directory holds one markdown file per shipped session, named `session-NN-<slug>.md`. Each contains the scope brief, the session report, and a link to the merged PR. This is the institutional memory; future sessions read it.

### 7.3 Inline comments

- **Comments explain why, not what.** The code shows what; the comment shows the reasoning that the code can't.
- Comments referencing strategy or principles cite by section number (e.g., `// per strategy.md Part 4: no directive language`).
- Comments do not lie. If the code is changed, the comment is updated or removed.

### 7.4 Migration notes

Every migration file has a comment block at the top explaining: what changed, why, what the rollback story is, and what application code must be updated alongside it. Migrations without this block are rejected at review.

---

## Section 8 — Anti-patterns specific to AI execution

These are the failure modes that AI assistants (including Claude) fall into when not actively constrained. Each is named so it can be spotted.

### 8.1 Confidence drift

The AI states things with the same tone whether it knows them or is guessing. Mitigation: when the AI is uncertain, it says so explicitly. "I don't know whether this column exists in production — I need to verify before writing this." Founder treats unhedged claims with appropriate skepticism.

### 8.2 Helpful expansion

The AI, in trying to be helpful, expands scope: fixes a related thing, refactors an adjacent file, "improves" something that wasn't asked about. Mitigation: scope brief is the contract. New issues go to tech-debt.md. The AI does not silently improve.

### 8.3 Pattern-matching over reasoning

The AI generates code that looks like other code it's seen, even when the situation calls for something different. Mitigation: when a pattern is applied, the AI names the pattern and why it fits. If it can't name why, it stops.

### 8.4 Synthetic confidence in tests

The AI writes tests that pass against the code it just wrote, without verifying the test would catch a real regression. Mitigation: tests are written against the behavior, and the AI confirms the test would fail if the behavior were broken. One way to confirm: temporarily break the code, watch the test fail, restore.

### 8.5 Documentation drift

The AI updates code without updating the comments, the README, or tech-debt.md. Mitigation: every session report has an explicit "what documentation was updated" line.

### 8.6 Warmth-driven copy drift

The AI, given freedom in copy, drifts toward more directive or warmer phrasings that subtly cross Part 4 lines. Mitigation: every copy change goes through Section 5.1's gate. No exceptions.

### 8.7 "It works on my machine"

The AI tests locally and declares success without running against preview. Mitigation: preview deploy is part of done criteria for any change touching the deployed surface.

### 8.8 Catastrophic helpfulness

The AI is asked to fix a small thing and quietly rewrites half the file because it noticed what it considered better patterns. Mitigation: diffs are kept minimal. Refactors are their own session, scoped explicitly.

---

## Section 9 — Reviewer's checklist for the founder

When Claude (chat) hands a session report to the founder, the founder uses this checklist. The list is short on purpose; the AI does the heavy review.

- **Does the session report's "what changed" match what I asked for?** If something extra was done, why?
- **Are the user-facing copy changes shown side-by-side, before and after?** Do they sound like the strategy?
- **Did anything touch Part 4 lines, and if so, was it surfaced and explained?**
- **Are there new tech-debt items? Do they make sense?**
- **Are there new tests, and is the AI explicit about what they verify?**
- **Did any production data, schema, or auth/billing config change?** If yes, is the rollback story stated?
- **What's still on the AI's "not verified" list, and am I okay with that being deferred?**
- **Is there anything the AI hedged on that I should push back on?**

If any answer is unclear, the merge waits. The cost of a delayed merge is small. The cost of a bad merge in a compliance-sensitive product is large.

---

## Section 10 — When to stop and ask

Claude Code does not power through ambiguity. The following situations trigger an explicit stop-and-ask, even if it slows the session.

- Production state contradicts a documented assumption.
- A schema change is implied that wasn't in the scope brief.
- A user-facing string change is implied that wasn't in the scope brief.
- An auth, billing, or RLS-policy change is implied.
- An external API behaves differently than the docs say.
- Test coverage would have to be deleted or weakened to ship.
- A Part 4 line is approached, even tangentially.
- A fix is taking more than 1.5x the estimated time.
- The AI itself notices it's losing the thread of the original goal.

**"Stop and ask" means:** post the situation in chat, name the options, recommend one, wait for the founder's call.

---

## Section 11 — Versioning and review

This document is reviewed quarterly alongside strategy.md. Updates require founder approval. The change log lives at the bottom; nothing is silently rewritten.

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | May 2026 | Founder + Claude (chat) | Initial engineering standards and AI working agreement. Anchored to strategy v3.1 and tech-debt tracker. |

---

## Closing note

The reason this document exists is that a non-technical founder + AI execution is a configuration that has not been common in software history. The senior engineers who would have caught the schema drift, the tier-access bug, and the `@ts-nocheck` are not in the room. This document is the proxy for that judgment. It is verbose on purpose: the cost of being verbose is low; the cost of skipping a step in a compliance-sensitive product is large.

When in doubt, re-read Section 3 (reality first), Section 5 (compliance gates), and Section 8 (AI-specific anti-patterns). Those three are where most of the trouble lives.
