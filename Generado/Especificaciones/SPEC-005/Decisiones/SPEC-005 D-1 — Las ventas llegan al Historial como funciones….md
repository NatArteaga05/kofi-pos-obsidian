---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-1 — Las ventas llegan al Historial como funciones inyectadas

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-3 — Ventas de un día|RF-3]], [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron|RF-7]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]], [[SPEC-005 RF-9 — Buscar una venta por su número|RF-9]], [[SPEC-005 RF-12 — Cifras de un mes|RF-12]]

## Decisión

**Las ventas llegan al Historial como funciones inyectadas:** `historyPlugin` y el servicio reciben `listSales: (db, { from?, to? }) => Promise<Sale[]>` y `findSale: (db, number: number) => Promise<Sale \| null>`, y [[app.ts (api)|app.ts]] les pasa `listRegisteredSales` y `findSaleByNumber` de `modules/sales/index.ts`. `findSaleByNumber` se añade a [[sales.repository.ts (api sales)|sales.repository.ts]] en US2, junto a `findSaleByDraftId`, y se exporta en la integración de US2. Las pruebas pasan funciones falsas con ventas de [[test-sales.ts (api test)|apps/api/test/test-sales.ts]]

## Por qué

La exportación de `listRegisteredSales` llegó con la historia 1 de Ventas (PR #26), ya fusionada; la Base común y la API de las historias se prueban sin ella, y `history` no conoce las tablas de ventas (`docs/architecture.md` §4.2, [[SPEC-003 Ventas|SPEC-003]] [[SPEC-003 D-1 — El menú vigente llega a Ventas como una función…|D-1]], [[SPEC-004 Dashboard|SPEC-004]] [[SPEC-004 D-1 — Las ventas registradas llegan al Dashboard como una…|D-1]]). La búsqueda por número es una lectura de una venta y pertenece a `sales`, que es el dueño de esas tablas

## Alternativa descartada

Leer `sales` y `sale_lines` con SQL desde `history`: rompería la frontera entre módulos y duplicaría `toSale`. Buscar la venta con `listRegisteredSales` sin rango y filtrar: lee todas las ventas para devolver una

## Tareas que la aplican

- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T015|T015]]
- ✅ [[SPEC-005 T017|T017]]
- ✅ [[SPEC-005 T018|T018]]
- ✅ [[SPEC-005 T021|T021]]
