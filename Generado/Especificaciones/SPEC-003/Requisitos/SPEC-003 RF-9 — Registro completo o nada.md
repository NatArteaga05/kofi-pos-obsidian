---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-9 — Registro completo o nada

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- El sistema deberá registrar cada venta completa, con todas sus líneas, o no registrarla: nunca queda una venta a medias.
- Si una venta no se puede registrar por falta de conexión, entonces el sistema deberá mostrar «No hay conexión. Inténtalo de nuevo: la venta no se registrará dos veces» y conservar la venta en preparación.
- Si un cambio en la venta en preparación ([[SPEC-003 RF-3 — Armar la venta en preparación|RF-3]]) no se puede hacer por falta de conexión, entonces el sistema deberá mostrar «No hay conexión. Inténtalo de nuevo» y dejar la venta en preparación como estaba.

## Decisiones que lo resuelven

- [[SPEC-003 D-4 — Integridad en la base]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T006|T006]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T016|T016]]
- ✅ [[SPEC-003 T019|T019]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
