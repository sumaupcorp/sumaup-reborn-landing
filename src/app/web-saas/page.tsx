import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WebSaasModule } from "@/components/sections/WebSaasModule";
import { ERPCategories } from "@/components/sections/ERPCategories";
import { ERPModules } from "@/components/sections/ERPModules";
import { ERPPricing } from "@/components/sections/ERPPricing";
import { AICRMAddon } from "@/components/sections/AICRMAddon";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/web-saas");

const WHITE = "#FFFFFF";
const SOFT = "#F8FAFC";

export default function WebSaasPage() {
  return (
    <PageShell>
      <WebSaasModule />
      <SectionDivider variant="wave" color={SOFT} className="bg-white" />
      <ERPCategories />
      <SectionDivider variant="curve" color={WHITE} className="bg-brand-soft" />
      <ERPModules />
      <SectionDivider variant="tilt" color={SOFT} className="bg-white" />
      <ERPPricing />
      <SectionDivider variant="soft-arc" color={WHITE} className="bg-brand-soft" />
      <AICRMAddon />
      <SectionDivider variant="split-wave" color={SOFT} className="bg-white" />
      <FAQ />
      <SectionDivider variant="wave" color={WHITE} className="bg-brand-soft" />
      <FinalCTA />
    </PageShell>
  );
}
