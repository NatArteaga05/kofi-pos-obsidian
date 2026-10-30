---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-1 — Ver el resumen de hoy|HU-1]]

- El sistema deberá calcular cada resumen con los datos de cada venta tal como se registró ([[SPEC-003 Ventas|SPEC-003]], RF-11): sus líneas, cantidades, subtotales, total y medio de pago, aunque después haya cambiado el menú o se haya eliminado la cuenta que la registró.
- El sistema deberá mostrar los resúmenes sin modificar ninguna venta registrada.

## Decisiones que lo resuelven

- [[SPEC-004 D-1 — Las ventas registradas llegan al Dashboard como una…]]
- [[SPEC-004 D-3 — La API calcula todo el resumen en memoria]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T009|T009]]
- ✅ [[SPEC-004 T010|T010]]
- ✅ [[SPEC-004 T011|T011]]
- ✅ [[SPEC-004 T015|T015]]
- ✅ [[SPEC-004 T016|T016]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
