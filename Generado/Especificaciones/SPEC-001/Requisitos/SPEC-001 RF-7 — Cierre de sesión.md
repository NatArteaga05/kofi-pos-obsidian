---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-7 — Cierre de sesión

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- Mientras haya una sesión válida, el sistema deberá ofrecer la opción «Cerrar sesión» en todas las pantallas internas.
- Cuando una persona elige «Cerrar sesión», el sistema deberá invalidar esa sesión de inmediato, sin pedir confirmación, y mostrar la pantalla de ingreso.

## Decisiones que lo resuelven

- [[SPEC-001 D-1 — Sesión en la base con cookie HttpOnly]]
- [[SPEC-001 D-2 — Mismo origen para interfaz y API]]
- [[SPEC-001 D-8 — @fastify∕cookie]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T015|T015]]
- ✅ [[SPEC-001 T023|T023]]
- ✅ [[SPEC-001 T029|T029]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
