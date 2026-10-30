---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-11 — Medición de RNF-3

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RNF-3 — Rapidez|RNF-3]]

## Decisión

**Medición de [[SPEC-005 RNF-3 — Rapidez|RNF-3]]** en un despliegue de comprobación con 6000 ventas en un mes y 400 en uno de sus días, cargadas con el script de ventas de prueba de [[SPEC-004 Dashboard|SPEC-004]] (`seed:sales`, SPEC-004 [[SPEC-004 T021|T021]]), y los 200 productos de `seed:menu` ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 T034|T034]]). El cargador está fusionado en `develop` (PR #33); Pulido lo reutiliza y lo amplía para cargar 400 ventas en un día

## Por qué

[[SPEC-005 RNF-3 — Rapidez|RNF-3]] fija el volumen. Las ventas con fechas pasadas solo se pueden crear desde el módulo `sales` ([[SPEC-004 Dashboard|SPEC-004]] [[SPEC-004 D-11 — Medición de RNF-3|D-11]]), y reutilizar su script evita un segundo cargador

## Alternativa descartada

Registrar las ventas por [[POST ∕api∕sales|POST /api/sales]]: quedarían todas con la hora actual. Medir con PGlite: no representa a Neon

## Tareas que la aplican

- ✅ [[SPEC-005 T027|T027]]
