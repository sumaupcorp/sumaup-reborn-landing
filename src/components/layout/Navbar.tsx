"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNav } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="glass-nav sticky top-0 z-50 w-full transition-shadow"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand-blue"
                    : "text-brand-ink/80 hover:bg-muted hover:text-brand-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Acceso a la Web SaaS — pronto redirige al login de la plataforma */}
          <Button
            asChild
            variant="outline"
            className="hidden h-10 px-4 font-semibold sm:inline-flex"
          >
            <Link href="/web-saas">
              <LogIn className="size-4" />
              Web SaaS
            </Link>
          </Button>
          <Button
            asChild
            className="hidden h-10 bg-brand-blue px-5 font-semibold hover:bg-brand-blue/90 sm:inline-flex"
          >
            <Link href="/contacto">Solicitar Demo</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
