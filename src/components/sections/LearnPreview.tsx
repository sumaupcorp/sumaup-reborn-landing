import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { Icon } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import { learnCategories } from "@/lib/learn";

export function LearnPreview() {
  return (
    <Section className="bg-brand-soft">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Aprende"
            title="Tributación y finanzas, explicadas simple"
            subtitle="Guías prácticas para formalizarte, cumplir con SUNAT y hacer crecer tu negocio."
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnCategories.map((category) => (
            <RevealItem key={category.id} className="h-full">
              <Link
                href="/aprende"
                className="group glass-card flex h-full items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-blue">
                  <Icon name={category.icon} className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-brand-ink">
                    {category.name}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" className="h-11 px-6 font-semibold">
            <Link href="/aprende">
              Ver centro Aprende
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
