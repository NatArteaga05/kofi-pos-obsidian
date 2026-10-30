---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-1 — Acceso al resumen|RF-1]], [[SPEC-004 RF-2 — Ventas de hoy|RF-2]], [[SPEC-004 RF-3 — Totales de un resumen|RF-3]], [[SPEC-004 RF-4 — Por medio de pago|RF-4]], [[SPEC-004 RF-5 — Productos más vendidos|RF-5]], [[SPEC-004 RF-6 — Momento de los datos y actualización|RF-6]], [[SPEC-004 RF-7 — Sin conexión o con error|RF-7]], [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron|RF-8]], [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]], [[SPEC-004 RF-10 — Ventas por día|RF-10]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**`DashboardClientProvider` y escenarios de desarrollo:** como en [[SPEC-002 Menú|SPEC-002]] ([[SPEC-002 D-10 — MenuClientProvider|D-10]], [[SPEC-002 D-11 — Escenarios de desarrollo del menú|D-11]]) y [[SPEC-003 Ventas|SPEC-003]] ([[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo|D-10]]), la interfaz obtiene el cliente de un contexto; [[main.tsx (web)|main.tsx]] provee el real, también en desarrollo, y el simulado con su selector solo con `?escenarios=dashboard`, combinable (`?escenarios=acceso,dashboard`). El cliente simulado devuelve **resúmenes fijos ya calculados** (`fixtures.ts`), validados con el contrato, y pone en `asOf` la hora de cada pedido; escenarios «Con ventas», «Sin ventas», «Sin conexión», «Con error» (`500 INTERNAL_ERROR` con «Ocurrió un error. Inténtalo de nuevo», como la API), «Sin permiso» (`403 FORBIDDEN` con `forbiddenMonth` solo en el mes) y «Lento» (responde a los 1,5 s, para ver «Cargando…»)

## Por qué

Permite trabajar la interfaz sin la API (`docs/architecture.md` §4.5) y recorrer todos los estados de [[SPEC-004 RF-1 — Acceso al resumen|RF-1]], [[SPEC-004 RF-5 — Productos más vendidos|RF-5]] a [[SPEC-004 RF-7 — Sin conexión o con error|RF-7]]. Sin cuentas en la interfaz, ni siquiera en `dev/` (principio 3)

## Alternativa descartada

Calcular los resúmenes en el cliente simulado a partir de ventas falsas: duplicaría la lógica de la API

## Tareas que la aplican

- ✅ [[SPEC-004 T006|T006]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T024|T024]]
- ✅ [[SPEC-004 T027|T027]]
