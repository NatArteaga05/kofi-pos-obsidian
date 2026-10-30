---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-8 — Sesión cerrada inservible

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- Si se intenta usar una sesión ya cerrada (volviendo atrás, desde otra pestaña abierta antes o repitiendo una operación), entonces el sistema deberá rechazarla y aplicar [[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]].
- Mientras la misma cuenta tenga otras sesiones abiertas, cuando se cierre una, el sistema deberá mantener las demás.

## Decisiones que lo resuelven

- [[SPEC-001 D-1 — Sesión en la base con cookie HttpOnly]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T022|T022]]
- ✅ [[SPEC-001 T023|T023]]
- ✅ [[SPEC-001 T027|T027]]
- ✅ [[SPEC-001 T029|T029]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
