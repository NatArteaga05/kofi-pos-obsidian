---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-3 — Se carga con saveCategory y saveProduct

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-1 — Contenido del menú oficial|RF-1]], [[SPEC-006 RF-2 — Carga en una base nueva|RF-2]]

## Decisión

**Se carga con `saveCategory` y `saveProduct`** dentro de una única transacción, con el patrón `batch` de [[seed-menu.ts (api test)|apps/api/test/seed-menu.ts]]

## Por qué

Aplica las reglas de [[SPEC-002 Menú|SPEC-002]] (nombres, precios, categoría activa) sin duplicarlas

## Alternativa descartada

`INSERT` directos: tendrían que recalcular `name_key` y los centavos, y podrían divergir de [[SPEC-002 Menú|SPEC-002]]

## Tareas que la aplican

- ✅ [[SPEC-006 T002|T002]]
