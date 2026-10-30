---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-3 — Campos vacíos y largo máximo

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- Si el usuario o la contraseña están vacíos o formados solo por espacios, entonces el sistema deberá indicar qué campo falta sin intentar el ingreso y sin contarlo como intento fallido.
- El sistema deberá impedir escribir en los campos de usuario y contraseña más caracteres que el máximo de «Datos de una cuenta».

## Decisiones que lo resuelven

_Ninguno._

## Tareas que lo cubren

- ✅ [[SPEC-001 T009|T009]]
- ✅ [[SPEC-001 T021|T021]]
- ✅ [[SPEC-001 T026|T026]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
