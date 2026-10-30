---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-13 — Venta en preparación y fin de la sesión

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-2 — No perder la venta en preparación|HU-2]]

- Cuando vence la sesión ([[SPEC-001 Acceso|SPEC-001]], [[SPEC-003 RF-10 — Ventas desde varios navegadores|RF-10]]) y la misma cuenta vuelve a entrar en ese navegador, el sistema deberá conservarle la venta en preparación que tenía: la ve al volver a «Nueva venta», ya sea porque [[SPEC-001 Acceso|SPEC-001]] ([[SPEC-001 RF-11 — Regreso tras el vencimiento|RF-11]]) la regresa a esa pantalla o porque la abre después.
- Cuando la persona elige «Cerrar sesión» ([[SPEC-001 Acceso|SPEC-001]], [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]]), el sistema deberá descartar la venta en preparación de esa cuenta en ese navegador.
- Cuando una cuenta distinta de la que tenía una venta en preparación en un navegador abre «Nueva venta» en él, el sistema deberá no mostrársela y descartarla.
- Si la sesión termina porque la cuenta cambió o se eliminó ([[SPEC-001 Acceso|SPEC-001]], [[SPEC-003 RF-12 — Conservar la venta en preparación|RF-12]]), entonces el sistema deberá descartar la venta en preparación.

## Decisiones que lo resuelven

- [[SPEC-003 D-8 — La venta en preparación se guarda en localStorage]]
- [[SPEC-003 D-9 — SessionProvider recibe onSessionEnd(reason)]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T022|T022]]
- ✅ [[SPEC-003 T023|T023]]
- ✅ [[SPEC-003 T025|T025]]
- ✅ [[SPEC-003 T027|T027]]
