import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: terms.title,
  description:
    "These Terms govern your use of Finmagix Lite. Educational and structured-thinking only — not a financial advisor. Subscription tiers, billing, cancellation, and our disclaimer of warranties and limitation of liability.",
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
