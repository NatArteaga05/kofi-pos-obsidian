---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-8 — Una venta se registra una sola vez

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- Si se elige «Registrar venta» varias veces para la misma venta en preparación (doble clic, o un nuevo intento tras un error de conexión), entonces el sistema deberá registrarla una sola vez y mostrar en cada intento la confirmación de esa misma venta, con su mismo número.
- Si la venta en preparación ya quedó registrada en un intento anterior, entonces el sistema deberá mostrar su confirmación aunque el menú haya cambiado después, sin aplicar [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]].
- Mientras se está registrando una venta, el sistema deberá no permitir cambiar la venta en preparación.

## Decisiones que lo resuelven

- [[SPEC-003 D-5 — Un registro por venta en preparación]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T004|T004]]
- ✅ [[SPEC-003 T007|T007]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T031|T031]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T015|T015]]
- ✅ [[SPEC-003 T019|T019]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
