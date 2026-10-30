---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-11 — Regreso tras el vencimiento

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-2 — Proteger las cuentas|HU-2]]

- Cuando la misma cuenta vuelve a iniciar sesión en ese navegador después de [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]], el sistema deberá llevarla a la pantalla donde estaba, si su cuenta puede verla; si no, a la pantalla inicial.
- Cuando entra otra cuenta después de [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]], o cualquier cuenta después de [[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]] o [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]], el sistema deberá llevarla a la pantalla inicial.

## Decisiones que lo resuelven

- [[SPEC-001 D-9 — react-router]]
- [[SPEC-001 D-15 — La cookie dura más que la sesión]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T008|T008]]
- ✅ [[SPEC-001 T019|T019]]
- ✅ [[SPEC-001 T033|T033]]
- ✅ [[SPEC-001 T038|T038]]
- ✅ [[SPEC-001 T040|T040]]
