---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-1 — Las ventas registradas llegan al Dashboard como una función inyectada

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-2 — Ventas de hoy|RF-2]], [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron|RF-8]], [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]]

## Decisión

**Las ventas registradas llegan al Dashboard como una función inyectada:** `dashboardPlugin` y el servicio reciben `listSales: (db: Database, range: { from?: Date; to?: Date }) => Promise<Sale[]>`, y [[app.ts (api)|app.ts]] les pasa `listRegisteredSales` de `modules/sales/index.ts` ([[SPEC-003 Ventas|SPEC-003]] §6.3, [[SPEC-004 T015|T015]]). Las pruebas pasan una función falsa con ventas de [[test-sales.ts (api test)|apps/api/test/test-sales.ts]]

## Por qué

La exportación es de la historia 1 de Ventas y aún no está en `develop`; así la Base común y la API de las historias se prueban sin ella, y `dashboard` no conoce las tablas de ventas (`docs/architecture.md` §4.2, [[SPEC-003 Ventas|SPEC-003]] [[SPEC-003 D-1 — El menú vigente llega a Ventas como una función…|D-1]])

## Alternativa descartada

Leer `sales` y `sale_lines` con SQL desde `dashboard`: rompería la frontera entre módulos y duplicaría cómo se lee una venta. Esperar a 003 US1 para empezar la Base común: frena 004 sin motivo

## Tareas que la aplican

- ✅ [[SPEC-004 T010|T010]]
- ✅ [[SPEC-004 T015|T015]]
