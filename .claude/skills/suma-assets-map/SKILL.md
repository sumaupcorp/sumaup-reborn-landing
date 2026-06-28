---
name: suma-assets-map
description: Reglas para usar la mascota Suma y todas las ilustraciones de SUMAUP360 — escanear carpetas de assets, usar next/image, alt en español, no desperdiciar ni forzar assets, y mantener src/lib/assets.ts. Úsalo al colocar cualquier imagen en la web.
---

# SUMAUP360 — Mapa de assets

Cómo usar la mascota Suma y las ilustraciones del proyecto.

## Carpetas de assets (locales)

- `public/suma` — mascota Suma (mono azul): poses, expresiones, variantes.
- `public/illustrations` — ilustraciones de apoyo.
- `public/icons` — iconografía propia.
- `public/brand` — logos, isotipos, material de marca.
- `public/mockups` — capturas y mockups de App y Web SaaS.

## Reglas

1. **Escanear las carpetas** antes de elegir un asset; conoce qué existe.
2. Servir siempre con **next/image** (optimización, tamaños responsive).
3. **`alt` en español**, descriptivo y útil para accesibilidad y SEO.
4. **No desperdiciar assets:** si hay un recurso adecuado para una sección, úsalo.
5. **No forzar assets** donde no encajan: si ninguno es coherente, no pongas imagen.
6. La mascota **Suma** es guía visual con intención (acompaña, explica, celebra), no relleno.
7. Solo assets **locales**: nunca URLs externas ni stock remoto.

## `src/lib/assets.ts`

Centraliza todas las referencias a assets en `src/lib/assets.ts`:

- Exporta rutas tipadas (constantes/objetos) por categoría (suma, illustrations, icons, brand, mockups).
- Cada entrada incluye su `src` y un `alt` por defecto en español.
- Los componentes importan desde aquí; no se escriben rutas de imagen "a mano" en el JSX.

Ejemplo de forma esperada:

```ts
// src/lib/assets.ts
export const suma = {
  saludo: { src: "/suma/suma-saludo.png", alt: "Suma, la mascota de SUMAUP360, saludando" },
  // ...
} as const;
```

## Uso típico de Suma por contexto

- **Hero** — Suma en pose protagónica y energética.
- **Diagnóstico** — Suma guía/acompaña cada paso.
- **Resultado / éxito** — Suma celebrando.
- **Error / vacío** — Suma en gesto empático, nunca burlón.

## Entregable

- `src/lib/assets.ts` actualizado.
- Mapa "sección → asset → motivo" y lista de huecos (assets que faltarían).
