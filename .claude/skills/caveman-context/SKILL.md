---
name: caveman-context
description: Resume el estado del proyecto SUMAUP360 en formato corto para ahorrar tokens — qué está hecho, qué falta, rutas existentes, componentes importantes, assets detectados, errores pendientes y próximo paso. Úsalo para obtener contexto rápido sin leer todo el repositorio.
---

# Caveman Context — SUMAUP360

Resumen ultra corto del estado del proyecto. Objetivo: **ahorrar tokens**. Habla en frases breves,
en formato de lista. Nada de relleno.

## Formato de salida (siempre estas secciones)

```
HECHO:
- ...

FALTA:
- ...

RUTAS:
- ...

COMPONENTES:
- ...

ASSETS:
- ...

ERRORES:
- ...

PROXIMO PASO:
- ...
```

## Reglas

- Frases cortas, sin adornos.
- Solo hechos verificables (revisa el repo antes de afirmar).
- Si una sección está vacía, escribe "- (ninguno)".
- No expliques de más; el objetivo es contexto mínimo y útil.
- Termina siempre con un único **PROXIMO PASO recomendado**.

## Cómo construir el resumen

1. Revisar rutas/páginas existentes en el proyecto.
2. Revisar componentes clave en `src/components`.
3. Revisar assets en `public/suma`, `public/illustrations`, `public/icons`, `public/brand`, `public/mockups`.
4. Revisar errores conocidos (build/lint pendientes).
5. Deducir el próximo paso lógico.
