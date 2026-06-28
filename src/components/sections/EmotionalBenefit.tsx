import { Clock, Smile, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { sumaActions } from "@/lib/assets";

const benefits = [
  {
    icon: Clock,
    title: "Más tiempo",
    detail: "Menos horas peleando con planillas y trámites.",
  },
  {
    icon: Smile,
    title: "Menos estrés",
    detail: "La tranquilidad de saber que todo está en orden.",
  },
  {
    icon: Sparkles,
    title: "Más claridad",
    detail: "Decisiones con números claros, no a ciegas.",
  },
];

export function EmotionalBenefit() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Suma descansando: la calma de tener todo bajo control */}
          <Reveal>
            <SumaFigure
              asset={sumaActions.beach}
              glow="cyan"
              className="mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md"
              sizes="(max-width: 768px) 70vw, 440px"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                Tu tranquilidad
              </span>
              <h2 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                Ordena tu negocio y recupera tu calma
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Cuando tus finanzas y tus obligaciones están bajo control, te
                liberas para enfocarte en lo que de verdad importa: crecer y
                disfrutar de tu trabajo.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {benefits.map((item) => (
                  <li key={item.title} className="glass-card rounded-2xl p-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <item.icon className="size-5" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-brand-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
