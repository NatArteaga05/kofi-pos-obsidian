---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-7 — Rutas de acción

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-5 — Editar un producto|RF-5]], [[SPEC-002 RF-9 — Desactivar y reactivar un producto|RF-9]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría|RF-10]]

## Decisión

**Rutas de acción** (`POST …/deactivate` y `…/reactivate`) y **`PUT`** para editar, con todos los datos del formulario. [[api-fetch.ts (web shared http)|api-fetch.ts]] pasa a admitir `PUT`

## Por qué

Cada acción tiene sus reglas y mensajes ([[SPEC-002 RF-9 — Desactivar y reactivar un producto|RF-9]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría|RF-10]]). El formulario siempre envía todos sus campos, así que `PUT` describe bien la edición

## Alternativa descartada

`PATCH` con `active` en el cuerpo: mezcla editar con activar y complica los mensajes. Todo con `POST`: oculta qué ruta modifica y cuál crea

## Tareas que la aplican

- ✅ [[SPEC-002 T009|T009]]
