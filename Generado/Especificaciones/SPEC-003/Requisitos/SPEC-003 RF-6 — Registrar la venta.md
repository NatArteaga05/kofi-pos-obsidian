---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-6 — Registrar la venta

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1]]

- El sistema deberá ofrecer la opción «Registrar venta» en la venta en preparación, para usarla cuando la clientela ya pagó.
- El sistema deberá ofrecer en la venta en preparación la elección del medio de pago, «Efectivo» o «QR», sin ninguno elegido de antemano, y permitir cambiarla hasta registrar la venta.
- Cuando la persona registra una venta en preparación con al menos una línea y un medio de pago elegido, el sistema deberá registrarla con los datos de «Datos de una venta registrada», mostrar «Venta N.º [número] registrada · [total] · [medio de pago] · [fecha y hora]» y dejar vacía la venta en preparación, sin medio de pago elegido, lista para la siguiente.
- El sistema deberá mantener visible la confirmación de la última venta registrada hasta que se agregue un producto a la venta siguiente o se salga de la pantalla; al recargarla, la confirmación ya no se muestra.
- Si la venta en preparación está vacía, entonces el sistema deberá no permitir registrarla; si aun así llega a intentarse, deberá rechazarla con el mensaje «Agrega al menos un producto».
- Si no se eligió el medio de pago, entonces el sistema deberá no permitir registrar la venta; si aun así llega a intentarse, deberá rechazarla con el mensaje «Elige el medio de pago».

## Decisiones que lo resuelven

- [[SPEC-003 D-4 — Integridad en la base]]
- [[SPEC-003 D-7 — Fechas como ISO 8601 en UTC]]
- [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo]]
- [[SPEC-003 D-13 — Medio de pago con códigos estables en inglés]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T003|T003]]
- ✅ [[SPEC-003 T004|T004]]
- ✅ [[SPEC-003 T005|T005]]
- ✅ [[SPEC-003 T006|T006]]
- ✅ [[SPEC-003 T007|T007]]
- ✅ [[SPEC-003 T008|T008]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T028|T028]]
- ✅ [[SPEC-003 T029|T029]]
- ✅ [[SPEC-003 T030|T030]]
- ✅ [[SPEC-003 T031|T031]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T015|T015]]
- ✅ [[SPEC-003 T019|T019]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T032|T032]]
- ✅ [[SPEC-003 T027|T027]]
