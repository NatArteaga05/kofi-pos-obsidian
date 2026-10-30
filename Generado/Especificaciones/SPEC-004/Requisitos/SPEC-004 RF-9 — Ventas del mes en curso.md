---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-9 — Ventas del mes en curso

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-2 — Ver el resumen del mes en curso|HU-2]]

- Mientras la sesión sea de dueño, el sistema deberá mostrar en la pantalla «Resumen de ventas», después del resumen de hoy, el resumen del mes en curso con el título «[Mes] de [año]», por ejemplo «Octubre de 2026».
- El sistema deberá contar en el resumen del mes todas las ventas registradas del mes en curso (ver «Conceptos»), y ninguna otra, con los datos de [[SPEC-004 RF-3 — Totales de un resumen|RF-3]], [[SPEC-004 RF-4 — Por medio de pago|RF-4]] y [[SPEC-004 RF-5 — Productos más vendidos|RF-5]], y calcularlo, actualizarlo y mostrar el momento de sus datos como indican [[SPEC-004 RF-6 — Momento de los datos y actualización|RF-6]] y [[SPEC-004 RF-7 — Sin conexión o con error|RF-7]].
- Mientras el resumen del mes no tenga ventas, el sistema deberá mostrar en lugar de sus productos más vendidos el aviso «Todavía no hay ventas este mes».
- Mientras la sesión sea de cajero, el sistema deberá no mostrarle el resumen del mes en curso.
- Si una sesión de cajero intenta ver el resumen del mes, entonces el sistema deberá rechazarlo con el mensaje «No tienes permiso para ver el resumen del mes» y no mostrar ninguna cifra del mes.

## Decisiones que lo resuelven

- [[SPEC-004 D-1 — Las ventas registradas llegan al Dashboard como una…]]
- [[SPEC-004 D-2 — Una ruta por resumen]]
- [[SPEC-004 D-4 — shared∕calendar.ts en la API]]
- [[SPEC-004 D-5 — formatDate y formatMonth en el contrato]]
- [[SPEC-004 D-6 — DASHBOARD_MONTH_ROLES en el contrato]]
- [[SPEC-004 D-7 — El rechazo por rol se muestra en la propia pantalla]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T002|T002]]
- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T004|T004]]
- ✅ [[SPEC-004 T005|T005]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T025|T025]]
- ✅ [[SPEC-004 T027|T027]]
- ✅ [[SPEC-004 T018|T018]]
- ✅ [[SPEC-004 T019|T019]]
- ✅ [[SPEC-004 T020|T020]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
