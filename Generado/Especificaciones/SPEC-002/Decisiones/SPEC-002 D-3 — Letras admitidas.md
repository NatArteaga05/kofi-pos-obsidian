---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-3 — Letras admitidas

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-3 — Crear y renombrar una categoría|RF-3]], [[SPEC-002 RF-6 — Validación de un producto|RF-6]]

## Decisión

**Letras admitidas:** a–z, A–Z, vocales con tilde aguda, «ü» y «ñ», en mayúscula y minúscula. Los nombres se normalizan a NFC antes de validarlos

## Por qué

Es la lectura literal de «letras (con tildes, diéresis y «ñ»)» de la especificación. NFC hace que una «é» escrita con el acento aparte valga lo mismo que la compuesta

## Alternativa descartada

`\p{L}` (cualquier letra Unicode): admitiría alfabetos y signos que la especificación no menciona

## Tareas que la aplican

- ✅ [[SPEC-002 T003|T003]]
