---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-2 — Productos para vender

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- Cuando una persona abre «Nueva venta», o recarga esa pantalla, el sistema deberá mostrar el menú vigente de [[SPEC-002 Menú|SPEC-002]] tal como está en ese momento: las categorías activas con productos activos, en orden alfabético, y dentro de cada una sus productos activos, en orden alfabético, con su precio.
- El sistema deberá actualizar los productos para vender solo al abrir o recargar la pantalla y en los casos de [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]]; la lista no se actualiza sola.
- Mientras el menú vigente no tenga ningún producto, el sistema deberá mostrar «El menú todavía no tiene productos para vender» y no permitir agregar productos.

## Decisiones que lo resuelven

- [[SPEC-003 D-1 — El menú vigente llega a Ventas como una función…]]
- [[SPEC-003 D-2 — POST ∕api∕sales∕quote devuelve también los productos…]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T005|T005]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T013|T013]]
- ✅ [[SPEC-003 T017|T017]]
- ✅ [[SPEC-003 T020|T020]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
- ✅ [[SPEC-003 T034|T034]]
