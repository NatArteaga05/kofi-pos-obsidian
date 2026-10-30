---
tags:
  - historia
spec: "SPEC-001"
prioridad: "P1"
---

# SPEC-001 HU-1 — Iniciar y cerrar sesión (P1)

Especificación: [[SPEC-001 Acceso|SPEC-001]]

Como **persona del local (dueño o cajero)**, quiero **iniciar sesión con mi usuario y contraseña y cerrarla al terminar** para **usar el sistema con mi identidad y que la siguiente persona de la computadora compartida no opere con mi cuenta**.

> [!example] Prueba independiente
> con dos cuentas preparadas, abrir el sistema sin sesión muestra la pantalla de ingreso; con credenciales incorrectas aparece un mensaje de error y se sigue en el ingreso; con las correctas se llega a la pantalla inicial, donde se ven el nombre y el rol de la persona. Intentar abrir directamente la pantalla inicial sin sesión lleva al ingreso. Al elegir «Cerrar sesión» se vuelve al ingreso, volver atrás no muestra nada y la segunda cuenta puede entrar.

## Requisitos

- [[SPEC-001 RF-1 — Ingreso con credenciales]]
- [[SPEC-001 RF-2 — Credenciales incorrectas]]
- [[SPEC-001 RF-3 — Campos vacíos y largo máximo]]
- [[SPEC-001 RF-4 — Sin sesión no hay acceso]]
- [[SPEC-001 RF-5 — Identidad, rol y pantalla inicial]]
- [[SPEC-001 RF-6 — Sesión por navegador]]
- [[SPEC-001 RF-7 — Cierre de sesión]]
- [[SPEC-001 RF-8 — Sesión cerrada inservible]]
- [[SPEC-001 RF-13 — Validación de las cuentas]]
- [[SPEC-001 RF-14 — Sin conexión al ingresar]]

## Tareas (12/12)

- ✅ [[SPEC-001 T020|T020]]
- ✅ [[SPEC-001 T021|T021]]
- ✅ [[SPEC-001 T022|T022]]
- ✅ [[SPEC-001 T023|T023]]
- ✅ [[SPEC-001 T024|T024]]
- ✅ [[SPEC-001 T025|T025]]
- ✅ [[SPEC-001 T026|T026]]
- ✅ [[SPEC-001 T027|T027]]
- ✅ [[SPEC-001 T028|T028]]
- ✅ [[SPEC-001 T029|T029]]
- ✅ [[SPEC-001 T030|T030]]
- ✅ [[SPEC-001 T031|T031]]

## Pruebas de punta a punta

- [[us1-iniciar-cerrar-sesion.spec.ts (e2e)]]
