import { PageShell } from "@/components/layout/PageShell";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <PageShell>
      <Section className="bg-white">
        <Container className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
              Legal
            </span>
            <h1 className="mt-4 text-3xl font-bold text-balance text-brand-ink sm:text-4xl">
              {doc.title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Última actualización: {doc.updated}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {doc.intro}
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {doc.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="text-lg font-semibold text-brand-ink sm:text-xl">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
