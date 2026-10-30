---
tags:
  - historia
spec: "SPEC-005"
prioridad: "P1"
---

# SPEC-005 HU-1 — Consultar las ventas de un día (P1)

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]]

Como **dueño**, quiero **elegir un día y ver todas sus ventas, una por una, con cuánto se vendió en total, cuánto en efectivo y cuánto con QR** para **controlar la caja de días pasados y encontrar una venta concreta por su hora, su medio de pago o su importe**.

> [!example] Prueba independiente
> con estas ventas registradas: N.º 1 el 23/10/2026 a las 23:50, «Café americano × 1», Bs 12,50 en efectivo, por «Ana Quispe» (cajero); N.º 2 el 24/10/2026 a las 09:15, «Café americano × 2», Bs 25,00 en efectivo, por «Ana Quispe» (cajero); y N.º 3 el 24/10/2026 a las 10:30, «Empanada × 1» y «Café americano × 1», Bs 20,50 con QR, por «Luis Mamani» (dueño). El 25/10/2026 a las 11:00, una sesión de dueño abre «Historial de ventas» y ve «Ventas del 25/10/2026» con «No hay ventas registradas este día». Elige «Día anterior» y ve «Ventas del 24/10/2026»: total vendido «Bs 45,50», «2 ventas», «Efectivo: Bs 25,00 · 1 venta», «QR: Bs 20,50 · 1 venta», «Datos al 25/10/2026 11:00» y, de la más reciente a la más antigua, «N.º 3 · 10:30 · Luis Mamani · Dueño · QR · Bs 20,50» y «N.º 2 · 09:15 · Ana Quispe · Cajero · Efectivo · Bs 25,00». La venta N.º 1 no aparece. Al elegir la fecha 23/10/2026 ve solo la N.º 1. «Día siguiente» no se puede elegir estando en el 25/10/2026. Una sesión de cajero no ve la opción «Historial de ventas».

## Requisitos

- [[SPEC-005 RF-1 — Acceso al Historial]]
- [[SPEC-005 RF-2 — Elegir el día]]
- [[SPEC-005 RF-3 — Ventas de un día]]
- [[SPEC-005 RF-4 — Cifras de un día]]
- [[SPEC-005 RF-5 — Momento de los datos y actualización]]
- [[SPEC-005 RF-6 — Sin conexión o con error]]
- [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron]]

## Tareas (10/10)

- ✅ [[SPEC-005 T009|T009]]
- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T011|T011]]
- ✅ [[SPEC-005 T012|T012]]
- ✅ [[SPEC-005 T013|T013]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T015|T015]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T030|T030]]
- ✅ [[SPEC-005 T031|T031]]

## Pruebas de punta a punta

- [[history-us1-ventas-dia.spec.ts (e2e)]]
