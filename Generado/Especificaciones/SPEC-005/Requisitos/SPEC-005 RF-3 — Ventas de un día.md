---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-3 — Ventas de un día

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1]]

- El sistema deberá mostrar todas las ventas registradas del día elegido (ver «Conceptos»), y ninguna otra, de la más reciente a la más antigua (de mayor a menor número, que es el orden en que se registraron), cada una con su número, su hora, quién la registró, su medio de pago y su total: «N.º 3 · 10:30 · Luis Mamani · Dueño · QR · Bs 20,50».
- Mientras el día elegido no tenga ventas, el sistema deberá mostrar «No hay ventas registradas este día» en lugar de la lista.

## Decisiones que lo resuelven

- [[SPEC-005 D-1 — Las ventas llegan al Historial como funciones…]]
- [[SPEC-005 D-3 — La API calcula las cifras en memoria]]
- [[SPEC-005 D-5 — formatTime en datetime.ts]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]
- [[SPEC-005 D-12 — La lista de un día viaja completa y sin líneas]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T002|T002]]
- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T009|T009]]
- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T013|T013]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T015|T015]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T030|T030]]
- ✅ [[SPEC-005 T031|T031]]
- ✅ [[SPEC-005 T029|T029]]
