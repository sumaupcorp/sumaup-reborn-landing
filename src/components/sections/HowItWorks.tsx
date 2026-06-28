import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { sumaActions } from "@/lib/assets";

const steps = [
  {
    n: "01",
    title: "Haz tu diagnóstico",
    detail:
      "Responde unas preguntas y conoce tu situación tributaria en minutos, según tu actividad.",
  },
  {
    n: "02",
    title: "Elige tu herramienta",
    detail:
      "La App si eres independiente con RUC 10, o la Web SaaS con ERP si tienes un negocio.",
  },
  {
    n: "03",
    title: "Suma te acompaña",
    detail:
      "Registra, declara y resuelve dudas con el asistente IA Suma como tu guía tecnológica.",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Suma con su laptop como guía */}
          <Reveal>
            <SumaFigure
              asset={sumaActions.laptop}
              glow="blue"
              className="mx-auto w-60 sm:w-72 lg:w-full lg:max-w-sm"
              sizes="(max-width: 768px) 65vw, 400px"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="Cómo funciona"
                title="Empieza en tres pasos simples"
                subtitle="Sin trámites complicados ni jerga tributaria. Suma te guía de principio a fin."
                align="left"
              />

              <RevealGroup className="mt-8 grid gap-4">
                {steps.map((step) => (
                  <RevealItem key={step.n}>
                    <div className="glass-card flex items-start gap-4 rounded-2xl p-5">
                      <span className="font-heading text-2xl font-bold text-brand-blue/40 tabular-nums">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-brand-ink">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
