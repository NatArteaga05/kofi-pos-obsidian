---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-12 — Cambios en la cuenta durante la sesión

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-2 — Proteger las cuentas|HU-2]]

- Si la cuenta de una sesión se elimina o cambia su rol o su contraseña, entonces el sistema deberá dar por terminadas todas sus sesiones: la siguiente pantalla u operación se rechaza sin aplicar ningún cambio, se muestra el aviso «Tu sesión terminó. Vuelve a iniciar sesión» en la pantalla de ingreso y se aplica [[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]].

## Decisiones que lo resuelven

- [[SPEC-001 D-1 — Sesión en la base con cookie HttpOnly]]
- [[SPEC-001 D-4 — Formato común de errores]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T011|T011]]
- ✅ [[SPEC-001 T034|T034]]
- ✅ [[SPEC-001 T035|T035]]
- ✅ [[SPEC-001 T036|T036]]
- ✅ [[SPEC-001 T037|T037]]
- ✅ [[SPEC-001 T039|T039]]
- ✅ [[SPEC-001 T040|T040]]
- ✅ [[SPEC-001 T045|T045]]
- ✅ [[SPEC-001 T046|T046]]
