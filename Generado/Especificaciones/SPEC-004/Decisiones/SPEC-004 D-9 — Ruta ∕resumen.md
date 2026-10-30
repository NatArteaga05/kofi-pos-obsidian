---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-9 — Ruta /resumen

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-1 — Acceso al resumen|RF-1]]

## Decisión

**Ruta `/resumen`** con `homeLink: 'Resumen de ventas'` y los dos roles (los de por defecto)

## Por qué

Sigue `docs/architecture.md` §6.6 con el nombre que ve la persona; `/ventas` queda para el Historial ([[SPEC-003 Ventas|SPEC-003]] [[SPEC-003 D-11 — Ruta ∕ventas∕nueva|D-11]])

## Alternativa descartada

`/dashboard`: un nombre en inglés en la barra de direcciones

## Tareas que la aplican

- ✅ [[SPEC-004 T008|T008]]
- ✅ [[SPEC-004 T026|T026]]
