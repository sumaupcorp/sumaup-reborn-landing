import Link from "next/link";
import { FileCheck2, ShieldCheck, CalendarCheck } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { sumaActions } from "@/lib/assets";

const points = [
  {
    icon: FileCheck2,
    title: "Declaraciones organizadas",
    detail: "Prepara y ordena tus declaraciones mensuales y anuales sin enredos.",
  },
  {
    icon: CalendarCheck,
    title: "Vencimientos a la vista",
    detail: "Ten siempre claro qué se vence y cuándo, según tu actividad.",
  },
  {
    icon: ShieldCheck,
    title: "Menos riesgo de multas",
    detail: "Reduce olvidos y recargos manteniendo tu información al día.",
  },
];

export function SunatCompliance() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                SUNAT y cumplimiento
              </span>
              <h2 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                Tu aliado para estar al día con SUNAT
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Suma te acompaña a organizar tus obligaciones tributarias y a
                cumplir a tiempo. Tú mantienes el control; nosotros te ayudamos a
                no perder de vista lo importante.
              </p>

              <ul className="mt-8 grid gap-3">
                {points.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3.5"
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
                <Link href="/diagnostico">Revisar mi situación</Link>
              </Button>
            </div>
          </Reveal>

          {/* Protagonista: Suma héroe junto a SUNAT */}
          <Reveal delay={0.1}>
            <SumaFigure
              asset={sumaActions.sunat}
              glow="cyan"
              className="mx-auto w-full max-w-md"
              sizes="(max-width: 768px) 70vw, 440px"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
