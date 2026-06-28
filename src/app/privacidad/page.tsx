import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacidad } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/privacidad");

export default function PrivacidadPage() {
  return <LegalPage doc={privacidad} />;
}
