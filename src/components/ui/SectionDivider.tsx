import { cn } from "@/lib/utils";

export type SectionDividerVariant =
  | "wave"
  | "curve"
  | "tilt"
  | "soft-arc"
  | "split-wave";

export type SectionDividerProps = {
  variant?: SectionDividerVariant;
  /** Color de relleno = fondo de la sección a la que se entra (transición fluida). */
  color?: string;
  flip?: boolean;
  /** Clases del contenedor; usa el fondo de la sección previa (p. ej. bg-white). */
  className?: string;
  /**
   * Modo fundido: solo las curvas onduladas, sin la banda celeste ni las gotas.
   * El color coincide exactamente con la sección siguiente (transición invisible).
   */
  seamless?: boolean;
};

// Formas orgánicas tipo líquido. Rellenan la parte inferior con `color` (la
// sección siguiente); el borde superior tiene curvas fluidas y gotas que
// "chorrean" hacia la sección de abajo.
const waves: Record<SectionDividerVariant, string> = {
  wave: "M0,50 C180,16 320,84 480,54 C640,26 760,8 900,40 C1020,64 1110,30 1200,48 L1200,100 L0,100 Z",
  curve: "M0,60 C320,6 880,6 1200,60 L1200,100 L0,100 Z",
  tilt: "M0,86 C320,58 720,30 1200,14 L1200,100 L0,100 Z",
  "soft-arc": "M0,64 C400,10 800,10 1200,64 L1200,100 L0,100 Z",
  "split-wave":
    "M0,52 C150,92 320,12 480,50 C640,88 760,14 920,46 C1040,70 1120,32 1200,50 L1200,100 L0,100 Z",
};

// Gotas de líquido que caen hacia la siguiente sección.
const drips = [
  { cx: 250, cy: 80, rx: 9, ry: 14 },
  { cx: 660, cy: 88, rx: 7, ry: 11 },
  { cx: 980, cy: 76, rx: 6, ry: 10 },
];

export function SectionDivider({
  variant = "wave",
  color = "#F8FAFC",
  flip = false,
  className,
  seamless = false,
}: SectionDividerProps) {
  const d = waves[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none block h-12 w-full overflow-hidden leading-none sm:h-20 lg:h-24",
        className,
      )}
    >
      <svg
        className={cn("h-full w-full", flip && "-scale-y-100")}
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brillo celeste en la superficie del líquido (omitido en modo fundido) */}
        {!seamless ? (
          <path d={d} fill="#33D1FF" opacity="0.16" transform="translate(0,-8)" />
        ) : null}
        {/* Cuerpo del líquido = fondo de la sección siguiente */}
        <path d={d} fill={color} />
        {/* Gotas que chorrean hacia abajo (omitidas en modo fundido) */}
        {!seamless
          ? drips.map((drip, i) => (
              <ellipse
                key={i}
                cx={drip.cx}
                cy={drip.cy}
                rx={drip.rx}
                ry={drip.ry}
                fill="#DBEAFE"
                opacity="0.7"
              />
            ))
          : null}
      </svg>
    </div>
  );
}
