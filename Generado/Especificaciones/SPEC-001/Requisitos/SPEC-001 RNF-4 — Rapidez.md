---
tags:
  - rnf
spec: "SPEC-001"
---

# SPEC-001 RNF-4 — Rapidez

Especificación: [[SPEC-001 Acceso|SPEC-001]]

En el 95 % de los ingresos hechos desde la computadora del local, el resultado aparece en menos de 3 segundos; en el 95 % de los cierres de sesión, en menos de 2 segundos. Cada operación se evalúa por separado. No cuenta el primer ingreso tras un período sin uso del sistema, mientras el servicio se reactiva: ese ingreso puede tardar alrededor de un minuto.

## Tareas que lo cubren

- ✅ [[SPEC-001 T043|T043]]
