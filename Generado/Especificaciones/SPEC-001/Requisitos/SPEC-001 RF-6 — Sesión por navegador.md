---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-6 — Sesión por navegador

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- El sistema deberá mantener una sesión independiente por navegador, aunque varios estén en la misma computadora: iniciar o cerrar sesión en uno no afecta a los demás.
- Mientras haya una sesión válida en un navegador, cuando en él se abra la pantalla de ingreso, el sistema deberá llevar a la pantalla inicial.

## Decisiones que lo resuelven

- [[SPEC-001 D-1 — Sesión en la base con cookie HttpOnly]]
- [[SPEC-001 D-9 — react-router]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T015|T015]]
- ✅ [[SPEC-001 T020|T020]]
- ✅ [[SPEC-001 T022|T022]]
- ✅ [[SPEC-001 T028|T028]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
