---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-1 — El menú vigente llega a Ventas como una función inyectada

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-2 — Productos para vender|RF-2]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]], [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]]

## Decisión

**El menú vigente llega a Ventas como una función inyectada:** `salesPlugin` y el servicio reciben `currentMenu: (db: Database) => Promise<CurrentMenu>`, donde `CurrentMenu` es `CurrentMenuResponse['categories']` del contrato, y [[app.ts (api)|app.ts]] les pasa `getCurrentMenu` de `modules/menu/index.ts` ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 RF-15 — Menú vigente para otros módulos|RF-15]], [[SPEC-003 T016|T016]]), que [[SPEC-002 Menú|SPEC-002]] fija como `getCurrentMenu(db)`. Si su tipo de retorno difiere, [[SPEC-003 T020|T020]] lo adapta en [[app.ts (api)|app.ts]]. Las pruebas pasan una función falsa con un menú fijo

## Por qué

`getCurrentMenu` es de la historia 1 de Menú y aún no está en `develop`; así la Base común y la API de las historias se prueban sin ella, y `sales` no conoce cómo guarda el menú sus datos (`docs/architecture.md` §4.2)

## Alternativa descartada

Leer `products` y `categories` desde `sales`: duplicaría la regla del menú vigente y rompería la frontera entre módulos. Esperar a 002 US1 para empezar la Base común: frena 003 sin motivo

## Tareas que la aplican

- ✅ [[SPEC-003 T013|T013]]
- ✅ [[SPEC-003 T020|T020]]
