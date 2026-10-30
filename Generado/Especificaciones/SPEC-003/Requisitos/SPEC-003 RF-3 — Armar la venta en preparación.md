---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-3 — Armar la venta en preparación

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- Cuando la persona elige un producto que no está en la venta en preparación, el sistema deberá agregarlo como una línea nueva, al final, con cantidad 1.
- Cuando la persona elige un producto que ya está en la venta en preparación, el sistema deberá sumar 1 a la cantidad de su línea.
- El sistema deberá ofrecer en cada línea las opciones «+» (sumar 1), «−» (restar 1) y «Quitar» (sacar la línea), sin pedir confirmación.
- Mientras la cantidad de una línea sea 1, el sistema deberá no permitir restarle; la línea se saca con «Quitar».
- Si una línea ya tiene 99 unidades y se intenta sumar una más, entonces el sistema deberá no cambiarla y mostrar «Una venta puede tener como máximo 99 unidades de cada producto».
- Si la venta en preparación ya tiene 30 líneas y se intenta agregar otro producto, entonces el sistema deberá no agregarlo y mostrar «Una venta puede tener como máximo 30 productos distintos».

## Decisiones que lo resuelven

- [[SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula…]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T004|T004]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T013|T013]]
- ✅ [[SPEC-003 T015|T015]]
- ✅ [[SPEC-003 T016|T016]]
- ✅ [[SPEC-003 T017|T017]]
- ✅ [[SPEC-003 T018|T018]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
