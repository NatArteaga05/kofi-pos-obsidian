---
tags:
  - historia
spec: "SPEC-005"
prioridad: "P3"
---

# SPEC-005 HU-3 — Consultar las cifras de un mes (P3)

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]]

Como **dueño**, quiero **elegir un mes y ver cuánto se vendió, cuánto en efectivo y cuánto con QR, y cuánto se vendió cada día** para **comparar la marcha del negocio entre meses y encontrar los días con más o menos ventas**.

> [!example] Prueba independiente
> con ventas registradas el 30/09/2026 a las 23:59 por Bs 12,50 en efectivo, el 01/10/2026 a las 08:00 por Bs 8,00 en efectivo, el 15/10/2026 a las 16:20 por Bs 25,00 con QR y el 01/11/2026 a las 00:00 por Bs 10,00 con QR, el 05/11/2026 una sesión de dueño abre «Historial de ventas», elige «Ver por mes» y ve «Noviembre de 2026» con «Bs 10,00 · 1 venta» y una fila por día del 01/11/2026 al 05/11/2026. Elige «Mes anterior» y ve «Octubre de 2026»: total vendido «Bs 33,00», «2 ventas», «Efectivo: Bs 8,00 · 1 venta», «QR: Bs 25,00 · 1 venta» y una fila por cada día del 01/10/2026 al 31/10/2026, con «01/10/2026 · Bs 8,00 · 1 venta», «15/10/2026 · Bs 25,00 · 1 venta» y los demás días con «Bs 0,00 · 0 ventas». La venta del 30/09 no cuenta en octubre. «Mes siguiente» no se puede elegir estando en noviembre de 2026. La prueba no usa la lista de ventas de un día: «Ver por mes» está en la pantalla que abre «Historial de ventas» ([[SPEC-005 RF-1 — Acceso al Historial|RF-1]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]]).

## Requisitos

- [[SPEC-005 RF-11 — Elegir el mes]]
- [[SPEC-005 RF-12 — Cifras de un mes]]
- [[SPEC-005 RF-13 — Ventas por día de un mes]]

## Tareas (4/4)

- ✅ [[SPEC-005 T023|T023]]
- ✅ [[SPEC-005 T024|T024]]
- ✅ [[SPEC-005 T025|T025]]
- ✅ [[SPEC-005 T026|T026]]

## Pruebas de punta a punta

- [[history-us3-cifras-mes.spec.ts (e2e)]]
