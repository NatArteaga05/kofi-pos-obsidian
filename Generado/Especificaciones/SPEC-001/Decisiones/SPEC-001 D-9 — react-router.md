---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-9 — react-router

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-6 — Sesión por navegador|RF-6]], [[SPEC-001 RF-11 — Regreso tras el vencimiento|RF-11]]

## Decisión

**`react-router`** (modo biblioteca)

## Por qué

Rutas pública y protegida, redirecciones con estado (avisos de [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]] y [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]) y la ruta de regreso ([[SPEC-001 RF-11 — Regreso tras el vencimiento|RF-11]])

## Alternativa descartada

Un enrutador propio con `history`: hay que reimplementar casos que la biblioteca ya resuelve

## Tareas que la aplican

- ✅ [[SPEC-001 T019|T019]]
