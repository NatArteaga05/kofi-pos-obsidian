---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-2 — Solo en una base preparada y sin ventas

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

Antes de pedir la confirmación, el sistema comprueba la base en este orden y se detiene en la primera condición que no se cumple:

- Si la base tiene al menos una venta registrada, entonces el sistema deberá rechazar la carga sin crear, cambiar ni eliminar nada y mostrar «La base ya tiene ventas registradas. Las ventas de demostración solo se cargan en una base sin ventas».
- Si la base no tiene el menú oficial completo y activo (ver «Conceptos»), entonces el sistema deberá rechazar la carga sin cambiar nada y mostrar «La base no tiene el menú oficial completo y activo. Faltan o están inactivos: [productos]», con el nombre de cada producto oficial que falta, está inactivo, está en otra categoría o cuya categoría está inactiva, separados por comas.
- Si la base no tiene ninguna cuenta de dueño ni de cajero, entonces el sistema deberá rechazar la carga sin cambiar nada y mostrar «La base no tiene cuentas de dueño ni de cajero que registren las ventas».
- El sistema deberá no eliminar ni reemplazar nunca ventas, productos, categorías ni cuentas existentes.

## Decisiones que lo resuelven

- [[SPEC-007 D-2 — Dos transacciones꞉ inspección siempre deshecha y carga]]
- [[SPEC-007 D-4 — menu∕index.ts exporta OFFICIAL_MENU]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T007|T007]]
- ✅ [[SPEC-007 T009|T009]]
- ✅ [[SPEC-007 T012|T012]]
