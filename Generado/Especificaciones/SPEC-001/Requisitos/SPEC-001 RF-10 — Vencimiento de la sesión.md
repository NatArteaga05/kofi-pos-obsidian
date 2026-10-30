---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-10 — Vencimiento de la sesión

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-2 — Proteger las cuentas|HU-2]]

- El sistema deberá dar por vencida una sesión a las 12 horas de iniciada, aunque haya actividad. No hay cierre por inactividad.
- Si se intenta una operación o se abre una pantalla con una sesión vencida, entonces el sistema deberá rechazarla sin aplicar ningún cambio, mostrar el aviso «Tu sesión venció. Vuelve a iniciar sesión» en la pantalla de ingreso y aplicar [[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]].

## Decisiones que lo resuelven

- [[SPEC-001 D-1 — Sesión en la base con cookie HttpOnly]]
- [[SPEC-001 D-4 — Formato común de errores]]
- [[SPEC-001 D-15 — La cookie dura más que la sesión]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T011|T011]]
- ✅ [[SPEC-001 T021|T021]]
- ✅ [[SPEC-001 T033|T033]]
- ✅ [[SPEC-001 T036|T036]]
- ✅ [[SPEC-001 T037|T037]]
- ✅ [[SPEC-001 T039|T039]]
- ✅ [[SPEC-001 T040|T040]]
- ✅ [[SPEC-001 T045|T045]]
- ✅ [[SPEC-001 T046|T046]]
