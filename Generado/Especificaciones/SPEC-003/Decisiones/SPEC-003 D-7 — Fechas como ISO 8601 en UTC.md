---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-7 — Fechas como ISO 8601 en UTC

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-6 — Registrar la venta|RF-6]], [[SPEC-003 RF-11 — Ventas registradas para otros módulos|RF-11]]

## Decisión

**Fechas como ISO 8601 en UTC** en el contrato (`registeredAt`) y **`formatDateTime` en el contrato**, en hora de Bolivia (`America/La_Paz`)

## Por qué

Igual que `formatPrice` para los importes ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 D-2 — Precios en centavos enteros|D-2]]): una sola forma de mostrar fechas para Ventas, Dashboard e Historial, que no depende de la zona horaria de la computadora. Formatear no es calcular

## Alternativa descartada

Que la API envíe el texto ya formateado: el Dashboard y el Historial necesitan la fecha para agrupar y filtrar

## Tareas que la aplican

- ✅ [[SPEC-003 T003|T003]]
