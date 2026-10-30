---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-5 — Editar un producto

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-1 — Armar el menú|HU-1]]

- Cuando el dueño cambia el nombre, la categoría o el precio de un producto por valores que cumplen «Datos de un producto», el sistema deberá guardarlos sin cambiar su estado.
- Cuando se guarda un nuevo precio, el sistema deberá usarlo como único precio vigente del producto desde ese momento.
- El sistema deberá permitir mover un producto solo a una categoría activa.
- Mientras el producto que se edita esté en una categoría inactiva, el sistema deberá ofrecer como categorías posibles la suya, marcada «Inactiva», y las activas, y permitir guardar su nombre y su precio sin moverlo.
- Cuando el dueño cambia el nombre de un producto solo en mayúsculas, minúsculas, tildes o espacios, el sistema deberá guardarlo tal como se escribió.

## Decisiones que lo resuelven

- [[SPEC-002 D-7 — Rutas de acción]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T005|T005]]
- ✅ [[SPEC-002 T008|T008]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T015|T015]]
- ✅ [[SPEC-002 T017|T017]]
- ✅ [[SPEC-002 T021|T021]]
- ✅ [[SPEC-002 T023|T023]]
- ✅ [[SPEC-002 T024|T024]]
- ✅ [[SPEC-002 T029|T029]]
- ✅ [[SPEC-002 T042|T042]]
- ✅ [[SPEC-002 T036|T036]]
