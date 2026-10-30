---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-1 — Ingreso con credenciales

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- Cuando una persona envía un usuario y una contraseña que corresponden a una cuenta, el sistema deberá iniciar una sesión a nombre de esa cuenta y mostrar la pantalla inicial.
- El sistema deberá comparar el usuario sin distinguir mayúsculas de minúsculas e ignorando los espacios al inicio y al final, y la contraseña exactamente como se escribió.
- El sistema deberá ocultar los caracteres de la contraseña mientras se escriben.

## Decisiones que lo resuelven

- [[SPEC-001 D-2 — Mismo origen para interfaz y API]]
- [[SPEC-001 D-3 — Contraseñas con scrypt de node꞉crypto]]
- [[SPEC-001 D-8 — @fastify∕cookie]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T009|T009]]
- ✅ [[SPEC-001 T014|T014]]
- ✅ [[SPEC-001 T015|T015]]
- ✅ [[SPEC-001 T020|T020]]
- ✅ [[SPEC-001 T021|T021]]
- ✅ [[SPEC-001 T026|T026]]
- ✅ [[SPEC-001 T028|T028]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
