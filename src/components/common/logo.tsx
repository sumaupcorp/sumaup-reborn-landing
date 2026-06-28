import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/assets";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="SUMAUP360 - Inicio"
    >
      {brand.logo.available ? (
        // El PNG tiene mucho padding transparente (lienzo 4:3); recortamos el
        // padding vertical con object-cover para que el logo se vea a buen tamaño.
        <span className="relative block h-10 w-[150px] sm:h-11 sm:w-[168px]">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            fill
            priority
            sizes="168px"
            className="object-cover object-center"
          />
        </span>
      ) : (
        <span className="text-xl font-bold tracking-tight text-brand-ink">
          SUMA<span className="text-brand-blue">UP360</span>
        </span>
      )}
    </Link>
  );
}
