"use client";

import { useEffect, useState } from "react";
import { HomeWithDiagnosis } from "@/components/home/HomeWithDiagnosis";
import { HomeWithoutDiagnosis } from "@/components/home/HomeWithoutDiagnosis";
import { Container, Section } from "@/components/common/container";
import { Skeleton } from "@/components/ui/skeleton";
import { loadDiagnosis } from "@/lib/storage";
import type { DiagnosisResult } from "@/types";

export function HomeView() {
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const saved = loadDiagnosis();
    if (saved.status === "COMPLETED" && saved.result) {
      setResult(saved.result);
    }
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <Section className="bg-white">
        <Container>
          <div className="grid gap-6">
            <Skeleton className="h-10 w-2/3 max-w-md" />
            <Skeleton className="h-5 w-full max-w-xl" />
            <Skeleton className="h-40 w-full rounded-3xl" />
          </div>
        </Container>
      </Section>
    );
  }

  return result ? <HomeWithDiagnosis result={result} /> : <HomeWithoutDiagnosis />;
}
