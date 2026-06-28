---
name: sumaup-diagnostico-web
description: Lógica del diagnóstico web de SUMAUP360 — 5 pasos, la pregunta 1 define el segmento, las preguntas 2 a 5 cambian por segmento, persistencia en localStorage, resultado con plan recomendado, opción de saltar y home con o sin diagnóstico. Úsalo al implementar o ajustar el flujo de diagnóstico.
---

# SUMAUP360 — Diagnóstico web

Lógica funcional del diagnóstico que orienta al usuario hacia un plan.

## Estructura general

- El diagnóstico tiene **5 pasos** (5 preguntas).
- **Pregunta 1: define el segmento** del usuario (p. ej. persona natural, emprendedor, empresa, etc.).
- **Preguntas 2 a 5: cambian según el segmento** elegido en la pregunta 1 (ramificación).
- Al final se muestra un **resultado** con un **plan recomendado**.

## Persistencia

- Guardar el progreso y las respuestas en **localStorage**.
- Permitir retomar el diagnóstico si el usuario vuelve.
- Guardar también el resultado (segmento + plan recomendado) para personalizar la home.

## Opción de saltar

- El usuario puede **saltar** el diagnóstico en cualquier momento.
- Si salta, la home se muestra en su versión **sin diagnóstico**.

## Home con o sin diagnóstico

- **Con diagnóstico completado:** la home se personaliza según el resultado (segmento y plan recomendado).
- **Sin diagnóstico (saltado o no iniciado):** la home muestra su versión general/neutra.

## Resultado y plan recomendado

- Calcular el plan recomendado a partir del segmento (pregunta 1) y las respuestas 2-5.
- Mostrar el plan con una explicación clara y un llamado a la acción.

## Aviso obligatorio

Mostrar siempre en el resultado el aviso:

> "Esta es una orientación inicial y no reemplaza la evaluación de un contador."

## Reglas de UI

- Mobile first; un paso por pantalla, claro y sin saturar.
- La mascota **Suma** acompaña cada paso (ver skill `suma-assets-map`).
- Sin emojis, sin lorem ipsum, fondo blanco (ver `sumaup-design-system`).

## Entregable

- Flujo de 5 pasos con ramificación por segmento.
- Estado en localStorage (respuestas, progreso, resultado).
- Pantalla de resultado con plan recomendado y aviso legal.
- Integración con la home (modo con/sin diagnóstico).
