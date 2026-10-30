---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-5 — Bloqueo con tabla failed_logins y users.locked_until

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-9 — Bloqueo por intentos fallidos|RF-9]]

Principios: [[Principio 5 — Persistencia segura]]

## Decisión

**Bloqueo con tabla `failed_logins` y `users.locked_until`**, dentro de una transacción con `SELECT … FOR UPDATE`

## Por qué

Implementa literalmente la ventana de 15 minutos. El bloqueo de la fila evita que dos intentos simultáneos se cuenten mal (principio 5)

## Alternativa descartada

Un contador en `users`: no sabe cuándo ocurrió cada intento. `@fastify/rate-limit`: limita por IP, no por cuenta

## Tareas que la aplican

- ✅ [[SPEC-001 T032|T032]]
