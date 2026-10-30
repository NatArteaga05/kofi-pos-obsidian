---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-12 — Cifras de un mes

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-3 — Consultar las cifras de un mes|HU-3]]

- El sistema deberá mostrar del mes elegido su total vendido, su número de ventas y sus importes por medio de pago, contando todas las ventas registradas del mes (ver «Conceptos») y ninguna otra, con las mismas reglas que [[SPEC-005 RF-4 — Cifras de un día|RF-4]], y obtenerlas, actualizarlas, mostrar el momento de sus datos («Datos al …») y avisar sin conexión o con error como indican [[SPEC-005 RF-5 — Momento de los datos y actualización|RF-5]] a [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron|RF-7]].
- Mientras el mes no tenga ventas, el sistema deberá mostrar «No hay ventas registradas este mes» junto a sus cifras en cero.

## Decisiones que lo resuelven

- [[SPEC-005 D-1 — Las ventas llegan al Historial como funciones…]]
- [[SPEC-005 D-3 — La API calcula las cifras en memoria]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T024|T024]]
- ✅ [[SPEC-005 T025|T025]]
- ✅ [[SPEC-005 T026|T026]]
- ✅ [[SPEC-005 T029|T029]]
