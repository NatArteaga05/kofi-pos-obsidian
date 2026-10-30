---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-3 — Confirmación escrita|RF-3]], [[SPEC-007 RF-4 — Días y horas de las ventas|RF-4]], [[SPEC-007 RF-5 — Contenido de cada venta|RF-5]], [[SPEC-007 RF-6 — Medio de pago|RF-6]], [[SPEC-007 RF-7 — Quién registró cada venta|RF-7]]

## Decisión

**Generador pseudoaleatorio propio con semilla** (`createRandom(seed, stream, attempt)`, mulberry32 sobre un hash de los tres datos), con flujos separados para el calendario y el contenido

## Por qué

La misma semilla da el mismo [n] en la inspección y en la carga, y las pruebas son repetibles. Separar los flujos hace que [n] no dependa de los precios ni de las cuentas, que pueden cambiar entre la pregunta y la carga

## Alternativa descartada

`Math.random()`: no se puede repetir ni probar; una dependencia como `seedrandom`: no hace falta para 20 líneas

## Tareas que la aplican

- ✅ [[SPEC-007 T002|T002]]
- ✅ [[SPEC-007 T003|T003]]
- ✅ [[SPEC-007 T006|T006]]
