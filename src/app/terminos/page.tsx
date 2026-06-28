import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { terminos } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/terminos");

export default function TerminosPage() {
  return <LegalPage doc={terminos} />;
}
