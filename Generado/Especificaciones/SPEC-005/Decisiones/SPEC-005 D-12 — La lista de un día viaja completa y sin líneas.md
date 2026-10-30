---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-12 — La lista de un día viaja completa y sin líneas

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-3 — Ventas de un día|RF-3]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]], [[SPEC-005 RNF-3 — Rapidez|RNF-3]]

## Decisión

**La lista de un día viaja completa y sin líneas** (`listedSaleSchema`), y el detalle se pide aparte

## Por qué

La lista muestra todas las ventas del día ([[SPEC-005 RF-3 — Ventas de un día|RF-3]], sin paginar) y no necesita las líneas; 400 ventas sin líneas son unas decenas de kilobytes. El detalle sale de una consulta por número, que sirve también a la búsqueda ([[SPEC-005 RF-9 — Buscar una venta por su número|RF-9]])

## Alternativa descartada

Enviar las ventas con sus líneas para abrir el detalle sin pedirlo: hasta 30 líneas por venta en cada carga del día. Paginar: la especificación pide la lista completa

## Tareas que la aplican

_Ninguno._
