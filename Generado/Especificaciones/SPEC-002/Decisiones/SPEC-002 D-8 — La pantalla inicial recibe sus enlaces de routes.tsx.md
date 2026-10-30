---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-8 — La pantalla inicial recibe sus enlaces de routes.tsx

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-1 — Acceso a la administración del menú|RF-1]], [[SPEC-002 RF-13 — Acceso a la consulta|RF-13]]

## Decisión

**La pantalla inicial recibe sus enlaces de [[routes.tsx (web)|routes.tsx]]:** cada ruta protegida puede declarar `homeLink` (su texto) y `HomePage` muestra los que su rol puede ver. También muestra un aviso que llegue en `location.state.notice`

## Por qué

`auth` no conoce los módulos siguientes: Ventas y Reportes añadirán sus enlaces sin tocar `HomePage`. La lista `roles` ya existe (`docs/architecture.md` §6.6)

## Alternativa descartada

Escribir los enlaces dentro de `HomePage`: cada módulo tendría que modificar `auth`. Moverla a `shared/`, como preveía el plan de [[SPEC-001 Acceso|SPEC-001]]: `shared/` dependería del módulo `auth`

## Tareas que la aplican

- ✅ [[SPEC-002 T013|T013]]
- ✅ [[SPEC-002 T018|T018]]
