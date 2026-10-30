---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-6 — Sin conexión o con error

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1]]

- Si una consulta no se puede obtener por falta de conexión, entonces el sistema deberá mostrar «No hay conexión. Inténtalo de nuevo» junto a la opción «Actualizar».
- Si una consulta no se puede obtener por un error inesperado del sistema, entonces el sistema deberá mostrar «Ocurrió un error. Inténtalo de nuevo» junto a la opción «Actualizar».
- Si ya se mostraba una consulta anterior, entonces el sistema deberá seguir mostrándola junto al aviso, con su propio título y el momento de sus datos, para que no se confunda con la que se pidió.

## Decisiones que lo resuelven

- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T012|T012]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T020|T020]]
- ✅ [[SPEC-005 T025|T025]]
- ✅ [[SPEC-005 T026|T026]]
- ✅ [[SPEC-005 T029|T029]]
