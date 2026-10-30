---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-1 — Acceso al Historial|RF-1]], [[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-3 — Ventas de un día|RF-3]], [[SPEC-005 RF-4 — Cifras de un día|RF-4]], [[SPEC-005 RF-5 — Momento de los datos y actualización|RF-5]], [[SPEC-005 RF-6 — Sin conexión o con error|RF-6]], [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron|RF-7]], [[SPEC-005 RF-8 — Detalle de una venta|RF-8]], [[SPEC-005 RF-9 — Buscar una venta por su número|RF-9]], [[SPEC-005 RF-10 — Abrir el detalle desde la lista de un día|RF-10]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]], [[SPEC-005 RF-12 — Cifras de un mes|RF-12]], [[SPEC-005 RF-13 — Ventas por día de un mes|RF-13]]

## Decisión

**`HistoryClientProvider` y escenarios de desarrollo:** como en [[SPEC-002 Menú|SPEC-002]] a [[SPEC-004 Dashboard|SPEC-004]], la interfaz obtiene el cliente de un contexto; [[main.tsx (web)|main.tsx]] provee el real, también en desarrollo, y el simulado con su selector solo con `?escenarios=historial`, combinable (`?escenarios=acceso,historial`). El cliente simulado devuelve **cifras fijas ya calculadas** de `fixtures.ts` (ventas de los días 23, 24 y 25/10/2026, con hoy el 25, y de septiembre y octubre de 2026), validadas con el contrato, con `asOf` de cada pedido; para un día o un mes sin datos en los fixtures responde vacío, y calcula su navegación (día o mes anterior y siguiente) con una función de `dev/` que nunca llega al build. Sus escenarios son «Con ventas», «Sin ventas», «Sin conexión», «Con error» (`500 INTERNAL_ERROR`), «Sin permiso» (`403 FORBIDDEN` con `HISTORY_MESSAGES.forbidden` en todas las operaciones) y «Lento» (responde a los 1,5 s); en todos, una fecha o un mes futuros responden su `400`, y un número sin venta, su `404`

## Por qué

Permite trabajar la interfaz sin la API (`docs/architecture.md` §4.5) y recorrer todos los estados de [[SPEC-005 RF-1 — Acceso al Historial|RF-1]] a [[SPEC-005 RF-13 — Ventas por día de un mes|RF-13]]. Las cifras oficiales no se calculan en `dev/`: son fijas. La navegación del cliente simulado solo existe para poder moverse por días en desarrollo

## Alternativa descartada

Calcular las cifras en el cliente simulado a partir de ventas falsas: duplicaría la lógica de la API. Un fixture por cada día posible: imposible sin calcular

## Tareas que la aplican

- ✅ [[SPEC-005 T006|T006]]
- ✅ [[SPEC-005 T007|T007]]
