---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-11 — Cada módulo expone un index.ts

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-5 — Identidad, rol y pantalla inicial|RF-5]]

## Decisión

**Cada módulo expone un `index.ts`** como superficie pública, y los demás módulos importan solo de ahí

## Por qué

Hace verificable la regla de arquitectura «un módulo no importa los archivos internos de otro», con `no-restricted-imports`

## Alternativa descartada

Sin superficie pública: la regla depende de la revisión manual

## Tareas que la aplican

- ✅ [[SPEC-001 T005|T005]]
