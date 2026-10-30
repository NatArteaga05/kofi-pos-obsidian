---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-7 — El comando recibe sus dependencias

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-2 — Carga en una base nueva|RF-2]], [[SPEC-006 RF-3 — Solo en una base sin menú|RF-3]], [[SPEC-006 RF-4 — Carga completa o nada|RF-4]]

## Decisión

**El comando recibe sus dependencias** (`env`, `createDatabase`, `write`) y solo imprime los tres mensajes de §5.2, nunca el error original

## Por qué

Se prueba sin base real ni proceso aparte, como `runAccounts`. Los errores de `pg` y de `loadEnv` pueden incluir la dirección de la base

## Alternativa descartada

Imprimir `error.message`: podría mostrar la dirección o el usuario de la base

## Tareas que la aplican

- ✅ [[SPEC-006 T004|T004]]
