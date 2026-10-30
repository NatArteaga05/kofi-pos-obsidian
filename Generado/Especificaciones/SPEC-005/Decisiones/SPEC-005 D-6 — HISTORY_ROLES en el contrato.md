---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-6 — HISTORY_ROLES en el contrato

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-1 — Acceso al Historial|RF-1]]

## Decisión

**`HISTORY_ROLES` en el contrato** (`['owner']`), usado por la API para rechazar con `403` todas las rutas del módulo y por [[routes.tsx (web)|routes.tsx]] como `roles` de las tres rutas del Historial, para no mostrar «Historial de ventas» al cajero

## Por qué

Respuesta de la persona a la duda 1 de `spec.md`: solo el dueño usa el Historial. Si algún día se da al cajero, cambia esta lista (y, si solo ve una parte, el servicio filtra esa parte), sin tocar el resto. Una sola lista para la API y la interfaz, como `DASHBOARD_MONTH_ROLES` ([[SPEC-004 Dashboard|SPEC-004]] [[SPEC-004 D-6 — DASHBOARD_MONTH_ROLES en el contrato|D-6]]). Los permisos reales los aplica la API (`docs/architecture.md` §6.6)

## Alternativa descartada

Escribir `['owner']` en la interfaz y en la API por separado: dos lugares que pueden quedar distintos

## Tareas que la aplican

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T008|T008]]
- ✅ [[SPEC-005 T011|T011]]
