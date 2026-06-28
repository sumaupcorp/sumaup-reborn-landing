import { Quote } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/common/reveal";
import { testimonials } from "@/lib/site-copy";

export function Testimonials() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonios"
            title="Negocios y personas que ya se ordenaron"
            subtitle="Historias reales de quienes usan SUMAUP360 para cumplir y crecer."
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.author} className="h-full">
              <figure className="glass-panel flex h-full flex-col p-7">
                <Quote className="size-8 text-brand-sky" />
                <blockquote className="mt-4 flex-1 text-base text-brand-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t pt-4">
                  <p className="text-sm font-semibold text-brand-ink">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
