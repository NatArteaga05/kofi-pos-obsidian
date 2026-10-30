---
tags:
  - tabla
---

# Tabla products

Migración [002_menu.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/002_menu.sql) · [[Base de datos]]

## Columnas

- `id uuid PRIMARY`
- `name text NOT`
- `name_key text NOT`
- `category_id uuid NOT`
- `price_cents integer NOT`
- `active boolean NOT`
- `created_at timestamptz NOT`
- `updated_at timestamptz NOT`

## Relaciones

- `category_id` → [[Tabla categories]]
- [[Tabla sale_lines]] la referencia

## Archivos que la usan

- [[categories.repository.ts (api menu)]]
- [[official-menu.service.ts (api menu)]]
- [[products.repository.ts (api menu)]]
