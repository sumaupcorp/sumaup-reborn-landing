import Link from "next/link";
import { ArrowRight, Smartphone, Building2 } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { sumaActions } from "@/lib/assets";
import { productChoice } from "@/lib/site-copy";

export function ProductChoice() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Dos líneas de negocio"
            title={productChoice.title}
            subtitle={productChoice.subtitle}
          />
        </Reveal>

        {/* Protagonista: Suma conecta la App y el ERP en un mismo ecosistema */}
        <Reveal delay={0.1}>
          <SumaFigure
            asset={sumaActions.erpTablet}
            glow="cyan"
            className="mx-auto mt-10 w-56 sm:w-72 lg:w-80"
            sizes="(max-width: 768px) 60vw, 320px"
          />
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* App */}
          <RevealItem className="h-full">
            <div className="glass-panel flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
              <div className="p-7 pb-0">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand-blue">
                  <Smartphone className="size-6" />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-brand-ink">
                  {productChoice.app.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-7 pt-4">
                <p className="text-base text-muted-foreground">
                  {productChoice.app.description}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-ink/70">
                  {productChoice.app.segments}
                </p>
                <Button
                  asChild
                  className="mt-6 h-11 w-fit bg-brand-blue px-5 font-semibold hover:bg-brand-blue/90"
                >
                  <Link href="/app">
                    {productChoice.app.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </RevealItem>

          {/* Web SaaS */}
          <RevealItem className="h-full">
            <div className="glass-panel flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
              <div className="p-7 pb-0">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand-blue">
                  <Building2 className="size-6" />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-brand-ink">
                  {productChoice.webSaas.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-7 pt-4">
                <p className="text-base text-muted-foreground">
                  {productChoice.webSaas.description}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-ink/70">
                  {productChoice.webSaas.segments}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 h-11 w-fit px-5 font-semibold"
                >
                  <Link href="/web-saas">
                    {productChoice.webSaas.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </Section>
  );
}
