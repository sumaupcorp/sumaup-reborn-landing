"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { DiagnosisResultCard } from "@/components/diagnosis/DiagnosisResultCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { loadDiagnosis } from "@/lib/storage";
import type { DiagnosisResult } from "@/types";

export function DiagnosisResultView() {
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
        <Skeleton className="h-72 w-full rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <DiagnosisResultCard result={result} />

      <div className="mt-6 flex flex-col gap-3">
        <Button
          asChild
          className="h-12 bg-brand-blue text-base font-semibold hover:bg-brand-blue/90"
        >
          <Link href="/diagnostico/plan-recomendado">
            Ver plan recomendado
            <ArrowRight className="size-5" />
          </Link>
        </Button>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="h-12 flex-1 text-base font-semibold"
          >
            <Link href="/home">Ir a mi inicio</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-12 flex-1 text-sm text-muted-foreground hover:text-brand-ink"
          >
            <Link href="/diagnostico">
              <RotateCcw className="size-4" />
              Rehacer diagnóstico
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
