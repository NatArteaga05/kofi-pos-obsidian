---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-10 — La jornada es el día calendario de Bolivia

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-2 — Ventas de hoy|RF-2]], [[SPEC-004 RF-10 — Ventas por día|RF-10]]

## Decisión

**La jornada es el día calendario de Bolivia**, de 00:00 a 23:59, y toda la regla vive en `boliviaDayRange` y `boliviaDate`

## Por qué

Respuesta de la persona a la duda 1 de `spec.md`: Kofi cierra antes de la medianoche (`docs/business-rules.md`). Si algún día la jornada pasara de la medianoche, cambiarían solo esas dos funciones y sus pruebas (con una hora de corte), no el resumen ni el contrato

## Alternativa descartada

Una hora de corte configurable: no hace falta con la respuesta de la persona

## Tareas que la aplican

- ✅ [[SPEC-004 T004|T004]]
