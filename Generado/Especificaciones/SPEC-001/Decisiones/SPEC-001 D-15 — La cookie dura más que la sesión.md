---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-15 — La cookie dura más que la sesión

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]], [[SPEC-001 RF-11 — Regreso tras el vencimiento|RF-11]]

## Decisión

**La cookie dura más que la sesión:** `Max-Age` de 12 h + 7 días, y el vencimiento se decide en la API

## Por qué

Si la cookie venciera junto con la sesión, el navegador la borraría a las 12 horas y la API solo vería «sin cookie» (`SESSION_MISSING`): no podría avisar del vencimiento ([[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]]) ni dar la cuenta para el regreso ([[SPEC-001 RF-11 — Regreso tras el vencimiento|RF-11]]). Una cookie vencida en la API no da acceso, porque `resolveSession` comprueba `expires_at` en cada petición. Pasados los 7 días, el navegador la borra y se trata como cualquier ingreso sin sesión

## Alternativa descartada

`Max-Age` igual al tiempo que le queda a la sesión: rompe [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]] y [[SPEC-001 RF-11 — Regreso tras el vencimiento|RF-11]] (hallazgo del segundo análisis). Cookie de sesión del navegador, sin `Max-Age`: se pierde al cerrar el navegador, algo que la especificación no pide

## Tareas que la aplican

- ✅ [[SPEC-001 T021|T021]]
- ✅ [[SPEC-001 T040|T040]]
