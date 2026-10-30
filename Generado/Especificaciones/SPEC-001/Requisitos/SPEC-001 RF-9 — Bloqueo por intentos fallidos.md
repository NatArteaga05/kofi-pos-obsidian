---
tags:
  - requisito
spec: "SPEC-001"
---

# SPEC-001 RF-9 — Bloqueo por intentos fallidos

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Historia: [[SPEC-001 HU-2 — Proteger las cuentas|HU-2]]

- Cuando una cuenta acumula 5 intentos fallidos en 15 minutos, sin un ingreso correcto entre ellos, el sistema deberá rechazar todo ingreso a esa cuenta durante 5 minutos, aunque la contraseña sea correcta, con el mensaje «Demasiados intentos. Vuelve a intentarlo en N minutos» (N redondeado hacia arriba; «1 minuto» en singular).
- El sistema deberá dejar de contar los intentos fallidos con más de 15 minutos de antigüedad.
- Mientras una cuenta está bloqueada, el sistema deberá rechazar sus intentos sin contarlos y sin alargar el bloqueo.
- Cuando una persona inicia sesión correctamente, el sistema deberá reiniciar a cero los intentos fallidos de esa cuenta.
- Cuando terminan los 5 minutos de bloqueo, el sistema deberá volver a aceptar ingresos y contar los intentos desde cero.
- Si el usuario no existe, entonces el sistema deberá responder solo con el mensaje de [[SPEC-001 RF-2 — Credenciales incorrectas|RF-2]], sin bloqueo.

## Decisiones que lo resuelven

- [[SPEC-001 D-4 — Formato común de errores]]
- [[SPEC-001 D-5 — Bloqueo con tabla failed_logins y users.locked_until]]

## Tareas que lo cubren

- ✅ [[SPEC-001 T011|T011]]
- ✅ [[SPEC-001 T032|T032]]
- ✅ [[SPEC-001 T036|T036]]
- ✅ [[SPEC-001 T039|T039]]
- ✅ [[SPEC-001 T040|T040]]
- ✅ [[SPEC-001 T046|T046]]
