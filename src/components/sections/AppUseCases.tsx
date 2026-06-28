import Image from "next/image";
import { Car, Bike, Check } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { sumaActions } from "@/lib/assets";

const cases = [
  {
    asset: sumaActions.carRelaxed,
    icon: Car,
    eyebrow: "Taxistas",
    title: "Maneja tranquilo, Suma lleva tus cuentas",
    detail:
      "Registra tus viajes, gastos y comprobantes desde el celular, sin parar tu día.",
    tags: ["Viajes", "Gastos de combustible", "Comprobantes"],
    fit: "cover" as const,
  },
  {
    asset: sumaActions.deliveryMoto,
    icon: Bike,
    eyebrow: "Delivery",
    title: "Reparte más, preocúpate menos",
    detail:
      "Controla tus ingresos por pedidos, los gastos de movilidad y tus comprobantes.",
    tags: ["Pedidos", "Movilidad", "Comprobantes"],
    fit: "contain" as const,
  },
];

export function AppUseCases() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Casos de uso"
            title="Hecha para tu nicho, desde el primer día"
            subtitle="SUMAUP360 App entiende cómo generas tus ingresos y se adapta a tu día a día sobre ruedas."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {cases.map((useCase) => (
            <RevealItem key={useCase.eyebrow} className="h-full">
              <article className="glass-panel group flex h-full flex-col overflow-hidden p-5 transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
                {/* Marco multimedia con esquinas redondeadas y degradado suave */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-brand-sky/20 via-accent to-white ring-1 ring-brand-blue/5">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 size-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(51,209,255,0.22),transparent_65%)] blur-2xl"
                  />
                  <Image
                    src={useCase.asset.src}
                    alt={useCase.asset.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 460px"
                    className={
                      useCase.fit === "cover"
                        ? "object-cover transition-transform duration-500 group-hover:scale-105"
                        : "object-contain p-5 transition-transform duration-500 group-hover:scale-105 [filter:drop-shadow(0_18px_26px_rgba(11,91,255,0.18))]"
                    }
                  />
                </div>

                <div className="mt-6 px-1 pb-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
                    <useCase.icon className="size-3.5" />
                    {useCase.eyebrow}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-balance text-brand-ink sm:text-2xl">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {useCase.detail}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <li
                        key={tag}
                        className="glass-pill px-3 py-1 text-xs font-medium text-brand-ink/75"
                      >
                        <Check className="size-3 text-brand-blue" strokeWidth={3} />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
