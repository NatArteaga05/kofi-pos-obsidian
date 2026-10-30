---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-11 — Medición de RNF-3

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RNF-3 — Rapidez|RNF-3]]

## Decisión

**Medición de [[SPEC-004 RNF-3 — Rapidez|RNF-3]]** en un despliegue de comprobación con 6000 ventas del mes en curso cargadas por un script de desarrollo del módulo `sales` ([[sales-seed.cli.ts (api sales)|sales-seed.cli.ts]], `npm run seed:sales -w @kofi/api`, que usa `nextSaleNumber` e `insertSale` con fechas del mes y nunca corre en producción), con los 200 productos de `seed:menu` ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 T034|T034]])

## Por qué

[[SPEC-004 RNF-3 — Rapidez|RNF-3]] fija el volumen; las ventas solo se pueden crear con fechas pasadas desde dentro del módulo `sales`, que es el dueño de esas tablas

## Alternativa descartada

Registrar 6000 ventas por [[POST ∕api∕sales|POST /api/sales]]: todas quedarían con la hora actual, sin días distintos en el mes. Medir con PGlite en las pruebas: no representa a Neon

## Tareas que la aplican

- ✅ [[SPEC-004 T021|T021]]
