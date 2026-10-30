---
tags:
  - historia
spec: "SPEC-002"
prioridad: "P2"
---

# SPEC-002 HU-2 — Sacar del menú lo que no se ofrece (P2)

Especificación: [[SPEC-002 Menú|SPEC-002]]

Como **dueño**, quiero **desactivar y reactivar productos y categorías** para **dejar de ofrecer lo que se acabó o no es de temporada sin perderlo ni tener que volver a cargarlo**.

> [!example] Prueba independiente
> con un menú cargado, se desactiva un producto: sigue en la administración marcado como «Inactivo» y deja de formar parte del menú vigente que el sistema entrega a otros módulos ([[SPEC-002 RF-15 — Menú vigente para otros módulos|RF-15]]); al reactivarlo vuelve a él con su mismo nombre, categoría y precio. Una categoría con productos activos no se puede desactivar; tras desactivar sus productos, sí. No se puede crear un producto en una categoría inactiva ni reactivar un producto cuya categoría esté inactiva.

## Requisitos

- [[SPEC-002 RF-9 — Desactivar y reactivar un producto]]
- [[SPEC-002 RF-10 — Desactivar y reactivar una categoría]]
- [[SPEC-002 RF-11 — Categorías inactivas]]
- [[SPEC-002 RF-12 — Datos que se conservan]]

## Tareas (8/8)

- ✅ [[SPEC-002 T025|T025]]
- ✅ [[SPEC-002 T026|T026]]
- ✅ [[SPEC-002 T027|T027]]
- ✅ [[SPEC-002 T028|T028]]
- ✅ [[SPEC-002 T029|T029]]
- ✅ [[SPEC-002 T030|T030]]
- ✅ [[SPEC-002 T042|T042]]
- ✅ [[SPEC-002 T044|T044]]

## Pruebas de punta a punta

- [[menu-us2-desactivar.spec.ts (e2e)]]
