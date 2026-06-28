import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { AppPricing } from "@/components/sections/AppPricing";
import { ERPPricing } from "@/components/sections/ERPPricing";
import { AICRMAddon } from "@/components/sections/AICRMAddon";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/precios");

const WHITE = "#FFFFFF";
const SOFT = "#F8FAFC";

export default function PreciosPage() {
  return (
    <PageShell>
      <Section className="bg-white pb-0">
        <Container>
          <SectionHeading
            eyebrow="Precios"
            title="Planes claros para personas y negocios"
            subtitle="Elige entre la App para independientes o el ERP web para tu negocio. Sin sorpresas."
          />
        </Container>
      </Section>
      <AppPricing />
      <SectionDivider variant="wave" color={SOFT} className="bg-white" />
      <ERPPricing />
      <SectionDivider variant="curve" color={WHITE} className="bg-brand-soft" />
      <AICRMAddon />
      <SectionDivider variant="tilt" color={SOFT} className="bg-white" />
      <FAQ />
      <SectionDivider variant="soft-arc" color={WHITE} className="bg-brand-soft" />
      <FinalCTA />
    </PageShell>
  );
}
