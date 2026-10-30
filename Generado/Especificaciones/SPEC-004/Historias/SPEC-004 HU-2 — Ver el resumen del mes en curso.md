---
tags:
  - historia
spec: "SPEC-004"
prioridad: "P2"
---

# SPEC-004 HU-2 — Ver el resumen del mes en curso (P2)

Especificación: [[SPEC-004 Dashboard|SPEC-004]]

Como **dueño**, quiero **ver cuánto se vendió en lo que va del mes, cómo se reparte entre efectivo y QR, cuánto se vendió cada día y qué productos se vendieron más** para **seguir la marcha del negocio durante el mes**.

> [!example] Prueba independiente
> con ventas registradas el 30/09/2026 a las 23:59 por Bs 12,50, el 01/10/2026 a las 08:00 por Bs 8,00 en efectivo, el 15/10/2026 a las 16:20 por Bs 25,00 con QR y el 24/10/2026 a las 09:15 por Bs 12,50 en efectivo, el 24/10/2026 a las 11:00 una sesión de dueño abre «Resumen de ventas» y ve en «Octubre de 2026»: total vendido «Bs 45,50», «3 ventas», venta promedio «Bs 15,17», «Efectivo: Bs 20,50 · 2 ventas», «QR: Bs 25,00 · 1 venta», sus productos más vendidos y las ventas por día del 01/10/2026 al 24/10/2026: el 01/10 con «Bs 8,00 · 1 venta», el 15/10 con «Bs 25,00 · 1 venta», el 24/10 con «Bs 12,50 · 1 venta» y los demás días con «Bs 0,00 · 0 ventas». La venta del 30/09 no cuenta. Una sesión de cajero no ve el resumen del mes en «Resumen de ventas», y si lo pide por otra vía recibe «No tienes permiso para ver el resumen del mes», sin cifras.

## Requisitos

- [[SPEC-004 RF-9 — Ventas del mes en curso]]
- [[SPEC-004 RF-10 — Ventas por día]]

## Tareas (5/5)

- ✅ [[SPEC-004 T017|T017]]
- ✅ [[SPEC-004 T018|T018]]
- ✅ [[SPEC-004 T019|T019]]
- ✅ [[SPEC-004 T020|T020]]
- ✅ [[SPEC-004 T034|T034]]

## Pruebas de punta a punta

- [[dashboard-us2-resumen-mes.spec.ts (e2e)]]
