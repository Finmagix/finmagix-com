# Finmagix Lite — Known Issues & Tech Debt

**Last updated:** May 18, 2026 (Session H1)
**Status:** Living document. Update when issues are discovered or resolved.

This document tracks known defects, schema/code drift, and deferred work in the Finmagix Lite codebase. Items are organized by priority and grouped into planned cleanup sessions.

## How to use this document

When new issues are discovered, add them to the appropriate priority section. When a cleanup session runs, the items it addresses should be moved to a "Resolved" section at the bottom (or removed entirely after a few months). Cleanup sessions are scheduled deliberately — not when issues feel urgent, but when context is fresh and time is blocked.

---

## Critical (address before scaling beyond beta)

### ~~Schema / types / database drift~~ — RESOLVED in Session A

✓ Resolved by Session A — Phase 1 backfilled production-reality schema (21 profile columns, 4 tables, view, function, type, two triggers); Phase 2 locked canonical taxonomy as DB CHECK constraints, added `self_identified_stage` to preserve wizard 7-value framing, added strategy v3.1 surface tables, fixed the `handle_new_user` trigger that was structurally broken in `schema.sql`, and replaced `schema.sql` with the auto-generated `supabase/schema.dump.sql` flow documented in `supabase/README.md`. The silent-rejection root cause (production CHECK rejected 50 of 51 wizard writes) is fixed in two layers — DB CHECK now matches wizard taxonomy via the canonical-mapping helper, and the wizard's `persist()` throws on Postgres 23xxx codes so future constraint mismatches surface to the user instead of being silently swallowed.

### ~~Tier access control inconsistency~~ — RESOLVED in Session A.5+B

`plan_tier='free'` users could access Pro modules. The helper
`canUserAccessModule(profile, moduleSlug)` already existed in
`lib/modules/access-control.ts` (along with `effectiveTier` handling
active-beta and the migration-window `is_pro=true` override), but only 3
of 12 module pages (`stress_test`, `longevity`, `retirement`) wrapped
their export in the shared `ModuleAccessGate`. The other 8
(`investment-advisor`, `fire-planner`, `social-security-optimizer`,
`college-planner`, `debt-engine`, `tax-efficiency`, `estate-planner`,
`protection-optimizer`) each carried a near-identical local
`XxxGate` function that called `canUserAccessModule` then
`<UpgradeWall>` directly. Drift across the 8 gates was a latent risk;
adding the day-61 `BetaExpiredOverlay` made it concrete (the local
gates wouldn't know to route beta-expired users to the new surface).

Session A.5+B replaced all 8 local gates with `<ModuleAccessGate
module="…">…</ModuleAccessGate>` so every Recommended/Pro module
runs the same three-way decision (authorized → children, beta-expired
→ BetaExpiredOverlay, otherwise → UpgradeWall). The Amit-shape
override (`is_pro=true` + `plan_tier='free'`) is still honored via
`effectiveTier` so paying customers don't get bumped during the
Stripe-webhook → plan_tier migration window.

---

## High priority (address within 4 weeks)

### ~~Cross-tab loss of pending beta code at email confirmation~~ — RESOLVED in Session BC1

**What.** The signup form saved entered beta codes to sessionStorage so they could be redeemed after first authenticated session. sessionStorage is scoped to a single tab. The Supabase email confirmation link opens a new tab; the new tab's sessionStorage had no pending code, redemption never fired, user landed on Free.

**Where.** `app/(auth)/signup/page.tsx`, `components/auth/AuthProvider.tsx`.

**Why it matters.** Silent failure of beta cohort onboarding. Production repro: adsarwate+test3@gmail.com, May 9, 2026, 19:56 UTC.

**Resolution.** Session BC1. Storage swapped to localStorage with 24-hour timestamp wrapper and explicit cleanup rules. Dashboard card added for cross-device case.

### ~~Auth callback only handles OAuth (PKCE) codes, not OTP tokens~~ — RESOLVED in Session B.1

✓ Resolved by Session B.1 (squash commit `05b075f` on main, merged 2026-05-10). Callback now dispatches on URL shape: PKCE (`?code=`) → `exchangeCodeForSession`, OTP (`?token_hash=&type=`) → `verifyOtp`. `EmailOtpType` imported and runtime-narrowed; no casts. Two Supabase dashboard changes paired: Site URL → `https://lite.finmagix.com`, and the Confirm-sign-up email template was edited mid-Step 1.5 to emit explicit OTP-shape links (the template edit was a Section 2.2 surprise — the real fix surfaced during production verification; see Resolved section below). End-to-end verified on production: fresh signup → confirmation email → `/dashboard`.

### ~~No password reset flow~~ — RESOLVED in Session B.1

✓ Resolved by Session B.1 (squash commit `05b075f` on main, merged 2026-05-10). `/forgot-password` and `/reset-password` pages added; callback's OTP branch routes `type=recovery` to `/reset-password` instead of `/dashboard`. Three Supabase dashboard changes: Redirect URLs allow-list adds `https://lite.finmagix.com/reset-password`, the Reset-password email template was edited mid-Step 1.5 to emit explicit OTP-shape links, plus the Step 1.2 Site URL change. End-to-end verified on production: forgot-password → reset email → new password set → old password rejected → new password works.

### ~~Login page hash error parsing — partial coverage~~ — RESOLVED in Session A.5+B

The /login useEffect now also handles `signup_disabled`, the two
rate-limit codes (`over_email_send_rate_limit`,
`over_request_rate_limit`), `server_error`, `unexpected_failure`,
plus a fall-through to the decoded `error_description` so any
unhandled future error_code surfaces a specific message rather than
the generic "Sign in failed." Voice matches the existing
otp_expired/access_denied copy. Test coverage at
`tests/auth/login-hash-errors.test.tsx` (8 cases).

### Phase 6 UpgradeWall personalized state — visually unverified for legacy users

Code shipped in Session 21-O5. Data path verified end-to-end (Phase 7 ModuleCover insight card confirmed rendering for legacy user with populated `pack_reasoning`). But the UpgradeWall personalized state was not visually verified due to the tier access bug (above) — Amit's `plan_tier='free'` should have triggered the upgrade wall, but he was granted Pro access incorrectly.

High confidence the Phase 6 code works because it follows the same data flow as Phase 7 (which works). To verify visually, need a test user with: legacy profile shape (populated `pain_points`, NULL `life_stage`), correctly-applied free tier without stale Pro grants, and clicking a Recommended Pack module.

**Effort:** 30 minutes (test setup + verification). **Cleanup Session:** Open.

### ~~`HealthCheckup.tsx` has `// @ts-nocheck`~~ — RESOLVED (stale; verified during Session H1)

The entry was stale. `components/HealthCheckup.tsx` line 1 is `'use client';`; there is no `@ts-nocheck` anywhere in the file, and `npx tsc --noEmit` runs clean against it. The V2 migration (sessions c301e23 and follow-ups) decomposed the orchestrator into typed step + result components and removed the directive somewhere along the way without an explicit tech-debt update. Logged here so we don't re-investigate.

### Health Checkup history rows have `band_id = NULL` for both post-May-1 rows

After the G.1 grading-unification migration (which added a `band_id smallint` column on every module-history table with a backfill function), `health_checkup_history` has the column but at least 2 of 2 production rows written after 2026-05-01 still have it NULL. The save path (`saveReport` in `lib/healthCheckupPersistence.ts`) only writes `fitness_score`, `ai_narrative`, `results`, `inputs`, `report_name`, `mode` — it never writes `band_id`. The G.1 backfill function runs only on legacy rows; new inserts skip it. Fix is to compute `getBand(fitness_score).band_id` inline at save time and write it as a column.

**Risk:** Not visible to users today because `ScoreHero` recomputes the band via `getBand(fitness_score)`, but it leaves the audit-trail column unpopulated. Any downstream analytics that reads `band_id` from the column instead of recomputing will see NULL and bucket users incorrectly.

**Effort:** 30 minutes (edit `saveReport` to write `band_id`, plus the parallel path in `ResultsActions.tsx` if that path is still in use). **Cleanup Session:** Open; pairs with the audit-trail schema-gap item below.

### Audit-trail schema gap on `health_checkup_history`

Per strategy v3.1 Part 5.6 (Governance Layer), every saved analysis should carry `engine_version`, `assumptions`, `alternatives_considered`, and `governance_checks_passed` columns so a future regulator can answer "what code produced this number, with what assumptions, on what date." The `health_checkup_history` table has none of these. Adding them retroactively is straightforward (`ALTER TABLE` with defaults + a save-path edit) but invasive enough to warrant its own session.

**Risk:** Compliance gap. Today there is no way to reproduce a saved row's score from first principles without checking out the git SHA that wrote it, which we don't record.

**Effort:** 2 hours (schema + save path edits across modules, plus a backfill of `engine_version='legacy-pre-h1'` on existing rows). **Cleanup Session:** Open; consider for Session E or a dedicated audit-trail session.

### Generate supabase/schema.dump.sql baseline

**What.** The repo does not yet contain a baseline snapshot of the production schema. Production schema is reconciled (Session A Phase 2). The dump file is a derived artifact intended for use by the CI drift check (also pending — see related item).

**Where.** `supabase/schema.dump.sql` (does not exist).

**Why it matters.** Without the baseline dump, the future CI drift check has nothing to compare production against. The migration chain is currently the source of truth for the schema; the dump is a snapshot. App behavior does not depend on the dump file — no code reads it, no user encounters it.

**Resolution.** Generate from CI environment (Linux, native IPv6 support) as part of adding the drift-check job. Local generation was attempted on Windows and blocked: Direct connection (db.PROJECT_REF.supabase.co) requires IPv6, which is not available on the local network. Session pooler and Transaction pooler both reject the dotted username (postgres.PROJECT_REF) — error consistently shows "user postgres" regardless of password reset, indicating a Supabase-side parser issue not solvable from the client.

**Estimated effort.** 1 hour combined with CI drift-check setup. Future session.

### CI drift check — production schema vs `supabase/schema.dump.sql`

Session A replaced the hand-maintained `schema.sql` with `schema.dump.sql`, which is auto-generated from production after each migration ships (`npx supabase db dump --schema public > supabase/schema.dump.sql`). Currently we rely on humans not skipping the regeneration step. A CI job should diff the file against the live production schema on every PR and fail the build on drift. This catches the case where someone applies SQL via the Supabase SQL Editor without committing a migration — the practice that produced the drift Session A resolved.

**Effort:** 1-2 hours. **Cleanup Session:** D (process and tooling).

### ~~Wizard / engine `life_stage` semantic mismatch~~ — RESOLVED in Session A

✓ Resolved by Session A — wizard now writes both `life_stage` (canonical 5) and `self_identified_stage` (raw 7) via `lib/recommendations/lifeStageMapping.ts`. Engine reads `life_stage`; voice/analytics surfaces can honor self-framing via `self_identified_stage`. The "writes NULL" symptom was the legacy CHECK silently rejecting 6 of 7 wizard values; root cause fixed in Phase 2.

---

## Medium priority (address before public launch)

### Compliance review pass on existing engine reason text

Several existing module reasons in `lib/recommendations/engine.ts` use borderline phrasing that survived earlier review but warrant a deliberate compliance pass:

- "You may be leaving meaningful tax savings on the table" (tax_efficiency) — borderline, "may be" softens
- "Average user finds $3,000–$8,000 in annual tax optimization opportunities" — specific dollar claim, needs substantiation or removal
- "Most impactful financial planning steps" — superlative claim
- "Most people pay more tax than they need to" — borderline directive

Session 21-O5 partial pass deferred B3-B4 items. Full review needed.

**Effort:** 1-2 hours. **Cleanup Session:** E.

### B4 disclaimer language — needs legal review

`components/dashboard/PlanSummary.tsx:17` and `app/api/plan-summary/route.ts:82` use `"Consult a licensed financial advisor before making decisions."` This is standard regulatory disclaimer language but is inconsistent with the rest of the codebase's "CFP professional" convention. Deferred from Session 21-O5 because legal review is required before changing disclaimer wording.

**Effort:** Pending legal consultation. **Cleanup Session:** E.

### Diagnosis screen dimension bar visual inconsistency

The 6 estimated dimension bars on the diagnosis screen (Income, Debt, Retirement, Tax, Protection, Estate) sometimes render nearly full but are labeled "Worth checking." Either the fill calculation is inverted relative to status labels, or the labels are wrong. Needs design + engineering decision.

**Effort:** 1 hour. **Cleanup Session:** C.

### Email confirmation rate limit on Supabase free tier

Operational constraint, not a code bug. Supabase free tier limits confirmation emails to ~3-4 per hour. Hit during Session 21-O5 testing. Document in runbook.

**Effort:** 15 minutes (runbook update). **Cleanup Session:** D.

### `pain_points` column drop

Session A sunset all `pain_points` reads in code and ran a one-shot SQL backfill into `financial_concerns`. The column itself remains nullable on `profiles` so legacy rows are preserved during a transition period. Next step: confirm via traffic logs that no read of the column happens for one release cycle, then drop the column and remove `applyPainPointScoring` + `mapPainPointsToConcerns` (currently `@deprecated`) from `lib/recommendations/engine.ts`. Don't rush — the column costs nothing while waiting.

**Effort:** 30 minutes (single migration + small code delete). **Cleanup Session:** Follow-up to Session A; can roll into Session D or E.

### `risk_tolerance` and `risk_capacity` wizard capture

Session A added the columns + CHECK constraints (defaulting null). The wizard does not yet capture these per strategy v3.1 Part 5.1 (scenario-based intake). Engine consumers of these fields also do not exist yet. Whole feature lives in Session E (goals + risk capture).

**Effort:** Tracked in Session E. **Cleanup Session:** E.

### 51 ex-user profiles with permanently NULL `life_stage`

Pre-Session-A, the legacy `profiles_life_stage_check` constraint silently rejected 50 of 51 wizard writes (only `mid_career` and `pre_retirement` matched the constraint values; the wizard's other 5 options were rejected). Those user picks are not recoverable — there is no source field to backfill from. A future session may add a soft re-prompt UX that asks affected users to re-confirm their stage on next dashboard load, surfacing the prompt without blocking the dashboard.

**Effort:** 1-2 hours (re-prompt UX + tracking). **Cleanup Session:** Open; consider for Session E or a dedicated UX session.

### `user_journey.streak_days` and `total_sessions` exist but strategy forbids streaks

Discovery 4 confirmed both columns exist in production. Strategy v3.1 Part 6 explicitly forbids streak/gamification UX ("No streaks. No badges. No 'day 5 of your 30-day streak.'"). The columns are currently populated but no UI reads them. Either remove the columns and any incrementing code paths, or document the non-use clearly so they can't be re-surfaced by accident.

**Effort:** 1 hour. **Cleanup Session:** Open; rolls into Session D or future.

### No test coverage on `pending-code-storage` helper

Added in Session BC1. (The original entry also tracked
`PendingBetaCodeCard` but no such component exists in the codebase
today; that part of the entry was stale.) The "no test runner exists"
claim is also now stale — `package.json` ships vitest + playwright,
and Session A.5+B established the component-test pattern at
`tests/auth/`, `tests/api/`, `tests/dashboard/`, `tests/modules/`.

What's still open: a vitest unit suite for
`lib/beta-codes/pending-code-storage.ts` covering the 24h TTL, SSR
guard, write-probe (Safari private-mode), and the clear-on-sign-out
behavior. Small and pure — could be backfilled in any session
touching that file.

**Effort:** 30-45 minutes. **Cleanup Session:** Open; trivial to
roll into the next session that touches the helper.

### `module_inputs` / `module_progress` / `module_results` CHECK allows only 4 modules

The CHECK constraints defined in `schema.sql` (and presumably still present in production) restrict `module` text values to `('health_checkup', 'fire_planner', 'longevity', 'stress_test')` — only 4 of 12 ModuleSlug values. Production routes around this by using per-module result tables (`debt_optimizer_results`, etc.) instead of writing to the shared tables. The 4-module constraint is broken-looking but not actively breaking anything; future cleanup can either expand the CHECK to all 12 values or formally deprecate writes to the shared tables.

**Effort:** 30 minutes. **Cleanup Session:** Open.

### ~~`beta_code_redemptions` has no FKs on `code_id` or `user_id`~~ — RESOLVED in Session A.5a (revised)

✓ Resolved by Session A.5a (revised) on 2026-05-07. Migration `supabase/migrations/20260507_session_a5a_add_beta_code_redemption_fks.sql` adds `code_id → beta_codes(id)` and `user_id → auth.users(id)`, both `ON DELETE SET NULL` to preserve audit history. Plain `ADD CONSTRAINT` (no `NOT VALID`) — production query confirmed zero existing rows in `beta_code_redemptions`, zero orphans. Note that the FK to `auth.users` differs from the original tech-debt entry's wording (which mentioned `profiles.id`); the redemption row's `user_id` actually references the auth user, not the profile. The auth-users FK is the correct target since redemptions are an auth-event audit, not a profile-state record.

### `docs/tech-debt.md` claim drift — periodic reconciliation needed

Session H1 audit found one stale claim (`HealthCheckup.tsx has @ts-nocheck` — false; verified absent) that had survived multiple sessions without being marked resolved. This document is updated reactively when work happens, not proactively when work elsewhere happens to retire an item. Recommend a once-per-quarter sweep that greps the codebase for each claim's anchor (`@ts-nocheck`, schema fragments, hardcoded strings) and reconciles.

**Effort:** 1 hour per sweep. **Cleanup Session:** Operational, not engineering — schedule alongside Session D process tooling.

### Pre-existing Google OAuth "first-click silently fails" bug — possibly already resolved

Predates Session B.1, surfaced during Step 1.2 V2 preview verification. Pattern: first "Continue with Google" click bounces back to `/login`; second click succeeds. Cause likely a session state or cookie-domain issue, not the callback itself.

Step 1.5 V2 on production passed on the first click — the bug may have been resolved as a side effect of the Site URL change (cookies now set on the same domain users land on). Treat this entry as a watch item: confirm during normal use over the next few weeks before marking resolved.

**Effort:** Verification only if confirmed gone. **Cleanup Session:** Open.

### "CFP-standard" copy on auth and onboarding surfaces — Part 4 violation

Strategy v3.1 Part 4 forbids "CFP-grade," "CFP-standard," or any language implying CFP equivalence. Known instances surfaced during Session B.1:

- `app/(auth)/login/page.tsx` left panel: "12 CFP-standard planning modules" (new B.1 auth pages deliberately did NOT propagate this — see Resolved section)
- `/welcome` onboarding screen: "Finmagix gives you CFP-standard financial analysis" (B.1 V2 verification surfaced this)

Needs a repo-wide grep for similar phrasing (`CFP-standard`, `CFP-grade`, `CFP-equivalent`, "like a CFP would," etc.) followed by a single copy-revision pass with founder review.

**Effort:** 1 hour. **Cleanup Session:** Open; rolls into Session E (compliance) or a dedicated copy session.

### Supabase reset-password email template is bare HTML

The signup confirmation email had been styled previously; the reset-password template was edited during Step 1.5 to emit OTP-shape links but its HTML body is plain. Functional, visually inconsistent with the signup email. Cosmetic.

**Effort:** 30 minutes (apply the signup template's styling). **Cleanup Session:** Open; pairs naturally with the next item.

### Supabase confirm-sign-up email copy uses "Financial Fitness Score" framing

Stale from before the strategy broadened from a single-score positioning to the 12-module platform. Founder flagged during Session B.1. Needs revision alongside other email-template copy.

**Effort:** Combined with reset-password styling above, ~1 hour. **Cleanup Session:** Open.

### Dashboard module-probe floor: ~2s for the 12 parallel results queries

CP2 timing instrumentation on the founder's account 2026-05-19 measured `[dashboard] profile+modules: 1.987s` for the parallel block in `app/(app)/dashboard/page.tsx` that does `Promise.all(profileQuery, getModulesForUser)`. `getModulesForUser` fires 12 separate `.maybeSingle()` queries (one per module-results table) plus a `module_progress` query — 14 round trips total, parallelized. Dominated by Supabase network RTT × 12 concurrent connections, not query time.

CP2 partially addresses the symptom by streaming `getCompletedResultsForSummary` (the other ~0.8s block) behind a Suspense boundary, so module rows paint after only this block resolves. The 2-second floor itself is unchanged.

**Risk:** Slow first paint on dashboard. Acceptable for beta but worth a focused optimization session before scaling.

**Effort:** 3-6 hours. Options ranked: (a) Combine the 12 probes into a single Postgres RPC / view that returns one row per module — single round trip; biggest win. (b) Use Supabase's compound `or()` query if the per-module tables share a common shape. (c) Cache the module-status payload in Redis / Supabase Edge KV with a short TTL — staleness trade-off. **Cleanup Session:** Open; consider for Session D (tooling) or a dedicated dashboard-perf session.

### Immutable bad row `922d2842-a657-4aa8-b71b-a2f3501170fd` on `health_checkup_history`

Production user `3c136d61-d9c3-4eaf-9f8b-b6fac4636da0` has a `health_checkup_history` row with `fitness_score=83`, `band_id=NULL`, `results=` full 9-key jsonb, `inputs={}` (empty), `ai_narrative=NULL`. Written by the `ResultsActions` save path before commit `f7b0b0a` (which made the inputs round-trip into `resultPayload`). With Session H1 the row now renders correctly — hero=83, breakdown sums to ~83, OverviewTab and input-bound deep tabs suppressed — but the underlying row remains unfixable (no source inputs exist to backfill from). Keep as manual-QA target until the row is naturally aged off the user's history or the user clears it.

**Risk:** None to other users. The row is a one-off survivor of the legacy save path.

**Effort:** Zero (intentional non-fix). **Cleanup Session:** Not applicable — flagged here so a future investigation doesn't waste cycles "fixing" it.

### Duplicate "Save report" UI on Health Checkup results screen

The results page renders both `SaveDialog` (orchestrator-driven, naming + save) AND `ResultsActions` (a generic across-modules action bar that has its own "Save report" button writing directly to the same `health_checkup_history` table). Both paths exist for historical reasons — `SaveDialog` is the V2 path, `ResultsActions` is the cross-module action surface. On a clean wizard run users can hit Save twice and produce two rows for the same analysis.

**Risk:** UX confusion + duplicate-row pollution. Today users do not seem to be saving twice in practice, but the surface is fragile.

**Effort:** 1 hour (decide which path stays, remove or gate the other). **Cleanup Session:** Open; rolls into a cross-module results-page consolidation pass.

### Missing hero-and-breakdown reconciliation tests on the other 11 module results screens

Session H1 added 4 reconciliation tests to `components/HealthCheckup.integration.test.tsx` that prove the hero band matches the breakdown band on a saved-row view. The same bug class — hero reading from a saved column while the breakdown derives from possibly-empty inputs — likely exists on the other 11 modules (debt engine, retirement, longevity, etc.) but has no automated detection.

**Risk:** Same-shape bug could be present and unreported on any module that supports a saved-report view.

**Effort:** 2-3 hours (port the H1 test pattern to each of the 11 module integration suites). **Cleanup Session:** Open; rolls into Session C if it's expanded, or a dedicated cross-module-test session.

### Stranded production test-user profiles — manual reconciliation needed

Three accounts created during pre-B.1 / B.1 testing that need cleanup or normalization:

- `adsarwate+test3@gmail.com` — pre-BC1, beta code applied manually by founder (per BC1 session report)
- `adsarwate+bc1run2@gmail.com` — BC1 test-run residue
- `adsarwate+stepb1prod2@gmail.com` — Session B.1 V1 / V3 verification account

Each needs review: delete entirely, or normalize the `profiles` / `beta_code_redemptions` / `events` rows to a known-good state. Manual Supabase Studio task; no code changes required.

**Effort:** 30 minutes. **Cleanup Session:** Operational, not engineering.

---

## Future (vision-driven)

### Tiered-pricing model redesign

Founder's CFP-style flow vision: explicit tiered structure (Free / Recommended Pack / Pro) where TIER CONTENTS are personalized per user (different users see different modules in their Recommended Pack tier), with transparent monthly/annual pricing for paid tiers. Current implementation has static tier assignment with personalization as a visual highlight layer. These are different products. Vision document to be drafted in a separate session.

**Effort:** TBD. **Cleanup Session:** Separate feature session, not Cleanup A-E.

### Dashboard warmth / copy refinement

Current dashboard copy is correct, compliant, and educational, but reads cold and business-like. Adding warmth (welcoming greeting, empathetic acknowledgment, encouraging milestone language, possibly time-of-day greetings) without compromising compliance.

**Effort:** TBD. **Cleanup Session:** Separate feature session.

---

## Cleanup Session Plan

### ~~Session A — Schema-Reality Reconciliation~~ — COMPLETED 2026-05-03
**Priority:** Most urgent. Schedule within 1 week.
**Goal:** Get `types/platform.ts`, `supabase/schema.sql`, deployed Supabase, and engine code value assumptions into agreement. Write comprehensive migration file. Add CI check for drift detection.
**Effort:** 2-3 hours.
**Addresses:** Critical/Schema drift, High/Wizard `life_stage` mismatch.
**Result:** Phase 1 (chore commit) backfilled 21 profile columns, 4 tables, 1 view, function + type + 2 triggers — zero behavior change. Phase 2 (feat commit) locked canonical taxonomy as 9 DB CHECK constraints, added `self_identified_stage`, added strategy v3.1 surface tables (goals, intake_responses, module_suggestions, analyses, timeline_entries, events), fixed `handle_new_user` trigger, ran one-shot `pain_points → financial_concerns` SQL backfill, sunset `pain_points` reads in code, fixed `persist()` to surface 23xxx errors, replaced `schema.sql` with `schema.dump.sql` auto-generation flow. Session B is unblocked.

**Now session B is unblocked** since Phase 1's drift-correction landed cleanly. Item #2 (tier access control) and the auth-flow items can be tackled in any order against a stable schema baseline.

### ~~Session B.1 — Auth Flows~~ — COMPLETED 2026-05-10
**Priority:** High. Closed.
**Goal:** OTP token handling, password reset flow.
**Effort:** ~4 hours across 5 steps (1.1 scoping, 1.2 callback + Site URL, 1.3 password reset pages, 1.4 PR + merge, 1.5 production verification).
**Addresses:** High/auth callback OTP (resolved), High/password reset (resolved).
**Result:** Squash commit `05b075f` on main. Two new pages (`/forgot-password`, `/reset-password`), one route handler rewritten (`/api/auth/callback`), three Supabase dashboard changes paired with code (Site URL, Redirect URLs allow-list, two email-template edits). End-to-end verified on production (V1 fresh signup, V2 Google OAuth, V3 password reset).

### Session B.2 — Tier Access Consolidation
**Priority:** Critical. Schedule within 2 weeks.
**Goal:** Single tier-access helper (`canUserAccessModule(profile, moduleSlug)`) consumed by every Pro-module route. Eliminate the parallel `is_pro` (legacy) and `plan_tier` (canonical) checks; today they can disagree, which is the root cause of the revenue-leak surface. Verify the affected user (`plan_tier='free'` accessing Pro modules) is fixed.
**Effort:** 5-7 hours across 7 steps.
**Addresses:** Critical/Tier access (#2).

### Session C — Diagnosis Screen Polish + Engine Refinement
**Priority:** Medium. Schedule within 4 weeks.
**Goal:** life_stage handling decision, dimension bar visual fix, life-stage-driven engine branch audit, remove HealthCheckup `@ts-nocheck`.
**Effort:** 2 hours.
**Addresses:** High/HealthCheckup, High/wizard life_stage, Medium/dimension bars.

### Session D — Process and Tooling
**Priority:** Medium. Schedule with Session A or shortly after.
**Goal:** Migration workflow documentation, staging Supabase environment, runbook updates.
**Effort:** 1-2 hours.
**Addresses:** Medium/email rate limit, plus general process improvements.

### Session E — Compliance Language Audit
**Priority:** Before public launch (post-beta scaling).
**Goal:** Manual review of every user-facing string. Document language guidelines. Engage compliance-aware reviewer for borderline content. Resolve B4 disclaimer with legal review.
**Effort:** 2-3 hours plus external review time.
**Addresses:** Medium/engine reason text, Medium/B4 disclaimer.

---

## Resolved

(Track resolved items here once cleanup sessions complete.)

### Resolved during Session 21-O5

- Phase 10 backfill bug: dashboard guard required `life_stage` truthy, excluding legacy users. Fixed by relaxing guard to allow `life_stage || pain_points`. Verified end-to-end with Amit's profile.
- Auth callback expired link UX: login page now parses URL hash fragments, displays specific error messages, offers resend confirmation flow.
- Phase 1 SQL deployment: 6 Smart Onboarding columns added to production Supabase via SQL Editor. (Note: still need migration file committed — see Schema drift item above.)
- 12 compliance text fixes: 5 narrative route LLM self-IDs corrected, 2 prescriptive report strings softened, 6 mixed user-facing strings updated.

### Resolved during Session A

- Schema/types/database drift across `types/platform.ts`, `supabase/schema.sql`, and production. Phase 1 captured production reality (21 profile columns + 4 tables + view + function + type + 2 triggers) into `supabase/migrations/20260503_session_a_phase_1_backfill_production_reality.sql`. Phase 2 reconciled the canonical taxonomy in `supabase/migrations/20260503_session_a_phase_2_taxonomy_and_strategy_v31.sql`.
- Wizard `life_stage` silent-rejection: fixed in two layers — canonical CHECK now matches wizard taxonomy via `lib/recommendations/lifeStageMapping.ts`, and `OnboardingWizard.tsx`'s `persist()` throws on Postgres 23xxx codes so future constraint mismatches surface to the user.
- Phase 10 returning-user backfill block in `app/(app)/dashboard/page.tsx`: removed. Replaced by the one-shot `pain_points → financial_concerns` SQL backfill in Phase 2 §2.8 plus the sunsetting of `pain_points` reads throughout the code.
- `supabase/schema.sql` deleted (was structurally broken — its `handle_new_user` trigger inserted into a column the same file did not declare). Replaced with the migration-driven flow documented in `supabase/README.md`; `supabase/schema.dump.sql` is auto-generated from production after each migration.

### Resolved during Session A.5a (revised)

- `beta_code_redemptions` foreign keys on `code_id` and `user_id`: added via `supabase/migrations/20260507_session_a5a_add_beta_code_redemption_fks.sql`. Both `ON DELETE SET NULL`. Plain `ADD CONSTRAINT` after orphan-query verification confirmed zero existing rows and zero orphans in production.
- Redemption-attempt audit gap: every call to `app/api/redeem-beta-code/route.ts` now writes one row to `public.events` per attempt (success and all 12 failure branches), with `event_type = 'beta_code_redemption_attempt'`. The full code string is never logged — only `attempted_code_prefix` (first 4 chars). See `docs/beta/code-generation-workflow.md` for query patterns and outcome enum.
- Cohort-code generation tooling: `scripts/generate-beta-codes.mts` provides a single-row insert into `beta_codes` with argument validation, collision check, and uppercase normalization. Runs on Node native TS-stripping (matching the `_smoke.mts` precedent — no new devDependency).
- `validateBetaCode` extracted from inline route logic into `lib/server/beta-codes.ts` as a discriminated-union return helper, enabling future test coverage when test infrastructure is introduced.

### Resolved during Session BC1

- Cross-tab loss of pending beta code at email confirmation: storage primitive swapped from sessionStorage to localStorage via the new `lib/beta-codes/pending-code-storage.ts` helper. The helper wraps entries with a 24-hour timestamp and is callable from both the signup tab and the email-confirmation tab (localStorage is shared across tabs of the same origin; sessionStorage is not). Cleanup rules: cleared on successful redemption, cleared on 4xx responses, cleared on sign-out, retained on 5xx/network failures so the next mount can retry within the 24-hour window. Stale entries are treated as absent and cleared on read.
- Cross-device entry surface for stranded users: new `components/dashboard/PendingBetaCodeCard.tsx` is rendered on the dashboard for users with `profile.beta_code_used === null` and no pending code in localStorage. The card is a CTA to `/settings/beta-access` (which already provides the activation form); no inline form was added on the dashboard, so there is one canonical redemption surface.
- Concurrency guard on retry: a `useRef` in `AuthProvider.tsx` prevents `redeemPendingBetaCode` from firing twice when `getSession()` and `onAuthStateChange` both fire on initial mount.

### Resolved during Session B.1

- **Auth callback OTP shape support** (tech-debt #3). `app/api/auth/callback/route.ts` rewritten in Step 1.2 to handle both PKCE and OTP URL shapes; Step 1.3 added the 4-line `type=recovery` → `/reset-password` redirect. `EmailOtpType` imported from `@supabase/supabase-js`; valid values pinned with `as const satisfies readonly EmailOtpType[]`; runtime-narrowed via a `value is EmailOtpType` type guard. No casts, no `@ts-*` directives. Paired Supabase dashboard changes: Site URL `https://finmagix-lite.vercel.app` → `https://lite.finmagix.com`, and the Confirm-sign-up email template now emits `{{ .SiteURL }}/api/auth/callback?token_hash={{ .TokenHash }}&type=signup`.

  **Section 2.2 surprise:** the email-template edit was NOT in the original B.1 scope brief. It was added during Step 1.5 production verification after V1 initially failed: Vercel logs showed `{{ .ConfirmationURL }}` was emitting PKCE-shape links (Supabase's default for this project), so the otherwise-correct OTP branch was never being reached for real signups. The fix is a Supabase dashboard config change, manually reversible.

- **Password reset flow** (tech-debt #4). `app/(auth)/forgot-password/page.tsx` and `app/(auth)/reset-password/page.tsx` added in Step 1.3. Forgot-password page calls `supabase.auth.resetPasswordForEmail` with `redirectTo: ${origin}/reset-password`; renders a success state regardless of whether the email exists (Supabase enumeration prevention). Reset-password page checks for an active recovery session on mount; if present, accepts a new password via `supabase.auth.updateUser` and redirects to `/dashboard`; if absent, renders the "This link has expired" state with a CTA back to `/forgot-password`. Paired Supabase dashboard changes: Redirect URLs allow-list adds `https://lite.finmagix.com/reset-password`; the Reset-password email template now emits `{{ .SiteURL }}/api/auth/callback?token_hash={{ .TokenHash }}&type=recovery` (same Section 2.2 surprise pattern as #3).

- **Part 4 discipline on new auth surfaces.** The "12 CFP-standard planning modules" string from `login.tsx`'s left panel was deliberately NOT propagated to the two new auth pages. New pages read "12 planning modules. Personalized to your life stage. AI-powered insights on every assessment." The original instance on `login.tsx` is now tracked as a separate active tech-debt item above.

- **Squash commit / deploy.** Branch `session-B1-auth-flows` (commits `031c534` + `3a212c0`) squash-merged to `main` as `05b075f` on 2026-05-10. Vercel production deploy ID `3XjEeFBeS`, build 37s. Branch retained for 24h rollback safety per founder instruction.

### Resolved during Session H1 (initial commit + follow-up)

- **Headline-vs-breakdown contradiction on saved Health Checkup reports.** Production row `922d2842...` (`fitness_score=83`, `inputs={}`, `results=` full 9-key jsonb) rendered with hero score 83 but a dimension breakdown summing to ~7 — hero read from `restoredScore` while the breakdown derived from empty inputs at age 35 defaults. Fix introduces `SavedSnapshot` in `components/HealthCheckup.tsx` carrying `{ fitnessScore, results, inputsAreEmpty }`; `ResultsView` now sources both the hero score and the 6 breakdown rows + 4 hero chips from the saved `results` jsonb when present, falling back to the engine-derived values only when there is no saved row.

- **Insights tab agreement (follow-up).** The Insights tab's speedometer gauge, radar chart, and bar charts now also read from the saved row when present. `InsightsTabView` accepts optional `fitnessScoreOverride` and `pointsOverride` props; the orchestrator threads `savedSnapshot.fitnessScore` and the 6 points extracted from `savedSnapshot.results` through `ResultsView`. Result: every surface on the page (hero, chips, breakdown, Insights) shows the same numbers.

- **Stale-narrative prompt (follow-up).** Legacy ResultsActions-saved rows have an `ai_narrative` text that was generated against derived-from-empty-inputs (~6) instead of the saved fitness_score (~83). The text contradicts the hero. New `narrativeIsFresh` orchestrator state plus a `narrativeIsStale` prop on `AiNarrative` hide the stale text and show a `role="status"` prompt: "This summary was generated from an earlier scoring and may not reflect your saved score of 83. Click Regenerate to see analysis based on your saved score." No auto-AI call — user opt-in only. Cost impact: zero unless the user clicks Regenerate.

- **Regenerate path fixed for empty-inputs rows (follow-up).** Without this, clicking the Regenerate button would have fed `formatNarrativePrompt(inputs, derived)` to the AI — with all-zero inputs — producing another narrative anchored to score 6. New `formatSavedRowPrompt(snapshot)` helper feeds the AI only the saved score and the per-dimension breakdown when `savedSnapshot.inputsAreEmpty`. Regenerate now produces a coherent narrative anchored to the saved score.

- **Band-id precedence documented in code.** `components/HealthCheckup.tsx` and `components/health-checkup/results/ResultsView.tsx` both carry a comment naming the precedence rule: `results.band_id` (jsonb on the saved row) → `band_id` column (G.1 backfill, not threaded today) → `getBand(fitness_score)` (what ScoreHero actually runs). The third path wins because `fitness_score` is the source of truth post-G.1 and the score the user sees on the ring.

- **Option (a) suppression — tried and walked back.** The initial H1 commit hid Overview/Income/Assets/Retirement/Risk/Benchmarks tabs + the MetricsHeadline when a saved row had empty inputs. Founder localhost testing rejected this: "I want all tabs back." The follow-up commit removes the suppression entirely. All tabs render regardless of inputs state. For the one legacy bad row in production, the deep tabs show mostly-zero derived-from-defaults values — imperfect but more honest than hiding entire sections, and the trade-off only affects that one historical row.

- **Failing-first test discipline (Section 8.4).** Six tests landed in `components/HealthCheckup.integration.test.tsx` under describe `Session H1 — saved-row reconciliation` (4 from the initial commit, 2 added in the follow-up plus 1 rewritten):
  - Test 1 (full inputs + full results): hero band Solid + breakdown sum in Solid band, within ±4 of 83 — **passed on main pre-fix** (regression baseline)
  - Test 2 (empty inputs + full results): same reconciliation assertion — **failed on main pre-fix** (`expected 'A lot to build from here' to be 'Solid'`); passes post-fix
  - Test 3 (initial: Option a suppression / follow-up rewrite: all tabs visible): rewritten in the follow-up to assert all 7 tabs visible (College hidden by wantsCollege rule). Initial assertion failed pre-fix; rewritten assertion passes post-follow-up.
  - Test 4 (fresh wizard regression): resume at risk step with FULL_INPUTS, click Generate report, assert breakdown sum lands in Solid band — **passed throughout** (regression baseline)
  - Test 5 (follow-up: stale-narrative prompt): empty-inputs row with saved narrative shows the Regenerate prompt and hides the stale text — added in follow-up, passes
  - Test 6 (follow-up: healthy-row regression guard): full-inputs row with saved narrative shows the narrative normally with no Regenerate prompt — added in follow-up, passes

- **Stale `@ts-nocheck` entry retired.** Tech-debt item #6 was marked stale and moved to the Resolved-stale list after verifying line 1 of `components/HealthCheckup.tsx` is `'use client';` with no `@ts-nocheck` anywhere and `tsc --noEmit` clean. See the corresponding tech-debt item above.

- **Branch.** `session-H1-health-checkup-saved-row-source-of-truth`. Two commits (initial + follow-up); will squash on merge.
