import { PlanCard } from "@/components/common/plan-card";
import { allPlans } from "@/lib/pricing";
import type { ProductLine } from "@/types";

export function PlanRecommendationCard({
  planId,
  product,
}: {
  planId: string;
  product?: ProductLine;
}) {
  const plan = allPlans.find((p) => p.id === planId) ?? allPlans[0];
  const productLabel =
    (product ?? plan.product) === "app"
      ? "SUMAUP360 App"
      : "SUMAUP360 Web SaaS";

  return (
    <div>
      <p className="text-center text-sm font-medium text-muted-foreground">
        Según tu diagnóstico, te recomendamos en {productLabel}:
      </p>
      <div className="mx-auto mt-4 max-w-sm">
        <PlanCard plan={plan} />
      </div>
    </div>
  );
}
