---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-5 — formatDate y formatMonth en el contrato

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-2 — Ventas de hoy|RF-2]], [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]], [[SPEC-004 RF-10 — Ventas por día|RF-10]]

## Decisión

**`formatDate` y `formatMonth` en el contrato**, junto a `formatDateTime`: reordenan el texto `YYYY-MM-DD` («24/10/2026») y nombran el mes («Octubre de 2026»), sin zona horaria

## Por qué

Las fechas y los meses ya llegan calculados en Bolivia por la API; formatear no es calcular. Una sola forma de mostrarlos para Dashboard e Historial, como `formatPrice` y `formatDateTime`

## Alternativa descartada

`Intl.DateTimeFormat` con `month: 'long'` en la interfaz: el texto depende del navegador («octubre de 2026», «oct. 2026»)

## Tareas que la aplican

- ✅ [[SPEC-004 T002|T002]]
