---
tags:
  - rnf
spec: "SPEC-001"
---

# SPEC-001 RNF-2 — Sin pistas sobre las cuentas

Especificación: [[SPEC-001 Acceso|SPEC-001]]

Un intento fallido no revela si el usuario existe ([[SPEC-001 RF-2 — Credenciales incorrectas|RF-2]]). El mensaje de bloqueo ([[SPEC-001 RF-9 — Bloqueo por intentos fallidos|RF-9]]) solo aparece para cuentas existentes; se acepta porque el sistema funciona en un único local.

## Tareas que lo cubren

- ✅ [[SPEC-001 T020|T020]]
