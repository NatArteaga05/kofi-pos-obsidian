---
tags:
  - historia
spec: "SPEC-002"
prioridad: "P1"
---

# SPEC-002 HU-1 — Armar el menú (P1)

Especificación: [[SPEC-002 Menú|SPEC-002]]

Como **dueño**, quiero **crear y editar las categorías y los productos del menú, con su precio**, para **tener en el sistema lo que vende Kofi y corregirlo cuando cambie un nombre o un precio**.

> [!example] Prueba independiente
> con una sesión de dueño, la administración del menú vacío invita a crear la primera categoría. Se crea «Bebidas calientes» y, en ella, «Café americano» a «12,5»: aparece en la lista con «Bs 12,50». Un precio de 0, uno con tres decimales o un nombre repetido («CAFÉ AMERICANO») se rechazan con un mensaje que indica el motivo. Al cambiar el precio a 13 y mover el producto a otra categoría, la lista lo muestra así al volver a abrirla, y el menú vigente que el sistema entrega a otros módulos ([[SPEC-002 RF-15 — Menú vigente para otros módulos|RF-15]]) lo incluye con esos datos. Con una sesión de cajero, la administración del menú se rechaza sin cambios.

## Requisitos

- [[SPEC-002 RF-1 — Acceso a la administración del menú]]
- [[SPEC-002 RF-2 — Lista de administración]]
- [[SPEC-002 RF-3 — Crear y renombrar una categoría]]
- [[SPEC-002 RF-4 — Crear un producto]]
- [[SPEC-002 RF-5 — Editar un producto]]
- [[SPEC-002 RF-6 — Validación de un producto]]
- [[SPEC-002 RF-7 — Guardado completo o nada]]
- [[SPEC-002 RF-8 — Cambios desde dos navegadores]]
- [[SPEC-002 RF-15 — Menú vigente para otros módulos]]

## Tareas (11/11)

- ✅ [[SPEC-002 T014|T014]]
- ✅ [[SPEC-002 T015|T015]]
- ✅ [[SPEC-002 T016|T016]]
- ✅ [[SPEC-002 T017|T017]]
- ✅ [[SPEC-002 T018|T018]]
- ✅ [[SPEC-002 T019|T019]]
- ✅ [[SPEC-002 T020|T020]]
- ✅ [[SPEC-002 T021|T021]]
- ✅ [[SPEC-002 T022|T022]]
- ✅ [[SPEC-002 T023|T023]]
- ✅ [[SPEC-002 T024|T024]]

## Pruebas de punta a punta

- [[menu-us1-armar-menu.spec.ts (e2e)]]
