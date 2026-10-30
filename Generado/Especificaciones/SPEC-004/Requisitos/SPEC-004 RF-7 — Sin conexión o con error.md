---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-7 — Sin conexión o con error

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-1 — Ver el resumen de hoy|HU-1]]

- Si los resúmenes no se pueden obtener por falta de conexión, entonces el sistema deberá mostrar «No hay conexión. Inténtalo de nuevo» junto a la opción «Actualizar».
- Si los resúmenes no se pueden obtener por un error inesperado del sistema, entonces el sistema deberá mostrar «Ocurrió un error. Inténtalo de nuevo» junto a la opción «Actualizar».
- Si ya se mostraban resúmenes anteriores, entonces el sistema deberá seguir mostrándolos, cada uno con el momento de sus datos, junto al aviso.

## Decisiones que lo resuelven

- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T024|T024]]
- ✅ [[SPEC-004 T012|T012]]
- ✅ [[SPEC-004 T014|T014]]
- ✅ [[SPEC-004 T016|T016]]
- ✅ [[SPEC-004 T019|T019]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
