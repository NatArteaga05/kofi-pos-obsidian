---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-5 — Dos bloqueos al empezar

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-3 — Solo en una base sin menú|RF-3]]

## Decisión

**Dos bloqueos al empezar:** `pg_advisory_xact_lock` antes de migrar y `LOCK TABLE categories, products IN SHARE ROW EXCLUSIVE MODE` antes de comprobar

## Por qué

El primero ordena dos cargas simultáneas aun antes de que existan las tablas; la segunda ve el menú de la primera y se rechaza con el mensaje de [[SPEC-006 RF-3 — Solo en una base sin menú|RF-3]]. El segundo impide que el dueño cree algo entre la comprobación y la carga, sin bloquear lecturas. PGlite admite los dos (comprobado al planificar), pero ejecuta las transacciones de una en una: por eso una prueba comprueba el orden de las sentencias y Pulido lanza dos cargas a la vez contra PostgreSQL real (§8.3)

## Alternativa descartada

Comprobar sin bloqueo: la segunda carga fallaría por nombre repetido con el mensaje genérico de [[SPEC-006 RF-4 — Carga completa o nada|RF-4]]

## Tareas que la aplican

- ✅ [[SPEC-006 T002|T002]]
- ✅ [[SPEC-006 T003|T003]]
- ✅ [[SPEC-006 T007|T007]]
