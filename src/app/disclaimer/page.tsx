import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { disclaimer } from "@/lib/legal";

export const metadata: Metadata = {
  title: disclaimer.title,
  description:
    "Finmagix is an educational, structured-thinking tool — not a financial advisor, fiduciary, tax preparer, broker, or insurance agent. Important information about the scope and limits of what Finmagix does.",
};

export default function DisclaimerPage() {
  return <LegalPage doc={disclaimer} />;
}
