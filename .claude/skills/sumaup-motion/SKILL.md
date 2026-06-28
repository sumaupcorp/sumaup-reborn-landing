---
name: sumaup-motion
description: Sistema de animaciones de SUMAUP360 con Framer Motion — reveals on-scroll, micro-interacciones, page transitions, stagger, variants reutilizables, prefers-reduced-motion y reglas de performance (animar solo transform/opacity). Úsalo al animar cualquier UI para lograr un acabado premium sin sacrificar rendimiento ni accesibilidad.
---

# SUMAUP360 — Sistema de animaciones (Motion)

Reglas para animar la web de SUMAUP360 con **Framer Motion**. Objetivo: que se vea
**premium y con vida**, nunca recargado ni lento, y perfecto en móvil.

## Principios

- Las animaciones **refuerzan jerarquía y atención**, no distraen.
- Sutiles por defecto: nada de rebotes exagerados ni movimientos largos.
- Consistencia: mismas duraciones y easings en todo el sitio.
- **Mobile first**: en móvil las animaciones son más cortas y discretas.
- Cero impacto en la lectura: el contenido es legible aunque la animación falle.

## Tokens de motion (usar siempre estos)

```ts
// duraciones (segundos)
export const duration = { fast: 0.2, base: 0.4, slow: 0.6 } as const;

// easings
export const ease = {
  out: [0.16, 1, 0.3, 1],     // entradas suaves (easeOutExpo aprox.)
  inOut: [0.65, 0, 0.35, 1],  // transiciones
} as const;

// desplazamiento de entrada
export const offset = { sm: 12, md: 24 } as const; // px
```

## Variants reutilizables

```ts
import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
```

## Patrones

- **Reveal on-scroll:** usar `whileInView="show"` + `viewport={{ once: true, amount: 0.3 }}`. Nunca repetir la animación en cada scroll.
- **Stagger:** contenedor con `staggerContainer` e hijos con `fadeInUp`.
- **Micro-interacciones:** `whileHover` y `whileTap` (escala sutil 1.02 / 0.98). En botones premium, transición de color/sombra suave.
- **Page / route transitions:** entrada con `fadeInUp` o fade simple; mantener cortas.
- **Mascota Suma:** animaciones de acompañamiento sutiles (flotación leve, entrada). Nunca infantiles ni excesivas.

## Performance (obligatorio)

- Animar **solo `transform` y `opacity`**. Evitar animar `width`, `height`, `top`, `left`, `margin` (provocan reflow).
- Usar `will-change` con criterio, no en todo.
- `viewport={{ once: true }}` para no recalcular animaciones ya vistas.
- Evitar animar listas enormes a la vez; limitar el stagger.

## Accesibilidad (obligatorio)

- Respetar **`prefers-reduced-motion`**: si está activo, desactivar o reducir a un fade mínimo.

```ts
import { useReducedMotion } from "framer-motion";
const reduce = useReducedMotion();
const variants = reduce ? fadeMinimal : fadeInUp;
```

## Relación con otras skills

- Estética y marca: `sumaup-design-system`.
- Responsive: `sumaup-responsive`.
- Dirección visual general: `frontend-design`.

## Entregable

- Animaciones consistentes con estos tokens y variants.
- `prefers-reduced-motion` soportado.
- Sin animaciones que provoquen reflow ni overflow en móvil.
