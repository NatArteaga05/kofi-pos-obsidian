---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-6 — DASHBOARD_MONTH_ROLES en el contrato

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-1 — Acceso al resumen|RF-1]], [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]]

## Decisión

**`DASHBOARD_MONTH_ROLES` en el contrato** (`['owner']`), usado por la API para rechazar el mes con `403` y por la interfaz para no pedirlo ni mostrar su sección; el resumen de hoy no tiene restricción de rol

## Por qué

Respuesta de la persona a la duda 2 de `spec.md`: el cajero ve el resumen de hoy para cerrar su caja, y el del mes es del dueño. Una sola lista para la API y la interfaz, que no pueden quedar distintas. Los permisos reales los sigue aplicando la API (`docs/architecture.md` §6.6)

## Alternativa descartada

Escribir `['owner']` en la interfaz y en la API por separado, como en [[SPEC-002 Menú|SPEC-002]]: dos lugares que pueden quedar distintos. Una ruta propia para el mes en la interfaz: obligaría a ir y volver para ver las dos cifras

## Tareas que la aplican

- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T008|T008]]
- ✅ [[SPEC-004 T025|T025]]
- ✅ [[SPEC-004 T018|T018]]
- ✅ [[SPEC-004 T019|T019]]
