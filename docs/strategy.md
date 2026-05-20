# Finmagix Lite — Strategy

**Version:** 3.1
**Status:** Canonical operating direction. Single source of truth for product, engineering, and compliance decisions.
**Last updated:** May 2026
**Related documents:** `docs/cfp-cfa-principles.md` (compliance baseline), `docs/tech-debt.md` (cleanup tracker), `docs/voice-patterns.md` (microcopy reference)

**Change from v3.0:** Tightened intake to honestly fit "up to 10." Decision journal renamed to **timeline** and reframed as automatic recording (the platform records; the user reads if they choose). Check-in shifted from a four-week pulse to an always-available surface with passive re-engagement. Two new email surfaces specified: a monthly "what we noticed" content email (combining what was previously the "what changed" digest) and a separate, behavior-triggered upgrade prompt path. Two new prohibitions added to Part 6: no obligation surfaces, and no blending of content emails with upgrade prompts. Compliance commitments and voice rules unchanged.

**Change from v2.0 (carried forward):** Product shape simplified to match what we are actually building. Up to 10 intake questions, deterministic rule-based mapping to up to 5 suggested modules, static tier composition, summation layer (renamed from synthesis), narrow guide bot. Compliance commitments and voice rules unchanged.

---

## How to use this document

This is the constitution. When a question arises about whether to build a feature, use a phrase, or structure an output a particular way, the answer is here — not invented anew. If it isn't here, we add it here before we ship.

The most important sections to re-anchor on quarterly are Parts 1, 4, 6, and 7 — who we serve, the lines we won't cross, what we're saying no to, and the voice we hold to.

---

## Part 1 — Who Finmagix Lite is for, and what it is

Finmagix Lite is for the **85% of American adults who have been ignored by traditional financial advisory.** They don't have $250,000 in investable assets. They don't have a CFP they can call. They've been quietly told by the financial industry that they're not worth serving — that their money problems are too small, too messy, or too unprofitable to warrant a professional's time.

They are not stupid. They are not lazy. They are working two jobs, raising kids, paying down student loans, taking care of aging parents, and trying to hold a household together. They've avoided thinking about money not because they don't care, but because every time they've tried, the experience has been alienating — jargon they don't understand, products that feel like they're being sold to, advisors who don't return their calls, apps that make them feel worse than when they started.

**The platform exists to give this person what a friend who happened to be a CFP would give them: kind structure, honest perspective, and a small thing they can do this week.**

Not advice. Not directives. Not a sales pitch. Not a 200-question intake before they get any value. Just the experience of being seen, getting clearer, and feeling like they have a hand to hold while they figure out what they want.

It is a **structured-thinking platform for personal financial decisions.** Its primary face is gentle, warm, and conversational. The CFP-level rigor lives in the schema, the audit trail, and the governance rules. What the user sees is kinder than that rigor implies.

It is a **decision-support system.** It is **not** a financial advisor, **not** a portfolio manager, **not** a fiduciary acting on the user's behalf. It does not tell users what to do.

**The strategic tension we hold:** the avoidant user wants someone to point at one thing and say "start here." Compliance forbids us from doing exactly that. We resolve this through voice and progressive disclosure, not by abandoning either commitment. The platform's voice does the friend-work ("here are some places people in similar spots often find clarity first — does any of these resonate?"). The structure keeps the user's options small at any moment. The depth is there for users who want it. The user always picks. Many fintechs fail by sacrificing warmth for compliance, producing sterile products. Many fail the other way and produce advice without a license. We do the harder thing — both — and the discipline cost is real.

Part of holding the line is keeping the user's required burden minimal. The platform asks for almost nothing beyond intake and what each module needs to function. The timeline records what the user does; the user does not maintain it. Check-ins are available, not pushed. The bot answers when asked, never initiates. The user does work only when they choose to.

The marketing line, in the user's voice: *"It's like having a friend who actually understands money — and won't make you feel dumb for asking."*

---

## Part 2 — The product

**In one paragraph:** A user signs up, answers up to ten short conversational intake questions, and receives a suggested set of up to five modules to focus on first — drawn from a fixed catalog organized into three static tiers (Free, Recommended, Pro). The suggestions come from a deterministic rule set, visible to the user on demand. Modules in any tier are visible to all users with clear pricing; running a paid module against the user's own data requires upgrade. After modules complete, a summation layer surfaces tensions, confirmations, and gaps across the user's analyses — without ranking or recommending. Retention surfaces support re-engagement without nagging: a narrow guide bot scoped to platform navigation and general financial education, a check-in surface always available in navigation that the user can reach for when their life changes, and a monthly content email that combines a brief observation about the user's recent activity with a general digest of changes in financial regulations and limits. Behavior-triggered upgrade prompts are a separate email path, not blended with content.

**Expanded:**

The product is built around the idea that the avoidant user's first three minutes determine whether they come back. The intake is short, conversational, and bounded — never a 200-question audit. The suggestions are framed as *suggestions* the user can accept, ignore, or override; the user can navigate to any module in any tier at any time.

Modules produce structured analyses (five sections in the schema, progressively disclosed in the UI per Part 7). The summation layer ties analyses together by naming what they confirm, what they pull in different directions, and what gaps remain — never by picking a winner.

The retention surfaces — bot, check-in, monthly email — exist because the avoidant user does not return on their own. Each is narrowly scoped, low-friction, and described in Part 9. They are tools the user can reach for; the platform does not pull them toward them.

---

## Part 3 — Compliance commitments (the eight principles, condensed)

Synthesized from CFP Board and CFA Institute standards (full mapping in `docs/cfp-cfa-principles.md`). All eight are design constraints. A feature that violates any of them does not ship.

1. **Client-first orientation.** The user's stated priorities come before any product, fee, or revenue consideration. Tier composition is identical for every user.

2. **Integrity, honesty, non-misrepresentation.** No guaranteed-outcome claims. No projections without explicit assumptions. No language implying CFP/CFA equivalence.

3. **Competence and due care.** Out-of-scope topics route to qualified professionals rather than producing partial answers. Quantitative engines have unit-tested reference cases. Assumption tables are versioned and reviewed quarterly.

4. **Suitability and integrated analysis.** The schema mirrors the CFP 7-step process; the surface compresses and softens it per Part 7.

5. **Conflict identification and disclosure.** Subscription revenue only — no referral fees, product placements, affiliate income, or commissions. Persistent plain-language "How Finmagix makes money" page in global navigation.

6. **Clear, accurate, balanced communication.** Scope, inputs, assumptions, alternatives, trade-offs, risks, and limitations are accessible on every analysis. Confidence is communicated through ranges and plain language, not pinpoint estimates.

7. **Confidentiality and data protection.** Layered privacy notice on first capture. Granular consent for secondary use. Encryption at rest and in transit. Role-based access. Data minimization. Documented incident response.

8. **Recordkeeping and ongoing review.** Immutable event log. Snapshotting so any past analysis can be reconstructed. Trigger-based re-evaluation on profile changes, life events, and quarterly anniversaries.

---

## Part 4 — The line we will not cross

Absolute prohibitions. They override product preferences, founder preferences, and revenue considerations. Even when warmth and accessibility push hard against these lines, the lines do not move. Hold the line.

**We will not produce personalized investment allocation percentages.** Never "your allocation should be X% stocks, Y% bonds." General education about what allocations look like is acceptable; the picking is the user's.

**We will not recommend specific securities, funds, or insurance products.** No tickers. No fund names. No carrier names. Categories and comparison criteria only.

**We will not provide tax filing advice or position-level tax recommendations.** General concepts only. Specific positions go to a CPA or EA.

**We will not produce single-answer optimized plans.** The summation layer surfaces tensions; it does not pick winners. Even when the avoidant user wants a single answer, we hold to multiple paths or we abstain. This is the hardest line to hold against the user-friendliness goal. Hold it.

**We will not include automated execution pathways.** No API integrations to brokerages, retirement plan providers, or insurance carriers acting on the user's behalf.

**We will not use language that implies CFP/CFA membership, certification, or professional equivalence.** "Inspired by" and "informed by" only. Never "CFP-grade."

**We will not use directive button language that implies advisor agreement.** No "Accept this recommendation." No "I'll do this." Acceptable: "Add a note to my timeline," "I want to revisit this," "This makes sense to me," "Show me other ways to think about this."

**We will not personalize tier composition.** Same modules in each tier for every user. Personalization is in the suggestion and the rationale, not in what's available.

**We will not capture the appearance of professional review without actual professional review.** If a feature claims "reviewed by a CFP," there is an actual CFP under contract who actually reviewed it.

**We will not use warmth as a Trojan horse for advice.** A friendly voice that gently picks one option for the user is still picking one option. The voice can be warm; the structure stays optional. If we ever write copy that *feels* warm but functionally tells the user what to do, we rewrite. Quarterly review specifically watches for accumulated warmth-driven drift.

---

## Part 5 — What we are building

### 5.1 Intake (up to 10 questions)

A short, conversational intake. Maximum ten questions. Designed to capture enough signal for the suggestion engine without becoming the audit experience that has bounced avoidant users off other products.

Captured: an opening free-text or chip-pick question about what's going on with money right now; age band; income band (not exact); household structure (dependents and partner status combined into one question); rough financial picture (debt and savings combined into one question with chip combinations); two scenario-based risk tolerance questions; up to three goal selections from a fixed taxonomy with optional rough timelines.

That's nine to ten questions depending on how the goal step is counted.

The intake is paced. Skip is always available. The user can complete it across multiple sessions.

### 5.2 Suggestion engine (deterministic, up to 5 modules)

A documented rule set maps intake responses to a prioritized list of up to five modules. **Deterministic.** No model in the loop. Rules are reviewable by the user on demand ("Why these modules?" returns the actual rules that fired, in plain language).

Suggestions are framed as suggestions: *"Based on what you told us, these are the modules people in similar spots often find most useful first. You can start anywhere — these are just where we'd point a friend."* The user can run any module in any order. The suggestion is a hand on the shoulder, not a gate.

Rules live in `lib/suggestions/rules.ts`, are versioned, and have unit tests. When rules change, the change is documented in the file's changelog and reflected in the user-visible rule explanation.

### 5.3 Static tiers, visible pricing

Three tiers. Identical module composition for every user. Transparent monthly and annual pricing.

| Tier | Price | Modules included |
|---|---|---|
| Free | $0 | Financial Health Checkup, Stress Test |
| Recommended | $19/mo or $150/yr | Tax Efficiency, Protection & Insurance, Debt Strategy, Social Security, College Planning, FIRE |
| Pro | $29/mo or $230/yr | Retirement Planner, Wealth Builder, Longevity Calculator, Estate & Legacy Planner |

**No paywalls, only pricing.** Every module in every tier is visible to every user. A Free user sees Pro modules listed with description, sample output, and clear pricing ("Included in Pro — $29/mo or $230/yr"). They can read about and see how a Pro module works before deciding. Running a paid module against their own data requires upgrade. The friction is at the value boundary, not the visibility boundary.

### 5.4 Modules (five-section analysis in schema, progressive disclosure in UI)

Every module produces an analysis with five sections, persisted in the schema and the audit trail:

1. **What this analyzes** — scope, inputs used, confidence level
2. **What we observe** — findings, framed observationally, with assumptions visible
3. **Paths to consider** — two to three valid alternatives, each with approach, benefit, trade-off, risk, assumption
4. **Sensitivity drivers** — what most affects the analysis, what to change to see different outcomes
5. **What this does not cover** — scope limitations, escalation triggers

The default UI shows the headline observation and the paths, briefly. Everything else is on-demand. Part 7 governs surfacing in detail.

The user's response options on a module result are deliberately minimal. They can add an optional free-text note to their timeline ("I want to revisit this when..."), revisit inputs to re-run the analysis, expand any path for the full structure, or simply close the page. There is no "accept" button. There is no required action. The platform records that the user viewed the analysis and which paths they expanded; that record is automatic. The user's only required step is reading.

### 5.5 Summation layer

After two or more modules complete, the summation layer surfaces:
- **Confirmations** — where modules agree
- **Tensions** — where modules pull in different directions
- **Gaps** — what the platform doesn't yet know enough to speak to
- **Decision context** — what the user has noted on their timeline that bears on the picture

It does **not** rank. It does **not** produce sequenced "next moves." It does **not** integrate analyses into a single directive narrative. The user resolves the tensions; the platform names them.

(This is architecturally identical to v2.0's synthesis layer. "Summation" is the user-facing label; the compliance posture is unchanged.)

### 5.6 Recommendation governance layer

Every analysis passes server-side governance before display:

- **Minimum required inputs** per module — incomplete inputs produce an "incomplete picture" output, not a confident analysis
- **Confidence thresholds** — outputs tagged High / Medium / Low, communicated to the user as plain language ("we're showing you a rough picture — the more you tell us, the clearer it gets")
- **Prohibited zones** — hard-coded rules preventing engine output in Part 4 categories. Engineers cannot accidentally ship an allocation percentage
- **Escalation triggers** — conditions routing the user to a CFP rather than producing analysis (estate complexity, business ownership, multi-state tax, special-needs planning, etc.)
- **Documented basis** — every analysis carries an audit-trail record of engine version, input snapshot, assumptions, alternatives, and governance checks passed

This is what differentiates a "smart financial app" from a "structured-thinking platform with credible boundaries."

### 5.7 Timeline (formerly "decision journal")

The platform automatically records the user's path: intake responses, module runs, paths viewed and expanded, suggestions surfaced, bot conversations. This timeline is visible to the user as a read-only history surface — what they did, when. They can optionally annotate any entry with a free-text note ("I want to revisit this when my bonus comes in"), but annotation is never prompted, never required, never gamified.

The timeline serves two purposes: it is useful to the user (a clean record of their thinking, organized; valuable to a CFP they may eventually consult), and it is the user-facing window into the platform's compliance audit trail (which lives at the schema level and is more comprehensive than what the user sees).

The user's compliance burden is zero. They do nothing to maintain the timeline. The platform records; the user reads if they choose.

### 5.8 Persistent disclosures

Brief disclosure footer on every module: scope, exclusions, data limitations. Persistent "How Finmagix makes money" link in global navigation, plain language. Persistent "When to consult a professional" pattern that triggers on escalation conditions and is also passively available.

---

## Part 6 — What we are explicitly NOT building

Re-read quarterly. The temptation to add these will be constant.

**We are not personalizing tier composition.** Same modules per tier for every user.

**We are not building "Accept this recommendation" buttons.** Acceptance buttons read as advisor-client agreement regardless of disclaimer.

**We are not producing sequenced "Next 3 Moves."** A sequenced ranking is a directive.

**We are not producing personalized investment allocation percentages.** Clearest line into RIA territory.

**We are not implying CFP/CFA equivalence in marketing.** "Inspired by" and "informed by" only.

**We are not building automated brokerage or 401(k) execution.** Moves us from tool to agent.

**We are not producing tax-filing-position recommendations.** General concepts only.

**We are not producing certainty without showing assumptions.** False precision is misrepresentation.

**We are not retrofitting "ongoing advisory" subscription pricing.** Subscription is for educational tool access; advisory pricing structures are different products.

**We are not building features that are individually small but collectively recreate an advisory product.** Quarterly review against this document catches accumulated drift.

**We are not using warmth as a path to crossing the line.**

**We are not designing for users who already know what they're doing.** They are welcome; they are not the design center.

**We are not gamifying. No streaks. No badges. No "day 5 of your 30-day streak." No XP. No comparison to "other people like you" that triggers shame or FOMO.** The avoidant user has been bounced off streak-based products before. Our cadence is gentle re-engagement, not engagement loops.

**We are not building obligation surfaces.** No "you haven't journaled this." No "complete your check-in." No "rate this analysis." No "tell us how this went." The platform records what the user does; it does not ask the user to do work outside of modules. The discipline is to keep the user's required interactions minimal at every layer.

**We are not building stock market reviews, market commentary, or "what's moving today."** Outside scope. Implies investment advice. Distracts from structured thinking. The avoidant user does not need market noise; that is exactly what they are trying to escape.

**We are not building peer comparison features.** "Users like you saved $X" is a dark pattern that exploits anxiety. The avoidant user's situation is theirs; comparing them to a phantom average is shame-inducing and often misleading.

**We are not blending content emails with upgrade prompts.** Service content (monthly "what we noticed," educational digests, transactional emails) does not contain upgrade calls-to-action in its body. Upgrade prompts are separate emails, triggered by user behavior, not by calendar, and never bundled with service content. The avoidant user has been marketed at their entire adult life; we earn trust by maintaining a clear line between "useful information for you" and "we want you to pay us more."

**We are not building a coach.** The bot is not a coach. See Part 9.

---

## Part 7 — Voice and accessibility

The rules below are what keep the rigor accessible. The avoidant user gets nothing from a beautifully-rigorous analysis if they bounce off it in the first ten seconds.

### 7.1 The voice we hold

**Plain language, 8th-grade reading level on default surfaces.** Finance terms get inline definitions on first use.

**Warmth without infantilization.** The user is a capable adult who happens to find this hard. Not a child. "It looks like you've got a lot on your plate" lands. "Don't worry, we'll get through this together!" condescends.

**First-person plural where it makes the platform feel like a companion.** "Let's see what we know about your situation." "Here's what we noticed."

**No shame, ever.** Not for late starts, debt, gaps, skipped modules, or missed days. "It's never too late to start" is forbidden — it implies they're late. "Wherever you're starting from, this is a good next step" is allowed.

**Honest about uncertainty without alarming.** "We're guessing on a few things — the more you tell us, the more useful this gets." Not "Medium confidence — 11 of 14 inputs verified."

**Honest about scope without being defeatist.** When something is out of scope: "This is the kind of question a CFP can really help with — here's what to look for in finding one." Not "Outside our scope. Please consult a qualified professional."

**Curiosity, not interrogation.** "Roughly, what does your year look like income-wise?" Not "Please specify your annual gross household income."

**Specific, not vague.** Vague reads as evasive. "Most people in similar spots find that..." not "Various users have reported..."

### 7.2 Progressive disclosure as the default

The five-section analysis exists in the schema. The user does not see five sections by default.

- **Default view of an analysis:** headline observation plus two or three paths shown as cards with a one-sentence summary each. Roughly 100 words on screen.
- **Expand-on-demand:** Each path has a "tell me more" affordance for benefit/trade-off/risk/assumption.
- **Show-the-thinking:** A second affordance reveals inputs, assumptions, sensitivity drivers.
- **What's-not-covered:** Footer link, not prominent section.
- **Audit-trail link:** Single small link at the bottom. Defensibility doesn't depend on the user reading it; it depends on it existing.
- **Mode selection:** Onboarding picks "Just the basics" (default) or "Show me everything" (expert). Switchable any time. Most users never switch.

### 7.3 Quantity and pacing

One thing at a time. A module result shows one analysis. The dashboard shows one priority. Summation surfaces one tension at a time with "see more" available.

Sessions are bounded — ten to twenty minutes feels complete. Not "you're 12% done with onboarding." "You got something useful today; come back when you're ready for the next thing."

Skip is always an option. Every wizard step has "skip for now" or "I'll come back."

### 7.4 Mobile-first

Design center is a 380px screen. Most avoidant users encounter the platform on their phone in stolen moments. Desktop is a generous expansion of mobile.

### 7.5 Microcopy patterns

Living reference at `docs/voice-patterns.md`. Pre-publish copy review checks against it.

| Avoid | Use |
|---|---|
| "We recommend X" | "Some people in your spot start with X — does that resonate?" |
| "Your optimized plan" | "Your structured analysis" |
| "Next steps:" | "Things worth thinking about:" |
| "You should consider..." | "It might be worth considering..." |
| "Take action now" | "When you're ready, here's what to look at" |
| "Failure to act will result in..." | "Here's what tends to happen if this isn't addressed..." |
| "Loading..." | "Just a sec — pulling this together for you" |
| "Error: invalid input" | "Hm, that didn't quite work. Mind giving it another go?" |
| "Pro tier required" | "This one's part of Pro — $29/month or $230 for the year. Worth a look?" |

---

## Part 8 — The first experience

The avoidant user gives the platform about three minutes to prove it's worth their time.

**Marketing site.** Single-screen value proposition, plain language. Pricing above the fold. No sign-up to see what the platform does. A sample analysis is viewable anonymously.

**Sign-up.** Email and password only. Thirty seconds. Welcome email is brief, warm, acknowledges that getting started is the hardest part. Not a sales email.

**First session — three minutes to first value.**

1. **One warm question.** "Tell me a little about what's going on for you with money right now." Free-text (200 char max) or three or four chips ("getting started," "feeling underwater," "trying to plan for something specific," "just want to feel more in control").

2. **A few quick questions.** Age band, income band (not exact), dependents. Three questions, thirty seconds.

3. **One observation.** A single warm, plain-language observation based on the four-question profile. Being seen, not analyzed.

4. **The suggestion screen.** "Based on what you told us, these are the modules people in similar spots often find most useful first." Up to five modules, prioritized, with a one-sentence rationale each. The Health Checkup is offered as the most common first step. *"Want to start there now, or save for later?"* — both options equally weighted.

The first paid module is offered only after Health Checkup *and* Stress Test (both free) are complete, *and* the platform has enough signal to suggest specifically why a particular paid module would be useful for this user. Not earlier. We don't ask for money before we've earned trust.

**The first analysis is the moment of truth.** The first sentence of the user's first analysis result is the single most important sentence in the product. It conveys: I see you, your situation makes sense, and there's a small useful thing we can think about together. The first analysis does not lead with bad news. If the Health Checkup reveals a tough spot, framing acknowledges what they're doing well first ("you're contributing to your 401(k) at all — that's already more than half of Americans"), then names one thing that, if addressed, would matter. Every word of the first sentence of every module is reviewed manually before launch.

**What the first experience is not.** Not a tour. Not a 12-step onboarding flow. Not a quiz. Not "complete your profile to unlock features." Not a referral prompt. Not a feature show-off.

---

## Part 9 — Retention surfaces

The avoidant user does not return on their own. Three surfaces give them low-friction reasons to come back. Each is narrowly scoped.

### 9.1 The guide bot

Prominent feature surface — a tab in main navigation, not a buried support widget. Powered by the same Anthropic API infrastructure as existing support chat.

**Three layers of scope. Documented here so engineering and copy reviewers can hold the line.**

**Layer 1 — Platform navigation and features. Fully in scope. Answer directly.**
- "How do I start a module?"
- "Where's my timeline?"
- "How do I cancel?"
- "What's the difference between Recommended and Pro?"

**Layer 2 — General financial concept education. In scope. Answer educationally with appropriate uncertainty and scope language.**
- "What is a Roth IRA?"
- "How does Social Security spousal benefit work?"
- "What's the difference between term and whole life?"
- "What does 'sequence of returns risk' mean?"

For Layer 2, the bot explains the concept and, where applicable, mentions which module addresses the topic in the user's specific case.

**Layer 3 — Personal financial situations or recommendations. Out of scope. Redirect kindly.**
- "Should I do a Roth conversion?"
- "Is my emergency fund enough?"
- "Should I prioritize debt or saving?"
- "How much should I have in stocks?"

For Layer 3, the bot does not answer. It redirects to the relevant module or to a CFP professional, in voice consistent with Part 7.

**Layer 3 redirect microcopy patterns:**

| Situation | Pattern |
|---|---|
| Question maps to an existing module | "That's the kind of question the [Module Name] module is built for — want to start it?" |
| Question is appropriate for a paid module the user hasn't unlocked | "That's what the [Module Name] module digs into — it's part of the [Tier] pack at $X/month. Want to take a look?" |
| Question is genuinely outside platform scope | "That's the kind of question a CFP professional can really help with — here's what to look for in finding one." |
| Question is a personal recommendation we structurally won't make | "We're built to help you think through questions like that, not answer them — and there's a real reason for that. Want me to point you to the module that gives you a structured way to work through it?" |

The bot is **not a coach.** It does not check in on the user's progress. It does not nudge. It does not say "how are you feeling about money this week." It answers what the user asks, within the three layers, and stops.

System prompt and refusal patterns are version-controlled. Layer 3 boundary is enforced both in the system prompt and in a post-generation classifier check; if either flags a Layer 3 violation, the response is replaced with a redirect.

### 9.2 The "what changed" content stream

The platform maintains a content stream of changes in financial regulations and limits relevant to ordinary households: contribution limits, tax bracket thresholds, Social Security COLAs, IRS announcements, FDIC or NCUA changes, federal student loan rule changes.

**General changes only.** "401(k) contribution limits went up to $X for 2027" is in scope. "Based on your profile, here's what this means for *you*" is not. Items name the change and point to the module that covers the topic ("if you want to think about how this affects you, the Retirement Planner module is built for that"). The personalization is the user clicking through, not the content speaking to their situation.

This content stream surfaces in two places: an in-app card in the user's dashboard, and as one of four elements in the monthly "what we noticed" email (see 9.4). It does not ship as a standalone email. Tone matches Part 7. No urgency. No FOMO. Content is reviewed for compliance before publication — no implied recommendations, no embedded advice.

### 9.3 The check-in

A check-in surface is always available in the user's navigation. It is a six-question chip-pick form that takes sixty seconds: income changes, household changes, upcoming major expenses, debt changes, goal changes, anything else worth flagging. Updates the user's profile if anything changed. If nothing changed, the user can close the page and nothing happens.

After four weeks of inactivity on profile data, the platform may surface a small in-app card on the user's next visit ("It's been a few weeks — anything changed?"), dismissable in one tap. No push notification. No email. No streak. The check-in is a tool the user can reach for; the platform does not pull them toward it.

Purpose: keeps the user's profile and module suggestions current as their life changes. The platform updates suggestions when meaningful inputs shift; the user does not have to manage this themselves.

### 9.4 The "what we noticed" email

A monthly content email sent to all subscribed users (free and paid). Content-first. The body covers four elements:

- One sentence about what the platform has noticed in the user's activity in the last month, drawn from the timeline (e.g., "You ran the Tax Efficiency module two weeks ago and expanded the match-only path twice. You haven't run anything since.")
- One observation framed neutrally, not directively (e.g., "Most people who land on the match-only path go on to run the Debt Strategy module within a month — it's the natural next thread to pull.")
- One general piece of news, drawn from the same content as the monthly "what changed" digest in 9.2 (combined into one email, not two separate sends)
- A small footer pointing at the platform's tools — bot, timeline, modules — without selling any of them

The email is editorial work, written by a human, reviewed for compliance before sending. No upgrade language in the body. No "users like you" comparisons. No urgency. Unsubscribable in one click. Compliance review samples bot conversations and email content together during beta.

### 9.5 Upgrade prompt emails

Behavior-triggered, not calendar-triggered. Sent at most once per intent signal — when a user hovers on a paid module's description, expands its sample output, or returns to the same teaser surface multiple times. The email is one paragraph: which module the user looked at, the price, what's in the tier, a link. No comparison to other users. No urgency. No follow-up if the user ignores it. Trial-ending notices are a separate transactional category, written straightforwardly — "your trial ends in three days, here's what you'll lose access to" — not dressed up as friendly.

Steady-state email cadence target: two service emails per month maximum (the "what we noticed" email and the "what changed" digest are combined; behavior-triggered upgrade emails are on top of that, capped to genuine intent signals). All non-transactional emails unsubscribable in one click in the email itself.

---

## Part 10 — Engineering and schema implications

Architecture serves both the avoidant-user surface and the rigorous schema simultaneously.

### 10.1 Schema

- **`life_stage`** — engine canonical (`early_career`, `family_building`, `peak_earning`, `pre_retirement`, `retirement`). DB CHECK constraint matches TypeScript types.
- **`pain_points`** — sunset; replaced by `financial_concerns`.
- **`goals`** — table with `goal_type` (enum), `target_amount`, `target_date`, `classification` (need/want/wish), timestamps.
- **`risk_profile`** — `risk_tolerance` and `risk_capacity` from scenario-based intake.
- **`intake_responses`** — versioned record of each user's intake answers, tied to a `rules_version` for the suggestion engine.
- **`module_suggestions`** — record of which modules were suggested to which user, with the firing rules captured for the "why these modules?" surface.
- **`analyses`** — immutable record of every analysis run. Inputs, assumptions, engine version, alternatives, governance checks.
- **`timeline_entries`** — automatically populated record of user activity (intake responses, module runs, paths expanded, suggestions surfaced, bot conversations) plus optional user-added free-text notes. Read-only to the user except for note annotations.
- **`events`** — immutable audit log.
- **Enum enforcement:** all enum-style columns locked as DB CHECK constraints.

### 10.2 Engine

- Five-section output template in the engine layer.
- Suggestion rules in `lib/suggestions/rules.ts` — deterministic, versioned, unit-tested, with a `explainRulesForUser(intakeResponses)` function returning plain-language rule explanations.
- Governance layer in `lib/governance/` — required-input validators, confidence calculators, prohibited-content filters, escalation-trigger evaluators.
- Engine versioning with semver tags on every analysis row.

### 10.3 Frontend

- Module result page renders five-section template with progressive-disclosure rules from Part 7.
- Suggestion screen renders prioritized module list with rule rationale on demand.
- Tier visibility surface — Pro modules visible from Free dashboard with description, sample output, clear pricing.
- Timeline UI as a read-only history surface accessible from the dashboard, with optional inline note annotation.
- Summation page as tensions-and-considerations layout in plain language.
- Validation layer surfaces internal contradictions in kind language. Non-blocking.
- "How Finmagix makes money" as a real page in global navigation.
- Onboarding is conversational, paced, skip/save-for-later at every step.

### 10.4 Bot infrastructure

- System prompt encoding the three-layer scope from Part 9.1, version-controlled.
- Post-generation classifier check for Layer 3 violations; flagged responses replaced with redirect.
- Per-conversation logging for compliance review.
- Rate limiting and abuse prevention shared with existing support chat.

### 10.5 Compliance scaffolding

- Disclosures package — reusable components.
- Pre-publish copy review against Part 4 and Part 7 (`docs/voice-patterns.md`).
- Quarterly assumption review with documented sign-off.
- Suggestion-rule changes require documentation and sign-off; user-visible rule explanations updated automatically from the rule definitions.

---

## Part 11 — Risks, limitations, review cadence

### 11.1 Known risks

**Substance-over-form risk.** Mitigated by governance layer rules, language constraints, and minimal-action button design (no "accept"; only revisit, expand, or add a free-text note).

**Marketing-the-marks risk.** Mitigated by explicit copy review against Part 4.

**"Outputs look like advice" risk.** Mitigated by paths-not-recommendations language, user-in-the-loop UX, validation that the user is the decision-maker.

**Audit-trail-implies-regulation risk.** Mitigated by trail capturing inputs and engine outputs, not "advice given." Counsel review of audit trail contents before public launch.

**Warmth-as-Trojan-horse risk.** Mitigated by Part 4 lines not moving and Part 7 voice rules applying *within* those lines, not around them. Quarterly review specifically for warmth-driven drift.

**Bot scope-drift risk.** Specific to v3.0. Users will push the bot toward Layer 3 constantly. Mitigated by system prompt, post-generation classifier, sampled human review of bot conversations during beta, and explicit Layer 3 redirect patterns.

**Suggestion engine perception risk.** Users may interpret "we suggest these modules" as advisory recommendations regardless of framing. Mitigated by visible rules, explicit "people in similar spots" language, and the user's ability to navigate to any module at any time.

### 11.2 Known limitations

This document is not legal advice. Adopting CFP/CFA principles voluntarily does not confer regulated status. Counsel review before public launch is documented as a Phase 4 prerequisite.

This document does not address jurisdictional variation (state-level RIA, state insurance, CPA/EA, GDPR, CCPA).

This document assumes a US-only beta.

This document is strategic intent, not a regulatory guarantee.

### 11.3 Review cadence

**Quarterly:** Re-read this document. Update Parts 4, 6, 7, and 9 as needed. Counsel review of any Part 4 changes.

**Annually:** Re-read against latest CFP Board and CFA Institute standards.

**Ad-hoc:** Whenever a feature is being scoped, re-read Parts 4, 6, and 7. Whenever marketing copy is being drafted, re-read Parts 4 and 7. Whenever bot behavior is being changed, re-read Part 9.

---

## Part 12 — Versioning

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | May 2026 | Founder + AI strategy synthesis | Initial canonical strategy. Static-tier architecture, governance layer, language constraints, "what we will not build" list. Designed against engaged-but-lay user. |
| 2.0 | May 2026 | Founder + AI strategy synthesis | Reframed for the avoidant user. Compliance unchanged. Voice, surfaces, onboarding, progression rewritten. Added Part 9 (Voice) and Part 10 (First Experience). Added warmth-as-Trojan-horse risk. |
| 3.0 | May 2026 | Founder + AI strategy synthesis | Product shape simplified to actual build: up to 10 intake questions, deterministic rule-based suggestions of up to 5 modules, summation layer (renamed from synthesis), narrow guide bot with documented three-layer scope, three retention surfaces (bot, monthly digest, 60-second check-in). Compliance and voice unchanged. Document length cut roughly in half. Added prohibitions: no streaks, no gamification, no peer comparison, no market commentary. |
| 3.1 | May 2026 | Founder + AI strategy synthesis | Burden-minimization pass. Decision journal renamed to **timeline** and reframed as automatic platform recording (zero user maintenance burden). Check-in shifted from four-week pulse to always-available surface with passive in-app re-engagement only. Intake captured-list tightened to honestly fit "up to 10." Two new email surfaces specified: monthly "what we noticed" content email (combining the prior "what changed" digest into a single send) and behavior-triggered upgrade prompt path. Two new prohibitions: no obligation surfaces, no blending of content emails with upgrade prompts. Compliance commitments and voice rules unchanged. |

---

## Closing note

The avoidant user has been failed by the financial industry their entire adult life. They've been told, implicitly and sometimes explicitly, that they don't matter, that their problems are too small, that they should figure it out themselves. They've avoided money conversations because every one has felt humiliating.

The platform we are building gives them the experience of being seen, getting clearer, and being treated like the capable adult they are — while holding to the compliance line that protects them from the same industry that has failed them, by not pretending to be the advisor they've been told they don't deserve.

The discipline of this document is the tool we use to do both at once. When we forget who we're building for, we add complexity. When we forget the line we won't cross, we soften compliance. Re-read Parts 1, 4, 6, and 7 quarterly. Hold the line on both edges.
