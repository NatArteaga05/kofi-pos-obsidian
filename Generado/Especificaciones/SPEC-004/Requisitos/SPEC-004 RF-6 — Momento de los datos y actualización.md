---
tags:
  - requisito
spec: "SPEC-004"
---

# SPEC-004 RF-6 — Momento de los datos y actualización

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Historia: [[SPEC-004 HU-1 — Ver el resumen de hoy|HU-1]]

- El sistema deberá calcular los resúmenes al abrir o recargar la pantalla y cuando la persona elige «Actualizar»; los resúmenes no se actualizan solos.
- El sistema deberá mostrar en cada resumen el momento de sus datos: «Datos al 24/10/2026 11:00».
- Cuando la persona elige «Actualizar» después de la medianoche, el sistema deberá mostrar como resumen de hoy el del día nuevo.
- Mientras se calculan los resúmenes, el sistema deberá mostrar «Cargando…» y no permitir elegir «Actualizar» de nuevo; si ya se mostraban resúmenes anteriores, deberá seguir mostrándolos mientras tanto.
- El sistema deberá decidir qué es «hoy» y «el mes en curso» con su propia fecha y hora en hora de Bolivia, no con la de la computadora desde la que se consulta.

## Decisiones que lo resuelven

- [[SPEC-004 D-2 — Una ruta por resumen]]
- [[SPEC-004 D-4 — shared∕calendar.ts en la API]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-004 T003|T003]]
- ✅ [[SPEC-004 T004|T004]]
- ✅ [[SPEC-004 T007|T007]]
- ✅ [[SPEC-004 T010|T010]]
- ✅ [[SPEC-004 T012|T012]]
- ✅ [[SPEC-004 T014|T014]]
- ✅ [[SPEC-004 T016|T016]]
- ✅ [[SPEC-004 T019|T019]]
- ✅ [[SPEC-004 T034|T034]]
- ✅ [[SPEC-004 T023|T023]]
- ✅ [[SPEC-004 T033|T033]]
