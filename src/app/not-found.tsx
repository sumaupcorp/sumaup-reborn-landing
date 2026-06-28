import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container, Section } from "@/components/common/container";
import { SumaFigure } from "@/components/common/suma-figure";
import { Button } from "@/components/ui/button";
import { sumaActions } from "@/lib/assets";

export default function NotFound() {
  return (
    <PageShell>
      <Section className="bg-white">
        <Container className="flex flex-col items-center text-center">
          <SumaFigure
            asset={sumaActions.notFound404}
            glow="cyan"
            className="w-56 sm:w-72"
            sizes="(max-width: 768px) 60vw, 320px"
          />
          <h1 className="mt-6 text-3xl font-bold text-brand-ink sm:text-4xl">
            Ups, esta página no existe
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Es posible que el enlace haya cambiado o ya no exista. Suma te ayuda
            a volver al camino correcto.
          </p>
          <Button
            asChild
            className="mt-8 h-12 bg-brand-blue px-6 text-base font-semibold hover:bg-brand-blue/90"
          >
            <Link href="/">
              <ArrowLeft className="size-5" />
              Volver al inicio
            </Link>
          </Button>
        </Container>
      </Section>
    </PageShell>
  );
}
