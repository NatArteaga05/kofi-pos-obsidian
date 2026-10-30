---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-9 — Buscar una venta por su número

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-2 — Ver el detalle de una venta|HU-2]]

- El sistema deberá ofrecer en todas las pantallas del Historial (las ventas de un día, el detalle de una venta y las cifras de un mes) el campo «Buscar venta por número» con la opción «Buscar».
- Cuando la persona busca el número de una venta registrada, el sistema deberá mostrar su detalle ([[SPEC-005 RF-8 — Detalle de una venta|RF-8]]), sin tener en cuenta los espacios alrededor ni los ceros a la izquierda («007» es la venta N.º 7).
- Si no existe ninguna venta registrada con ese número, por grande que sea, entonces el sistema deberá mostrar «No existe la venta N.º [número]».
- Si lo escrito no es un número entero mayor que cero, entonces el sistema deberá mostrar «Escribe un número de venta válido» y no buscar.

## Decisiones que lo resuelven

- [[SPEC-005 D-1 — Las ventas llegan al Historial como funciones…]]
- [[SPEC-005 D-8 — parseSaleNumber en el contrato]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T017|T017]]
- ✅ [[SPEC-005 T018|T018]]
- ✅ [[SPEC-005 T019|T019]]
- ✅ [[SPEC-005 T020|T020]]
- ✅ [[SPEC-005 T022|T022]]
- ✅ [[SPEC-005 T032|T032]]
- ✅ [[SPEC-005 T029|T029]]
