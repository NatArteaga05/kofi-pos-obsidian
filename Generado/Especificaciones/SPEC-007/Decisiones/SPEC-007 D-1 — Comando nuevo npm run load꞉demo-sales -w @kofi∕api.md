---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-1 — Comando nuevo npm run load:demo-sales -w @kofi/api

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-1 — Ejecución de la carga|RF-1]]

## Decisión

**Comando nuevo `npm run load:demo-sales -w @kofi/api`** (`node --env-file-if-exists=.env src/modules/sales/demo-sales.cli.ts`), en el módulo `sales`

## Por qué

Escribe ventas, así que pertenece a `sales`, y puede ejecutarse en la base oficial (spec, «Aclaraciones»): es código del producto. Sigue el patrón de `accounts` y `seed:sales`, que están en `develop`

## Alternativa descartada

Ampliar `seed:sales`: se niega en producción, exige 200 productos de prueba y su reparto es mecánico; cambiarlo rompería las mediciones de [[SPEC-004 Dashboard|SPEC-004]] y [[SPEC-005 Historial y reportes|SPEC-005]]

## Tareas que la aplican

- ✅ [[SPEC-007 T009|T009]]
