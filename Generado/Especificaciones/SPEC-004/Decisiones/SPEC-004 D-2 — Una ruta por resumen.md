---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-2 — Una ruta por resumen

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-2 — Ventas de hoy|RF-2]], [[SPEC-004 RF-6 — Momento de los datos y actualización|RF-6]], [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]]

## Decisión

**Una ruta por resumen:** [[GET ∕api∕dashboard∕today|GET /api/dashboard/today]] (US1) y [[GET ∕api∕dashboard∕month|GET /api/dashboard/month]] (US2), cada una con su `asOf`

## Por qué

Cada historia se integra y se prueba completa sin la otra, y el contrato de las dos se escribe entero en la Base común sin que US1 tenga que calcular el mes. La interfaz las pide en paralelo

## Alternativa descartada

Una sola ruta con hoy y el mes: US1 tendría que entregar también el mes, o el contrato cambiaría en US2

## Tareas que la aplican

_Ninguno._
