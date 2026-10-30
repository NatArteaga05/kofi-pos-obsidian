---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-3 — La API calcula todo el resumen en memoria

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-3 — Totales de un resumen|RF-3]], [[SPEC-004 RF-4 — Por medio de pago|RF-4]], [[SPEC-004 RF-5 — Productos más vendidos|RF-5]], [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron|RF-8]], [[SPEC-004 RF-10 — Ventas por día|RF-10]], [[SPEC-004 RNF-2 — Cifras exactas|RNF-2]], [[SPEC-004 RNF-3 — Rapidez|RNF-3]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**La API calcula todo el resumen en memoria** a partir de `listRegisteredSales` del período: sumas, promedio, medios de pago, productos y días ([[dashboard.summary.ts (api dashboard)|dashboard.summary.ts]], funciones puras)

## Por qué

Cumple el principio 3 y la frontera entre módulos con lo que Ventas ya entrega. Con hasta 6000 ventas al mes ([[SPEC-004 RNF-3 — Rapidez|RNF-3]]) son unas decenas de miles de líneas, que se suman en milisegundos; el costo está en leerlas, y se mide en Pulido ([[SPEC-004 D-11 — Medición de RNF-3|D-11]]). Las funciones puras se prueban sin base

## Alternativa descartada

Agregar con SQL (`SUM`, `GROUP BY`) en una función nueva de `sales`: más rápido con muchos datos, pero cambia el módulo de 003 y reparte la regla del resumen entre dos módulos. Queda como plan B si la medición de Pulido no cumple [[SPEC-004 RNF-3 — Rapidez|RNF-3]]

## Tareas que la aplican

_Ninguno._
