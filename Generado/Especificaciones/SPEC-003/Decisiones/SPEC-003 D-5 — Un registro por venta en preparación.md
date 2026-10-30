---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-5 — Un registro por venta en preparación

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-8 — Una venta se registra una sola vez|RF-8]]

## Decisión

**Un registro por venta en preparación:** la interfaz crea un `draftId` (`crypto.randomUUID()`) al empezar cada venta en preparación y lo envía al registrar; `sales.draft_id` es única. Un reintento con el mismo `draftId` devuelve la venta ya registrada (`200`), sin volver a mirar el menú

## Por qué

Cubre el doble clic y el reintento tras perder la respuesta ([[SPEC-003 RF-8 — Una venta se registra una sola vez|RF-8]]). Comprobar antes del menú evita rechazar con `409` una venta que ya existe (spec, hallazgo 9 de la revisión)

## Alternativa descartada

Deshabilitar el botón: no cubre la respuesta perdida. Detectar duplicados por contenido y hora: dos ventas iguales seguidas son normales en una cafetería

## Tareas que la aplican

- ✅ [[SPEC-003 T014|T014]]
