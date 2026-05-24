// Finmagix legal documents (Beta — May 2026).
//
// Source: prototype/uploads/Finmagix_Lite_Beta_Legal_Documents.docx
// Originally lived in prototype/site/legal-data.js as window.LEGAL_DOCS;
// transformed to typed TS exports for the marketing site's legal pages.
//
// Three documents:
//   - terms (Terms of Service, 19 sections)
//   - disclaimer (Educational and Financial Information Disclaimer,
//     16 sections)
//   - privacyAndSecurity (Privacy and Security Policy, 16 sections)
//
// Each rendered by <LegalPage doc={...} /> in
// src/components/marketing/LegalPage.tsx.
//
// COUNSEL REVIEW STATUS: tracked in docs/tech-debt-marketing.md
// "Legal pages awaiting counsel review." Per founder Session 02
// decision G1, the in-page "Version 0.9 · pre-counsel-review draft"
// stamp is NOT shown — pages render clean. The internal source-of-
// truth tracking lives in tech-debt-marketing.md instead.

export type LegalBlock =
  | { p: string; strong?: boolean }
  | { h3: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type LegalSection = {
  heading: string;
  body: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  effectiveDate: string;
  summary: string[];
  intro?: { text: string; strong?: boolean };
  sections: LegalSection[];
};

// ============================================================
// Terms of Service
// ============================================================
export const terms: LegalDoc = {
  title: "Terms of Service",
  effectiveDate: "May 15, 2026",
  summary: [
    "These Terms govern your use of Finmagix — our educational financial-thinking platform. By using the Service, you agree to them.",
    "Finmagix is educational and structured-thinking only. It is not a financial advisor. It does not provide financial, investment, tax, legal, or insurance advice and does not create a fiduciary relationship with you.",
    "Subscriptions: Free, Recommended ($19/mo or $150/yr), or Pro ($29/mo or $230/yr). You can cancel any time from settings; cancellation takes effect at the end of the billing period.",
    "We make money only from subscriptions. No commissions, referral fees, affiliate income, or data sales. Ever.",
    "Sections 13–16 (Disclaimer of Warranties, Limitation of Liability, Indemnification, Dispute Resolution) limit our exposure and require informal resolution and binding arbitration with a class-action waiver. Please read them carefully.",
  ],
  intro: {
    strong: true,
    text: "Please read these Terms carefully. Section 6 explains what the Service is and is not — most importantly, that the Service provides educational and decision-support tools and does not provide financial, investment, tax, legal, or insurance advice and does not create a fiduciary or advisory relationship between you and Finmagix. Sections 13, 14, and 15 limit our liability and require you to indemnify us in certain situations. Section 16 explains how disputes are resolved.",
  },
  sections: [
    {
      heading: "1. Welcome to Finmagix",
      body: [
        { p: 'These Terms of Service (the "Terms") govern your access to and use of the Finmagix website, application, and related services (together, the "Service"), operated by Finmagix, Inc., a Delaware corporation ("Finmagix," "we," "us," or "our"). By creating an account, accessing the Service, or using any feature of the Service, you agree to be bound by these Terms and by the documents incorporated here by reference, including our Privacy and Security Policy and our Educational and Financial Information Disclaimer.' },
        { p: "If you do not agree to these Terms, do not use the Service." },
      ],
    },
    {
      heading: "2. About Finmagix",
      body: [
        { p: "Finmagix is an educational, structured-thinking platform for personal financial decisions. It is built for adults who want a calmer, clearer way to think through their financial situation — not a portfolio manager, not an advisor, and not a robo-adviser." },
        { p: "The Service helps you organize information about your situation, run educational modules that produce structured analyses, and see how different considerations relate. It is informed by widely recognized frameworks from the CFP Board and the CFA Institute, but Finmagix is not certified, accredited, or endorsed by either organization, and the Service is not a substitute for advice from a Certified Financial Planner, Chartered Financial Analyst, attorney, CPA, enrolled agent, licensed insurance professional, or any other licensed professional." },
      ],
    },
    {
      heading: "3. Eligibility",
      body: [
        { p: "To use the Service, you must:" },
        { ul: [
          "Be at least 18 years old;",
          "Be a resident of the United States (the beta is limited to U.S. residents);",
          "Have the legal capacity to enter into a binding agreement; and",
          "Not be barred from using the Service under applicable law.",
        ]},
        { p: "If you are using the Service on behalf of another person or an entity, you represent that you have authority to bind that person or entity to these Terms. The Service is not designed for, and may not be used by, persons under 18." },
      ],
    },
    {
      heading: "4. Your account",
      body: [
        { p: "You will create an account using your email address and a password. You are responsible for keeping your credentials confidential and for activity that occurs under your account. Please notify us promptly at security@finmagix.com if you believe your account has been accessed without your authorization. We may suspend or terminate access if we reasonably believe your account is being used in violation of these Terms or in a manner that risks harm to other users, the Service, or third parties." },
        { p: "You agree to provide accurate information in your intake and during use of the Service. The Service relies on what you tell it; if your inputs are inaccurate, the educational outputs you see will be less useful to you." },
      ],
    },
    {
      heading: "5. Subscription tiers, billing, and cancellation",
      body: [
        { h3: "5.1 Tiers and pricing" },
        { p: "The Service is offered in three tiers. The same modules are included in each tier for every user — tier composition is not personalized. Current pricing during the beta is:" },
        { table: {
          head: ["Tier", "Price", "Modules included"],
          rows: [
            ["Free", "$0", "Financial Health Checkup, Stress Test"],
            ["Recommended", "$19 / month or $150 / year", "Tax Efficiency, Protection & Insurance, Debt Strategy, Social Security, College Planning, FIRE"],
            ["Pro", "$29 / month or $230 / year", "Retirement Planner, Wealth Builder, Longevity Calculator, Estate & Legacy Planner"],
          ],
        }},
        { p: "Every module in every tier is visible to every user with a description, sample output, and clear pricing. Running a paid module against your own data requires a paid subscription. Pricing may change for new subscribers; if we change pricing for existing subscribers, we will provide at least thirty (30) days advance notice and give you an opportunity to cancel before the new price takes effect." },
        { h3: "5.2 How we charge" },
        { p: "Paid subscriptions are billed in advance through our payment processor, Stripe. By providing payment information, you authorize us (acting through Stripe) to charge the applicable fees plus any applicable taxes to your selected payment method on a recurring basis (monthly or annually, as you choose) until you cancel. You are responsible for keeping payment information current; if a charge fails, we may suspend paid features until the issue is resolved." },
        { h3: "5.3 Cancellation, refunds, and trials" },
        { p: "You may cancel a paid subscription at any time from your account settings. Cancellation takes effect at the end of your then-current billing period; you retain access to paid features until that point. We do not provide refunds for partial periods except where required by law. If we offer a free trial, the trial converts to a paid subscription at the end of the trial period unless you cancel before the trial ends; we will tell you when your trial is ending before that happens." },
        { h3: "5.4 How we make money" },
        { p: 'Finmagix is funded entirely by user subscriptions. We do not receive referral fees, commissions, affiliate income, revenue-sharing payments, or any other form of compensation from the providers of any financial product, fund, security, insurance carrier, or service that may be discussed within the Service. We also do not sell user data. This commitment is part of our compliance posture, and it is described in plain language on our "How Finmagix makes money" page.' },
      ],
    },
    {
      heading: "6. What the Service is — and is not",
      body: [
        { h3: "6.1 Educational and decision-support only" },
        { p: "The Service provides educational information and structured decision-support tools. It helps you organize your thinking. It does not make decisions for you. You are always the decision-maker." },
        { h3: "6.2 Not advice, not a fiduciary" },
        { p: "The Service does not provide personalized financial, investment, tax, legal, insurance, accounting, or retirement-planning advice, and using the Service does not create a fiduciary, advisory, broker-dealer, agency, or professional relationship between you and Finmagix. Finmagix is not a registered investment adviser, broker-dealer, certified financial planner, insurance producer, attorney, certified public accountant, or enrolled agent, and nothing on the Service should be interpreted as a recommendation that you buy, sell, hold, or refrain from any specific security, fund, insurance product, or other financial product. The Educational and Financial Information Disclaimer below describes these limits in more detail and is incorporated into these Terms.", strong: true },
        { h3: "6.3 No specific product or position recommendations" },
        { p: "The Service will not provide:" },
        { ul: [
          "Personalized investment allocation percentages;",
          "Recommendations of specific securities, funds, ETFs, mutual funds, or other investment products by ticker, name, or issuer;",
          "Recommendations of specific insurance carriers, policies, or products;",
          "Tax-filing advice or position-level tax recommendations;",
          "Legal advice;",
          'Single "optimized" plans that select a single course of action for you; or',
          "Automated execution of any financial transaction on your behalf.",
        ]},
        { p: "Where the Service discusses categories, concepts, or trade-offs, it does so for educational purposes. The selection of any specific product, position, or course of action is yours." },
        { h3: "6.4 No CFP or CFA certification" },
        { p: "The Service is informed by frameworks published by the CFP Board and the CFA Institute. Finmagix is not certified, accredited, or endorsed by either organization, and the Service does not provide CFP- or CFA-equivalent services. Use of frameworks from these organizations does not constitute professional financial planning under their respective standards." },
        { h3: "6.5 Out-of-scope topics" },
        { p: "When the Service identifies a question that is outside its scope — for example, complex estate planning, business succession, multi-state taxation, special-needs planning, or any matter requiring a licensed professional — it will tell you so and suggest that you consult a qualified professional. The Service will not produce a partial answer in lieu of a qualified professional." },
      ],
    },
    {
      heading: "7. Acceptable use",
      body: [
        { p: "When using the Service, you agree not to:" },
        { ul: [
          "Use the Service for any unlawful purpose or in violation of any applicable law or regulation;",
          "Hold the Service out to any third party as constituting financial, investment, tax, legal, insurance, or other professional advice;",
          "Resell, rent, lease, sublicense, or commercially exploit the Service or its outputs without our prior written consent;",
          "Scrape, crawl, or use automated means to collect data from the Service except as expressly permitted by us in writing;",
          "Reverse-engineer, decompile, or attempt to derive source code or model weights from the Service, except to the extent applicable law expressly permits this and our prohibition would be unenforceable;",
          "Interfere with the integrity or security of the Service, including by attempting to bypass access controls, introducing malware, or probing for vulnerabilities outside of a coordinated disclosure process;",
          "Submit information about other people without a lawful basis to do so, or use the Service to harass, defraud, or harm any person;",
          "Use the Service to train a competing model or product without our prior written consent;",
          "Misrepresent your identity, your eligibility, or the source of any content you submit; or",
          "Attempt to obtain advice from the Service that it is not designed to give, and then represent that advice as having been given by Finmagix.",
        ]},
        { p: "We may suspend or terminate access for violations of this Section. We may also report unlawful activity to law enforcement." },
      ],
    },
    {
      heading: "8. Intellectual property",
      body: [
        { h3: "8.1 Our materials" },
        { p: "The Service, including its software, interfaces, designs, written content, module templates, frameworks, marks, and logos, is owned by Finmagix and our licensors and is protected by intellectual property and other laws. Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial use during the term of your subscription. We reserve all rights not expressly granted." },
        { h3: "8.2 Outputs" },
        { p: "The structured analyses and other outputs that the Service produces from your inputs are made available to you for your personal use, including printing, exporting, and sharing with your own advisors or family members. You agree that you will not present these outputs as having been issued by a CFP, a CFA, an attorney, a CPA, or any other licensed professional. You retain ownership of any free-text notes you add to your timeline." },
        { h3: "8.3 Feedback" },
        { p: "If you send us suggestions, ideas, or other feedback about the Service, you grant us a worldwide, perpetual, irrevocable, royalty-free license to use that feedback for any purpose without any obligation to you." },
      ],
    },
    {
      heading: "9. Your content",
      body: [
        { p: 'The information you enter into the Service — intake responses, module inputs, timeline notes, support messages, and chat conversations with our guide bot ("Your Content") — remains yours. You grant us a limited license to host, store, process, transmit, and display Your Content solely for the purpose of providing the Service to you, maintaining the audit trail described in our Privacy and Security Policy, and improving the Service consistent with that Policy. We will not sell Your Content. We will not use Your Content to train third-party large language models without your separate, opt-in consent. Our use of Your Content is further described in the Privacy and Security Policy.' },
        { p: "You are responsible for the accuracy of Your Content. You represent that you have the right to submit Your Content and that doing so does not violate the rights of any third party." },
      ],
    },
    {
      heading: "10. Third-party services",
      body: [
        { p: "The Service uses third-party providers to function — including (currently) Supabase (data storage), Stripe (payments), Vercel (hosting), Anthropic (AI services that power the guide bot and certain support features), and an email service provider. These providers operate under their own terms and privacy policies. Our Privacy and Security Policy describes how data flows to these providers and the protections in place. We are not responsible for the practices of third-party services that are not part of the Service, even if linked to from the Service." },
      ],
    },
    {
      heading: "11. Modifications, service changes, and termination",
      body: [
        { h3: "11.1 Service changes" },
        { p: "We are continuously improving the Service. We may add, change, or remove features, modules, content, or pricing tiers from time to time. Where a change materially reduces the functionality of a paid tier, we will provide reasonable advance notice and an opportunity to cancel." },
        { h3: "11.2 Termination by you" },
        { p: "You may stop using the Service at any time and may cancel your subscription as described in Section 5.3. You may request deletion of your account by following the process described in our Privacy and Security Policy." },
        { h3: "11.3 Termination by us" },
        { p: "We may suspend or terminate your access to the Service at any time if you violate these Terms, if we are required to do so by law, or if we discontinue the Service. Where reasonably possible, we will provide advance notice. Upon termination, your right to access the Service ends. Sections that by their nature should survive — including Sections 6, 8, 9, 13, 14, 15, 16, and 17 — will survive termination." },
      ],
    },
    {
      heading: "12. Beta program",
      body: [
        { p: 'The Service is currently offered as a beta program. Beta access is provided on an "as-is" basis. Features may be incomplete or unstable, content may change, and outages or data issues may occur with greater frequency than in a mature service. We may end the beta or change its terms at any time. Your use of the Service during the beta constitutes consent to these conditions. If we transition the Service to general availability, we will tell you in advance and explain any changes to these Terms.' },
      ],
    },
    {
      heading: "13. Disclaimer of warranties",
      body: [
        { p: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FINMAGIX DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, AND QUIET ENJOYMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE.', strong: true },
        { p: "Without limiting the foregoing, Finmagix does not warrant that the Service will be uninterrupted, secure, error-free, or that any educational content, calculation, projection, or analysis is accurate, complete, current, suitable for any particular individual, or appropriate for any particular decision. Educational outputs reflect general frameworks applied to the information you have provided; they are not advice and should not be treated as such. The Service does not predict the future, guarantee any financial outcome, or eliminate the risk of loss." },
      ],
    },
    {
      heading: "14. Limitation of liability",
      body: [
        { p: "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL FINMAGIX, ITS AFFILIATES, OR THEIR OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR INVESTMENT RETURNS, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICE, EVEN IF FINMAGIX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.", strong: true },
        { p: "IN NO EVENT WILL FINMAGIX’S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO FINMAGIX FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).", strong: true },
        { p: "These limitations apply to the maximum extent permitted by law and apply even if a remedy fails of its essential purpose. Some jurisdictions do not allow the exclusion or limitation of certain damages, so portions of this Section may not apply to you. Nothing in these Terms excludes liability that cannot be excluded under applicable law." },
        { p: "Decisions you make about your money are your own. Finmagix is not responsible for losses, taxes, penalties, missed opportunities, or other adverse outcomes arising from decisions you make, whether or not those decisions were informed by use of the Service.", strong: true },
      ],
    },
    {
      heading: "15. Indemnification",
      body: [
        { p: "You agree to defend, indemnify, and hold harmless Finmagix and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or in any way connected with: (a) your violation of these Terms; (b) your misuse of the Service; (c) your representation of Service outputs as professional advice; or (d) your violation of any law or the rights of any third party in connection with your use of the Service." },
      ],
    },
    {
      heading: "16. Governing law and dispute resolution",
      body: [
        { p: "These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws principles, except that federal arbitration law governs the interpretation and enforcement of Section 16.2." },
        { h3: "16.1 Informal resolution first" },
        { p: "Before bringing a formal claim, you agree to first contact us at legal@finmagix.com with a written description of the dispute. We will work in good faith to resolve the matter informally for at least sixty (60) days after we receive your notice." },
        { h3: "16.2 Binding arbitration; class-action waiver" },
        { p: "[Placeholder — to be confirmed by counsel.] If informal resolution does not succeed, any dispute, claim, or controversy arising out of or relating to these Terms or the Service will be resolved by binding individual arbitration administered by [arbitration provider] under its consumer arbitration rules, before a single arbitrator, in [venue] or in your county of residence at your option. You and Finmagix each waive the right to bring or participate in any class, collective, or representative action. The arbitrator may award the same remedies that a court could; judgment on the award may be entered in any court of competent jurisdiction." },
        { h3: "16.3 Exceptions" },
        { p: "Either party may bring an individual action in small-claims court for disputes within the court’s jurisdiction. Either party may seek injunctive or equitable relief in court to protect intellectual property rights." },
      ],
    },
    {
      heading: "17. Changes to these Terms",
      body: [
        { p: "We may update these Terms from time to time. If we make material changes, we will notify you by email or through the Service at least thirty (30) days before the changes take effect, unless the changes are required to take effect sooner by law. Your continued use of the Service after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you may cancel your subscription before they take effect." },
      ],
    },
    {
      heading: "18. Miscellaneous",
      body: [
        { p: "These Terms (together with the Privacy and Security Policy and the Educational and Financial Information Disclaimer) constitute the entire agreement between you and Finmagix regarding the Service and supersede prior agreements on the same subject. If any provision is held unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right is not a waiver. You may not assign these Terms without our prior written consent; we may assign them in connection with a merger, acquisition, or sale of assets, with notice to you. There are no third-party beneficiaries." },
      ],
    },
    {
      heading: "19. Contact",
      body: [
        { p: "For questions about these Terms or the Service, contact us at legal@finmagix.com. For account or billing questions, contact support@finmagix.com. For privacy questions, see the Privacy and Security Policy contact section." },
      ],
    },
  ],
};

// ============================================================
// Educational and Financial Information Disclaimer
// ============================================================
export const disclaimer: LegalDoc = {
  title: "Educational and Financial Information Disclaimer",
  effectiveDate: "May 15, 2026",
  summary: [
    "Finmagix is an educational, structured-thinking tool. It is not a financial advisor.",
    "Finmagix is not a fiduciary, registered investment adviser, broker-dealer, CFP, CFA, attorney, CPA, EA, or insurance producer.",
    "Nothing on the Service is financial, investment, tax, legal, insurance, retirement-planning, or accounting advice. Educational outputs are general — not personalized advice.",
    'Finmagix does not recommend specific securities, funds, ETFs, insurance carriers, or products by name. It does not produce a single "optimized" plan. It does not execute transactions on your behalf.',
    "Inspired by CFP Board and CFA Institute frameworks. Not certified, accredited, sponsored, or endorsed by either organization.",
    "Subscription-only. No commissions, no affiliate income, no data sales — so educational content is not steered by a financial relationship with a third party.",
  ],
  intro: {
    strong: true,
    text: "The short version: Finmagix is an educational, structured-thinking tool. It is not a financial advisor. It does not tell you what to do with your money. It is here to help you think more clearly, not to make decisions for you.",
  },
  sections: [
    {
      heading: "1. What this disclaimer is for",
      body: [
        { p: "This Disclaimer explains, in plain language, what Finmagix is — and what it is not — when it comes to financial decisions. It is part of, and incorporated into, our Terms of Service. If you use the Service, you are agreeing to this Disclaimer." },
      ],
    },
    {
      heading: "2. Educational and decision-support use only",
      body: [
        { p: 'Everything the Service produces — module results, observations, "paths to consider," summations across modules, content in the guide bot, content in our emails, and any other material — is offered for educational and informational purposes only. The Service is a structured-thinking platform. It helps you organize what you know about your situation and think through trade-offs. It does not produce advice.' },
      ],
    },
    {
      heading: "3. Not financial, investment, tax, legal, insurance, or accounting advice",
      body: [
        { p: "Nothing on the Service is financial, investment, tax, legal, insurance, retirement-planning, or accounting advice. The Service does not take into account your individual situation in the way a licensed professional would, even when it asks you for information and produces output specific to what you have entered. The information you receive from the Service is general in nature, organized around frameworks rather than your full circumstances, and is not a substitute for advice from a Certified Financial Planner (CFP), Chartered Financial Analyst (CFA), attorney, Certified Public Accountant (CPA), Enrolled Agent (EA), or licensed insurance professional.", strong: true },
      ],
    },
    {
      heading: "4. No fiduciary relationship",
      body: [
        { p: "Using the Service does not create a fiduciary, advisory, broker-dealer, agency, or professional relationship between you and Finmagix. Finmagix is not your investment adviser. Finmagix is not acting in a fiduciary capacity on your behalf. Finmagix does not hold itself out as a fiduciary for any individual user.", strong: true },
      ],
    },
    {
      heading: "5. No specific product or position recommendations",
      body: [
        { p: "Finmagix is designed not to do certain things, on purpose, because doing them would place us outside the scope of an educational tool. The Service does not provide:" },
        { ul: [
          'Personalized investment allocation percentages (for example, telling you that "your" mix should be X% in stocks and Y% in bonds);',
          "Recommendations of specific securities, funds, ETFs, mutual funds, or other investment products by ticker, name, or issuer;",
          "Recommendations of specific insurance carriers, policies, or products;",
          "Tax-filing advice or position-level tax recommendations;",
          "Legal advice or recommendations about specific legal instruments;",
          'A single "optimized" plan that selects a single course of action for you; or',
          "Automated execution of any financial transaction on your behalf.",
        ]},
        { p: 'Where the Service discusses categories (for example, "tax-advantaged retirement accounts," "term life vs. whole life," or "debt-payoff approaches"), it does so educationally. The selection of any specific product, position, or course of action is yours.' },
      ],
    },
    {
      heading: '6. "Inspired by," not certified',
      body: [
        { p: "Finmagix is informed by widely recognized frameworks from the CFP Board (the Code of Ethics and Standards of Conduct and the seven-step financial planning process) and the CFA Institute (the Code of Ethics and Standards of Professional Conduct). We have adopted these frameworks voluntarily as best-practice anchors for how the Service is built. Finmagix is not certified, accredited, sponsored, or endorsed by the CFP Board or the CFA Institute. The Service does not provide CFP- or CFA-equivalent services and is not a substitute for working with a CFP professional or a CFA charterholder." },
      ],
    },
    {
      heading: "7. Not a registered adviser, broker-dealer, or insurance producer",
      body: [
        { p: "Finmagix is not registered as an investment adviser with the U.S. Securities and Exchange Commission or any state securities regulator. Finmagix is not a broker-dealer registered with FINRA. Finmagix is not licensed as an insurance producer in any state. Finmagix is not a CPA firm. Finmagix is not a law firm and does not provide legal services. The Service is offered as an educational subscription product; it is not offered as part of a regulated advisory engagement." },
      ],
    },
    {
      heading: "8. How we make money — and what that means for you",
      body: [
        { p: "Finmagix is funded entirely by user subscription fees. We do not receive referral fees, commissions, affiliate payments, revenue-sharing arrangements, or any other form of compensation from the providers of financial products discussed in the Service. We do not sell user data. This matters because it eliminates the conflicts of interest that often shape product recommendations elsewhere in the financial industry. It also means that any educational content you see in the Service is not steered by a financial relationship with a third party." },
      ],
    },
    {
      heading: "9. Your decisions are your own",
      body: [
        { p: "You are the decision-maker for everything that touches your money. The Service can help you see options and trade-offs. It cannot tell you which option to pick, and it does not try to. Before you act on anything you have thought through with the Service — opening or closing an account, changing contributions, taking on or paying down debt, buying or canceling an insurance policy, making a tax election, transferring assets, signing legal documents — you should consider consulting a qualified professional whose job is to give advice and who can review your full situation." },
      ],
    },
    {
      heading: "10. Sources, assumptions, and limitations",
      body: [
        { p: "The Service relies on the information you provide. If your inputs are incomplete or inaccurate, the educational outputs you see will reflect that. The Service uses assumptions about variables you have not provided (for example, default rates of return, inflation, tax bracket thresholds, contribution limits, mortality tables) drawn from publicly available sources. These assumptions are reviewed and updated periodically. They are not predictions about your future. Actual outcomes will differ from any illustration or projection you see." },
      ],
    },
    {
      heading: "11. Out-of-scope topics",
      body: [
        { p: "Some financial topics are outside the Service’s scope. When the Service identifies a question that falls outside its scope — including but not limited to:" },
        { ul: [
          "Complex estate planning or trusts;",
          "Business ownership, succession, or compensation structuring;",
          "Multi-state or international tax situations;",
          "Special-needs planning;",
          "Divorce, separation, or other family-law matters;",
          "Active employment-equity decisions (RSUs, ISOs, NQSOs, ESPP timing);",
          "Litigation, regulatory, or compliance matters; or",
          "Anything that requires a licensed professional in your jurisdiction —",
        ]},
        { p: "the Service will tell you so and suggest you consult a qualified professional. We would rather acknowledge a limit than produce a partial answer that gives the appearance of a complete one." },
      ],
    },
    {
      heading: "12. Projections, illustrations, and past performance",
      body: [
        { p: "Any projection, illustration, scenario, or chart that the Service produces is a what-if calculation based on assumptions, not a prediction. Where the Service shows historical information, past performance is not a guarantee or predictor of future results. Markets, tax laws, contribution limits, regulations, and personal circumstances change. The Service is not a substitute for monitoring your own situation and adjusting your decisions as your life changes." },
      ],
    },
    {
      heading: "13. No guarantees",
      body: [
        { p: "Finmagix does not guarantee any specific financial outcome, return, savings amount, debt-payoff timeline, retirement readiness, or other result from the use of the Service. The Service does not eliminate the risk of loss. The Service does not provide certainty about the future." },
      ],
    },
    {
      heading: "14. The guide bot",
      body: [
        { p: "The Service includes a guide bot powered by third-party large-language-model technology. The bot is designed to answer questions about how to use the platform and to explain general financial concepts. The bot is designed not to answer questions about your personal financial situation or to make recommendations about what you should do; if you ask it those kinds of questions, it will redirect you to the relevant educational module or to a qualified professional. The bot can be wrong, can misunderstand a question, and should not be relied on as a source of advice." },
      ],
    },
    {
      heading: "15. Updates to this Disclaimer",
      body: [
        { p: "We may update this Disclaimer from time to time. The current version, and the date it took effect, will always be available on the Service. Material changes will be communicated as described in the Terms of Service." },
      ],
    },
    {
      heading: "16. Questions",
      body: [
        { p: "If you are unsure whether something you read on the Service should be relied on, the answer is: probably not, without input from a qualified professional. The Service is one piece of how you think about your money, not the whole of how you decide. If you would like to talk with us about this Disclaimer, write to legal@finmagix.com." },
      ],
    },
  ],
};

// ============================================================
// Privacy and Security Policy
// ============================================================
export const privacyAndSecurity: LegalDoc = {
  title: "Privacy and Security Policy",
  effectiveDate: "May 15, 2026",
  summary: [
    "We collect only what we need: email, your intake answers, your module inputs, your timeline notes. We do not connect to your brokerage or bank accounts.",
    "We do not sell your personal information. We do not use it to train third-party large-language models without your separate, opt-in consent.",
    "You can access, correct, export, or delete your data at any time. Write to privacy@finmagix.com from the email on your account.",
    "All data encrypted in transit (TLS 1.2+) and at rest. Audit logging of internal access. Documented incident-response process.",
    "Subprocessors: Supabase (database), Stripe (payments), Vercel (hosting), Anthropic (guide-bot AI), plus an email provider. Each operates under a contract that requires appropriate security and confidentiality.",
    "Incident notification: if a security incident creates meaningful risk to you, we will notify you without undue delay (in addition to regulators where required).",
  ],
  intro: {
    strong: true,
    text: "Two commitments we want to state at the top: we do not sell your personal information, and we do not use your personal information to train third-party large-language models without your separate, opt-in consent.",
  },
  sections: [
    {
      heading: "1. Our approach",
      body: [
        { p: "You are trusting Finmagix with information about your money and your life. We take that seriously. This Policy explains, in plain language, what we collect, why we collect it, how we use it, who we share it with, how we protect it, and the choices you have. If anything here is unclear, write to us at privacy@finmagix.com." },
      ],
    },
    {
      heading: "2. Who this policy applies to",
      body: [
        { p: "This Policy applies to information collected through the Finmagix website at finmagix.com (and any subdomains), our applications, and our related services. It does not apply to third-party websites or services we link to. The Service is a U.S.-only beta and is offered only to U.S. residents who are 18 years or older." },
      ],
    },
    {
      heading: "3. What we collect",
      body: [
        { p: "We collect only what we need to provide the Service. The categories below describe what that is." },
        { h3: "3.1 Information you give us" },
        { ul: [
          "Account information: email address, password (stored hashed), display name if you provide one.",
          "Intake information: short, conversational answers about your situation — for example, age band, income band, household structure, financial concerns, scenario-based risk-tolerance responses, and goals. We collect ranges and categories where exact figures are not needed.",
          "Module inputs: the information you provide when you run a module (e.g., savings rates, debt balances, contribution amounts). You decide what to enter.",
          "Timeline notes: optional free-text notes you add to your timeline.",
          "Support and bot conversations: messages you send to our support team and to the guide bot.",
          "Payment information: name, billing address, and the last four digits of your payment card or other minimal payment details. Full payment card data is collected and processed by Stripe, not stored by us.",
          "Communications: emails you send us, survey responses, and feedback.",
        ]},
        { h3: "3.2 Information we collect automatically" },
        { ul: [
          "Activity data: which pages you visit, which modules you run, which paths you expand within an analysis, and how you move through the Service. This is the basis of your timeline and our audit trail.",
          "Device and connection data: IP address, browser type, operating system, language preference, time zone, approximate location derived from IP, and similar technical metadata necessary to deliver and secure the Service.",
          "Cookies and similar technologies: a small number of essential cookies needed for sign-in, security, and basic preferences. See Section 11.",
        ]},
        { h3: "3.3 Information we do not collect" },
        { ul: [
          "We do not connect to your brokerage, retirement-plan, or insurance accounts and do not collect account-level holdings, positions, or balances from third-party financial institutions.",
          "We do not collect Social Security numbers or other government-issued identification numbers.",
          "We do not collect biometric data.",
          "We do not collect precise location data.",
        ]},
      ],
    },
    {
      heading: "4. Why we collect it (purposes of processing)",
      body: [
        { p: "We use your information for the following purposes:" },
        { ul: [
          "To provide the Service — sign you in, run modules with your inputs, produce educational analyses, surface module suggestions, and operate the guide bot.",
          "To keep your timeline and audit trail — an automatically maintained record of your activity, used to give you a clear history of your thinking and to support the integrity of the Service.",
          "To process payments and manage subscriptions — including through Stripe.",
          'To communicate with you — including the monthly "what we noticed" content email (which combines a brief observation about your activity with general financial-regulation updates), occasional behavior-triggered messages about your subscription, and transactional messages (account confirmation, trial-ending, billing receipts).',
          "To protect the Service — detecting and preventing abuse, fraud, security incidents, and violations of our Terms.",
          "To improve the Service — aggregate analytics, debugging, and product research, in ways consistent with this Policy.",
          "To comply with legal obligations and to defend our legal rights.",
        ]},
      ],
    },
    {
      heading: "5. The audit trail",
      body: [
        { p: "The Service automatically maintains an audit trail. The audit trail is an immutable record of: profile changes, module runs, the engine version used to produce each analysis, the inputs that were considered, assumptions that were applied, alternatives that were surfaced, and certain user actions within the Service. The audit trail is part of how we hold ourselves to the compliance frameworks the Service is built against, and it is what makes it possible to reproduce a past analysis if you (or, with your consent, a professional you choose to share it with) ever needs to revisit it. The audit trail is not used to market to you, and we do not sell it." },
      ],
    },
    {
      heading: "6. How we share information",
      body: [
        { p: "We share information only as described below." },
        { h3: "6.1 Service providers (subprocessors)" },
        { p: "We use a small set of third-party service providers to operate the Service. Each one processes information only as needed to perform its function, under a contract that obligates it to maintain appropriate security and confidentiality." },
        { table: {
          head: ["Provider", "Purpose", "Information shared"],
          rows: [
            ["Supabase", "Database and authentication", "Account information, intake responses, module inputs and outputs, timeline entries, audit-trail records."],
            ["Vercel", "Hosting and content delivery", "Connection metadata; transient information necessary to serve pages and APIs."],
            ["Stripe", "Payment processing", "Name, billing address, payment card or other payment details, subscription state. Stripe stores and processes full card data; we do not."],
            ["Anthropic", "AI services that power the guide bot and certain support features", "The contents of conversations with the guide bot and related context. Conversations are sent under Anthropic’s applicable terms; we do not use them to train third-party models without your separate consent."],
            ["Email provider", "Transactional and content email delivery", "Email address, name where provided, and the contents of emails we send you."],
          ],
        }},
        { p: "We will keep an up-to-date list of subprocessors in this Policy. If we add a subprocessor that materially affects the processing of your information, we will update this Policy and, where appropriate, notify you in advance." },
        { h3: "6.2 Other situations in which we may share information" },
        { ul: [
          "With your consent or at your direction — for example, if you choose to export your timeline or share an analysis with someone else.",
          "To comply with law — including in response to lawful requests by public authorities, court orders, or subpoenas, where required. We will challenge requests we believe are overbroad or unlawful.",
          "To protect rights and safety — to enforce our Terms, investigate fraud, or protect the rights, property, or safety of Finmagix, our users, or others.",
          "In a business transaction — if we are involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction. We will require any acquirer to honor this Policy or provide notice to you of any material changes.",
        ]},
        { h3: "6.3 What we do not do" },
        { ul: [
          "We do not sell your personal information.",
          "We do not share your personal information with advertisers or data brokers.",
          "We do not use your personal information to train third-party large-language models without your separate, opt-in consent.",
          "We do not share your information with the issuer of any financial product, fund, security, or insurance policy in exchange for compensation. We do not receive such compensation.",
        ]},
      ],
    },
    {
      heading: "7. How we protect your information (security)",
      body: [
        { p: "Security is something we design for, not something we bolt on. Our practices include, at a minimum:" },
        { ul: [
          "Encryption in transit: all connections to the Service use TLS 1.2 or higher.",
          "Encryption at rest: data stored in our primary database is encrypted using industry-standard schemes.",
          "Role-based access control: internal access to user records is restricted to personnel who need it for a specific operational reason, on a least-privilege basis.",
          "Audit logging of internal access: when our personnel access user records, that access is logged.",
          "Authentication: passwords are stored hashed; we support modern authentication flows and follow our service providers’ security guidance.",
          "Network and application security: standard protections against common web-application vulnerabilities, dependency management, and periodic review.",
          "Subprocessor due diligence: we work with established, security-mature service providers (see Section 6.1) and rely on their respective compliance posture for the infrastructure layer.",
          "Data minimization: we collect ranges and categories rather than exact figures wherever exact figures are not needed.",
          "Documented incident-response process: we have an internal process for identifying, containing, investigating, and responding to security incidents, and for notifying you and applicable authorities when required by law (see Section 14).",
          "Security review: we conduct periodic security review and remediation of findings on a tracked timeline. We intend to engage third-party security review at an appropriate stage of growth.",
        ]},
        { p: "No security program is perfect. Even when we follow our practices, a breach could occur. If we determine that your personal information was affected by a security incident in a manner that creates a meaningful risk to you, we will notify you and act as Section 14 describes." },
      ],
    },
    {
      heading: "8. How long we keep your information (retention)",
      body: [
        { p: "We keep your information for as long as your account is active and for a limited period afterward, in order to (a) provide the Service, (b) meet the recordkeeping standards described in our compliance framework, (c) resolve disputes, (d) defend legal claims, and (e) comply with law." },
        { p: "Indicative retention periods:" },
        { ul: [
          "Account and intake information: retained while your account is active; deleted within sixty (60) days of account closure unless retention is required by law or to resolve a dispute.",
          "Module analyses and audit-trail records: retained for at least seven (7) years from the date of creation, to support the recordkeeping and review obligations described in our compliance framework. Specific retention periods will be finalized with counsel before public launch.",
          "Payment records: retained per Stripe’s practices and as required by applicable tax and financial-records laws.",
          "Support and bot conversations: retained for up to twenty-four (24) months for quality, abuse-prevention, and compliance-review purposes.",
          "Backups: deleted on the normal backup-rotation schedule (typically thirty to ninety days after the corresponding primary record is deleted).",
        ]},
      ],
    },
    {
      heading: "9. Your rights and choices",
      body: [
        { p: "Depending on where you live, you may have rights under state privacy law (for example, the California Consumer Privacy Act / California Privacy Rights Act, or analogous laws in other states). We honor the following rights for all users in our U.S. beta, regardless of state of residence:" },
        { ul: [
          "Access — request a copy of the personal information we hold about you.",
          "Correction — ask us to correct information you believe is inaccurate.",
          "Deletion — ask us to delete your account and the personal information associated with it, subject to retention obligations described in Section 8.",
          "Export — request a portable copy of your timeline and module outputs in a common format.",
          "Communication preferences — opt out of non-transactional emails at any time. Every non-transactional email contains a one-click unsubscribe link.",
          "Withdraw consent — where we relied on your consent to process information (for example, opt-in to use a feature that requires it), you may withdraw consent at any time. Withdrawal does not affect processing performed before the withdrawal.",
        ]},
        { p: "To exercise any of these rights, write to privacy@finmagix.com from the email associated with your account. We will respond within forty-five (45) days, or sooner where required by law. We do not discriminate against users for exercising their privacy rights." },
      ],
    },
    {
      heading: "10. Communications and email",
      body: [
        { p: "We send a small number of emails. We do not blend service content with upgrade prompts. Categories:" },
        { ul: [
          "Transactional emails (account confirmation, password reset, trial-ending notice, billing receipts, security alerts). These are operational and not unsubscribable.",
          'Service content: the monthly "what we noticed" email, which combines a brief observation about your activity with a general digest of changes in financial regulations and limits. Unsubscribable in one click.',
          "Behavior-triggered messages: occasional emails sent when your activity suggests a particular module or feature might be of interest. These are sent at most once per intent signal and are unsubscribable in one click.",
        ]},
        { p: "We do not send marketing emails to anyone who has not subscribed to the Service. We do not buy email lists. We do not share your email address with marketers." },
      ],
    },
    {
      heading: "11. Cookies and similar technologies",
      body: [
        { p: "The Service uses a small set of essential cookies for sign-in, security, and basic preferences. We do not use third-party advertising cookies, tracking pixels for behavioral advertising, or cross-site trackers. We may use a privacy-friendly analytics tool to understand aggregate usage; if we do, we will name it in this Policy and configure it consistently with our minimization commitments." },
      ],
    },
    {
      heading: "12. Children’s privacy",
      body: [
        { p: "The Service is not directed to children under 18, and we do not knowingly collect information from anyone under 18. If we learn we have collected personal information from a person under 18, we will delete it. If you believe a person under 18 has provided us with information, contact privacy@finmagix.com." },
      ],
    },
    {
      heading: "13. International users",
      body: [
        { p: "The Service is currently offered only to U.S. residents. If you access the Service from outside the United States, please do not submit personal information through the Service. By using the Service, you understand and acknowledge that your information will be stored and processed in the United States and may be subject to U.S. law." },
      ],
    },
    {
      heading: "14. Incident response and breach notification",
      body: [
        { p: "We maintain an internal incident-response process that covers identification, containment, investigation, remediation, and notification. If we determine that a security incident has resulted, or is reasonably likely to have resulted, in unauthorized access to or disclosure of your personal information in a manner that creates a meaningful risk of harm to you, we will:" },
        { ul: [
          "Notify you without undue delay, by email and through the Service, with the information you need to understand what happened, what information was affected, and what steps you can take.",
          "Notify the appropriate regulators and law-enforcement authorities where required by law.",
          "Continue to investigate and remediate, and update affected users as we learn more.",
        ]},
      ],
    },
    {
      heading: "15. Changes to this Policy",
      body: [
        { p: 'We may update this Policy from time to time. If we make material changes, we will notify you by email or through the Service before the changes take effect. The "Last Updated" date at the top of the Policy reflects the latest revision. Older versions are available on request.' },
      ],
    },
    {
      heading: "16. Contact",
      body: [
        { p: "For privacy questions, requests to exercise your rights, or to report a suspected security issue, contact us at privacy@finmagix.com (privacy) or security@finmagix.com (security). Our mailing address is [Finmagix, Inc., address to be confirmed]." },
        { p: "If you have a complaint about how we have handled your personal information, please contact us first; we want to address concerns directly. You also have the right to lodge a complaint with the appropriate state regulator where applicable." },
      ],
    },
  ],
};
