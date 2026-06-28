import Image from "next/image";
import { cn } from "@/lib/utils";
import { SUMA_BOX, type AssetEntry } from "@/lib/assets";
import { Icon } from "@/components/common/icon";

// Halos de color para integrar la mascota al layout (PNG con fondo transparente).
const glowMap = {
  cyan: "bg-[radial-gradient(circle_at_50%_42%,rgba(51,209,255,0.30),transparent_68%)]",
  blue: "bg-[radial-gradient(circle_at_50%_42%,rgba(11,91,255,0.22),transparent_68%)]",
  soft: "bg-[radial-gradient(circle_at_50%_42%,rgba(30,143,255,0.16),transparent_70%)]",
  light: "bg-[radial-gradient(circle_at_50%_42%,rgba(51,209,255,0.50),transparent_64%)]",
  none: "",
} as const;

interface SumaFigureProps {
  asset: AssetEntry;
  /** Controla el tamaño de la figura (ancho). */
  className?: string;
  glow?: keyof typeof glowMap;
  /** Blob orgánico difuminado detrás de la mascota. */
  blob?: boolean;
  priority?: boolean;
  sizes?: string;
  imageClassName?: string;
}

/**
 * Renderiza una ilustración de Suma como asset integrado: flotando sobre el
 * layout, con halo de color, blob orgánico sutil y sombra suave que respeta
 * la transparencia del PNG. Sin cajas ni recuadros. Si el asset no existe,
 * usa un fallback con lucide-react.
 */
export function SumaFigure({
  asset,
  className,
  glow = "cyan",
  blob = true,
  priority = false,
  sizes = "(max-width: 768px) 60vw, 360px",
  imageClassName,
}: SumaFigureProps) {
  if (!asset.available) {
    return (
      <div className={cn("relative flex items-center justify-center", className)}>
        <div
          aria-hidden="true"
          className={cn("absolute inset-0 -z-10 rounded-full blur-3xl", glowMap.soft)}
        />
        <Icon
          name={asset.fallbackIcon ?? "Sparkles"}
          className="size-1/2 text-brand-blue [filter:drop-shadow(0_10px_18px_rgba(11,91,255,0.2))]"
        />
        <span className="sr-only">{asset.alt}</span>
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {glow !== "none" ? (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-[-14%] -z-10 rounded-full blur-3xl",
            glowMap[glow],
          )}
        />
      ) : null}
      {blob ? (
        <div
          aria-hidden="true"
          className="absolute inset-[6%] -z-10 rounded-[42%_58%_63%_37%/45%_38%_62%_55%] bg-gradient-to-br from-brand-sky/18 to-brand-blue/10 blur-xl"
        />
      ) : null}
      <Image
        src={asset.src}
        alt={asset.alt}
        width={SUMA_BOX}
        height={SUMA_BOX}
        priority={priority}
        sizes={sizes}
        className={cn(
          "h-auto w-full object-contain [filter:drop-shadow(0_18px_26px_rgba(11,91,255,0.18))]",
          imageClassName,
        )}
      />
    </div>
  );
}
