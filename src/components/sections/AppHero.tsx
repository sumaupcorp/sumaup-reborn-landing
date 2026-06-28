import Link from "next/link";
import {
  Stethoscope,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Receipt,
  FileCheck2,
  BellRing,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { OnboardingShowcase } from "@/components/sections/OnboardingShowcase";

const chips = [
  { icon: TrendingUp, label: "Ingresos" },
  { icon: Receipt, label: "Gastos" },
  { icon: FileCheck2, label: "Declaraciones" },
  { icon: BellRing, label: "Alertas SUNAT" },
  { icon: Sparkles, label: "Asistente IA" },
];

export function AppHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_85%_10%,#33d1ff24,transparent)]"
      />
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
        {/* Texto */}
        <Reveal>
          <div className="max-w-xl">
            <span className="glass-pill px-3 py-1 text-xs font-semibold text-brand-blue">
              <Sparkles className="size-3.5" />
              SUMAUP360 App · Para RUC 10
            </span>

            <h1 className="mt-5 text-4xl leading-[1.07] font-bold text-balance text-brand-ink sm:text-5xl lg:text-6xl">
              Tu contador de bolsillo, siempre contigo
            </h1>

            <p className="mt-5 max-w-lg text-base text-pretty text-muted-foreground sm:text-justify sm:text-lg">
              Declara a SUNAT, registra tus ingresos y resuelve tus dudas con el
              asistente IA Suma. Pensada para taxistas, repartidores y
              profesionales independientes que quieren cumplir sin
              complicaciones.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 bg-brand-blue px-6 text-base font-semibold hover:bg-brand-blue/90"
              >
                <Link href="/diagnostico">
                  <Stethoscope className="size-5" />
                  Hacer diagnóstico gratis
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 text-base font-semibold"
              >
                <Link href="/contacto">
                  Unirme a la lista de espera
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="glass-card inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-brand-ink/80"
                >
                  <chip.icon className="size-3.5 text-brand-blue" />
                  {chip.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Carrusel de onboarding de la App */}
        <Reveal delay={0.1}>
          <OnboardingShowcase />
        </Reveal>
      </Container>
    </section>
  );
}
