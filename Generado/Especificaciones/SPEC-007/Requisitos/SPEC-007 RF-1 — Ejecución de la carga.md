---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-1 — Ejecución de la carga

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá ejecutar la carga sin pedir ni usar una sesión de dueño o cajero: solo puede hacerlo quien tenga la configuración de acceso a la base, como en [[SPEC-006 Menú inicial|SPEC-006]] ([[SPEC-006 RF-2 — Carga en una base nueva|RF-2]]).
- El sistema deberá calcular hoy, ayer y el período de demostración con la fecha y la hora del sistema donde se guardan las ventas, en hora de Bolivia, no con el reloj ni la zona horaria de la computadora desde la que se ejecuta la carga.

## Decisiones que lo resuelven

- [[SPEC-007 D-1 — Comando nuevo npm run load꞉demo-sales -w @kofi∕api]]
- [[SPEC-007 D-3 — «Hoy» sale de PostgreSQL]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T003|T003]]
- ✅ [[SPEC-007 T007|T007]]
- ✅ [[SPEC-007 T009|T009]]
