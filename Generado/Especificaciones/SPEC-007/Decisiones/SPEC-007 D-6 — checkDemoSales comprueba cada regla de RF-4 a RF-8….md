---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8 sobre el resultado

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-4 — Días y horas de las ventas|RF-4]], [[SPEC-007 RF-5 — Contenido de cada venta|RF-5]], [[SPEC-007 RF-6 — Medio de pago|RF-6]], [[SPEC-007 RF-7 — Quién registró cada venta|RF-7]], [[SPEC-007 RF-8 — Número y orden de las ventas|RF-8]]

## Decisión

**`checkDemoSales` comprueba cada regla de [[SPEC-007 RF-4 — Días y horas de las ventas|RF-4]] a [[SPEC-007 RF-8 — Número y orden de las ventas|RF-8]] sobre el resultado** y el generador reintenta con otro intento de la misma semilla si alguna falla (hasta 50)

## Por qué

Las reglas son estadísticas (porcentajes, promedios, los 10 más vendidos): un generador al azar las cumple casi siempre, pero no siempre. Comprobar antes de cargar garantiza que nunca se carga una demostración que no cumple la especificación

## Alternativa descartada

Confiar en los pesos: una semilla desafortunada cargaría ventas fuera de la especificación que no se pueden borrar

## Tareas que la aplican

- ✅ [[SPEC-007 T003|T003]]
- ✅ [[SPEC-007 T004|T004]]
- ✅ [[SPEC-007 T005|T005]]
- ✅ [[SPEC-007 T006|T006]]
