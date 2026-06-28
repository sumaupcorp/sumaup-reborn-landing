import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { PlanCard } from "@/components/common/plan-card";
import { appPlans } from "@/lib/pricing";

export function AppPricing() {
  return (
    <Section id="planes-app" className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Planes App"
            title="Elige el plan que se ajusta a ti"
            subtitle="Empieza gratis y cambia de plan cuando lo necesites. Sin contratos complicados."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {appPlans.map((plan) => (
            <RevealItem key={plan.id} className="h-full">
              <PlanCard plan={plan} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
