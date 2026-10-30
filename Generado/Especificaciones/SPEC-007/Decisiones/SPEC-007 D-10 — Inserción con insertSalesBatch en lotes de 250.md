---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-10 — Inserción con insertSalesBatch en lotes de 250

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-8 — Número y orden de las ventas|RF-8]], [[SPEC-007 RF-10 — Carga completa o nada|RF-10]], [[SPEC-007 RNF-3 — Rapidez|RNF-3]]

## Decisión

**Inserción con `insertSalesBatch` en lotes de 250**, después de reservar todos los números con `reserveSaleNumbers`

## Por qué

Unas 4500 ventas y 9000 líneas llegan a Neon en unas 20 sentencias, dentro de los 3 minutos de [[SPEC-007 RNF-3 — Rapidez|RNF-3]]; es el camino que ya usa `seed:sales` y respeta los disparadores de `003_sales.sql`

## Alternativa descartada

`insertSale` de una en una: miles de idas y vueltas a la base

## Tareas que la aplican

- ✅ [[SPEC-007 T008|T008]]
