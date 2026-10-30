---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-14 — packages/contracts se compila antes

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: —

## Decisión

**`packages/contracts` se compila antes** que las aplicaciones: los scripts `typecheck`, `test` y `build` de la raíz lo compilan primero, y `npm run dev -w @kofi/contracts` lo recompila en desarrollo

## Por qué

Es lo que fija `docs/architecture.md` §4.4

## Alternativa descartada

Que cada aplicación importe el código fuente del contrato: cada una tendría que configurar su propia forma de resolverlo

## Tareas que la aplican

- ✅ [[SPEC-001 T002|T002]]
