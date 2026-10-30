---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-4 — menu/index.ts exporta OFFICIAL_MENU

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]], [[SPEC-007 RF-5 — Contenido de cada venta|RF-5]]

## Decisión

**`menu/index.ts` exporta `OFFICIAL_MENU`**, y la carga busca cada producto oficial con `menuNameKey` en `getAdminMenu`

## Por qué

Es la misma fuente que la carga del menú oficial, comprobada contra la tabla de [[SPEC-006 Menú inicial|SPEC-006]], y respeta que un módulo solo importe del `index.ts` de otro (§4.2 de la arquitectura)

## Alternativa descartada

Copiar la lista en `sales`: dos copias del menú oficial que pueden divergir

## Tareas que la aplican

- ✅ [[SPEC-007 T001|T001]]
- ✅ [[SPEC-007 T007|T007]]
