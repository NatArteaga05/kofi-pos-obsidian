---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-13 — Ventas por día de un mes

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-3 — Consultar las cifras de un mes|HU-3]]

- El sistema deberá mostrar en las cifras de un mes una fila por cada día, del más antiguo al más reciente, cada una con su fecha, el total vendido ese día y su número de ventas: «01/10/2026 · Bs 8,00 · 1 venta»; en un mes anterior, del día 1 a su último día, y en el mes en curso, del día 1 a hoy.
- El sistema deberá mostrar los días sin ventas con «Bs 0,00 · 0 ventas».
- El sistema deberá mostrar filas por día cuyos totales sumen exactamente el total vendido del mes y cuyos números de ventas sumen exactamente su número de ventas.
- Donde estén las ventas de un día (HU-1), el sistema deberá permitir elegir cada fila para ver las ventas de ese día ([[SPEC-005 RF-3 — Ventas de un día|RF-3]]).

## Decisiones que lo resuelven

- [[SPEC-005 D-3 — La API calcula las cifras en memoria]]
- [[SPEC-005 D-4 — shared∕calendar.ts crece con addDays, addMonths,…]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T004|T004]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T023|T023]]
- ✅ [[SPEC-005 T024|T024]]
- ✅ [[SPEC-005 T025|T025]]
- ✅ [[SPEC-005 T026|T026]]
- ✅ [[SPEC-005 T029|T029]]
