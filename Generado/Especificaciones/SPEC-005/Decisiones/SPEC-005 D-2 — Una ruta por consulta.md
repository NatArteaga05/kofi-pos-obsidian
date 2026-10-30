---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-2 — Una ruta por consulta

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**Una ruta por consulta:** [[GET ∕api∕history∕day|GET /api/history/day]] (US1), [[GET ∕api∕history∕sales∕{number}|GET /api/history/sales/:number]] (US2) y [[GET ∕api∕history∕month|GET /api/history/month]] (US3), con la fecha y el mes como parámetros de consulta opcionales

## Por qué

Cada historia se integra y se prueba sola, y el contrato completo se escribe en la Base común. Sin parámetro, la API decide hoy y el mes en curso ([[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]])

## Alternativa descartada

Una sola ruta con un rango libre `from`/`to`: la interfaz tendría que calcular los límites del día y del mes, que son reglas de la API (principio 3)

## Tareas que la aplican

_Ninguno._
