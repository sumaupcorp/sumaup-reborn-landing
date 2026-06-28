import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { PlanCard } from "@/components/common/plan-card";
import { erpPlans } from "@/lib/pricing";

export function ERPPricing() {
  return (
    <Section id="planes-erp" className="bg-brand-soft">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Planes ERP"
            title="Precios claros para cada etapa"
            subtitle="Desde tu primer local hasta una cadena con varias sucursales. Solicita una demo y te asesoramos."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {erpPlans.map((plan) => (
            <RevealItem key={plan.id} className="h-full">
              <PlanCard plan={plan} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
