---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-6 — Todos los errores de datos en un solo 400 VALIDATION_ERROR

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-3 — Crear y renombrar una categoría|RF-3]], [[SPEC-002 RF-6 — Validación de un producto|RF-6]]

## Decisión

**Todos los errores de datos en un solo `400 VALIDATION_ERROR`**, también el nombre repetido y la categoría inactiva, con un mensaje por campo

## Por qué

[[SPEC-002 RF-6 — Validación de un producto|RF-6]] pide indicar **cada** dato que falla. Si el nombre repetido llegara como un error aparte, el dueño corregiría el precio y solo entonces vería el nombre

## Alternativa descartada

Un código por regla (`NAME_TAKEN`, `CATEGORY_INACTIVE`…), cada uno en su respuesta: obliga a varios intentos

## Tareas que la aplican

_Ninguno._
