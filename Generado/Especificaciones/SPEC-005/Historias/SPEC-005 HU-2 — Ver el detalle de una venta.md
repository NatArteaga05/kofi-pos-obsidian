---
tags:
  - historia
spec: "SPEC-005"
prioridad: "P2"
---

# SPEC-005 HU-2 — Ver el detalle de una venta (P2)

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]]

Como **dueño**, quiero **abrir una venta y ver todo lo que tuvo: sus productos, cantidades y precios, su total, cómo se pagó, quién la registró y cuándo**, ya sea **desde la lista de un día o escribiendo su número**, para **aclarar una duda sobre una venta concreta**.

> [!example] Prueba independiente
> con la venta N.º 3 del ejemplo de HU-1, registrada cuando «Café americano» costaba Bs 12,50, y con ese precio cambiado después a Bs 13,00, una sesión de dueño abre «Historial de ventas», escribe «3» en «Buscar venta por número» y elige «Buscar»: ve «Venta N.º 3», «24/10/2026 10:30», «Registrada por Luis Mamani · Dueño», «Medio de pago: QR», las líneas «Empanada · Salados · Bs 8,00 × 1 · Bs 8,00» y «Café americano · Bebidas calientes · Bs 12,50 × 1 · Bs 12,50», en ese orden, y el total «Bs 20,50». Al buscar «99» ve «No existe la venta N.º 99». La prueba no usa la lista de ventas de un día: la búsqueda está en la pantalla que abre «Historial de ventas» ([[SPEC-005 RF-1 — Acceso al Historial|RF-1]], [[SPEC-005 RF-9 — Buscar una venta por su número|RF-9]]). Con HU-1, elegir la venta en la lista de un día abre ese mismo detalle, y «Volver» regresa a la lista de su día.

## Requisitos

- [[SPEC-005 RF-8 — Detalle de una venta]]
- [[SPEC-005 RF-9 — Buscar una venta por su número]]
- [[SPEC-005 RF-10 — Abrir el detalle desde la lista de un día]]

## Tareas (8/8)

- ✅ [[SPEC-005 T017|T017]]
- ✅ [[SPEC-005 T018|T018]]
- ✅ [[SPEC-005 T019|T019]]
- ✅ [[SPEC-005 T020|T020]]
- ✅ [[SPEC-005 T021|T021]]
- ✅ [[SPEC-005 T022|T022]]
- ✅ [[SPEC-005 T032|T032]]
- ✅ [[SPEC-005 T033|T033]]

## Pruebas de punta a punta

- [[history-us2-detalle-venta.spec.ts (e2e)]]
