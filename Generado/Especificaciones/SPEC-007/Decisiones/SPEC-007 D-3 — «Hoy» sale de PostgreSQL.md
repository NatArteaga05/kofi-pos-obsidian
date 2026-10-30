---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-3 — «Hoy» sale de PostgreSQL

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-1 — Ejecución de la carga|RF-1]], [[SPEC-007 RF-4 — Días y horas de las ventas|RF-4]]

## Decisión

**«Hoy» sale de PostgreSQL** (`SELECT now()`), una vez, en la inspección; las pruebas pasan `now`

## Por qué

[[SPEC-007 RF-1 — Ejecución de la carga|RF-1]] exige la hora del sistema donde se guardan las ventas, no la de la computadora que ejecuta el comando; [[clock.ts (api shared)|clock.ts]] del proceso sería la de la computadora. Usar el `now` de la inspección mantiene el período anunciado aunque pase la medianoche

## Alternativa descartada

`systemClock`: un reloj atrasado en la computadora cambiaría el período

## Tareas que la aplican

- ✅ [[SPEC-007 T007|T007]]
