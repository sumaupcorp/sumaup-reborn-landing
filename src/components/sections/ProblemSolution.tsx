import { CalendarClock, BellRing, ListChecks } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { sumaActions } from "@/lib/assets";

const solutions = [
  {
    icon: BellRing,
    title: "Alertas a tiempo",
    detail: "Avisos de vencimientos para que no se te pase ninguna fecha.",
  },
  {
    icon: ListChecks,
    title: "Todo ordenado",
    detail: "Ingresos, gastos y comprobantes en un solo lugar, listos para declarar.",
  },
  {
    icon: CalendarClock,
    title: "Calendario tributario",
    detail: "Tus obligaciones con SUNAT siempre claras y bajo control.",
  },
];

export function ProblemSolution() {
  return (
    <Section className="bg-brand-soft">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Problema: Suma estresado por las fechas */}
          <Reveal>
            <SumaFigure
              asset={sumaActions.stressedDeadline}
              glow="cyan"
              className="mx-auto w-60 sm:w-72 lg:w-full lg:max-w-md"
              sizes="(max-width: 768px) 65vw, 420px"
            />
          </Reveal>

          {/* Solución */}
          <Reveal delay={0.1}>
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                El problema real
              </span>
              <h2 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                Evita olvidos, fechas vencidas y desorden tributario
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Perder una fecha con SUNAT cuesta tiempo, dinero y tranquilidad.
                SUMAUP360 te mantiene al día para que dejes de preocuparte por lo
                que se vence.
              </p>

              <ul className="mt-8 grid gap-3">
                {solutions.map((item) => (
                  <li
                    key={item.title}
                    className="glass-card flex items-start gap-3.5 rounded-2xl p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-ink">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
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
