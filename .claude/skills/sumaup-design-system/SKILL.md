---
name: sumaup-design-system
description: Reglas del sistema de diseño de SUMAUP360 (fondo blanco, paleta azul/celeste/blanco, Manrope + Sora, mobile first, shadcn/ui, cards limpias, botones premium, sin modo oscuro, sin emojis, sin lorem ipsum, sin imágenes externas). Úsalo al diseñar o implementar cualquier UI.
---

# SUMAUP360 — Design System

Reglas de diseño obligatorias para toda la interfaz de SUMAUP360.

## Fundamentos

- **Fondo principal: blanco puro.**
- **Paleta:** azul / celeste / blanco (coherente con la mascota Suma, mono azul).
- **Tipografía:**
  - **Manrope** — base (cuerpo, UI, párrafos).
  - **Sora** — H1 y titulares grandes.
- **Mobile first:** diseñar primero para móvil y escalar a tablet y desktop.
- **Breakpoints de referencia:** 360px, 390px, 768px, 1280px.

## Componentes

- Usar **shadcn/ui** como base de componentes.
- **Cards limpias:** bordes suaves, sombra sutil, espaciado generoso, sin recargar.
- **Botones premium:** jerarquía clara (primario azul, secundario outline), estados hover/active/focus, esquinas coherentes.
- Iconos con **lucide-react**.
- Animaciones con **Framer Motion**, sutiles.

## Prohibiciones

- **No** modo oscuro.
- **No** theme switcher.
- **No** emojis.
- **No** lorem ipsum (texto real en español).
- **No** imágenes externas (solo assets locales con next/image).

## Color (guía)

- Blanco puro como lienzo dominante.
- Azul como color de marca/acción principal.
- Celeste para acentos, fondos sutiles y gradientes suaves.
- Grises neutros solo para texto secundario y bordes.

## Recordatorio

Todo diseño debe verse **premium, moderno, juvenil y elegante**, nunca genérico.
Apóyate en la mascota Suma y las ilustraciones como elementos protagónicos.
