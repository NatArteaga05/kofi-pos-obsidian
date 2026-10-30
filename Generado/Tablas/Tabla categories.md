---
tags:
  - tabla
---

# Tabla categories

Migración [002_menu.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/002_menu.sql) · [[Base de datos]]

## Columnas

- `id uuid PRIMARY`
- `name text NOT`
- `name_key text NOT`
- `active boolean NOT`
- `created_at timestamptz NOT`
- `updated_at timestamptz NOT`

## Relaciones

- [[Tabla products]] la referencia

## Archivos que la usan

- [[categories.repository.ts (api menu)]]
- [[official-menu.service.ts (api menu)]]
- [[products.repository.ts (api menu)]]
