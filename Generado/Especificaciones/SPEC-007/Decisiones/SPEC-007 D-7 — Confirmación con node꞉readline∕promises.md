---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-7 — Confirmación con node:readline/promises

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-3 — Confirmación escrita|RF-3]]

## Decisión

**Confirmación con `node:readline/promises`**: si la entrada se cierra (Ctrl+C antes de responder o una entrada que no es terminal), la respuesta es vacía y se cancela

## Por qué

No necesita dependencias y funciona igual en las terminales de Windows. Una entrada cerrada nunca carga

## Alternativa descartada

Un argumento `--yes`: permitiría cargar sin leer el aviso, en contra del resguardo que pidió la persona

## Tareas que la aplican

- ✅ [[SPEC-007 T009|T009]]
