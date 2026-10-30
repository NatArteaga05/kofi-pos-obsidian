---
tags:
  - historia
spec: "SPEC-003"
prioridad: "P1"
---

# SPEC-003 HU-1 — Registrar una venta pagada (P1)

Especificación: [[SPEC-003 Ventas|SPEC-003]]

Como **persona que atiende el mostrador (cajero o dueño)**, quiero **armar la venta con los productos del menú y sus cantidades, ver el total que calcula el sistema y registrarla cuando la clientela paga** para **cobrar lo correcto sin hacer cuentas y que la venta quede registrada para los resúmenes y reportes**.

> [!example] Prueba independiente
> con un menú vigente que tiene «Café americano» a Bs 12,50 y «Empanada» a Bs 8,00, una sesión de cajero abre «Nueva venta», agrega dos veces el café y una vez la empanada: la venta en preparación muestra «Café americano × 2 · Bs 25,00», «Empanada × 1 · Bs 8,00» y el total «Bs 33,00». Al elegir el medio de pago «Efectivo» y «Registrar venta» aparece «Venta N.º 1 registrada · Bs 33,00 · Efectivo · [fecha y hora]» y la venta en preparación queda vacía. La venta registrada que el sistema entrega a otros módulos ([[SPEC-003 RF-11 — Ventas registradas para otros módulos|RF-11]]) tiene el número 1, la fecha y la hora, el nombre y el rol del cajero, las dos líneas con sus precios, el total Bs 33,00 y el medio de pago «Efectivo»; una segunda venta pagada con «QR» queda registrada con ese medio. Si después el dueño cambia el precio del café, esa venta sigue igual. Pulsar dos veces seguidas «Registrar venta» registra una sola venta, y una venta sin productos o sin medio de pago no se puede registrar.

## Requisitos

- [[SPEC-003 RF-1 — Acceso a Ventas]]
- [[SPEC-003 RF-2 — Productos para vender]]
- [[SPEC-003 RF-3 — Armar la venta en preparación]]
- [[SPEC-003 RF-4 — Importes calculados por el sistema]]
- [[SPEC-003 RF-5 — Cambios del menú durante la preparación]]
- [[SPEC-003 RF-6 — Registrar la venta]]
- [[SPEC-003 RF-7 — Se cobra lo que se mostró]]
- [[SPEC-003 RF-8 — Una venta se registra una sola vez]]
- [[SPEC-003 RF-9 — Registro completo o nada]]
- [[SPEC-003 RF-10 — Ventas desde varios navegadores]]
- [[SPEC-003 RF-11 — Ventas registradas para otros módulos]]

## Tareas (11/11)

- ✅ [[SPEC-003 T012|T012]]
- ✅ [[SPEC-003 T013|T013]]
- ✅ [[SPEC-003 T014|T014]]
- ✅ [[SPEC-003 T015|T015]]
- ✅ [[SPEC-003 T016|T016]]
- ✅ [[SPEC-003 T017|T017]]
- ✅ [[SPEC-003 T018|T018]]
- ✅ [[SPEC-003 T019|T019]]
- ✅ [[SPEC-003 T020|T020]]
- ✅ [[SPEC-003 T021|T021]]
- ✅ [[SPEC-003 T032|T032]]

## Pruebas de punta a punta

- [[sales-us1-registrar-venta.spec.ts (e2e)]]
