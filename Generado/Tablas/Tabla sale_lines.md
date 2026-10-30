---
tags:
  - tabla
---

# Tabla sale_lines

Migración [003_sales.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/003_sales.sql) · [[Base de datos]]

## Columnas

- `sale_id uuid NOT`
- `position smallint NOT`
- `product_id uuid NOT`
- `product_name text NOT`
- `category_name text NOT`
- `unit_price_cents integer NOT`
- `quantity integer NOT`
- `subtotal_cents integer NOT`

## Relaciones

- `sale_id` → [[Tabla sales]]
- `product_id` → [[Tabla products]]

## Archivos que la usan

- [[sales.repository.ts (api sales)]]
