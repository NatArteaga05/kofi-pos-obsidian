---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-12 — Medición de RNF-3

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RNF-3 — Rapidez|RNF-3]]

## Decisión

**Medición de [[SPEC-003 RNF-3 — Rapidez|RNF-3]]** en un despliegue de comprobación con los 200 productos de [[seed-menu.ts (api test)|seed-menu.ts]] ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 T034|T034]]), nunca en producción

## Por qué

[[SPEC-003 RNF-3 — Rapidez|RNF-3]] fija el tamaño del menú y el script ya existirá; mide abrir, cambiar y registrar

## Alternativa descartada

Medir con el menú real: todavía no existe (duda abierta de [[SPEC-002 Menú|SPEC-002]])

## Tareas que la aplican

_Ninguno._
