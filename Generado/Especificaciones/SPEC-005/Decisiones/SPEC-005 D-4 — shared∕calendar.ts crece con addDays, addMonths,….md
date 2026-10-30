---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-4 — shared/calendar.ts crece con addDays, addMonths, daysOfMonth, boliviaDayBounds y boliviaMonthBounds

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]], [[SPEC-005 RF-13 — Ventas por día de un mes|RF-13]]

## Decisión

**[[calendar.ts (api shared)|shared/calendar.ts]] crece con `addDays`, `addMonths`, `daysOfMonth`, `boliviaDayBounds` y `boliviaMonthBounds`**, y la API devuelve hecho todo lo que la interfaz necesita para navegar: `today`, `previousDate`, `nextDate`, `currentMonth`, `previousMonth`, `nextMonth` y el día de una venta (`date`)

## Por qué

Los límites de un día o un mes cualquiera son la misma regla que [[SPEC-004 Dashboard|SPEC-004]] puso en [[calendar.ts (api shared)|shared/calendar.ts]] (`docs/architecture.md` §6.8), y la interfaz no decide fechas. Con los datos de navegación en la respuesta, «Día siguiente» y «Mes siguiente» dependen del hoy de cuando se obtuvieron los datos ([[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]]), y la interfaz no hace aritmética de fechas

## Alternativa descartada

Calcular el día anterior y siguiente en la interfaz con `Date`: depende de la zona de la computadora y contradice §6.8. Un desfase fijo `-04:00`: depende de que Bolivia nunca cambie de hora

## Tareas que la aplican

- ✅ [[SPEC-005 T004|T004]]
- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T024|T024]]
