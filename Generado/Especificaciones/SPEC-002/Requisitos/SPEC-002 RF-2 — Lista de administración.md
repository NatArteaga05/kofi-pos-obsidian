---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-2 — Lista de administración

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-1 — Armar el menú|HU-1]]

- Cuando el dueño abre la administración del menú, el sistema deberá mostrar todas las categorías, activas e inactivas, en orden alfabético, y dentro de cada una todos sus productos, activos e inactivos, en orden alfabético, con su precio en el formato de «Datos de un producto».
- El sistema deberá indicar con la etiqueta «Inactiva» o «Inactivo» cada categoría o producto inactivo.
- El sistema deberá mostrar «Sin productos» en cada categoría que no tenga ninguno.
- Mientras no exista ninguna categoría, el sistema deberá mostrar «Todavía no hay categorías. Crea la primera» y la opción de crear una categoría.
- El sistema deberá ordenar alfabéticamente categorías y productos según «Comparación de nombres».

## Decisiones que lo resuelven

- [[SPEC-002 D-4 — Comparación con name_key calculada en la API]]
- [[SPEC-002 D-10 — MenuClientProvider]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T003|T003]]
- ✅ [[SPEC-002 T005|T005]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T016|T016]]
- ✅ [[SPEC-002 T017|T017]]
- ✅ [[SPEC-002 T019|T019]]
- ✅ [[SPEC-002 T023|T023]]
- ✅ [[SPEC-002 T024|T024]]
- ✅ [[SPEC-002 T036|T036]]
