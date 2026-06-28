"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogIn, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { mainNav } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          className="lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[88%] max-w-sm gap-0">
        <SheetHeader className="border-b">
          <SheetTitle asChild>
            <div>
              <Logo />
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 p-4">
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-brand-ink hover:bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t p-4">
          <SheetClose asChild>
            <Button asChild className="h-12 w-full bg-brand-blue text-base hover:bg-brand-blue/90">
              <Link href="/contacto">Solicitar Demo</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full text-base"
            >
              <Link href="/diagnostico">Hacer diagnóstico gratis</Link>
            </Button>
          </SheetClose>
          {/* Acceso a la Web SaaS — pronto redirige al login de la plataforma */}
          <SheetClose asChild>
            <Button
              asChild
              variant="ghost"
              className="h-12 w-full text-base text-brand-blue hover:bg-accent"
            >
              <Link href="/web-saas">
                <LogIn className="size-4" />
                Web SaaS
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
