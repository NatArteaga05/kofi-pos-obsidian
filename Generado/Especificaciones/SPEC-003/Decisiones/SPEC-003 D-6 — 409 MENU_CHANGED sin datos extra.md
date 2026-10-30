---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-6 — 409 MENU_CHANGED sin datos extra

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]]

## Decisión

**`409 MENU_CHANGED` sin datos extra:** ante el rechazo, la interfaz vuelve a llamar a `quote` con las mismas líneas para obtener los avisos y la lista nueva

## Por qué

Mantiene el formato común de errores (`errors.ts`) sin campos propios de un módulo; el caso es raro y un pedido más no se nota

## Alternativa descartada

Incluir el cálculo nuevo dentro del error: obliga a ampliar `apiErrorSchema` para un solo caso

## Tareas que la aplican

- ✅ [[SPEC-003 T014|T014]]
