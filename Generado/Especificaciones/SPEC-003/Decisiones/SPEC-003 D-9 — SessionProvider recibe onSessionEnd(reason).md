---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-9 — SessionProvider recibe onSessionEnd(reason)

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión|RF-13]]

## Decisión

**`SessionProvider` recibe `onSessionEnd(reason)`** desde [[routes.tsx (web)|routes.tsx]] y lo llama al cerrar sesión (`'logout'`) y ante `SESSION_TERMINATED` (`'terminated'`), no al vencer; [[routes.tsx (web)|routes.tsx]] le pasa `discardStoredSaleDraft` de `modules/sales/index.ts`

## Por qué

`auth` no conoce a `sales`, y otros módulos podrán añadir lo suyo en [[routes.tsx (web)|routes.tsx]] sin tocar `auth`, como con `homeLink` ([[SPEC-002 Menú|SPEC-002]] [[SPEC-002 D-8 — La pantalla inicial recibe sus enlaces de routes.tsx|D-8]])

## Alternativa descartada

Que `sales` detecte el cierre leyendo la sesión: no distingue un cierre de un vencimiento. Un registro global en `shared/`: efectos al importar un módulo, difíciles de probar

## Tareas que la aplican

- ✅ [[SPEC-003 T023|T023]]
