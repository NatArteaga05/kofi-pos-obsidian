---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-9 — Desactivar y reactivar un producto

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece|HU-2]]

- Cuando el dueño desactiva un producto activo, el sistema deberá marcarlo como inactivo sin pedir confirmación, conservar su nombre, su categoría y su precio, y quitarlo del menú vigente.
- Cuando el dueño reactiva un producto inactivo cuya categoría está activa, el sistema deberá marcarlo como activo, con los mismos datos que tenía, e incluirlo en el menú vigente.
- Si el dueño intenta reactivar un producto cuya categoría está inactiva, entonces el sistema deberá rechazarlo con el mensaje «Reactiva la categoría “[categoría]” o mueve el producto a otra antes de reactivarlo», donde [categoría] es el nombre de su categoría.

## Decisiones que lo resuelven

- [[SPEC-002 D-7 — Rutas de acción]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T002|T002]]
- ✅ [[SPEC-002 T008|T008]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T025|T025]]
- ✅ [[SPEC-002 T027|T027]]
- ✅ [[SPEC-002 T028|T028]]
- ✅ [[SPEC-002 T030|T030]]
- ✅ [[SPEC-002 T042|T042]]
- ✅ [[SPEC-002 T036|T036]]
