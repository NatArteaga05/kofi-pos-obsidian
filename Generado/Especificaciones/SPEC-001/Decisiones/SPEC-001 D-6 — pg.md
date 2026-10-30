---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-6 — pg

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: —

## Decisión

**`pg`** (node-postgres) con SQL escrito a mano y un ejecutor propio de migraciones en orden ([[migrate.ts (api shared database)|migrate.ts]] y la tabla `schema_migrations`)

## Por qué

El cliente de PostgreSQL más usado en Node, sin generador de código. Con el modelo de esta especificación (tres tablas) no hace falta un ORM

## Alternativa descartada

Prisma: motor binario y generador aparte. Drizzle o Kysely: otra capa que aprender para tres tablas. `node-pg-migrate`: una dependencia más para algo que son unas 40 líneas

## Tareas que la aplican

- ✅ [[SPEC-001 T010|T010]]
