---
tags:
  - tabla
---

# Tabla sessions

Migración [001_auth.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/001_auth.sql) · [[Base de datos]]

## Columnas

- `id uuid PRIMARY`
- `token_hash text NOT`
- `user_id uuid REFERENCES`
- `user_session_version integer NOT`
- `created_at timestamptz NOT`
- `expires_at timestamptz NOT`
- `revoked_at timestamptz`

## Relaciones

- `user_id` → [[Tabla users]]

## Archivos que la usan

- [[sessions.repository.ts (api auth)]]
