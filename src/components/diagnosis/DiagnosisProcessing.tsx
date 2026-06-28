"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { SumaFigure } from "@/components/common/suma-figure";
import { suma } from "@/lib/assets";
import { computeResult } from "@/lib/diagnosis";
import { loadDiagnosis, saveDiagnosis } from "@/lib/storage";

const messages = [
  "Revisando tus respuestas",
  "Analizando tu actividad",
  "Preparando tu plan recomendado",
];

export function DiagnosisProcessing() {
  const router = useRouter();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const saved = loadDiagnosis();

    // Sin diagnóstico en progreso: regresar al inicio del flujo.
    if (saved.segment === "UNKNOWN" || Object.keys(saved.answers).length === 0) {
      router.replace("/diagnostico");
      return;
    }

    const result = computeResult(saved.segment, saved.answers);
    saveDiagnosis({
      ...saved,
      status: "COMPLETED",
      result,
      updatedAt: Date.now(),
    });

    const rotate = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
    }, 800);

    const timeout = setTimeout(() => {
      router.replace("/diagnostico/resultado");
    }, 2400);

    return () => {
      clearInterval(rotate);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="mx-auto w-full max-w-md text-center">
      <div className="glass-panel p-8">
        <SumaFigure
          asset={suma.esperando}
          glow="cyan"
          priority
          className="mx-auto w-36 sm:w-44"
          sizes="180px"
        />
        <div className="mt-6 flex items-center justify-center gap-2 text-brand-blue">
          <Loader2 className="size-5 animate-spin" />
          <p className="text-base font-semibold">{messages[messageIndex]}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Suma está preparando tu orientación inicial.
        </p>
      </div>
    </div>
  );
}
