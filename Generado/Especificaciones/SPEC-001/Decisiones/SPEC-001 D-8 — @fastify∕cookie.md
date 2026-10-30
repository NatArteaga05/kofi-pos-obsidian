---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-8 — @fastify/cookie

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-1 — Ingreso con credenciales|RF-1]], [[SPEC-001 RF-7 — Cierre de sesión|RF-7]]

## Decisión

**`@fastify/cookie`**

## Por qué

Plugin oficial de Fastify para leer y firmar cookies; evita parsear cabeceras a mano

## Alternativa descartada

Parsear `Cookie` y armar `Set-Cookie` a mano: es fácil equivocarse con los atributos

## Tareas que la aplican

- ✅ [[SPEC-001 T021|T021]]
