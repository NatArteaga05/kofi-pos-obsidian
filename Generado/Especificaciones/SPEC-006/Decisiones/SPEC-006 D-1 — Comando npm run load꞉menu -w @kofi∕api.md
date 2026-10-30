---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-1 — Comando npm run load:menu -w @kofi/api

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-2 — Carga en una base nueva|RF-2]]

## Decisión

**Comando `npm run load:menu -w @kofi/api`** (`node --env-file-if-exists=.env src/modules/menu/official-menu.cli.ts`), en `src/` del módulo `menu`

## Por qué

Se ejecuta contra la base oficial, así que es código del producto y no de pruebas ([[seed-menu.ts (api test)|test/seed-menu.ts]] solo carga datos de prueba). Sigue el patrón de `accounts` y `seed:sales`, y `tsc` lo compila con el resto de la API

## Alternativa descartada

Ruta HTTP o pantalla: la especificación deja fuera la carga desde la interfaz o con una sesión

## Tareas que la aplican

- ✅ [[SPEC-006 T004|T004]]
