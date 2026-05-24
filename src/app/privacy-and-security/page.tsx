import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { privacyAndSecurity } from "@/lib/legal";

export const metadata: Metadata = {
  title: privacyAndSecurity.title,
  description:
    "How Finmagix handles your personal information and protects your data. We collect only what we need, do not sell your information, and use TLS 1.2+ encryption with role-based access and audit logging.",
};

export default function PrivacyAndSecurityPage() {
  return <LegalPage doc={privacyAndSecurity} />;
}
