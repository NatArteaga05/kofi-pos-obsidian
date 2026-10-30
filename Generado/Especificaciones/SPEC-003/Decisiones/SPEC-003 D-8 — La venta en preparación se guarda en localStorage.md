---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-8 — La venta en preparación se guarda en localStorage

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-10 — Ventas desde varios navegadores|RF-10]], [[SPEC-003 RF-12 — Conservar la venta en preparación|RF-12]], [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión|RF-13]]

## Decisión

**La venta en preparación se guarda en `localStorage`** (`kofi:sales:draft`), con la cuenta (`userId`), el `draftId` y las líneas tal como se mostraron, sin totales; las pestañas se sincronizan con el evento `storage`

## Por qué

Conserva la venta al recargar, al cerrar el navegador y al vencer la sesión ([[SPEC-003 RF-12 — Conservar la venta en preparación|RF-12]], [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión|RF-13]]), es independiente por navegador ([[SPEC-003 RF-10 — Ventas desde varios navegadores|RF-10]]) y compartida entre sus pestañas. No guarda nada oficial: al recuperarla, la API vuelve a calcularla

## Alternativa descartada

`sessionStorage`: se pierde al cerrar la pestaña y no se comparte entre pestañas. Guardarla en la base por cuenta: la compartirían dos navegadores de la misma cuenta, contra [[SPEC-003 RF-10 — Ventas desde varios navegadores|RF-10]]

## Tareas que la aplican

- ✅ [[SPEC-003 T022|T022]]
