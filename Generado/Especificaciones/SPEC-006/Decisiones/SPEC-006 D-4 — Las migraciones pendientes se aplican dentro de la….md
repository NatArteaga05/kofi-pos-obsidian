---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-4 — Las migraciones pendientes se aplican dentro de la misma transacción que la carga

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-2 — Carga en una base nueva|RF-2]], [[SPEC-006 RF-4 — Carga completa o nada|RF-4]]

## Decisión

**Las migraciones pendientes se aplican dentro de la misma transacción que la carga**

## Por qué

Una base recién creada queda preparada ([[SPEC-006 RF-2 — Carga en una base nueva|RF-2]]) y, si algo falla o se cancela, queda exactamente como estaba, sin tablas a medias ([[SPEC-006 RF-4 — Carga completa o nada|RF-4]]). PostgreSQL permite DDL en transacciones, y `migrate` acepta el `batch` porque solo usa `exec`, `query` y `transaction`

## Alternativa descartada

Migrar antes en su propia transacción: un fallo posterior dejaría la base cambiada

## Tareas que la aplican

- ✅ [[SPEC-006 T002|T002]]
