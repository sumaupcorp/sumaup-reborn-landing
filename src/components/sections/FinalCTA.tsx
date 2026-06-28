import Link from "next/link";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { sumaActions } from "@/lib/assets";
import { finalCta } from "@/lib/site-copy";

export function FinalCTA() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-blue/20 bg-brand-ink px-6 py-12 shadow-lg sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_20%,#1e8fff40,transparent)]"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-balance text-white sm:text-4xl">
                  {finalCta.title}
                </h2>
                <p className="mt-4 text-base text-white/80 sm:text-lg">
                  {finalCta.subtitle}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 bg-white px-6 text-base font-semibold text-brand-ink hover:bg-white/90"
                  >
                    <Link href="/diagnostico">{finalCta.primary}</Link>
                  </Button>
                  <Button
                    asChild
                    className="h-12 border border-white/30 bg-white/10 px-6 text-base font-semibold text-white hover:bg-white/20"
                  >
                    <Link href="/contacto">{finalCta.secondary}</Link>
                  </Button>
                </div>
              </div>

              <SumaFigure
                asset={sumaActions.gift}
                glow="light"
                className="mx-auto w-56 sm:w-72 lg:w-80"
                sizes="(max-width: 768px) 60vw, 320px"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
