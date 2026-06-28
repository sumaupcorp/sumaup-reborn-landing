import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AppHero } from "@/components/sections/AppHero";
import { AppModule } from "@/components/sections/AppModule";
import { AppUseCases } from "@/components/sections/AppUseCases";
import { AppPricing } from "@/components/sections/AppPricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/app");

const WHITE = "#FFFFFF";
const SOFT = "#F8FAFC";

export default function AppPage() {
  return (
    <PageShell>
      <AppHero />
      {/* Casos de uso arriba: el nicho de enfoque conecta de inmediato */}
      <AppUseCases />
      <SectionDivider variant="wave" color={SOFT} className="bg-white" />
      <AppModule />
      <SectionDivider variant="curve" color={WHITE} className="bg-brand-soft" />
      <AppPricing />
      <SectionDivider variant="tilt" color={SOFT} className="bg-white" />
      <FAQ />
      <SectionDivider variant="soft-arc" color={WHITE} className="bg-brand-soft" />
      <FinalCTA />
    </PageShell>
  );
}
