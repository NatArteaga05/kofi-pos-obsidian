---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-2 — POST /api/sales/quote devuelve también los productos para vender

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-2 — Productos para vender|RF-2]], [[SPEC-003 RF-4 — Importes calculados por el sistema|RF-4]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]]

## Decisión

**[[POST ∕api∕sales∕quote|POST /api/sales/quote]] devuelve también los productos para vender** (`menu`), con el mismo menú con el que calculó las líneas

## Por qué

Un solo pedido por cambio da a la vez el total y la lista actualizada ([[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]] pide actualizarla), siempre coherentes entre sí; y la interfaz de Ventas no depende de [[GET ∕api∕menu|GET /api/menu]], que es de la historia 3 de Menú

## Alternativa descartada

Usar [[GET ∕api∕menu|GET /api/menu]] ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 T031|T031]]) además del cálculo: dos pedidos por cambio, que pueden ver menús distintos, y una dependencia de la última historia de 002

## Tareas que la aplican

- ✅ [[SPEC-003 T013|T013]]
