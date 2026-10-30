---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-2 — Elegir el día

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1]]

- El sistema deberá mostrar las ventas de un día con el título «Ventas del [fecha]» y ofrecer las opciones «Día anterior», «Día siguiente» y un campo para elegir una fecha cualquiera, que no ofrece días posteriores a hoy.
- Cuando la persona elige «Día anterior», «Día siguiente» u otra fecha, el sistema deberá mostrar las ventas y las cifras de ese día.
- Mientras se muestre el día que era hoy cuando el sistema obtuvo los datos, el sistema deberá no permitir elegir «Día siguiente»; tras la medianoche, lo permite después de «Actualizar» ([[SPEC-005 RF-5 — Momento de los datos y actualización|RF-5]]).
- Si se pide un día futuro por otra vía (por ejemplo, escribiéndolo en la dirección), entonces el sistema deberá rechazarlo con el mensaje «No se pueden consultar fechas futuras» y no mostrar ninguna venta de ese día.
- Si se pide una fecha que no existe en el calendario o no se puede leer como fecha, entonces el sistema deberá rechazarla con el mensaje «La fecha no es válida».
- El sistema deberá decidir qué día es hoy con su propia fecha y hora en hora de Bolivia, no con la de la computadora desde la que se consulta.

- Mientras se muestre el 01/01/0001, el sistema deberá no permitir elegir «Día anterior»; un año cero se rechaza como fecha no válida.

## Decisiones que lo resuelven

- [[SPEC-005 D-2 — Una ruta por consulta]]
- [[SPEC-005 D-4 — shared∕calendar.ts crece con addDays, addMonths,…]]
- [[SPEC-005 D-7 — Rutas ∕ventas (día, fecha=YYYY-MM-DD), ∕ventas∕mes…]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]
- [[SPEC-005 D-10 — Validación de fechas y meses en el servicio]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T004|T004]]
- ✅ [[SPEC-005 T005|T005]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T011|T011]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T030|T030]]
- ✅ [[SPEC-005 T031|T031]]
- ✅ [[SPEC-005 T029|T029]]
