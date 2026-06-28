import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Icon } from "@/components/common/icon";
import { SumaFigure } from "@/components/common/suma-figure";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { learnCategories } from "@/lib/learn";
import { sumaActions } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/aprende");

export default function AprendePage() {
  return (
    <PageShell>
      <Section className="bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <SectionHeading
                eyebrow="Centro Aprende"
                title="Tributación y finanzas, explicadas simple"
                subtitle="Guías prácticas en español para formalizarte, cumplir con SUNAT y hacer crecer tu negocio o actividad independiente."
                align="left"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SumaFigure
                asset={sumaActions.financeBoard}
                glow="cyan"
                className="mx-auto w-44 sm:w-56"
                sizes="240px"
              />
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learnCategories.map((category) => (
              <RevealItem key={category.id} className="h-full">
                <div className="group glass-card flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand-blue">
                    <Icon name={category.icon} className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-ink">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCTA />
    </PageShell>
  );
}
