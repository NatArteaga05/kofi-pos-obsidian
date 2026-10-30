---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-14 — Consulta del menú vigente

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-3 — Consultar el menú vigente|HU-3]]

- Cuando una persona abre «Ver menú», el sistema deberá mostrar solo el menú vigente: las categorías activas que tienen al menos un producto activo, en orden alfabético, y dentro de cada una sus productos activos, en orden alfabético, con su precio en el formato de «Datos de un producto».
- El sistema deberá mostrar la consulta sin ninguna opción para crear, editar, desactivar o reactivar.
- Mientras el menú vigente no tenga ningún producto, el sistema deberá mostrar «El menú todavía no tiene productos disponibles».
- El sistema deberá mostrar el menú vigente tal como está al abrir la consulta, ya sea desde la pantalla inicial o recargando la pantalla; los cambios guardados después se ven al volver a abrirla o al recargarla. La consulta no se actualiza sola.

## Decisiones que lo resuelven

- [[SPEC-002 D-4 — Comparación con name_key calculada en la API]]
- [[SPEC-002 D-10 — MenuClientProvider]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T005|T005]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T031|T031]]
- ✅ [[SPEC-002 T032|T032]]
- ✅ [[SPEC-002 T033|T033]]
- ✅ [[SPEC-002 T045|T045]]
- ✅ [[SPEC-002 T036|T036]]
