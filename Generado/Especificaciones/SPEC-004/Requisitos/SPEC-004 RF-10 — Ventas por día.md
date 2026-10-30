---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-10 — Ventas por día

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-2 — Ver el resumen del mes en curso|HU-2]]

- El sistema deberá mostrar en el resumen del mes una fila por cada día del mes en curso, desde el día 1 hasta hoy, del más antiguo al más reciente, cada una con su fecha, el total vendido ese día y su número de ventas: «01/10/2026 · Bs 8,00 · 1 venta».
- El sistema deberá mostrar los días sin ventas con «Bs 0,00 · 0 ventas».
- El sistema deberá mostrar filas por día cuyos totales sumen exactamente el total vendido del mes y cuyos números de ventas sumen exactamente su número de ventas.

## Decisiones que lo resuelven

- [[SPEC-004 D-3 — La API calcula todo el resumen en memoria]]
- [[SPEC-004 D-4 — shared∕calendar.ts en la API]]
- [[SPEC-004 D-5 — formatDate y formatMonth en el contrato]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]
- [[SPEC-004 D-10 — La jornada es el día calendario de Bolivia]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T002|T002]]
- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T004|T004]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T017|T017]]
- ✅ [[SPEC-004 T018|T018]]
- ✅ [[SPEC-004 T019|T019]]
- ✅ [[SPEC-004 T020|T020]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
