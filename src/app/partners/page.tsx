// Partners page — 4 partner sections (credit unions, community banks,
// employers, CFP advisors) with anchor-based deep-linking + per-section
// "Talk to us" CTAs that pre-fill the contact form's Institution
// dropdown via URL hash.
//
// Source: prototype/site/pages/other-pages.jsx PartnersPage + data.js
// window.PARTNERS. Replaces WS-2 /partners page.
//
// Founder Session 02 decision C: per-partner B2B PRICING is REMOVED
// from display (was shown as `.partner-price` in the prototype's
// price field — "$8 per member, per month" etc.). The data still
// names price for internal reference, but the partner-card render
// skips it. Consistent with Session 01 pricing-drop across surfaces.

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  Building2Icon,
  LandmarkIcon,
  BriefcaseIcon,
  UsersIcon,
} from "@/components/Icons";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "For partners",
  description:
    "Credit unions, community banks, employers, and CFP advisors all reach people who deserve plain-language financial thinking but won't get it from a glossy app or a $250k minimum. We work with each differently. No commission strings. No data resale.",
};

type IconCmp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

type Partner = {
  id: string;
  name: string;
  Icon: IconCmp;
  framing: string;
  benefits: readonly string[];
};

const partners: readonly Partner[] = [
  {
    id: "credit-unions",
    name: "Credit unions",
    Icon: Building2Icon,
    framing:
      "Offer Finmagix as a member benefit. Members get a quiet, thorough thinking tool; you get a differentiator that doesn't require hiring planners.",
    benefits: [
      "White-label branding aligned to your credit union's identity",
      "Single sign-on with your existing member portal",
      "Quarterly engagement reports (aggregated, never individual member data)",
      "Co-marketing kit — emails, in-branch cards, statement inserts",
    ],
  },
  {
    id: "community-banks",
    name: "Community banks",
    Icon: LandmarkIcon,
    framing:
      "A complement to your relationship banking model. Helps customers think clearly without competing with your trust or wealth desks.",
    benefits: [
      "Branded portal for retail banking customers",
      "Hand-off paths into your existing services when customers want a real person",
      "Compliance documentation for the disclosures and educational-purposes framing",
      "Quarterly reporting on what topics customers are working through",
    ],
  },
  {
    id: "employers",
    name: "Employers",
    Icon: BriefcaseIcon,
    framing:
      "A financial wellness benefit your employees might actually use — because it doesn't lecture them, doesn't shame them, and doesn't require them to attend a webinar.",
    benefits: [
      "Rolled out as part of your benefits package",
      "Anonymous, aggregate participation reporting for HR",
      "Optional onboarding session for your team (no upsell, no pitch)",
      "Works alongside your existing 401(k) provider — we don't replace them",
    ],
  },
  {
    id: "advisors",
    name: "CFP advisors",
    Icon: UsersIcon,
    framing:
      "A scalable way to serve clients below your minimums — or to keep existing clients' between-meeting thinking organized in one place.",
    benefits: [
      "White-label deployment under your firm's name",
      "Read-only view into client modules (with their permission)",
      "Reduces inbound questions that don't need an advisor to answer",
      "Designed to extend your reach, not replace it",
    ],
  },
];

export default function PartnersPage() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="eyebrow">For partners</div>
        <h1
          className="t-page-title"
          style={{ marginTop: 16, marginBottom: 16 }}
        >
          Bring Finmagix to the people you already serve.
        </h1>
        <p className="t-lede" style={{ maxWidth: 720 }}>
          Credit unions, community banks, employers, and CFP advisors all reach people who deserve plain-language financial thinking but won&apos;t get it from a glossy app or a $250k minimum. We work with each differently. No commission strings. No data resale. Same kind voice across every deployment.
        </p>

        <div className="partners-toc" style={{ marginTop: 40 }}>
          {partners.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              {p.name}
            </a>
          ))}
        </div>

        {partners.map((p) => (
          <div className="partner-section" id={p.id} key={p.id}>
            <div className="partner-section__inner">
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface-tier-recommended)",
                    color: "var(--accent-primary)",
                    marginBottom: 16,
                  }}
                >
                  <p.Icon size={24} />
                </div>
                <h2>{p.name}</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--ink-secondary)",
                    maxWidth: 420,
                    margin: 0,
                  }}
                >
                  {p.framing}
                </p>
                {/* C: per-partner pricing intentionally NOT rendered.
                    See file header + docs/tech-debt-marketing.md. */}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--ink-tertiary)",
                    marginTop: 0,
                    marginBottom: 16,
                  }}
                >
                  What&apos;s included
                </h3>
                <ul className="benefits">
                  {p.benefits.map((b) => (
                    <li key={b}>
                      <span className="check">
                        <CheckIcon size={16} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="partner-section__cta">
                  <Link href={`/contact#${p.id}`} className="btn btn--primary">
                    Talk to us
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
