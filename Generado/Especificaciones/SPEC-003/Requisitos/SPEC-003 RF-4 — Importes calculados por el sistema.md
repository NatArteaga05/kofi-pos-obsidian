---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-4 — Importes calculados por el sistema

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- El sistema deberá mostrar en cada línea el nombre del producto, la cantidad, el precio unitario y el subtotal, y debajo de las líneas el total de la venta en preparación.
- Cuando cambia la venta en preparación (se agrega, se suma, se resta o se quita), el sistema deberá volver a calcular los subtotales y el total con los precios del menú vigente en ese momento y mostrarlos antes de permitir otro cambio o el registro.
- Mientras la venta en preparación esté vacía, el sistema deberá mostrar «Elige los productos de la venta» y el total «Bs 0,00».

## Decisiones que lo resuelven

- [[SPEC-003 D-2 — POST ∕api∕sales∕quote devuelve también los productos…]]
- [[SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula…]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T005|T005]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T012|T012]]
- ✅ [[SPEC-003 T013|T013]]
- ✅ [[SPEC-003 T016|T016]]
- ✅ [[SPEC-003 T018|T018]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
