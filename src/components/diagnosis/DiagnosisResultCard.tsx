import { Check } from "lucide-react";
import { SumaFigure } from "@/components/common/suma-figure";
import { Badge } from "@/components/ui/badge";
import { suma } from "@/lib/assets";
import { LEGAL_NOTICE } from "@/lib/diagnosis";
import type { DiagnosisResult } from "@/types";

const confidenceLabel: Record<DiagnosisResult["confidence"], string> = {
  alta: "Confianza alta",
  media: "Confianza media",
  inicial: "Orientación inicial",
};

export function DiagnosisResultCard({ result }: { result: DiagnosisResult }) {
  return (
    <div className="glass-panel p-7">
      <div className="flex items-start gap-4">
        <SumaFigure
          asset={suma.recomendando}
          glow="soft"
          blob={false}
          className="w-20 shrink-0 sm:w-24"
          sizes="96px"
        />
        <div>
          <Badge className="h-6 bg-accent px-3 text-xs font-semibold text-accent-foreground">
            {confidenceLabel[result.confidence]}
          </Badge>
          <h2 className="mt-2 text-xl font-bold text-brand-ink sm:text-2xl">
            Tu perfil: {result.segmentLabel}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{result.profile}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {result.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-brand-blue">
              <Check className="size-3.5" />
            </span>
            <span className="text-brand-ink/80">{highlight}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-2xl bg-brand-soft p-3 text-xs text-muted-foreground">
        {LEGAL_NOTICE}
      </p>
    </div>
  );
}
