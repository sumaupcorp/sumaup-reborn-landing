"use client";

import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SumaFigure } from "@/components/common/suma-figure";
import { sumaActions } from "@/lib/assets";
import { faqCategories, faqItems } from "@/lib/faq";

export function FAQ() {
  return (
    <Section id="faq" className="bg-brand-soft">
      <Container className="max-w-4xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <SumaFigure
            asset={sumaActions.question}
            glow="soft"
            className="w-28 shrink-0 sm:w-36"
            sizes="(max-width: 768px) 35vw, 150px"
          />
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            subtitle="Si necesitas más información, escríbenos y con gusto te ayudamos."
            align="left"
            className="mx-0"
          />
        </div>

        <div className="mt-12">
          <Tabs defaultValue={faqCategories[0]} className="w-full gap-6">
            <TabsList className="h-auto flex-wrap justify-start gap-1 bg-transparent p-0">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="h-9 rounded-full border border-border bg-white px-4 data-active:border-brand-blue data-active:bg-brand-blue data-active:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category} value={category}>
                <Accordion
                  type="single"
                  collapsible
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  {faqItems
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <AccordionItem
                        key={item.question}
                        value={`${category}-${index}`}
                      >
                        <AccordionTrigger className="py-4 text-base font-semibold text-brand-ink hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </Section>
  );
}
