"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** Valor final al que llega el conteo. */
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Duración del conteo en segundos. */
  duration?: number;
  className?: string;
}

/**
 * Número con animación de conteo (0 → value) cuando entra en viewport.
 * Formatea con separador de miles es-PE. Respeta prefers-reduced-motion
 * (muestra el valor final de inmediato) y evita mismatch de hidratación
 * renderizando el valor inicial en el SSR.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const format = (n: number) =>
    `${prefix}${n.toLocaleString("es-PE", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduce) {
      node.textContent = format(value);
      return;
    }
    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce]);

  // SSR / primer render: 0 formateado (coincide cliente y servidor).
  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
}
