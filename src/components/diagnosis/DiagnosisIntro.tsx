import {
  Stethoscope,
  ArrowRight,
  Landmark,
  BadgeCheck,
  Clock,
} from "lucide-react";
import { SumaFigure } from "@/components/common/suma-figure";
import { RevealGroup, RevealItem } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { suma } from "@/lib/assets";
import { LEGAL_NOTICE } from "@/lib/diagnosis";

const benefits = [
  {
    icon: Landmark,
    title: "Tu situación frente a SUNAT",
    detail: "Entiende en qué régimen encajas y qué te toca cumplir.",
  },
  {
    icon: BadgeCheck,
    title: "El plan ideal para ti",
    detail: "Te recomendamos App o ERP según tu actividad.",
  },
  {
    icon: Clock,
    title: "En menos de 2 minutos",
    detail: "Solo 5 preguntas, sin registros ni complicaciones.",
  },
];

export function DiagnosisIntro({
  onStart,
  onSkip,
}: {
  onStart: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="text-center">
      <SumaFigure
        asset={suma.diagnostico}
        glow="cyan"
        priority
        className="mx-auto w-40 sm:w-48"
        sizes="200px"
      />

      <h1 className="mt-6 text-2xl font-bold text-balance text-brand-ink sm:text-3xl">
        Diagnóstico tributario gratuito
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        Responde 5 preguntas y Suma te dará una orientación inicial sobre tu
        situación y el plan que mejor se adapta a ti.
      </p>

      {/* Qué obtendrás (entrada en cascada) */}
      <RevealGroup className="mx-auto mt-7 grid max-w-sm gap-2.5 text-left">
        {benefits.map((benefit) => (
          <RevealItem
            key={benefit.title}
            className="flex items-start gap-3 rounded-2xl bg-brand-soft/70 p-3"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <benefit.icon className="size-[18px]" />
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-ink">
                {benefit.title}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                {benefit.detail}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-8 flex flex-col gap-3">
        <Button
          onClick={onStart}
          className="h-12 bg-brand-blue px-6 text-base font-semibold hover:bg-brand-blue/90"
        >
          <Stethoscope className="size-5" />
          Empezar diagnóstico
        </Button>
        <Button
          onClick={onSkip}
          variant="ghost"
          className="h-11 text-sm font-medium text-muted-foreground hover:text-brand-ink"
        >
          Saltar por ahora
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <p className="mx-auto mt-8 max-w-sm rounded-2xl bg-brand-soft p-3 text-xs text-muted-foreground">
        {LEGAL_NOTICE}
      </p>
    </div>
  );
}
