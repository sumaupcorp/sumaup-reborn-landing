import Link from "next/link";
import { BellRing, TrendingDown, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { sumaActions } from "@/lib/assets";

const advantages = [
  {
    icon: BellRing,
    title: "Alertas antes del vencimiento",
    detail: "Te avisamos con tiempo para que declares y pagues sin apuros.",
  },
  {
    icon: TrendingDown,
    title: "Menos recargos e intereses",
    detail: "Al cumplir a tiempo evitas multas que crecen mes a mes.",
  },
  {
    icon: ShieldCheck,
    title: "Tu información en orden",
    detail: "Todo listo y a la mano cuando SUNAT lo requiera.",
  },
];

export function FinesAdvantage() {
  return (
    <Section className="bg-brand-soft">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Protagonista: Suma apagando el fuego de las multas */}
          <Reveal>
            <SumaFigure
              asset={sumaActions.fireExtinguisher}
              glow="cyan"
              className="mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md"
              sizes="(max-width: 768px) 70vw, 440px"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                La ventaja
              </span>
              <h2 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                Apaga todas tus multas antes de que aparezcan
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Las multas casi siempre nacen de un olvido. Con SUMAUP360 te
                anticipas a cada vencimiento y mantienes todo en orden, para
                dejar de pagar de más.
              </p>

              <ul className="mt-8 grid gap-3">
                {advantages.map((item) => (
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

              <Button
                asChild
                className="mt-8 h-12 bg-brand-blue px-6 text-base font-semibold hover:bg-brand-blue/90"
              >
                <Link href="/diagnostico">Empezar a evitar multas</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
