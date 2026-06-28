import Link from "next/link";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { suma } from "@/lib/assets";
import { webSaasIntro } from "@/lib/site-copy";

const points = [
  "Cumplimiento SUNAT integrado",
  "Facturación electrónica certificada",
  "Escalable de una bodega a una cadena",
  "Activas solo los módulos que necesitas",
];

export function WebSaasModule() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative order-2 mx-auto w-full max-w-md lg:order-1">
              <SumaFigure asset={suma.conLaptop} glow="blue" sizes="460px" />
              {/* Apoyo: gestiona sin estrés */}
              <div className="absolute bottom-0 right-2 w-24 sm:-right-4 sm:w-28">
                <SumaFigure
                  asset={suma.calma}
                  glow="soft"
                  blob={false}
                  sizes="112px"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                SUMAUP360 Web SaaS
              </span>
              <h2 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                {webSaasIntro.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-justify sm:text-lg">
                {webSaasIntro.description}
              </p>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-brand-blue">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm text-brand-ink/80">{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 h-12 bg-brand-blue px-6 text-base font-semibold hover:bg-brand-blue/90"
              >
                <Link href="/web-saas">Conocer el ERP</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
