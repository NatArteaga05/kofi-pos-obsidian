---
tags:
  - tabla
---

# Tabla sales

Migración [003_sales.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/003_sales.sql) · [[Base de datos]]

## Columnas

- `id uuid PRIMARY`
- `number integer NOT`
- `draft_id uuid NOT`
- `registered_at timestamptz NOT`
- `registered_by_user_id uuid REFERENCES`
- `registered_by_name text NOT`
- `registered_by_role text NOT`
- `total_cents integer NOT`
- `payment_method text NOT`

## Relaciones

- `registered_by_user_id` → [[Tabla users]]
- [[Tabla sale_lines]] la referencia

## Archivos que la usan

- [[demo-sales.service.ts (api sales)]]
- [[sales.repository.ts (api sales)]]
