---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-4 — Integridad en la base

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-6 — Registrar la venta|RF-6]], [[SPEC-003 RF-9 — Registro completo o nada|RF-9]], [[SPEC-003 RF-10 — Ventas desde varios navegadores|RF-10]], [[SPEC-003 RF-11 — Ventas registradas para otros módulos|RF-11]], [[SPEC-003 RNF-2 — Importes exactos|RNF-2]]

Principios: [[Principio 5 — Persistencia segura]]

## Decisión

**Integridad en la base:** `CHECK` de subtotal, disparador diferido que compara el total con la suma de las líneas, disparadores que impiden modificar o borrar ventas y líneas, y contador de una fila para el número

## Por qué

El principio 5 pide atomicidad y [[SPEC-003 RF-11 — Ventas registradas para otros módulos|RF-11]] que una venta registrada no cambie; la base lo garantiza aunque un error de programación lo intente. El contador bloqueado da números sin saltos ([[SPEC-003 RF-10 — Ventas desde varios navegadores|RF-10]]), que una secuencia de PostgreSQL no garantiza

## Alternativa descartada

Una `SEQUENCE`: deja huecos cuando una transacción falla. `max(number) + 1`: dos transacciones a la vez leen el mismo máximo

## Tareas que la aplican

- ✅ [[SPEC-003 T006|T006]]
- ✅ [[SPEC-003 T014|T014]]
