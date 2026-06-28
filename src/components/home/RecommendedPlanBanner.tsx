import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allPlans } from "@/lib/pricing";
import type { DiagnosisResult } from "@/types";

export function RecommendedPlanBanner({ result }: { result: DiagnosisResult }) {
  const plan =
    allPlans.find((p) => p.id === result.recommendedPlanId) ?? allPlans[0];

  return (
    <div className="glass-panel overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge className="h-6 bg-brand-blue px-3 text-xs font-semibold text-white">
            <Sparkles className="size-3" />
            Plan recomendado para ti
          </Badge>
          <h2 className="mt-3 text-2xl font-bold text-brand-ink">
            {plan.name} · {plan.priceMonthly}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Según tu perfil: {result.segmentLabel}. {plan.tagline}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <Button
            asChild
            className="h-11 bg-brand-blue px-6 font-semibold hover:bg-brand-blue/90"
          >
            <Link href="/diagnostico/plan-recomendado">
              Ver plan recomendado
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6 font-semibold">
            <Link href="/contacto">Continuar gratis</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
