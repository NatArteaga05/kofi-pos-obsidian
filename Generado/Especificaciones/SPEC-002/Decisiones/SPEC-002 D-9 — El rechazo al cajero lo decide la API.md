---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-9 — El rechazo al cajero lo decide la API

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-1 — Acceso a la administración del menú|RF-1]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**El rechazo al cajero lo decide la API:** `MenuAdminPage` pide la administración y, ante `403`, vuelve a `/` con el mensaje de la API. La ruta declara `roles: ['owner']` solo para no mostrar el enlace y para el regreso de [[SPEC-001 Acceso|SPEC-001]]

## Por qué

Los permisos reales viven en la API (`docs/architecture.md` §6.6, principio 3) y el texto es el que la API devuelve

## Alternativa descartada

Bloquear la ruta en la interfaz con un texto propio: duplicaría el mensaje y no protegería nada

## Tareas que la aplican

- ✅ [[SPEC-002 T019|T019]]
