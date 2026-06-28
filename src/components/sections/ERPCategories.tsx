import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Icon } from "@/components/common/icon";
import { SumaFigure } from "@/components/common/suma-figure";
import { sumaActions } from "@/lib/assets";
import { erpCategories } from "@/lib/erp";

export function ERPCategories() {
  return (
    <Section className="bg-brand-soft">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionHeading
              eyebrow="Para tu rubro"
              title="Un ERP que entiende tu negocio"
              subtitle="Configuramos el sistema según tu tipo de negocio para que empieces a vender ordenado desde el primer día. Desde un restaurante con comandas, caja e inventario hasta una bodega o una tienda."
              align="left"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SumaFigure
              asset={sumaActions.chefErp}
              glow="cyan"
              className="mx-auto w-48 sm:w-60 lg:w-64"
              sizes="(max-width: 768px) 55vw, 260px"
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {erpCategories.map((category) => (
            <RevealItem key={category.id} className="h-full">
              <div className="group glass-card flex h-full items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-blue">
                  <Icon name={category.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
