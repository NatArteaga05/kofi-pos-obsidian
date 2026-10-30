---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-5 — Productos más vendidos

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-1 — Ver el resumen de hoy|HU-1]]

- El sistema deberá mostrar en cada resumen sus productos más vendidos, según «Datos de un resumen», en ese orden y cada uno como «[nombre] · [unidades] · [importe]».
- Mientras el resumen de hoy no tenga ventas, el sistema deberá mostrar en lugar de sus productos más vendidos el aviso «Todavía no hay ventas hoy».
- El sistema deberá mostrar como dos productos distintos dos productos del menú que aparezcan con el mismo nombre en los más vendidos (por ejemplo, porque uno se renombró con el nombre que antes tenía el otro).

## Decisiones que lo resuelven

- [[SPEC-004 D-3 — La API calcula todo el resumen en memoria]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T009|T009]]
- ✅ [[SPEC-004 T013|T013]]
- ✅ [[SPEC-004 T014|T014]]
- ✅ [[SPEC-004 T016|T016]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
