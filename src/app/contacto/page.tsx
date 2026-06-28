import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { DemoForm } from "@/components/forms/DemoForm";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contacto");

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Soporte cercano para resolver tus dudas.",
  },
  {
    icon: Mail,
    title: "Correo",
    detail: "Escríbenos y te respondemos a la brevedad.",
  },
  {
    icon: MapPin,
    title: "Perú",
    detail: "Hecho en Perú, pensado para negocios peruanos.",
  },
];

export default function ContactoPage() {
  return (
    <PageShell>
      <Section className="bg-white pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de tu próximo paso"
            subtitle="Solicita una demo del ERP o únete a la lista de espera de la App. Suma y nuestro equipo están listos para ayudarte."
          />

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2">
            <Reveal>
              <DemoForm />
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.05}>
                <WaitlistForm />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="glass-panel p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <MessageCircle className="size-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-ink">
                        Estamos para ayudarte
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Elige un canal o escríbele a Suma en el chat.
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {channels.map((channel) => (
                      <li
                        key={channel.title}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-blue">
                          <channel.icon className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-brand-ink">
                            {channel.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {channel.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
