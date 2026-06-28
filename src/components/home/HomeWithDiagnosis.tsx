import { Container, Section } from "@/components/common/container";
import { SumaFigure } from "@/components/common/suma-figure";
import { RecommendedPlanBanner } from "@/components/home/RecommendedPlanBanner";
import { ProductChoice } from "@/components/sections/ProductChoice";
import { LearnPreview } from "@/components/sections/LearnPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { suma } from "@/lib/assets";
import type { DiagnosisResult } from "@/types";

export function HomeWithDiagnosis({ result }: { result: DiagnosisResult }) {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <SumaFigure
              asset={suma.celebrando}
              glow="cyan"
              priority
              className="mx-auto w-32 sm:w-40"
              sizes="160px"
            />
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                Tu inicio personalizado
              </span>
              <h1 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                Listo, tenemos tu orientación
              </h1>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Con base en tu diagnóstico, preparamos una recomendación pensada
                para tu actividad. Puedes continuar gratis cuando quieras.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <RecommendedPlanBanner result={result} />
          </div>
        </Container>
      </Section>

      <ProductChoice />
      <LearnPreview />
      <FinalCTA />
    </>
  );
}
