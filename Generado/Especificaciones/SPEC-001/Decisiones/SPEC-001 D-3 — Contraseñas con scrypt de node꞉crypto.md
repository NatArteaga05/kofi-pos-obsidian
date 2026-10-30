---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-3 — Contraseñas con scrypt de node:crypto

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-1 — Ingreso con credenciales|RF-1]], [[SPEC-001 RNF-1 — Contraseñas protegidas|RNF-1]]

## Decisión

**Contraseñas con `scrypt` de `node:crypto`** (N=2^15, r=8, p=3)

## Por qué

Viene con Node: no agrega dependencias. Es un algoritmo resistente a fuerza bruta con GPU, con parámetros guardados junto al hash

## Alternativa descartada

`argon2` (paquete nativo): otra dependencia con binarios por plataforma, en un equipo que trabaja en Windows

## Tareas que la aplican

- ✅ [[SPEC-001 T014|T014]]
