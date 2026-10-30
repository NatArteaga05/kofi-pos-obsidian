---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-3 — Confirmación escrita

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- Cuando la base cumple [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]], el sistema deberá mostrar «Se cargarán [n] ventas de demostración del [desde] al [hasta]. Las ventas registradas no se pueden borrar. Escribe CARGAR para continuar» y esperar la respuesta, sin cambiar nada todavía.
- Cuando la persona escribe exactamente «CARGAR» (en mayúsculas, sin tener en cuenta los espacios alrededor), el sistema deberá volver a comprobar [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]] en el mismo momento de cargar y, si se cumple, cargar las [n] ventas anunciadas con el menú y las cuentas tal como están en ese momento.
- Si al escribir «CARGAR» la base ya no cumple [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]] (por ejemplo, porque se registró una venta, se desactivó un producto oficial o se eliminaron las cuentas mientras se esperaba la respuesta), entonces el sistema deberá rechazar la carga con el mensaje que corresponda de [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]], sin cambiar nada.
- Si la persona escribe cualquier otra cosa o no escribe nada, entonces el sistema deberá terminar sin cambiar nada y mostrar «Carga cancelada. No se cambió nada».
- Cuando la carga termina, el sistema deberá mostrar «Ventas de demostración cargadas: [n] ventas del [desde] al [hasta]», con las fechas en el formato de [[SPEC-003 Ventas|SPEC-003]] («27/10/2026»).

## Decisiones que lo resuelven

- [[SPEC-007 D-2 — Dos transacciones꞉ inspección siempre deshecha y carga]]
- [[SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla]]
- [[SPEC-007 D-7 — Confirmación con node꞉readline∕promises]]
- [[SPEC-007 D-8 — El comando recibe sus dependencias]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T008|T008]]
- ✅ [[SPEC-007 T009|T009]]
