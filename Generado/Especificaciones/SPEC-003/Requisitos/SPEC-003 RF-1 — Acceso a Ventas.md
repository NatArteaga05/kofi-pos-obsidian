---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-1 — Acceso a Ventas

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- Mientras haya una sesión válida, de dueño o de cajero, el sistema deberá ofrecer en la pantalla inicial la opción «Nueva venta», que abre la pantalla donde se prepara y se registra una venta.
- Mientras no haya una sesión válida, el sistema deberá aplicar a todas las pantallas y operaciones de Ventas lo que dice [[SPEC-001 Acceso|SPEC-001]] ([[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]], [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]] y [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]): ninguna venta se registra con una sesión inválida.

## Decisiones que lo resuelven

- [[SPEC-003 D-11 — Ruta ∕ventas∕nueva]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T011|T011]]
- ✅ [[SPEC-003 T015|T015]]
- ✅ [[SPEC-003 T017|T017]]
- ✅ [[SPEC-003 T020|T020]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
