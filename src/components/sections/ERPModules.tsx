import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Icon } from "@/components/common/icon";
import { erpModules } from "@/lib/erp";

export function ERPModules() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Módulos del ERP"
            title="Todo lo que tu operación necesita"
            subtitle="Activa los módulos que tu negocio requiere y súmalos a medida que creces."
          />
        </Reveal>

        <RevealGroup className="mt-12 flex flex-wrap justify-center gap-4">
          {erpModules.map((module) => (
            <RevealItem
              key={module.id}
              className="h-full w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <div className="group glass-card flex h-full flex-col rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-brand-blue">
                  <Icon name={module.icon} className="size-5" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-brand-ink">
                  {module.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
