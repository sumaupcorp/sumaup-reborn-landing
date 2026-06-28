import Link from "next/link";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sumaActions } from "@/lib/assets";
import { aiCrmAddon } from "@/lib/pricing";

export function AICRMAddon() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <div className="glass-panel overflow-hidden p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <Badge className="h-6 bg-brand-blue px-3 text-xs font-semibold text-white">
                  Complemento
                </Badge>
                <h2 className="mt-4 text-2xl font-bold text-brand-ink sm:text-3xl">
                  {aiCrmAddon.name}
                </h2>
                <p className="mt-3 text-base text-muted-foreground sm:text-justify">
                  {aiCrmAddon.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {aiCrmAddon.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-brand-ink/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-lg font-bold text-brand-ink">
                    {aiCrmAddon.priceRange}
                  </p>
                  <Button
                    asChild
                    className="h-11 bg-brand-blue px-6 font-semibold hover:bg-brand-blue/90"
                  >
                    <Link href="/contacto">{aiCrmAddon.ctaLabel}</Link>
                  </Button>
                </div>
              </div>

              <SumaFigure
                asset={sumaActions.rocket}
                glow="cyan"
                className="mx-auto w-48 sm:w-56 lg:w-64"
                sizes="280px"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
