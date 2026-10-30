---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-7 — Rutas /ventas (día, ?fecha=YYYY-MM-DD), /ventas/mes (?mes=YYYY-MM) y /ventas/:numero (detalle)

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-1 — Acceso al Historial|RF-1]], [[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-5 — Momento de los datos y actualización|RF-5]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]], [[SPEC-005 RNF-4 — Uso con teclado|RNF-4]]

## Decisión

**Rutas `/ventas` (día, `?fecha=YYYY-MM-DD`), `/ventas/mes` (`?mes=YYYY-MM`) y `/ventas/:numero` (detalle)**, con `homeLink: 'Historial de ventas'` solo en `/ventas` y `roles: HISTORY_ROLES` en las tres. La consulta vive en la URL; los campos son `<input type="date">` y `<input type="month">` con `max` de la API

## Por qué

`/ventas` quedó reservada para el Historial ([[SPEC-003 Ventas|SPEC-003]] [[SPEC-003 D-11 — Ruta ∕ventas∕nueva|D-11]]). Con la consulta en la URL, recargar y volver atrás conservan lo consultado ([[SPEC-005 RF-5 — Momento de los datos y actualización|RF-5]]) y cada consulta se puede abrir directamente en las pruebas. `react-router` prefiere las rutas fijas (`/ventas/nueva`, `/ventas/mes`) a `/ventas/:numero`. Los campos nativos no traen dependencias y se usan con teclado ([[SPEC-005 RNF-4 — Uso con teclado|RNF-4]])

## Alternativa descartada

Guardar el día o la venta solo en el estado de la página: se pierde al recargar. Un selector de fechas propio o de una biblioteca: más código o una dependencia nueva

## Tareas que la aplican

- ✅ [[SPEC-005 T008|T008]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T025|T025]]
