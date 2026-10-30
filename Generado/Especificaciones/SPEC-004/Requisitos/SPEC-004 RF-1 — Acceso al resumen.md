---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-1 — Acceso al resumen

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-1 — Ver el resumen de hoy|HU-1]]

- Mientras haya una sesión válida, de dueño o de cajero, el sistema deberá ofrecer en la pantalla inicial la opción «Resumen de ventas», que abre la pantalla con los resúmenes que su rol puede ver (ver «Usuarios»).
- Mientras no haya una sesión válida, el sistema deberá aplicar al resumen de ventas lo que dice [[SPEC-001 Acceso|SPEC-001]] ([[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]], [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]] y [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]).

## Decisiones que lo resuelven

- [[SPEC-004 D-6 — DASHBOARD_MONTH_ROLES en el contrato]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]
- [[SPEC-004 D-9 — Ruta ∕resumen]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T008|T008]]
- ✅ [[SPEC-004 T026|T026]]
- ✅ [[SPEC-004 T011|T011]]
- ✅ [[SPEC-004 T012|T012]]
- ✅ [[SPEC-004 T014|T014]]
- ✅ [[SPEC-004 T015|T015]]
- ✅ [[SPEC-004 T016|T016]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
