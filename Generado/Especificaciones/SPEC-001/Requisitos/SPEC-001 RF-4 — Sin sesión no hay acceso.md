---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-4 — Sin sesión no hay acceso

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- Mientras no haya una sesión válida, el sistema deberá rechazar toda pantalla y toda operación distinta del ingreso, y llevar a la pantalla de ingreso sin mostrar información del negocio.

## Decisiones que lo resuelven

- [[SPEC-001 D-9 — react-router]]
- [[SPEC-001 D-11 — Cada módulo expone un index.ts]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T022|T022]]
- ✅ [[SPEC-001 T027|T027]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
- ✅ [[SPEC-001 T046|T046]]
