---
name: sumaup-responsive
description: Reglas de responsividad mobile-first de SUMAUP360 — breakpoints 360/390/768/1280, cero overflow horizontal, tipografía y espaciado fluidos, touch targets, imágenes responsive con next/image y layout que se ve perfecto en móvil, tablet y desktop. Úsalo al maquetar o revisar cualquier UI responsive.
---

# SUMAUP360 — Responsividad mobile first

Reglas para que la web se vea **perfecta en móvil, tablet y desktop**, con prioridad absoluta
en móvil. Nivel premium: nada de "se ve aceptable", debe verse impecable.

## Prioridad

- **Mobile first SIEMPRE.** Se estiliza primero el móvil; los anchos mayores son mejoras progresivas con `sm:`, `md:`, `lg:`, `xl:`.
- Diseñar pensando en el pulgar: lo importante al alcance, jerarquía clara.

## Breakpoints de validación (obligatorios)

| Ancho | Dispositivo | Debe verse |
|------|-------------|------------|
| 360px | Móvil pequeño | Perfecto, sin overflow |
| 390px | Móvil estándar | Perfecto, sin overflow |
| 768px | Tablet | Layout adaptado |
| 1280px | Desktop | Layout completo |

## Reglas duras

- **Cero overflow horizontal** en cualquiera de los anchos. Nunca aparece scroll lateral.
- Nada con ancho fijo mayor al viewport. Usar `max-w-*`, `w-full`, `min-w-0`.
- Cuidar elementos que rompen el ancho: imágenes, tablas, code, flex con texto largo (`min-w-0` + `truncate`/`break-words` cuando aplique).
- Contenedores con padding lateral seguro en móvil (p. ej. `px-4 sm:px-6 lg:px-8`).
- Usar un contenedor central con `max-w-screen-xl mx-auto`.

## Tipografía y espaciado fluidos

- Titulares (Sora) escalan: pequeños en móvil, grandes en desktop (`text-3xl sm:text-4xl lg:text-6xl`).
- Cuerpo (Manrope) legible en móvil: mínimo cómodo, sin texto diminuto.
- Ritmo vertical que crece con el viewport (`py-12 sm:py-16 lg:py-24`).
- Se puede usar `clamp()` para tamaños/espaciados realmente fluidos cuando convenga.

## Layout

- Grids que colapsan: 1 columna en móvil → 2/3/4 en anchos mayores (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Flex que cambia de dirección: `flex-col md:flex-row`.
- Navegación: menú móvil (drawer/sheet de shadcn/ui) en móvil; barra completa en desktop.
- Evitar fijar alturas; dejar que el contenido fluya.

## Touch e interacción

- **Touch targets** mínimos cómodos (~44px de alto/área) en botones y enlaces.
- Espaciado suficiente entre elementos tocables.
- Estados `:focus-visible` claros para teclado.

## Imágenes

- **next/image** siempre, con `sizes` correcto para servir el tamaño adecuado por viewport.
- Imágenes y mockups nunca desbordan el contenedor (`w-full h-auto`, `object-contain`/`object-cover` según caso).
- `alt` en español (ver `suma-assets-map`).

## Relación con otras skills

- Diseño/marca: `sumaup-design-system`.
- Animaciones: `sumaup-motion`.
- Testing por anchos: `sumaup-web-test`.

## Entregable

- Layout impecable en 360/390/768/1280.
- Cero overflow horizontal.
- Touch targets y tipografía cómodos en móvil.
- Imágenes responsive con next/image.
