---
name: sumaup-web-test
description: Checklist de testing de la web SUMAUP360 — npm run build, npm run lint, responsive en 360/390/768/1280, sin overflow horizontal, rutas correctas, textos en español sin lorem ipsum, sin modo oscuro e imágenes optimizadas. Úsalo para validar antes de dar por terminado un cambio.
---

# SUMAUP360 — Checklist de testing

Lista de verificación para validar la web antes de aprobar cualquier cambio importante.

## Build y lint

- [ ] `npm run build` pasa sin errores.
- [ ] `npm run lint` pasa (si el script existe).

## Responsive (sin overflow horizontal)

- [ ] Móvil **360px**.
- [ ] Móvil **390px**.
- [ ] Tablet **768px**.
- [ ] Desktop **1280px**.
- [ ] **No hay overflow horizontal** en ninguno de los anchos anteriores.

## Rutas y navegación

- [ ] Todas las **rutas correctas** y accesibles.
- [ ] Enlaces internos funcionan (sin 404 ni rutas rotas).

## Contenido

- [ ] **Textos en español**.
- [ ] **Sin lorem ipsum**.
- [ ] Sin emojis.
- [ ] Sin imágenes externas.

## Diseño

- [ ] **Sin modo oscuro** ni theme switcher.
- [ ] Fondo blanco puro.
- [ ] Consistencia visual entre secciones.

## Imágenes

- [ ] **Imágenes optimizadas** (next/image).
- [ ] `alt` en español en todas las imágenes.

## Resultado

Reportar el estado de cada ítem (OK / falla) y un veredicto final: aprobado o requiere cambios.
