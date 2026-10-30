---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-1 — El menú se integra en el monorepo de SPEC-001 sin dependencias nuevas

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-1 — Acceso a la administración del menú|RF-1]]

## Decisión

**El menú se integra en el monorepo de [[SPEC-001 Acceso|SPEC-001]] sin dependencias nuevas**, y sus historias usan la sesión de Acceso (`feat/001-acceso-us1`, ya en `develop` desde #15)

## Por qué

Las rutas necesitan `requireSession` y las pantallas, la sesión de la interfaz; duplicarlas o simularlas en producción dejaría dos versiones de Acceso

## Alternativa descartada

Empezar las historias con un `requireSession` provisional: habría que reescribirlo y podría dejar rutas sin proteger

## Tareas que la aplican

_Ninguno._
