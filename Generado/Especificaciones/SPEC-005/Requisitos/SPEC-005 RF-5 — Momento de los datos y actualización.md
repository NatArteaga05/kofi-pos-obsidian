---
tags:
  - requisito
spec: "SPEC-005"
---

# SPEC-005 RF-5 — Momento de los datos y actualización

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Historia: [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1]]

- El sistema deberá obtener cada consulta del Historial (las ventas de un día y, con las demás historias, el detalle de una venta o las cifras de un mes) al abrirla o recargar la pantalla y cuando la persona elige «Actualizar»; no se actualiza sola.
- El sistema deberá mostrar, junto a las cifras de un día, el momento de sus datos: «Datos al 25/10/2026 11:00».
- Mientras obtiene lo que va a mostrar, el sistema deberá mostrar «Cargando…» y no permitir elegir «Actualizar» de nuevo; si ya se mostraba una consulta anterior, deberá seguir mostrándola mientras tanto.
- Cuando la persona recarga la pantalla o vuelve atrás con el navegador, el sistema deberá mostrar el mismo día, mes o venta que se estaba consultando.

## Decisiones que lo resuelven

- [[SPEC-005 D-7 — Rutas ∕ventas (día, fecha=YYYY-MM-DD), ∕ventas∕mes…]]
- [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo]]

## Tareas que lo cubren

- ✅ [[SPEC-005 T003|T003]]
- ✅ [[SPEC-005 T007|T007]]
- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T012|T012]]
- ✅ [[SPEC-005 T014|T014]]
- ✅ [[SPEC-005 T016|T016]]
- ✅ [[SPEC-005 T020|T020]]
- ✅ [[SPEC-005 T022|T022]]
- ✅ [[SPEC-005 T025|T025]]
- ✅ [[SPEC-005 T026|T026]]
- ✅ [[SPEC-005 T029|T029]]
