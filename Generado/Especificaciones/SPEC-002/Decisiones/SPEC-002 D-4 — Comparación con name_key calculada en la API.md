---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-4 — Comparación con name_key calculada en la API

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-2 — Lista de administración|RF-2]], [[SPEC-002 RF-3 — Crear y renombrar una categoría|RF-3]], [[SPEC-002 RF-6 — Validación de un producto|RF-6]], [[SPEC-002 RF-14 — Consulta del menú vigente|RF-14]]

## Decisión

**Comparación con `name_key` calculada en la API** (`menuNameKey`) y **orden con `Intl.Collator('es', { sensitivity: 'base' })`**

## Por qué

La extensión `unaccent` no está garantizada en PGlite, y el orden de `ORDER BY` depende de la collation de cada base. `Intl` viene con Node 24 (ICU completo) y ordena la «ñ» después de la «n»

## Alternativa descartada

`unaccent` y una collation ICU en la base: dependen de cómo se creó la base en Neon y no se pueden probar igual con PGlite

## Tareas que la aplican

- ✅ [[SPEC-002 T003|T003]]
