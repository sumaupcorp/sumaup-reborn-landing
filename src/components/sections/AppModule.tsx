import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { FeatureCard } from "@/components/common/feature-card";
import { Icon } from "@/components/common/icon";
import { SumaFigure } from "@/components/common/suma-figure";
import { suma } from "@/lib/assets";
import { appFeatures, appSegments } from "@/lib/app-features";

export function AppModule() {
  return (
    <Section className="bg-brand-soft">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="SUMAUP360 App"
            title="Cumple con SUNAT desde tu celular"
            subtitle="Todo lo que un independiente con RUC 10 necesita para ordenar sus finanzas y declarar a tiempo."
          />
        </Reveal>

        {/* Funcionalidades */}
        <RevealGroup className="mt-12 flex flex-wrap justify-center gap-5">
          {appFeatures.map((feature) => (
            <RevealItem
              key={feature.id}
              className="h-full w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.name}
                description={feature.description}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Casos de uso / segmentos */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold text-brand-ink sm:text-3xl">
                Pensada para tu actividad
              </h3>
              <p className="mt-3 text-muted-foreground sm:text-justify">
                Suma se adapta a cómo generas tus ingresos para darte una
                orientación clara y útil.
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {appSegments.map((segment) => (
                  <li
                    key={segment.id}
                    className="glass-card flex w-full items-start gap-3 rounded-2xl p-4 sm:w-[calc(50%-0.375rem)]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-blue">
                      <Icon name={segment.icon} className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-ink">
                        {segment.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {segment.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm">
              <SumaFigure asset={suma.analizando} glow="cyan" sizes="400px" />
              {/* Apoyos: vencimientos al día y alertas SUNAT */}
              <div className="absolute right-0 top-0 w-20 sm:-right-6 sm:w-24">
                <SumaFigure
                  asset={suma.calendario}
                  glow="soft"
                  blob={false}
                  sizes="96px"
                />
              </div>
              <div className="absolute bottom-2 left-0 w-16 sm:-left-6 sm:w-20">
                <SumaFigure
                  asset={suma.alertaSuave}
                  glow="soft"
                  blob={false}
                  sizes="80px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
