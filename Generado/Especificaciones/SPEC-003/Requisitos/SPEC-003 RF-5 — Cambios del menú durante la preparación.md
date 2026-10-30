---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-5 — Cambios del menú durante la preparación

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

En los avisos de este requisito y de [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]], [producto] es el nombre del producto tal como se mostraba en la venta en preparación, y «Bs X», su precio vigente en el formato de [[SPEC-002 Menú|SPEC-002]].

- Si al agregar un producto este ya no está en el menú vigente, entonces el sistema deberá no agregarlo, mostrar «“[producto]” ya no está en el menú» y actualizar los productos para vender ([[SPEC-003 RF-2 — Productos para vender|RF-2]]).
- Si al volver a calcular la venta en preparación ([[SPEC-003 RF-4 — Importes calculados por el sistema|RF-4]]) el precio vigente de un producto que ya estaba en ella es distinto del que se mostraba, entonces el sistema deberá mostrar el precio nuevo, su subtotal y el total, y avisar «Cambió el precio de “[producto]”: ahora cuesta Bs X».
- Si al volver a calcular la venta en preparación un producto que ya estaba en ella dejó de estar en el menú vigente, entonces el sistema deberá quitar su línea, avisar «Se quitó “[producto]”: ya no está en el menú» y actualizar los productos para vender.
- Cuando un producto de la venta en preparación cambia de nombre o de categoría en el menú sin cambiar de precio, el sistema deberá mostrar su nombre nuevo sin avisar.
- El sistema deberá mantener visibles los avisos de este requisito y de [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]] hasta el siguiente cambio de la venta en preparación o hasta que se registre.

## Decisiones que lo resuelven

- [[SPEC-003 D-1 — El menú vigente llega a Ventas como una función…]]
- [[SPEC-003 D-2 — POST ∕api∕sales∕quote devuelve también los productos…]]
- [[SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula…]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T004|T004]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T012|T012]]
- ✅ [[SPEC-003 T013|T013]]
- ✅ [[SPEC-003 T016|T016]]
- ✅ [[SPEC-003 T018|T018]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
- ✅ [[SPEC-003 T034|T034]]
