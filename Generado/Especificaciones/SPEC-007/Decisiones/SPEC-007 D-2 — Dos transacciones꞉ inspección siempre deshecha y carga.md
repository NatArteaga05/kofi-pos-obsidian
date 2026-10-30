---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-2 — Dos transacciones: inspección siempre deshecha y carga

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]], [[SPEC-007 RF-3 — Confirmación escrita|RF-3]]

## Decisión

**Dos transacciones: inspección siempre deshecha y carga.** La inspección migra, comprueba y calcula [n], y termina con `ROLLBACK`; la carga repite todo con bloqueos

## Por qué

Pedir «CARGAR» con una transacción abierta mantendría bloqueado el contador de ventas y frenaría «Nueva venta» mientras la persona lee. Deshacer la inspección garantiza que nada cambie antes de confirmar ([[SPEC-007 RF-3 — Confirmación escrita|RF-3]]), y repetir la comprobación cubre los cambios mientras se espera

## Alternativa descartada

Una sola transacción abierta durante la pregunta; o comprobar sin transacción, que no podría migrar una base sin cambiarla

## Tareas que la aplican

- ✅ [[SPEC-007 T007|T007]]
- ✅ [[SPEC-007 T008|T008]]
