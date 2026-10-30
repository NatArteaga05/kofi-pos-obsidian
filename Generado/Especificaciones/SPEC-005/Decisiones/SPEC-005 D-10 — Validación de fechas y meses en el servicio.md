---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-10 — Validación de fechas y meses en el servicio

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]]

## Decisión

**Validación de fechas y meses en el servicio**, con los esquemas del contrato (`historyDateSchema`, `historyMonthSchema`) y los mensajes propios del Historial (`400 VALIDATION_ERROR` con `message` «La fecha no es válida», «No se pueden consultar fechas futuras», «El mes no es válido» o «No se pueden consultar meses futuros»), sin límite hacia atrás

## Por qué

La especificación pide esos mensajes ([[SPEC-005 RF-2 — Elegir el día|RF-2]], [[SPEC-005 RF-11 — Elegir el mes|RF-11]]), que la interfaz muestra tal cual (`docs/architecture.md` §6.3), en lugar del genérico «Revisa los datos» de `validate`. Sin límite hacia atrás, por la respuesta de la persona a la duda 2; si algún día se fija uno, se añade aquí una comprobación más

## Alternativa descartada

Usar `validate` con `fields`: la página tendría que traducir el campo a un mensaje. Inventar un límite hacia atrás

## Tareas que la aplican

- ✅ [[SPEC-005 T010|T010]]
- ✅ [[SPEC-005 T024|T024]]
