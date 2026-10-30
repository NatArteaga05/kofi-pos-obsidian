---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-11 — Ventas registradas para otros módulos

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- El sistema deberá poder indicar en todo momento, para cada venta registrada, los datos de «Datos de una venta registrada»: número, fecha y hora, quién la registró, sus líneas, su total y su medio de pago.
- Cuando cambia el menú después de registrar una venta (un precio, un nombre, una categoría, o un producto o una categoría desactivados), el sistema deberá conservar la venta registrada exactamente como se registró.
- Cuando cambia o se elimina la cuenta que registró una venta, el sistema deberá conservar en la venta el nombre visible y el rol que tenía al registrarla.

## Decisiones que lo resuelven

- [[SPEC-003 D-4 — Integridad en la base]]
- [[SPEC-003 D-7 — Fechas como ISO 8601 en UTC]]
- [[SPEC-003 D-13 — Medio de pago con códigos estables en inglés]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T003|T003]]
- ✅ [[SPEC-003 T005|T005]]
- ✅ [[SPEC-003 T006|T006]]
- ✅ [[SPEC-003 T007|T007]]
- ✅ [[SPEC-003 T028|T028]]
- ✅ [[SPEC-003 T029|T029]]
- ✅ [[SPEC-003 T030|T030]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T015|T015]]
- ✅ [[SPEC-003 T020|T020]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T027|T027]]
