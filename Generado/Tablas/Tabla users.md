---
tags:
  - tabla
---

# Tabla users

Migración [001_auth.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/001_auth.sql) · [[Base de datos]]

## Columnas

- `id uuid PRIMARY`
- `username text NOT`
- `display_name text NOT`
- `role text NOT`
- `password_hash text NOT`
- `session_version integer NOT`
- `locked_until timestamptz`
- `created_at timestamptz NOT`
- `updated_at timestamptz NOT`

## Relaciones

- [[Tabla failed_logins]] la referencia
- [[Tabla sessions]] la referencia
- [[Tabla sales]] la referencia

## Archivos que la usan

- [[sessions.repository.ts (api auth)]]
- [[users.repository.ts (api auth)]]
