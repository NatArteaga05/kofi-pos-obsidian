---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-13 — API ejecutada con TypeScript nativo de Node 24

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: —

## Decisión

**API ejecutada con TypeScript nativo de Node 24** en desarrollo (`node --watch --env-file-if-exists=.env src/server.ts`, con `erasableSyntaxOnly`) y compilada con `tsc` para producción

## Por qué

Sin dependencias para ejecutar TypeScript. `erasableSyntaxOnly` hace que `tsc` rechace lo que Node no puede quitar (por ejemplo, `enum`)

## Alternativa descartada

`tsx`: otra dependencia para algo que Node 24 ya hace

## Tareas que la aplican

- ✅ [[SPEC-001 T003|T003]]
