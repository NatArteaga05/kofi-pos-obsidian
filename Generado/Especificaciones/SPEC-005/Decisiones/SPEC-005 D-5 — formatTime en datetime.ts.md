---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-5 — formatTime en datetime.ts

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-3 — Ventas de un día|RF-3]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]]

## Decisión

**`formatTime` en [[datetime.ts (contracts)|datetime.ts]]** («10:30», en hora de Bolivia, con `formatToParts` como `formatDateTime`) y **`formatRole` en [[auth.ts (contracts)|auth.ts]]** («Dueño», «Cajero»)

## Por qué

La lista de un día muestra solo la hora (spec, «Datos de una venta en el Historial»), y el rol del momento del registro necesita su nombre en español; una sola forma de mostrarlos, como `formatPrice` y `formatPaymentMethod`. `formatRole` va en [[auth.ts (contracts)|auth.ts]] porque el rol es de Acceso

## Alternativa descartada

Recortar el texto de `formatDateTime`: depende de su formato exacto. Escribir «Dueño»/«Cajero» en el Historial: una tercera copia de la etiqueta, además de la de `AuthenticatedLayout`

## Tareas que la aplican

- ✅ [[SPEC-005 T002|T002]]
