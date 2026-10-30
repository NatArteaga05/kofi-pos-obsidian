---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-5 — Identidad, rol y pantalla inicial

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1]]

- Mientras haya una sesión válida, el sistema deberá mostrar en toda pantalla interna el nombre visible y el rol (dueño o cajero) de la persona.
- El sistema deberá poder indicar, para cada sesión válida, a qué cuenta, nombre visible y rol corresponde.
- El sistema deberá mostrar la misma pantalla inicial a ambos roles, con un saludo que incluya el nombre visible, el rol y la opción «Cerrar sesión». Los módulos siguientes la amplían.

## Decisiones que lo resuelven

- [[SPEC-001 D-11 — Cada módulo expone un index.ts]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T009|T009]]
- ✅ [[SPEC-001 T022|T022]]
- ✅ [[SPEC-001 T029|T029]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]
