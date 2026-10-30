---
tags:
  - requisito
spec: "SPEC-003"
---

# SPEC-003 RF-12 — Conservar la venta en preparación

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Historia: [[SPEC-003 HU-2 — No perder la venta en preparación|HU-2]]

- El sistema deberá conservar la venta en preparación de cada cuenta en cada navegador, con sus líneas, sus cantidades y el medio de pago elegido, hasta que se registre o se descarte ([[SPEC-003 RF-13 — Venta en preparación y fin de la sesión|RF-13]], [[SPEC-003 RF-14 — Descartar la venta en preparación|RF-14]]), aunque se recargue la pantalla, se vaya a otra pantalla del sistema o se cierre y se vuelva a abrir la pestaña o el navegador.
- El sistema deberá mostrar la misma venta en preparación en todas las pestañas del mismo navegador con la misma cuenta: cuando cambia o se registra en una pestaña, las demás muestran la versión más reciente.
- Cuando se vuelve a mostrar una venta en preparación conservada, el sistema deberá volver a calcularla con el menú vigente ([[SPEC-003 RF-4 — Importes calculados por el sistema|RF-4]] y [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]]).

## Decisiones que lo resuelven

- [[SPEC-003 D-8 — La venta en preparación se guarda en localStorage]]
- [[SPEC-003 D-13 — Medio de pago con códigos estables en inglés]]

## Tareas que lo cubren

- ✅ [[SPEC-003 T022|T022]]
- ✅ [[SPEC-003 T025|T025]]
- ✅ [[SPEC-003 T027|T027]]
