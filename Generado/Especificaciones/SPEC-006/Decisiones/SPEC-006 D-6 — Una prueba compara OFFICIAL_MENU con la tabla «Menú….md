---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-6 — Una prueba compara OFFICIAL_MENU con la tabla «Menú oficial» de spec.md

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-1 — Contenido del menú oficial|RF-1]]

Principios: [[Principio 2 — Especificación antes que código]]

## Decisión

**Una prueba compara `OFFICIAL_MENU` con la tabla «Menú oficial» de `spec.md`** (categoría, producto y precio con `formatPrice`)

## Por qué

La tabla es la fuente aprobada por la persona; si cambia una sin la otra, la prueba falla (principio 2)

## Alternativa descartada

Repetir la lista dentro de la prueba: dos copias que pueden divergir de la especificación

## Tareas que la aplican

- ✅ [[SPEC-006 T001|T001]]
