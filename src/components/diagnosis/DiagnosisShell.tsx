import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";

export function DiagnosisShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,#33d1ff1f,transparent)]"
      />
      <header className="border-b border-transparent">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <Link
            href="/"
            aria-label="Salir del diagnóstico"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:text-brand-ink"
          >
            <X className="size-4" />
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 flex-col px-4 pt-4 pb-10 sm:pt-6 lg:pt-10">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
