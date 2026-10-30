---
tags:
  - tabla
---

# Tabla failed_logins

Migración [001_auth.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/001_auth.sql) · [[Base de datos]]

## Columnas

- `id bigint GENERATED`
- `user_id uuid NOT`
- `attempted_at timestamptz NOT`

## Relaciones

- `user_id` → [[Tabla users]]

## Archivos que la usan

- [[users.repository.ts (api auth)]]
