import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { cookies } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/cookies");

export default function CookiesPage() {
  return <LegalPage doc={cookies} />;
}
