import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { ProductChoice } from "@/components/sections/ProductChoice";
import { LearnPreview } from "@/components/sections/LearnPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { suma } from "@/lib/assets";

export function HomeWithoutDiagnosis() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                Tu inicio
              </span>
              <h1 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
                Demos el primer paso juntos
              </h1>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Aún no tienes un diagnóstico. Hazlo gratis en 5 preguntas y
                recibe una orientación inicial con el plan ideal para ti.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 bg-brand-blue px-6 text-base font-semibold hover:bg-brand-blue/90"
                >
                  <Link href="/diagnostico">
                    <Stethoscope className="size-5" />
                    Hacer diagnóstico gratis
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-6 text-base font-semibold"
                >
                  <Link href="/precios">Ver precios</Link>
                </Button>
              </div>
            </div>

            <SumaFigure
              asset={suma.saludando}
              glow="cyan"
              priority
              className="mx-auto w-36 sm:w-44"
              sizes="180px"
            />
          </div>
        </Container>
      </Section>

      <ProductChoice />
      <LearnPreview />
      <FinalCTA />
    </>
  );
}
