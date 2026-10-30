---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-13 — Medio de pago con códigos estables en inglés

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-6 — Registrar la venta|RF-6]], [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]], [[SPEC-003 RF-11 — Ventas registradas para otros módulos|RF-11]], [[SPEC-003 RF-12 — Conservar la venta en preparación|RF-12]]

## Decisión

**Medio de pago con códigos estables en inglés** (`'cash'`, `'qr'`) en la base y el contrato, y **`formatPaymentMethod` en el contrato** para mostrarlos («Efectivo», «QR»). Es obligatorio en [[POST ∕api∕sales|POST /api/sales]] y no tiene valor por defecto; la interfaz lo guarda con la venta en preparación

## Por qué

Como los roles (`owner`, `cashier`) y los códigos de error: los datos no dependen del texto que se muestra, y Dashboard e Historial agruparán por código. Un `CHECK` en la base impide otros valores. Sin valor por defecto, una venta por QR nunca queda como efectivo por olvido (spec, «Aclaraciones»)

## Alternativa descartada

Guardar el texto «Efectivo»/«QR»: cambiar un texto obligaría a migrar datos. Una tabla de medios de pago: hoy son dos fijos y la especificación no pide administrarlos

## Tareas que la aplican

- ✅ [[SPEC-003 T028|T028]]
- ✅ [[SPEC-003 T029|T029]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T019|T019]]
