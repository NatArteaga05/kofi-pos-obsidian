---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-8 — Detalle de una venta

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-2 — Ver el detalle de una venta|HU-2]]

- Cuando la persona elige una venta, el sistema deberá mostrar su detalle con el título «Venta N.º [número]»: su fecha y hora, «Registrada por [nombre] · [rol]», «Medio de pago: [medio]», todas sus líneas en el orden en que se registraron y su total, según «Datos de una venta en el Historial».
- Mientras se muestre el detalle de una venta, el sistema deberá ofrecer la opción «Volver», que lleva a la lista de ventas del día de esa venta.
- El sistema deberá obtener el detalle, actualizarlo y avisar sin conexión o con error como indican [[SPEC-005 RF-5 — Momento de los datos y actualización|RF-5]] y [[SPEC-005 RF-6 — Sin conexión o con error|RF-6]].

## Decisiones que lo resuelven

- [[SPEC-005 D-1 — Las ventas llegan al Historial como funciones…]]
- [[SPEC-005 D-2 — Una ruta por consulta]]
- [[SPEC-005 D-4 — shared∕calendar.ts crece con addDays, addMonths,…]]
- [[SPEC-005 D-5 — formatTime en datetime.ts]]
- [[SPEC-005 D-7 — Rutas ∕ventas (día, fecha=YYYY-MM-DD), ∕ventas∕mes…]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]
- [[SPEC-005 D-12 — La lista de un día viaja completa y sin líneas]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T002|T002]]
- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T005|T005]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T017|T017]]
- ✅ [[SPEC-005 T018|T018]]
- ✅ [[SPEC-005 T020|T020]]
- ✅ [[SPEC-005 T021|T021]]
- ✅ [[SPEC-005 T022|T022]]
- ✅ [[SPEC-005 T033|T033]]
- ✅ [[SPEC-005 T029|T029]]
