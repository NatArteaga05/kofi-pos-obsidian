---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula entera

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-3 — Armar la venta en preparación|RF-3]], [[SPEC-003 RF-4 — Importes calculados por el sistema|RF-4]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]], [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**La interfaz envía la lista deseada y la API la calcula entera** cada vez (`quote`), sin guardar nada en la base hasta registrar

## Por qué

Cumple el principio 3 sin estado en el servidor: la API valida límites, calcula subtotales y total y detecta cambios de precio comparando con `unitPriceCents` mostrado. Con hasta 30 líneas y 200 productos, calcular todo es inmediato ([[SPEC-003 RNF-3 — Rapidez|RNF-3]])

## Alternativa descartada

Guardar la venta en preparación en la base y cambiarla línea a línea: tablas y rutas de más, y habría que borrarla al cerrar sesión desde el módulo `auth`

## Tareas que la aplican

_Ninguno._
