"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PlanRecommendationCard } from "@/components/diagnosis/PlanRecommendationCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { LEGAL_NOTICE } from "@/lib/diagnosis";
import { loadDiagnosis } from "@/lib/storage";
import type { DiagnosisResult } from "@/types";

export function DiagnosisPlanView() {
  const router = useRouter();
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = loadDiagnosis();
    if (saved.status === "COMPLETED" && saved.result) {
      setResult(saved.result);
      setReady(true);
    } else {
      router.replace("/diagnostico");
    }
  }, [router]);

  if (!ready || !result) {
    return (
      <div className="mx-auto w-full max-w-xl">
        <Skeleton className="h-96 w-full rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <PlanRecommendationCard
        planId={result.recommendedPlanId}
        product={result.recommendedProduct}
      />

      <div className="mt-6 flex flex-col gap-3">
        <Button
          asChild
          className="h-12 bg-brand-blue text-base font-semibold hover:bg-brand-blue/90"
        >
          <Link href="/contacto">Continuar gratis</Link>
        </Button>
        <Button asChild variant="outline" className="h-12 text-base font-semibold">
          <Link href="/home">Ir a mi inicio</Link>
        </Button>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {LEGAL_NOTICE}
      </p>
    </div>
  );
}
