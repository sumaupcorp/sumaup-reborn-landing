import type { Metadata } from "next";
import { DiagnosisShell } from "@/components/diagnosis/DiagnosisShell";
import { DiagnosisFlow } from "@/components/diagnosis/DiagnosisFlow";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/diagnostico");

export default function DiagnosticoPage() {
  return (
    <DiagnosisShell>
      <DiagnosisFlow />
    </DiagnosisShell>
  );
}
