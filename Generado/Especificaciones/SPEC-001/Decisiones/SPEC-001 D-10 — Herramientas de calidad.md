---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-10 — Herramientas de calidad

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: —

## Decisión

**Herramientas de calidad:** Vitest (pruebas unitarias, de integración y de componentes, con `jsdom`, `@testing-library/react` y `@testing-library/user-event`); Playwright con Chromium para E2E; ESLint con `typescript-eslint` y `eslint-plugin-react-hooks`; Prettier

## Por qué

Vitest usa la misma configuración que Vite y entiende TypeScript directamente. Playwright permite simular la falta de conexión ([[SPEC-001 RF-14 — Sin conexión al ingresar|RF-14]]) y reutilizar una sesión entre pestañas ([[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]]). La regla nativa `no-restricted-imports` de ESLint cubre «ninguna aplicación importa de otra» sin otro plugin

## Alternativa descartada

Jest: necesita transformar TypeScript y ESM. Cypress: más pesado y no maneja varias pestañas. `eslint-plugin-import`: una dependencia más para lo que la regla nativa ya hace

## Tareas que la aplican

_Ninguno._
