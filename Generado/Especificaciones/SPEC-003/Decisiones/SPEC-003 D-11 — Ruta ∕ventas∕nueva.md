---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-11 — Ruta /ventas/nueva

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-1 — Acceso a Ventas|RF-1]]

## Decisión

**Ruta `/ventas/nueva`** con `homeLink: 'Nueva venta'` y los dos roles

## Por qué

Sigue `docs/architecture.md` §6.6; deja `/ventas` libre para el Historial

## Alternativa descartada

`/venta` o `/ventas`: se confundiría con la consulta de ventas de 005

## Tareas que la aplican

- ✅ [[SPEC-003 T011|T011]]
