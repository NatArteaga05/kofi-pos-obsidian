---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-10 — Desactivar y reactivar una categoría

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece|HU-2]]

- Cuando el dueño desactiva una categoría sin productos activos, el sistema deberá marcarla como inactiva sin pedir confirmación.
- Si el dueño intenta desactivar una categoría que tiene productos activos, entonces el sistema deberá rechazarlo con el mensaje «Esta categoría tiene N productos activos. Desactívalos o muévelos a otra categoría antes» («1 producto activo» en singular).
- Cuando el dueño reactiva una categoría, el sistema deberá marcarla como activa sin cambiar el estado de sus productos.

## Decisiones que lo resuelven

- [[SPEC-002 D-5 — Disparadores con FOR SHARE]]
- [[SPEC-002 D-7 — Rutas de acción]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T002|T002]]
- ✅ [[SPEC-002 T006|T006]]
- ✅ [[SPEC-002 T007|T007]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T026|T026]]
- ✅ [[SPEC-002 T027|T027]]
- ✅ [[SPEC-002 T028|T028]]
- ✅ [[SPEC-002 T030|T030]]
- ✅ [[SPEC-002 T042|T042]]
- ✅ [[SPEC-002 T036|T036]]
