---
tags:
  - historia
spec: "SPEC-004"
prioridad: "P1"
---

# SPEC-004 HU-1 — Ver el resumen de hoy (P1)

Especificación: [[SPEC-004 Dashboard|SPEC-004]]

Como **persona que atiende el local (dueño o cajero)**, quiero **ver cuánto se vendió hoy, en cuántas ventas, cuánto se cobró en efectivo y cuánto con QR, y qué productos se vendieron más** para **controlar la caja al cerrar el día o el turno y saber cómo va la jornada sin hacer cuentas**.

> [!example] Prueba independiente
> con estas ventas registradas: el 23/10/2026 a las 23:50, «Café americano × 1» por Bs 12,50 en efectivo; el 24/10/2026 a las 09:15, «Café americano × 2» por Bs 25,00 en efectivo; y el 24/10/2026 a las 10:30, «Empanada × 1» y «Café americano × 1» por Bs 20,50 con QR. Ese mismo día a las 11:00, una sesión de dueño abre «Resumen de ventas» y ve en «Hoy · 24/10/2026»: total vendido «Bs 45,50», «2 ventas», venta promedio «Bs 22,75», «Efectivo: Bs 25,00 · 1 venta», «QR: Bs 20,50 · 1 venta», los productos más vendidos «Café americano · 3 unidades · Bs 37,50» y «Empanada · 1 unidad · Bs 8,00», y «Datos al 24/10/2026 11:00». La venta del 23/10 no cuenta. Si se registra otra venta y el dueño elige «Actualizar», el resumen la incluye. Una sesión de cajero también ve la opción «Resumen de ventas» y, en ella, el mismo resumen de hoy.

## Requisitos

- [[SPEC-004 RF-1 — Acceso al resumen]]
- [[SPEC-004 RF-2 — Ventas de hoy]]
- [[SPEC-004 RF-3 — Totales de un resumen]]
- [[SPEC-004 RF-4 — Por medio de pago]]
- [[SPEC-004 RF-5 — Productos más vendidos]]
- [[SPEC-004 RF-6 — Momento de los datos y actualización]]
- [[SPEC-004 RF-7 — Sin conexión o con error]]
- [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron]]

## Tareas (8/8)

- ✅ [[SPEC-004 T009|T009]]
- ✅ [[SPEC-004 T010|T010]]
- ✅ [[SPEC-004 T011|T011]]
- ✅ [[SPEC-004 T012|T012]]
- ✅ [[SPEC-004 T013|T013]]
- ✅ [[SPEC-004 T014|T014]]
- ✅ [[SPEC-004 T015|T015]]
- ✅ [[SPEC-004 T016|T016]]

## Pruebas de punta a punta

- [[dashboard-us1-resumen-hoy.spec.ts (e2e)]]
