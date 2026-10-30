---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-3 — Crear y renombrar una categoría

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-1 — Armar el menú|HU-1]]

- Cuando el dueño crea una categoría con un nombre que cumple «Datos de una categoría», el sistema deberá guardarla activa y mostrarla en la lista.
- Cuando el dueño cambia el nombre de una categoría por uno que cumple «Datos de una categoría», el sistema deberá guardarlo sin cambiar sus productos ni su estado.
- Si el nombre está vacío o formado solo por espacios, entonces el sistema deberá rechazarlo con el mensaje «Escribe el nombre de la categoría».
- Si el nombre coincide con el de otra categoría según «Comparación de nombres», entonces el sistema deberá rechazarlo con el mensaje «Ya existe una categoría con ese nombre».
- Si el nombre tiene un carácter no admitido en «Datos de una categoría», entonces el sistema deberá rechazarlo con el mensaje «El nombre solo puede tener letras, números, espacios y los signos . , - ' ( ) & /».
- Cuando el dueño cambia el nombre de una categoría solo en mayúsculas, minúsculas, tildes o espacios («bebidas» por «Bebidas»), el sistema deberá guardarlo tal como se escribió.
- El sistema deberá impedir escribir más de 30 caracteres en el nombre de una categoría.

## Decisiones que lo resuelven

- [[SPEC-002 D-3 — Letras admitidas]]
- [[SPEC-002 D-4 — Comparación con name_key calculada en la API]]
- [[SPEC-002 D-6 — Todos los errores de datos en un solo 400…]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T003|T003]]
- ✅ [[SPEC-002 T005|T005]]
- ✅ [[SPEC-002 T007|T007]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T014|T014]]
- ✅ [[SPEC-002 T017|T017]]
- ✅ [[SPEC-002 T020|T020]]
- ✅ [[SPEC-002 T023|T023]]
- ✅ [[SPEC-002 T024|T024]]
- ✅ [[SPEC-002 T036|T036]]
