# Finmagics Lite — Professional Standards Reference Document

**CFP Board & CFA Institute Guiding Principles with Recommended Actions**

Version 1.0
Prepared: May 2026

---

## 1. Purpose & Scope

This document consolidates the guiding principles published by the CFP Board (Certified Financial Planner Board of Standards) and the CFA Institute (Chartered Financial Analyst Institute) into a single reference for use in designing, building, and operating Finmagics Lite.

It is intended to serve three audiences:

- **Product designers** — to ensure user flows, recommendations, and disclosures align with fiduciary and ethical norms.
- **Engineers** — to translate principles into concrete features, validations, audit trails, and guardrails.
- **Compliance and leadership** — to provide a defensible mapping between Finmagics Lite functionality and recognized industry standards.

> *Note: Finmagics Lite is not a CFP or CFA professional. The principles below are adopted as voluntary best-practice anchors. They do not, by themselves, confer regulated status, and they do not replace legal, regulatory, or jurisdiction-specific compliance requirements (e.g., SEC, FINRA, state insurance regulators, or non-US equivalents).*

---

## 2. Source Documents

The recommendations in this document derive from the following authoritative sources, all of which are publicly available and should be retained as reference materials:

### CFP Board

- Code of Ethics and Standards of Conduct (effective October 1, 2019; enforcement from June 30, 2020). https://www.cfp.net/ethics/code-of-ethics-and-standards-of-conduct
- Roadmap to the Code and Standards. https://www.cfp.net/-/media/files/cfp-board/standards-and-ethics/roadmap-to-code-and-standards.pdf
- Practice Standards Reference Guide and Guide to the 7-Step Financial Planning Process.
- Ethical Duties of CFP Professionals brochure.

### CFA Institute

- Code of Ethics and Standards of Professional Conduct (Board-approved updates effective January 1, 2024; subsequent updates April 2024). https://www.cfainstitute.org/standards/professionals/code-ethics-standards
- Standards of Practice Handbook, 12th Edition (2024). https://www.cfainstitute.org/sites/default/files/-/media/documents/code/code-ethics-standards/standards-practice-handbook-12th-edition.pdf
- CFA Institute Asset Manager Code (where firm-level conduct is relevant).

> *Where this document quotes wording, it paraphrases the source. Where verbatim language matters (e.g., for legal review or marketing claims), refer back to the original CFP Board or CFA Institute publication.*

---

## 3. CFP Board — Core Principles

### 3.1 Code of Ethics (Six Duties)

Every CFP professional commits to six high-level ethical duties. Finmagics Lite should treat these as design principles for any feature that gives, frames, or assists in financial advice.

| # | Duty | Plain-language meaning |
|---|---|---|
| 1 | **Act with honesty, integrity, competence, and diligence** | Truthful inputs, accurate calculations, and effort proportional to the stakes. |
| 2 | **Act in the client's best interests** | When advising, the client's outcome trumps the firm's revenue, the advisor's convenience, and product preferences. |
| 3 | **Exercise due care** | Apply the level of skill and attention a reasonably prudent professional would in similar circumstances. |
| 4 | **Avoid or disclose and manage conflicts of interest** | Identify conflicts, disclose them in plain language, obtain informed consent, and manage them so the client's interest still prevails. |
| 5 | **Maintain confidentiality and protect client privacy** | Client information is used only for the engagement, protected against unauthorized access, and shared only with consent or legal compulsion. |
| 6 | **Act in a manner that reflects positively on the profession** | Conduct, communications, and marketing must not bring the financial planning profession into disrepute. |

### 3.2 The Fiduciary Duty

The cornerstone of the CFP Code and Standards is that whenever a CFP professional provides financial advice to a client, they must act as a fiduciary, in the client's best interest. The fiduciary duty consists of three sub-duties:

- **Duty of Loyalty** — place the client's interest above the professional's and the firm's; avoid conflicts where possible, and otherwise disclose and manage them; obtain informed consent before proceeding.
- **Duty of Care** — act with the care, skill, prudence, and diligence of a reasonable professional, considering the client's goals, risk tolerance, objectives, and financial and personal circumstances.
- **Duty to Follow Client Instructions** — comply with the terms of the engagement and reasonable, lawful directions from the client.

### 3.3 The Seven-Step Financial Planning Process

CFP Board's Practice Standards (Standard C) require this seven-step process when a CFP professional is engaged in financial planning. Finmagics Lite should mirror these steps in its workflow whenever it produces an integrated plan, not merely point-in-time advice.

| Step | Practice Standard | What it requires in practice |
|---|---|---|
| 1 | **Understand the Client's Personal & Financial Circumstances** | Gather quantitative information (income, assets, liabilities, cash flow, insurance) and qualitative information (values, attitudes, life priorities, family situation). Identify gaps in the data. |
| 2 | **Identify and Select Goals** | Help the client articulate, refine, and prioritize goals. Confirm time horizons, target amounts, and willingness/ability to accept risk. |
| 3 | **Analyze Current Course of Action and Potential Alternative Courses of Action** | Assess whether the client's existing trajectory will meet the goals; identify alternatives, including the option of changing nothing. |
| 4 | **Develop the Financial Planning Recommendation(s)** | Select recommendations that, in the planner's judgment, are most likely to meet the goals, considering assumptions, trade-offs, and integration across planning topics. |
| 5 | **Present the Financial Planning Recommendation(s)** | Communicate recommendations clearly, including the basis, assumptions, risks, and conflicts of interest. Confirm client understanding. |
| 6 | **Implement the Financial Planning Recommendation(s)** | Execute or coordinate execution of accepted recommendations, with clear ownership of each action item between client, advisor, and any third parties. |
| 7 | **Monitor Progress and Update** | Track progress against the plan, flag changes in the client's circumstances or assumptions, and update recommendations on an ongoing basis. |

> *Note on scope: Steps 1–5 are mandatory whenever a CFP professional is providing financial planning. Steps 6 and 7 are also the planner's responsibility unless explicitly excluded from the scope of engagement.*

### 3.4 Duties Owed to Clients (Standard A)

Beyond fiduciary duty, the CFP Code and Standards detail several specific client-facing duties Finmagics Lite should encode:

- **Integrity** — honest in all professional communications and outputs.
- **Competence** — only operate within areas of demonstrated competence; refer or upskill otherwise.
- **Diligence** — provide services in a reasonably prompt and thorough manner.
- **Sound and Objective Professional Judgment** — independent of conflicts; based on the merits of the client's situation.
- **Professionalism** — courteous, respectful, and dignified in all interactions.
- **Comply with the Law** — adhere to all applicable laws and regulations governing the services provided.
- **Confidentiality and Privacy** — robust protection of non-public personal information.
- **Provide Information to a Client** — including services to be provided, fees, conflicts, disciplinary history, and the terms of engagement.
- **Duties When Communicating with a Client** — accurate, understandable, and not misleading.
- **Duties When Representing Compensation Method** — clear distinction between fee-only, fee-based, and commission compensation.

---

## 4. CFA Institute — Core Principles

### 4.1 Code of Ethics (Six Components)

The CFA Code of Ethics applies to all CFA Institute members, charterholders, and candidates. Members and candidates must:

- Act with integrity, competence, diligence, respect, and in an ethical manner with the public, clients, prospective clients, employers, employees, colleagues in the investment profession, and other participants in the global capital markets.
- Place the integrity of the investment profession and the interests of clients above their own personal interests.
- Use reasonable care and exercise independent professional judgment when conducting investment analysis, making investment recommendations, taking investment actions, and engaging in other professional activities.
- Practice and encourage others to practice in a professional and ethical manner that will reflect credit on themselves and the profession.
- Promote the integrity and viability of the global capital markets for the ultimate benefit of society.
- Maintain and improve their professional competence and strive to maintain and improve the competence of other investment professionals.

### 4.2 Standards of Professional Conduct (Seven Standards)

The Code's principles are operationalized through seven Standards. Each is summarized below in a form suitable for product and engineering use.

#### Standard I — Professionalism

- **I(A) Knowledge of the Law.** Understand and comply with all applicable laws, rules, and regulations, including the Code and Standards. Where they conflict, follow the stricter. Do not knowingly assist or participate in violations; dissociate from them.
- **I(B) Independence and Objectivity.** Maintain independence and objectivity. Do not offer, solicit, or accept any gift, benefit, compensation, or consideration that could reasonably be expected to compromise independence or objectivity.
- **I(C) Misrepresentation.** Do not knowingly make any misrepresentation in investment analysis, recommendations, actions, or other professional activities.
- **I(D) Misconduct.** Do not engage in conduct involving dishonesty, fraud, or deceit, or any act that reflects adversely on professional reputation, integrity, or competence.
- **I(E) Competence.** Act with and maintain the competence necessary to fulfill professional responsibilities.

#### Standard II — Integrity of Capital Markets

- **II(A) Material Nonpublic Information.** Do not act, or cause others to act, on material nonpublic information that could affect the value of an investment.
- **II(B) Market Manipulation.** Do not engage in practices that distort prices or artificially inflate trading volume with intent to mislead market participants.

#### Standard III — Duties to Clients

- **III(A) Loyalty, Prudence, and Care.** Owe clients a duty of loyalty; act with reasonable care and prudent judgment; place clients' interests before the employer's and your own.
- **III(B) Fair Dealing.** Deal fairly and objectively with all clients when providing analysis, recommendations, and actions.
- **III(C) Suitability.** When in an advisory relationship: understand the client's investment experience, objectives, and constraints; ensure recommendations are suitable; review regularly. For portfolios managed to a stated mandate, ensure recommendations are consistent with the mandate.
- **III(D) Performance Presentation.** Make reasonable efforts to ensure performance information is fair, accurate, and complete.
- **III(E) Preservation of Confidentiality.** Keep current, former, and prospective client information confidential, except when disclosure is required by law, the information concerns illegal activities, or the client permits disclosure.

#### Standard IV — Duties to Employers

- **IV(A) Loyalty.** Act for the benefit of the employer; do not deprive the employer of the advantage of skills and abilities, divulge confidential information, or otherwise cause harm.
- **IV(B) Additional Compensation Arrangements.** Do not accept gifts, benefits, compensation, or consideration that competes with, or might reasonably be expected to create a conflict of interest with, the employer's interest, unless written consent is obtained from all parties involved.
- **IV(C) Responsibilities of Supervisors.** Make reasonable efforts to ensure that anyone subject to one's supervision or authority complies with applicable laws, rules, regulations, and the Code and Standards.

#### Standard V — Investment Analysis, Recommendations, and Actions

- **V(A) Diligence and Reasonable Basis.** Exercise diligence, independence, and thoroughness; have a reasonable and adequate basis, supported by appropriate research and investigation, for any analysis, recommendation, or action.
- **V(B) Communication with Clients and Prospective Clients.** Disclose to clients and prospects the basic format and general principles of the investment processes; promptly disclose changes that might materially affect those processes; distinguish between fact and opinion.
- **V(C) Record Retention.** Develop and maintain appropriate records to support investment analysis, recommendations, actions, and communications.

#### Standard VI — Conflicts of Interest

- **VI(A) Avoid or Disclose Conflicts.** Avoid or make full and fair disclosure of all matters that could reasonably be expected to impair independence and objectivity or interfere with respective duties to clients, prospective clients, and employer.
- **VI(B) Priority of Transactions.** Investment transactions for clients and employers must have priority over those in which a member or candidate is the beneficial owner.
- **VI(C) Referral Fees.** Disclose to employer, clients, and prospective clients, as appropriate, any compensation, consideration, or benefit received from or paid to others for the recommendation of products or services.

#### Standard VII — Responsibilities as a CFA Institute Member or CFA Candidate

- **VII(A) Conduct as Participants in CFA Institute Programs.** Do not engage in conduct that compromises the reputation or integrity of CFA Institute, the CFA designation, or the integrity, validity, or security of the CFA Institute programs.
- **VII(B) Reference to CFA Institute, the CFA Designation, and the CFA Program.** Do not misrepresent or exaggerate the meaning or implications of membership in CFA Institute, holding the CFA designation, or candidacy in the CFA Program.

---

## 5. Combined Principles — Synthesis

CFP and CFA standards overlap substantially. The table below consolidates the two frameworks into eight combined principles that Finmagics Lite should treat as its operating spine.

| # | Combined Principle | CFP source | CFA source |
|---|---|---|---|
| 1 | **Client-first / Fiduciary mindset** | Code of Ethics #2; Fiduciary Duty (Loyalty, Care, Following Instructions) | Code #2; Standard III(A) Loyalty, Prudence, and Care |
| 2 | **Integrity, honesty, and non-misrepresentation** | Code #1; Duty of Integrity | Code #1; Standards I(C), I(D) |
| 3 | **Competence and due care** | Code #1, #3; Duties of Competence and Diligence | Code #3, #6; Standards I(E), V(A) |
| 4 | **Suitability and integrated analysis** | Practice Standards Steps 1–4 | Standard III(C) Suitability; Standard V(A) Reasonable Basis |
| 5 | **Conflict identification, disclosure, and management** | Code #4; Duty regarding Conflicts of Interest; Compensation disclosures | Standards I(B), VI(A), VI(B), VI(C) |
| 6 | **Clear, accurate, balanced communication** | Practice Standards Step 5; Duties When Communicating | Standards V(B), III(D) Performance Presentation |
| 7 | **Confidentiality and data protection** | Code #5; Duty of Confidentiality and Privacy | Standard III(E) |
| 8 | **Recordkeeping, monitoring, and ongoing review** | Practice Standards Steps 6–7; documentation requirements | Standards V(C), III(C) ongoing review, IV(C) supervision |

---

## 6. Recommended Actions for Finmagics Lite

Each combined principle from Section 5 is mapped below to concrete product, engineering, and operational actions. These are recommendations to be reviewed and prioritized by the Finmagics Lite team; not all are required at MVP, but each should have an explicit accept / defer / decline decision documented.

### 6.1 Principle 1 — Client-first / Fiduciary mindset

**Product / UX**

- Frame every recommendation screen with the client's stated goal at the top, before any product, fund, or fee.
- Where the platform earns more from one option than another, do not allow that option to be displayed first by default; sort by client-fit, not revenue.
- Provide a plain-language "Why this recommendation?" panel on every output, listing the inputs, assumptions, and trade-offs.

**Engineering / Logic**

- Codify a recommendation engine guardrail: any recommendation must pass a suitability check tied to the user's profile (goals, horizon, risk capacity, risk tolerance) before it can be shown.
- Log, for every recommendation, the rule-set version, the inputs used, and the alternatives considered. This is your fiduciary audit trail.

**Compliance / Ops**

- Adopt an internal "client-best-interest" review for any new feature that influences a financial decision; document the review.

### 6.2 Principle 2 — Integrity, honesty, and non-misrepresentation

**Product / UX**

- Every projection, illustration, or scenario must label itself as a projection with explicit assumptions; no figures presented as guaranteed unless legally and contractually so.
- Past performance, where shown, must include the standard "past performance is not indicative of future results" disclosure and the methodology.

**Engineering / Logic**

- Validate input data on entry; flag obvious errors (negative ages, future birthdates, mis-keyed incomes) before they propagate into recommendations.
- Version every calculation engine; tie outputs to a specific engine version so historical recommendations can be reproduced exactly.

**Compliance / Ops**

- Marketing and in-app copy review: no superlatives ("best", "guaranteed", "risk-free") unless substantiated and legally cleared.

### 6.3 Principle 3 — Competence and due care

**Product / UX**

- For topics outside Finmagics Lite's scope (e.g., complex tax structuring, estate planning, niche insurance products), display a clear "this is outside the scope of Finmagics Lite — consider consulting a qualified professional" notice rather than producing a half-answer.

**Engineering / Logic**

- Maintain a scope-of-advice matrix in code: each topic has a flag for "in scope / partial / out of scope". Out-of-scope queries route to disclosure language, not to recommendations.
- Quantitative engines (returns, withdrawal sustainability, tax estimates) must be unit-tested against published reference cases and reviewed by a qualified subject-matter expert before release.

**Compliance / Ops**

- Quarterly review of underlying assumptions (return assumptions, inflation, tax brackets, contribution limits, mortality tables) with sign-off documented.

### 6.4 Principle 4 — Suitability and integrated analysis (the 7-step process)

*This is the principle most directly translatable into product flow. Finmagics Lite should structure its primary user journey to mirror the seven steps:*

- **Onboarding & data capture** — quantitative (income, assets, liabilities, cash flow, insurance) and qualitative (values, priorities, attitudes to risk and debt). Persist gaps as an explicit "data we still need" list.
- **Goal setting** — let users articulate, refine, and prioritize multiple goals; capture target amount, target date, and whether the goal is a need, want, or wish.
- **Current-trajectory analysis** — show whether, on current behavior, each goal is on track, behind, or ahead. Always include a "do nothing" baseline.
- **Recommendation development** — generate options that meet goals; explicitly model the trade-offs (e.g., higher savings rate vs. later retirement vs. lower target).
- **Recommendation presentation** — present recommendations with assumptions, risks, and conflicts disclosed; require active acknowledgment from the user before they are treated as accepted.
- **Implementation** — track which actions the user has taken, which are pending, and which have been declined.
- **Monitoring & update** — automatic re-evaluation on a regular cadence and on triggering events (income change, life event, market move beyond a threshold, plan anniversary).

> *If a feature would short-circuit any of these steps (e.g., recommending a product before goals are captured), treat that as a design red flag.*

### 6.5 Principle 5 — Conflict identification, disclosure, and management

**Product / UX**

- A persistent, easy-to-access "How Finmagics Lite makes money" page, written in plain language, listing every revenue source (subscription fees, referral fees, product partnerships, etc.).
- Inline disclosure on any recommendation that involves a partner product, affiliate link, or referral fee, in proximity to the recommendation, not buried in footnotes.

**Engineering / Logic**

- Tag every product, fund, or third-party service in the catalog with a "compensation type" attribute. The recommendation engine must surface this tag to the UI for disclosure.
- Where two options are otherwise equivalent in suitability, prefer the one with the lower or no Finmagics Lite compensation; log the tie-break decision.

**Compliance / Ops**

- Maintain a conflicts register; review whenever new partnerships, revenue streams, or product placements are added.

### 6.6 Principle 6 — Clear, accurate, balanced communication

**Product / UX**

- Plain-language standard: target Year-9 / Grade-8 reading level for all recommendation explanations; provide a "more detail" expansion for users who want depth.
- Visualizations must include axis labels, units, time periods, and assumption notes; never present a chart without context.
- Distinguish clearly between fact, estimate, and opinion in any AI-generated narrative.

**Engineering / Logic**

- Output templating layer that enforces inclusion of (a) the recommendation, (b) the basis, (c) key assumptions, (d) material risks, and (e) any conflict disclosure. A recommendation cannot ship without all five.

**Compliance / Ops**

- Periodic review of communications for tone, balance, and accuracy; sample-based rather than exhaustive is acceptable, but documented.

### 6.7 Principle 7 — Confidentiality and data protection

**Product / UX**

- On first data capture, present a clear, layered privacy notice: what is collected, why, how it is used, who it is shared with, and how the user can access, correct, or delete it.
- Granular consent for any secondary use (analytics, research, partner sharing) — opt-in, not opt-out.

**Engineering / Logic**

- Encryption in transit (TLS 1.2+) and at rest (per industry-standard schemes) for all client PII and financial data.
- Role-based access control with least-privilege defaults; audit logs for any internal access to client records.
- Data minimization: only collect fields actually used by the engine; periodically review and prune.
- Documented incident response and breach notification process aligned with applicable regulation (e.g., GDPR Article 33, US state breach laws).

**Compliance / Ops**

- Annual third-party security review (penetration test or equivalent); remediate findings on a tracked timeline.
- Data retention schedule: define how long each category of data is kept and the deletion mechanism at end of life.

### 6.8 Principle 8 — Recordkeeping, monitoring, and ongoing review

**Product / UX**

- Show users a timeline of their plan: each version of recommendations, what changed, and why.
- Trigger-based check-ins (life events, anniversaries, market moves) that prompt the user to review the plan.

**Engineering / Logic**

- Immutable event log of: profile changes, recommendation generations, user accept/decline actions, and override actions by support staff.
- Snapshotting: at every recommendation, persist the full input set + engine version + output, so any past recommendation can be reconstructed in support or dispute scenarios.
- Automatic re-run of recommendations on a defined cadence (e.g., quarterly) and on material profile changes.

**Compliance / Ops**

- Define and document retention periods for engagement records, recommendations, and communications, aligned with the longest applicable regulatory or contractual obligation.

---

## 7. Known Gaps and Limitations

Adopting CFP and CFA principles as best-practice anchors does not address several adjacent areas that Finmagics Lite must handle separately:

- **Regulatory registration.** CFP/CFA principles do not substitute for any required registration as an investment adviser, broker-dealer, or insurance producer in the relevant jurisdictions.
- **Jurisdictional variation.** Privacy law (GDPR, CCPA, state-level laws), suitability/best-interest rules (e.g., SEC Reg BI), and product-specific rules differ by region. The principles above are framework-level; jurisdiction-level rules sit on top.
- **AI-specific governance.** To the extent Finmagics Lite uses LLMs or other ML in recommendations, additional governance — model documentation, drift monitoring, hallucination controls, human-in-the-loop for material decisions — should be added beyond what CFP/CFA standards explicitly contemplate.
- **Marketing of credentials.** Finmagics Lite must not state or imply that it, or its outputs, are CFP- or CFA-certified, or substitute for advice from a CFP or CFA professional, unless that is in fact true.

---

## 8. Maintenance & Change Log

This is intended as a living document. Recommended cadence:

- **Annual review** against the latest CFP Board Code and Standards and CFA Institute Code and Standards (both bodies update periodically; CFA's most recent material update was effective January 2024).
- **Ad-hoc review** whenever Finmagics Lite materially changes scope, revenue model, or the categories of advice it produces.
- Each revision should record: date, reviewer, sections changed, and reason.

| Version | Date | Author / Reviewer | Summary of changes |
|---|---|---|---|
| 1.0 | May 2026 | Initial draft | Initial consolidated reference document for Finmagics Lite. |
