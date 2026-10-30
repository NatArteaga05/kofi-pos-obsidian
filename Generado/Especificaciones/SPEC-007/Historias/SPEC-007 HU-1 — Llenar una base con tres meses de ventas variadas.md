---
tags:
  - historia
spec: "SPEC-007"
prioridad: "P1"
---

# SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas (P1)

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]]

Como **persona que prepara el sistema**, quiero **cargar con una sola orden, en una base con el menú oficial y sin ventas, tres meses de ventas pasadas variadas armadas con ese menú** para **mostrar el Historial de ventas con días, meses y ventas parecidos a los de un local en marcha, sin registrar miles de ventas a mano**.

> [!example] Prueba independiente
> el 28/10/2026, sobre una base con el menú oficial cargado ([[SPEC-006 Menú inicial|SPEC-006]]), sin ventas y con una cuenta de dueño «Luis Mamani» y una de cajero «Ana Quispe», se ejecuta la carga: muestra cuántas ventas cargará, del 28/07/2026 al 27/10/2026, avisa que no se pueden borrar y pide escribir «CARGAR». Al escribir «CARGAR» termina con «Ventas de demostración cargadas: [n] ventas del 28/07/2026 al 27/10/2026». Con una sesión de dueño, «Historial de ventas» muestra hoy sin ventas; «Día anterior» muestra el 27/10/2026 con entre 30 y 80 ventas, todas entre las 07:30 y las 20:29, registradas por «Ana Quispe · Cajero» o «Luis Mamani · Dueño», en efectivo y con QR. El detalle de una venta muestra productos del menú oficial con su categoría y su precio. «Ver por mes» en septiembre de 2026 muestra 30 filas, la mayoría con ventas y alguna con «Bs 0,00 · 0 ventas». Al ejecutar la carga otra vez, se rechaza con el mensaje de base con ventas y nada cambia.

## Requisitos

- [[SPEC-007 RF-1 — Ejecución de la carga]]
- [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas]]
- [[SPEC-007 RF-3 — Confirmación escrita]]
- [[SPEC-007 RF-4 — Días y horas de las ventas]]
- [[SPEC-007 RF-5 — Contenido de cada venta]]
- [[SPEC-007 RF-6 — Medio de pago]]
- [[SPEC-007 RF-7 — Quién registró cada venta]]
- [[SPEC-007 RF-8 — Número y orden de las ventas]]
- [[SPEC-007 RF-9 — Ventas como cualquier otra]]
- [[SPEC-007 RF-10 — Carga completa o nada]]

## Tareas (8/8)

- ✅ [[SPEC-007 T003|T003]]
- ✅ [[SPEC-007 T004|T004]]
- ✅ [[SPEC-007 T005|T005]]
- ✅ [[SPEC-007 T006|T006]]
- ✅ [[SPEC-007 T007|T007]]
- ✅ [[SPEC-007 T008|T008]]
- ✅ [[SPEC-007 T009|T009]]
- ✅ [[SPEC-007 T010|T010]]

## Pruebas de punta a punta

- [[ventas-demo-us1-cargar.spec.ts (e2e)]]
