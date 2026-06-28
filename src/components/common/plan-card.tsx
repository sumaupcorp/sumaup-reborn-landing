import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Plan } from "@/types";
import { cn } from "@/lib/utils";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "glass-panel relative flex h-full flex-col p-6 transition-all sm:p-7",
        plan.highlighted
          ? "border-brand-blue ring-2 ring-brand-blue/40"
          : "hover:-translate-y-0.5 hover:shadow-md",
      )}
    >
      {plan.badge ? (
        <Badge className="absolute -top-3 left-6 h-6 bg-brand-blue px-3 text-xs font-semibold text-white">
          {plan.badge}
        </Badge>
      ) : null}

      <h3 className="text-lg font-semibold text-brand-ink">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-brand-ink">
          {plan.priceMonthly}
        </span>
      </div>
      {plan.priceNote ? (
        <p className="mt-1 text-xs text-muted-foreground">{plan.priceNote}</p>
      ) : null}

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-brand-blue">
              <Check className="size-3.5" />
            </span>
            <span className="text-brand-ink/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn(
          "mt-7 h-11 w-full font-semibold",
          plan.highlighted
            ? "bg-brand-blue hover:bg-brand-blue/90"
            : "",
        )}
        variant={plan.highlighted ? "default" : "outline"}
      >
        <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
      </Button>
    </div>
  );
}
