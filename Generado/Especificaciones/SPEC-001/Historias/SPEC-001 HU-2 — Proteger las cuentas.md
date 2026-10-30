---
tags:
  - historia
spec: "SPEC-001"
prioridad: "P2"
---

# SPEC-001 HU-2 — Proteger las cuentas (P2)

Especificación: [[SPEC-001 Acceso|SPEC-001]]

Como **dueño**, quiero que **las sesiones venzan solas, que se frenen los intentos repetidos de adivinar una contraseña y que los cambios en una cuenta corten sus sesiones** para **que una sesión olvidada, alguien probando contraseñas o una cuenta modificada no comprometan el sistema**.

> [!example] Prueba independiente
> tras 5 intentos fallidos en 15 minutos sobre una cuenta, el siguiente se rechaza aunque la contraseña sea correcta, y vuelve a aceptarse pasados 5 minutos. Una sesión con más de 12 horas desde su inicio deja de servir: la siguiente acción lleva al ingreso con un aviso y, si vuelve a entrar la misma cuenta, a la pantalla donde se estaba. Si se cambia el rol de una cuenta con sesión abierta, su siguiente acción lleva al ingreso con un aviso.

## Requisitos

- [[SPEC-001 RF-9 — Bloqueo por intentos fallidos]]
- [[SPEC-001 RF-10 — Vencimiento de la sesión]]
- [[SPEC-001 RF-11 — Regreso tras el vencimiento]]
- [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión]]

## Tareas (10/10)

- ✅ [[SPEC-001 T032|T032]]
- ✅ [[SPEC-001 T033|T033]]
- ✅ [[SPEC-001 T034|T034]]
- ✅ [[SPEC-001 T035|T035]]
- ✅ [[SPEC-001 T036|T036]]
- ✅ [[SPEC-001 T037|T037]]
- ✅ [[SPEC-001 T038|T038]]
- ✅ [[SPEC-001 T039|T039]]
- ✅ [[SPEC-001 T040|T040]]
- ✅ [[SPEC-001 T045|T045]]

## Pruebas de punta a punta

- [[us2-proteger-cuentas.spec.ts (e2e)]]
