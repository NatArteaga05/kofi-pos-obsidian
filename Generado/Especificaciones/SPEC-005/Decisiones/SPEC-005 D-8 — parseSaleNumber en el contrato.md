---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-8 — parseSaleNumber en el contrato

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-9 — Buscar una venta por su número|RF-9]]

## Decisión

**`parseSaleNumber` en el contrato**, usado por `SaleSearch` (para no buscar con un texto inválido) y por la API (para validar `:number`); los números mayores que `SALE_NUMBER_MAX` responden `404` sin consultar la base, y el mensaje usa el número ya normalizado

## Por qué

Una sola regla de qué es un número válido para la interfaz y la API, como los esquemas de Zod (`docs/architecture.md` §4.4). El número se trata como texto hasta compararlo con el máximo, así que uno de 20 cifras no pierde precisión ni rompe la consulta (spec, «Casos límite»)

## Alternativa descartada

Validar con `z.coerce.number()`: acepta `'2.5'` y `'1e3'` y pierde precisión con 20 cifras. Responder `400` por encima del máximo: la especificación dice que es un número válido sin venta ([[SPEC-005 RF-9 — Buscar una venta por su número|RF-9]])

## Tareas que la aplican

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T018|T018]]
- ✅ [[SPEC-005 T019|T019]]
