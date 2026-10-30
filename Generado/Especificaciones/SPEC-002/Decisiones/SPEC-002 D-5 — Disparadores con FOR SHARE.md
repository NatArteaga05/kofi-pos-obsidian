---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-5 — Disparadores con FOR SHARE

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-8 — Cambios desde dos navegadores|RF-8]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría|RF-10]], [[SPEC-002 RF-11 — Categorías inactivas|RF-11]]

Principios: [[Principio 5 — Persistencia segura]]

## Decisión

**Disparadores con `FOR SHARE`** que impiden un producto activo en una categoría inactiva, e **índices únicos** sobre `name_key`. El servicio comprueba primero para dar los mensajes, y traduce a esos mensajes los errores de la base

## Por qué

La base garantiza las reglas aunque dos sesiones guarden a la vez ([[SPEC-002 RF-8 — Cambios desde dos navegadores|RF-8]], principio 5). PGlite tiene una sola conexión y no puede reproducir dos transacciones simultáneas, pero sí comprobar que el disparador rechaza el cambio

## Alternativa descartada

Solo comprobaciones en el servicio: una carrera entre dos navegadores podría dejar el menú inválido. `SERIALIZABLE` con reintentos: más complejo para el mismo resultado

## Tareas que la aplican

- ✅ [[SPEC-002 T006|T006]]
