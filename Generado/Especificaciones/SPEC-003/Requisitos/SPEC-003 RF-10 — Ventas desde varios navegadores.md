---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-10 — Ventas desde varios navegadores

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- El sistema deberá mantener independientes las ventas en preparación de distintos navegadores, aunque sean de la misma cuenta: lo que se arma en un navegador no aparece en otro.
- Cuando se registran ventas a la vez desde varios navegadores, el sistema deberá registrarlas todas, cada una con su propio número, sin saltos ni repeticiones.

## Decisiones que lo resuelven

- [[SPEC-003 D-4 — Integridad en la base]]
- [[SPEC-003 D-8 — La venta en preparación se guarda en localStorage]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T006|T006]]
- ✅ [[SPEC-003 T007|T007]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T022|T022]]
- ✅ [[SPEC-003 T027|T027]]
