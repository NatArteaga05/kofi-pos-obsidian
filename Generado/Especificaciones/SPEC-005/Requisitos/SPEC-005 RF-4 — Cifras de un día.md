---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-4 — Cifras de un día

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1]]

- El sistema deberá mostrar, junto a las ventas del día, su total vendido, su número de ventas y, para «Efectivo» y para «QR», en ese orden y siempre los dos, el importe y el número de ventas pagadas con ese medio, según «Cifras de un día o de un mes».
- El sistema deberá mostrar importes por medio de pago que sumen exactamente el total vendido del día, y números de ventas que sumen exactamente su número de ventas, que es también el número de ventas de la lista.
- Mientras el día no tenga ventas, el sistema deberá mostrar el total vendido «Bs 0,00», «0 ventas» y los dos medios de pago con «Bs 0,00 · 0 ventas».

## Decisiones que lo resuelven

- [[SPEC-005 D-3 — La API calcula las cifras en memoria]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T009|T009]]
- ✅ [[SPEC-005 T013|T013]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T029|T029]]
