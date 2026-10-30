---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-7 — @electric-sql/pglite

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: —

## Decisión

**`@electric-sql/pglite`** (devDependency de `apps/api`): PostgreSQL en memoria para las pruebas de integración y la API de E2E

## Por qué

Es PostgreSQL real (disparadores, `FOR UPDATE`, `gen_random_uuid`) sin instalar nada en Windows ni Docker. La interfaz `Database` tiene dos adaptadores: `pg` en producción y PGlite en pruebas

## Alternativa descartada

Testcontainers: exige Docker en las dos computadoras. Un PostgreSQL instalado para pruebas: cada persona tendría que instalarlo y configurarlo

## Tareas que la aplican

- ✅ [[SPEC-001 T010|T010]]
