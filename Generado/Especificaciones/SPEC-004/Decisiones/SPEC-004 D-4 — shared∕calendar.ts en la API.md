---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-4 — shared/calendar.ts en la API

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-2 — Ventas de hoy|RF-2]], [[SPEC-004 RF-6 — Momento de los datos y actualización|RF-6]], [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]], [[SPEC-004 RF-10 — Ventas por día|RF-10]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**[[calendar.ts (api shared)|shared/calendar.ts]] en la API** calcula la fecha de Bolivia de un instante y los rangos del día y del mes con `Intl` (desfase de `America/La_Paz` con `timeZoneName: 'longOffset'`), a partir de `clock.now()`

## Por qué

Los límites de día y mes son una regla de negocio y van en la API (principio 3); no dependen de la zona de la computadora ([[SPEC-004 RF-6 — Momento de los datos y actualización|RF-6]]) ni de la zona horaria de PostgreSQL. Va en `shared/` porque el Historial (005) los necesitará

## Alternativa descartada

Calcular el día en la interfaz con la hora de la computadora: contradice [[SPEC-004 RF-6 — Momento de los datos y actualización|RF-6]]. `AT TIME ZONE 'America/La_Paz'` en SQL: no se puede usar sin SQL propio del Dashboard ([[SPEC-004 D-1 — Las ventas registradas llegan al Dashboard como una…|D-1]]) y PGlite y Neon deben tener la misma base de zonas. Un desfase fijo `-04:00`: depende de que Bolivia nunca cambie de hora

## Tareas que la aplican

- ✅ [[SPEC-004 T004|T004]]
