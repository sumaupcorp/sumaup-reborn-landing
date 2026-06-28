import Link from "next/link";
import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/common/social-icons";
import { footerNav, legalNav } from "@/lib/routes";
import { contactChannels } from "@/lib/contact";

const socials = [
  {
    label: "Instagram",
    href: contactChannels.instagramUrl,
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: contactChannels.facebookUrl,
    icon: FacebookIcon,
  },
  {
    label: "TikTok",
    href: contactChannels.tiktokUrl,
    icon: TiktokIcon,
  },
  {
    label: "WhatsApp",
    href: contactChannels.whatsappUrl,
    icon: WhatsappIcon,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-x-clip bg-gradient-to-b from-[#F3F9FF] to-[#E4F1FF]">
      {/* Borde curvo superior: MISMA tinta que el footer (#F8FAFC). Es el propio
          footer definiendo su borde superior con una curva suave que sube hacia
          la sección de arriba (única transición; las páginas ya no añaden otro
          divider antes del footer). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-8 w-full -translate-y-[99%] sm:h-12 lg:h-16"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,100 L0,48 C360,4 840,4 1200,48 L1200,100 Z" fill="#F3F9FF" />
        </svg>
      </div>
      <Container className="relative py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Ecosistema fintech y legaltech peruano. Ordena tus impuestos,
              finanzas y negocio en un solo lugar.
            </p>

            {/* Redes sociales */}
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-pill flex size-10 items-center justify-center text-brand-ink/70 transition-colors hover:text-brand-blue"
                  >
                    <s.icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-brand-ink">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cierre: enlaces legales + copyright centrado */}
        <div className="mt-12 border-t border-border/60 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            © {2026} SUMAUP360. Todos los derechos reservados.
          </p>
          <p className="mt-1 text-center text-xs text-muted-foreground/80">
            Hecho en Perú · Ecosistema fintech y legaltech
          </p>
        </div>
      </Container>
    </footer>
  );
}
