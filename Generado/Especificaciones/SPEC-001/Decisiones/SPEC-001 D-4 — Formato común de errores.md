---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-4 — Formato común de errores

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-2 — Credenciales incorrectas|RF-2]], [[SPEC-001 RF-9 — Bloqueo por intentos fallidos|RF-9]], [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]], [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**Formato común de errores** `{ error: { code, message, … } }` y **mensajes en español generados por la API**

## Por qué

La API calcula los datos de los mensajes (minutos de bloqueo, principio 3) y la interfaz los muestra sin rearmarlos. `code` sirve para decidir la navegación

## Alternativa descartada

Que la interfaz traduzca cada código: duplica textos y reglas en la interfaz

## Tareas que la aplican

- ✅ [[SPEC-001 T013|T013]]
