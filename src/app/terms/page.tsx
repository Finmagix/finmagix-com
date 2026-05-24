import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: terms.title,
  description:
    "These Terms govern your use of Finmagix. Educational and structured-thinking only — not a financial advisor. Subscription tiers, billing, cancellation, and our disclaimer of warranties and limitation of liability.",
};

// Per founder direction (2026-05-24): on /terms only, hide the
// "plain-language version" summary callout AND the intro callout.
// Page starts straight at section 1. Summary + intro data still
// exist in src/lib/legal.ts and ship to /disclaimer + /privacy-and-
// security — the hide is presentation-only, scoped to /terms.
export default function TermsPage() {
  return <LegalPage doc={terms} hideSummary hideIntro />;
}
