---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-11 — Elegir el mes

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-3 — Consultar las cifras de un mes|HU-3]]

- El sistema deberá ofrecer en el Historial la opción «Ver por mes», que muestra las cifras del mes en curso, con el título «[Mes] de [año]», por ejemplo «Octubre de 2026», y las opciones «Mes anterior», «Mes siguiente» y un campo para elegir un mes cualquiera, que no ofrece meses posteriores al mes en curso.
- Cuando la persona elige «Mes anterior», «Mes siguiente» u otro mes, el sistema deberá mostrar las cifras de ese mes.
- Si se pide un mes futuro por otra vía, entonces el sistema deberá rechazarlo con el mensaje «No se pueden consultar meses futuros» y no mostrar ninguna cifra de ese mes.
- Si se pide un mes que no existe o no se puede leer como mes, entonces el sistema deberá rechazarlo con el mensaje «El mes no es válido».
- Mientras se muestre el mes que era el mes en curso cuando el sistema obtuvo los datos, el sistema deberá no permitir elegir «Mes siguiente» (como «Día siguiente» en [[SPEC-005 RF-2 — Elegir el día|RF-2]]).
- Donde estén las ventas de un día (HU-1), el sistema deberá ofrecer en las cifras de un mes la opción «Ver por día», que muestra las ventas de hoy.
- El sistema deberá decidir cuál es el mes en curso con su propia fecha y hora en hora de Bolivia (como en [[SPEC-005 RF-2 — Elegir el día|RF-2]]).

- Mientras se muestre enero de 0001, el sistema deberá no permitir elegir «Mes anterior»; un año cero se rechaza como mes no válido.

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
- ✅ [[SPEC-005 T024|T024]]
- ✅ [[SPEC-005 T025|T025]]
- ✅ [[SPEC-005 T026|T026]]
- ✅ [[SPEC-005 T029|T029]]
