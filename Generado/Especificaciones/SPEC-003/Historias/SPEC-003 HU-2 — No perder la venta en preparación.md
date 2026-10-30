---
tags:
  - historia
spec: "SPEC-003"
prioridad: "P2"
---

# SPEC-003 HU-2 — No perder la venta en preparación (P2)

Especificación: [[SPEC-003 Ventas|SPEC-003]]

Como **persona que atiende el mostrador**, quiero que **la venta que estoy armando no se pierda si recargo la pantalla, voy a otra pantalla o vence mi sesión**, y que **nadie más la vea** si cierro sesión o entra otra persona, para **no tener que volver a pedirle el pedido a la clientela y no mezclar mi venta con la de otra persona**.

> [!example] Prueba independiente
> con una venta en preparación de dos productos, recargar la pantalla, ir a la pantalla inicial y volver, o cerrar el navegador y volver a abrir el sistema conservan sus líneas; una segunda pestaña del mismo navegador muestra la misma venta. Si vence la sesión en «Nueva venta» y la misma cuenta vuelve a entrar en ese navegador, regresa a «Nueva venta» con la misma venta en preparación. Si en cambio entra otra cuenta, o la misma cuenta cierra sesión y vuelve a entrar, «Nueva venta» empieza vacía.

## Requisitos

- [[SPEC-003 RF-12 — Conservar la venta en preparación]]
- [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión]]
- [[SPEC-003 RF-14 — Descartar la venta en preparación]]

## Tareas (4/4)

- ✅ [[SPEC-003 T022|T022]]
- ✅ [[SPEC-003 T023|T023]]
- ✅ [[SPEC-003 T024|T024]]
- ✅ [[SPEC-003 T025|T025]]

## Pruebas de punta a punta

- [[sales-us2-conservar-venta.spec.ts (e2e)]]
