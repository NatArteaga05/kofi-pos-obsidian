---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-12 — Medición de RNF-3 con 200 productos

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RNF-3 — Rapidez|RNF-3]]

## Decisión

**Medición de [[SPEC-002 RNF-3 — Rapidez|RNF-3]] con 200 productos** cargados por [[seed-menu.ts (api test)|apps/api/test/seed-menu.ts]] en la base de un despliegue de comprobación (`docs/architecture.md` §6.5), nunca en la de producción

## Por qué

[[SPEC-002 RNF-3 — Rapidez|RNF-3]] fija el tamaño del menú; un script repetible evita cargarlos a mano

## Alternativa descartada

Medir con el menú real: todavía no existe (duda abierta de `spec.md`)

## Tareas que la aplican

- ✅ [[SPEC-002 T034|T034]]
