---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-7 — Se cobra lo que se mostró

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- Si al registrar la venta el precio vigente de alguno de sus productos es distinto del que se mostraba, o alguno ya no está en el menú vigente, entonces el sistema deberá no registrarla, actualizar la venta en preparación como indica [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]] y mostrar «El menú cambió. Revisa la venta antes de registrarla».
- El sistema deberá registrar cada venta con exactamente las líneas, las cantidades, los precios unitarios, el total y el medio de pago que se mostraban al elegir «Registrar venta», y con el nombre de cada producto y el de su categoría tal como están en el menú vigente en ese momento ([[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]]).

## Decisiones que lo resuelven

- [[SPEC-003 D-1 — El menú vigente llega a Ventas como una función…]]
- [[SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula…]]
- [[SPEC-003 D-6 — 409 MENU_CHANGED sin datos extra]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]
- [[SPEC-003 D-13 — Medio de pago con códigos estables en inglés]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T002|T002]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T012|T012]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T019|T019]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
