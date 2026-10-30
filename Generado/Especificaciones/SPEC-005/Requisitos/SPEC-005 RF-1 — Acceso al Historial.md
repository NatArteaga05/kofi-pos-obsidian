---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-1 — Acceso al Historial

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1]]

- Mientras haya una sesión válida de dueño, el sistema deberá ofrecer en la pantalla inicial la opción «Historial de ventas», que abre las ventas de hoy.
- Mientras la sesión sea de cajero, el sistema deberá no mostrarle la opción «Historial de ventas» (ver «Usuarios»).
- Si una sesión de cajero intenta abrir el Historial o consultar cualquiera de sus datos por otra vía, entonces el sistema deberá rechazarlo con el mensaje «No tienes permiso para ver el historial de ventas» y no mostrar ningún dato de ventas.
- Mientras no haya una sesión válida, el sistema deberá aplicar al Historial lo que dice [[SPEC-001 Acceso|SPEC-001]] ([[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]], [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]] y [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]).

## Decisiones que lo resuelven

- [[SPEC-005 D-6 — HISTORY_ROLES en el contrato]]
- [[SPEC-005 D-7 — Rutas ∕ventas (día, fecha=YYYY-MM-DD), ∕ventas∕mes…]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T008|T008]]
- ✅ [[SPEC-005 T011|T011]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T015|T015]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T032|T032]]
- ✅ [[SPEC-005 T029|T029]]
