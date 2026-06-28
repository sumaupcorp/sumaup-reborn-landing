import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProductChoice } from "@/components/sections/ProductChoice";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AppModule } from "@/components/sections/AppModule";
import { WebSaasModule } from "@/components/sections/WebSaasModule";
import { ERPCategories } from "@/components/sections/ERPCategories";
import { SunatCompliance } from "@/components/sections/SunatCompliance";
import { FinesAdvantage } from "@/components/sections/FinesAdvantage";
import { Testimonials } from "@/components/sections/Testimonials";
import { EmotionalBenefit } from "@/components/sections/EmotionalBenefit";
import { LearnPreview } from "@/components/sections/LearnPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/");

const WHITE = "#FFFFFF";
const SOFT = "#F8FAFC";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <SectionDivider variant="wave" color={SOFT} className="bg-white" />
      <ProblemSolution />
      <SectionDivider variant="curve" color={WHITE} className="bg-brand-soft" />
      <ProductChoice />
      {/* ProductChoice y HowItWorks comparten fondo blanco: transición directa */}
      <HowItWorks />
      <SectionDivider variant="wave" color={SOFT} className="bg-white" />
      <AppModule />
      <SectionDivider variant="curve" color={WHITE} className="bg-brand-soft" />
      <WebSaasModule />
      <SectionDivider variant="tilt" color={SOFT} className="bg-white" />
      <ERPCategories />
      <SectionDivider variant="soft-arc" color={WHITE} className="bg-brand-soft" />
      <SunatCompliance />
      <SectionDivider variant="wave" color={SOFT} className="bg-white" />
      <FinesAdvantage />
      <SectionDivider variant="curve" color={WHITE} className="bg-brand-soft" />
      {/* Testimonials y EmotionalBenefit comparten fondo blanco */}
      <Testimonials />
      <EmotionalBenefit />
      <SectionDivider variant="split-wave" color={SOFT} className="bg-white" />
      <LearnPreview />
      <FAQ />
      <SectionDivider variant="wave" color={WHITE} className="bg-brand-soft" />
      <FinalCTA />
      {/* El footer dibuja su propia curva superior (mismo color), sin divider suelto. */}
    </PageShell>
  );
}
