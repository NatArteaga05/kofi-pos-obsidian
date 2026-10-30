---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-11 — Si el generador agota sus 50 intentos, la carga no se completa y el comando muestra el mensaje de RF-10

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-10 — Carga completa o nada|RF-10]]

## Decisión

**Si el generador agota sus 50 intentos, la carga no se completa y el comando muestra el mensaje de [[SPEC-007 RF-10 — Carga completa o nada|RF-10]]**, sin cambiar nada. La prueba del generador comprueba que no ocurre con 1000 semillas

## Por qué

[[SPEC-007 RF-10 — Carga completa o nada|RF-10]] cubre cualquier carga que «no se puede completar»; sus causas son ejemplos. Es un caso que las pruebas descartan en la práctica, y un mensaje propio sería un texto que la especificación no fija

## Alternativa descartada

Un mensaje nuevo para este caso: cambiaría la especificación por un caso que no debería verse; reintentar sin límite: el comando podría no terminar

## Tareas que la aplican

- ✅ [[SPEC-007 T006|T006]]
- ✅ [[SPEC-007 T009|T009]]
