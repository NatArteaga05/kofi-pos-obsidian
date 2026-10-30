---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-1 — Sesión en la base con cookie HttpOnly

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-6 — Sesión por navegador|RF-6]], [[SPEC-001 RF-7 — Cierre de sesión|RF-7]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]], [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]], [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]

## Decisión

**Sesión en la base con cookie `HttpOnly`** que guarda un token aleatorio; en la base solo queda su SHA-256

## Por qué

Permite invalidar de inmediato una sesión ([[SPEC-001 RF-7 — Cierre de sesión|RF-7]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]]), terminar todas las sesiones de una cuenta ([[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]) y tener una sesión por navegador ([[SPEC-001 RF-6 — Sesión por navegador|RF-6]]). El token no es accesible desde JavaScript

## Alternativa descartada

JWT sin estado: no se puede revocar sin una lista de bloqueo, que vuelve a necesitar la base. Token en `localStorage`: queda expuesto a cualquier script de la página

## Tareas que la aplican

_Ninguno._
