---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-8 — Cambios desde dos navegadores

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-1 — Armar el menú|HU-1]]

- Si dos sesiones de dueño guardan cambios sobre el mismo producto o la misma categoría, entonces el sistema deberá conservar el último cambio guardado, siempre que cumpla las reglas de «Datos de una categoría» y «Datos de un producto» en el momento de guardarlo.
- El sistema deberá comprobar cada cambio contra el estado del menú en el momento de guardarlo, de modo que, aunque dos sesiones guarden a la vez, nunca quede un producto activo en una categoría inactiva ni dos nombres repetidos: el cambio que deja de cumplir las reglas se rechaza con su mensaje ([[SPEC-002 RF-3 — Crear y renombrar una categoría|RF-3]], [[SPEC-002 RF-6 — Validación de un producto|RF-6]], [[SPEC-002 RF-9 — Desactivar y reactivar un producto|RF-9]] o [[SPEC-002 RF-10 — Desactivar y reactivar una categoría|RF-10]]).

## Decisiones que lo resuelven

- [[SPEC-002 D-5 — Disparadores con FOR SHARE]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T006|T006]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T014|T014]]
- ✅ [[SPEC-002 T015|T015]]
- ✅ [[SPEC-002 T026|T026]]
- ✅ [[SPEC-002 T036|T036]]
