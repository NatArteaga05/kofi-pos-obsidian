---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-4 — Días y horas de las ventas

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá registrar todas las ventas de demostración dentro del período de demostración, en el horario del local, y ninguna hoy ni en un día futuro.
- El sistema deberá dejar sin ventas entre 2 y 4 domingos del período, al menos uno en cada mes calendario completo del período y nunca dos domingos seguidos, y dar a cada uno de los demás días del período entre 30 y 80 ventas.
- El sistema deberá dar a los viernes y sábados, en promedio, al menos un 20 % más de ventas que a los días de lunes a jueves.
- El sistema deberá registrar en las horas pico más ventas por hora que en el resto del horario del local, contando todo el período.

## Decisiones que lo resuelven

- [[SPEC-007 D-3 — «Hoy» sale de PostgreSQL]]
- [[SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla]]
- [[SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8…]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T003|T003]]
- ✅ [[SPEC-007 T004|T004]]
- ✅ [[SPEC-007 T006|T006]]
