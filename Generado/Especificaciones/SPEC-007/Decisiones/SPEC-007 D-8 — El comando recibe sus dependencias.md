---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-8 — El comando recibe sus dependencias

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-3 — Confirmación escrita|RF-3]], [[SPEC-007 RF-10 — Carga completa o nada|RF-10]]

## Decisión

**El comando recibe sus dependencias** (`env`, `createDatabase`, `ask`, `write`, `seed`) y solo imprime los mensajes de §5.6, nunca el error original

## Por qué

Se prueba sin base real ni proceso aparte, como `runAccounts` de [[accounts.cli.ts (api auth)|accounts.cli.ts]]. Los errores de `pg` y de `loadEnv` pueden incluir la dirección de la base

## Alternativa descartada

Imprimir `error.message`

## Tareas que la aplican

- ✅ [[SPEC-007 T009|T009]]
