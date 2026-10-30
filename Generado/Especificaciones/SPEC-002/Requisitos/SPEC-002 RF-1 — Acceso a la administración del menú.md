---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-1 — Acceso a la administración del menú

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-1 — Armar el menú|HU-1]]

- Mientras haya una sesión válida de dueño, el sistema deberá ofrecer en la pantalla inicial la opción «Administrar menú».
- Mientras haya una sesión válida de cajero, el sistema deberá no mostrar la opción «Administrar menú».
- Si una sesión de cajero intenta abrir la administración del menú o hacer cualquier cambio en el menú, entonces el sistema deberá rechazarlo sin aplicar ningún cambio, llevar a la pantalla inicial y mostrar en ella «No tienes permiso para administrar el menú».
- Mientras no haya una sesión válida, el sistema deberá aplicar a todas las pantallas y operaciones del menú lo que dice [[SPEC-001 Acceso|SPEC-001]] ([[SPEC-001 RF-4 — Sin sesión no hay acceso|RF-4]], [[SPEC-001 RF-8 — Sesión cerrada inservible|RF-8]], [[SPEC-001 RF-10 — Vencimiento de la sesión|RF-10]] y [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión|RF-12]]).

## Decisiones que lo resuelven

- [[SPEC-002 D-1 — El menú se integra en el monorepo de SPEC-001 sin…]]
- [[SPEC-002 D-8 — La pantalla inicial recibe sus enlaces de routes.tsx]]
- [[SPEC-002 D-9 — El rechazo al cajero lo decide la API]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T002|T002]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T013|T013]]
- ✅ [[SPEC-002 T017|T017]]
- ✅ [[SPEC-002 T018|T018]]
- ✅ [[SPEC-002 T019|T019]]
- ✅ [[SPEC-002 T023|T023]]
- ✅ [[SPEC-002 T024|T024]]
- ✅ [[SPEC-002 T027|T027]]
- ✅ [[SPEC-002 T042|T042]]
- ✅ [[SPEC-002 T036|T036]]
