import Link from "next/link";
import { ArrowRight, Check, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Icon } from "@/components/common/icon";
import { CountUp } from "@/components/common/count-up";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { hero } from "@/lib/site-copy";

export function Hero() {
  return (
    <section className="relative overflow-x-clip bg-white">
      {/* Fondo en capas: malla de gradientes + grid sutil */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_82%_-5%,#33d1ff26,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_5%_100%,#0b5bff14,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b5bff0a_1px,transparent_1px),linear-gradient(to_bottom,#0b5bff0a_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
      </div>

      <Container className="pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-28">
        {/* Fila principal: texto a la izquierda, visual a la derecha */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 xl:gap-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="glass-pill px-3.5 py-1.5 text-xs font-semibold text-brand-blue">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-electric/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-blue" />
                </span>
                {hero.badge}
              </span>

              <h1 className="mt-6 text-4xl leading-[1.07] font-bold tracking-tight text-balance text-brand-ink sm:text-5xl lg:text-[3.25rem]">
                {hero.titleLead}{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-electric to-brand-sky bg-clip-text text-transparent">
                  {hero.titleAccent}
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-base text-pretty text-muted-foreground sm:text-lg">
                {hero.subtitle}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {hero.badges.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-1.5 text-sm font-medium text-brand-ink/75"
                  >
                    <span className="flex size-4 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTAs: diagnóstico (acción principal) + ver app */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  className="h-12 bg-brand-blue px-6 text-base font-semibold shadow-lg shadow-brand-blue/25 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue/90"
                >
                  <Link href="/diagnostico">
                    <Stethoscope className="size-5" />
                    {hero.ctas.diagnostico}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="group h-12 px-6 text-base font-semibold"
                >
                  <Link href="/app">
                    {hero.ctas.app}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <HeroVisual />
          </Reveal>
        </div>

        {/* Franja de stats centrada debajo de la imagen */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-3xl sm:mt-16 lg:mt-20">
            <p className="flex items-center justify-center gap-1.5 text-center text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-brand-electric" />
              {hero.social}
            </p>
            <dl className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
              {hero.metrics.map((m) => (
                <div
                  key={m.label}
                  className="glass-card flex flex-col items-center rounded-2xl px-3 py-5 text-center sm:px-5"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue sm:size-10">
                    <Icon name={m.icon} className="size-[18px] sm:size-5" />
                  </span>
                  <dd className="mt-3 text-2xl font-bold tracking-tight text-brand-ink tabular-nums sm:text-3xl lg:text-4xl">
                    <CountUp value={m.value} suffix={m.suffix} />
                  </dd>
                  <dt className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-sm">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
