---
tags:
  - historia
spec: "SPEC-002"
prioridad: "P3"
---

# SPEC-002 HU-3 — Consultar el menú vigente (P3)

Especificación: [[SPEC-002 Menú|SPEC-002]]

Como **persona del local (dueño o cajero)**, quiero **consultar el menú vigente con sus precios** para **responder a la clientela qué hay y cuánto cuesta**.

> [!example] Prueba independiente
> con un menú cargado, una sesión de cajero abre «Ver menú» y ve las categorías activas con sus productos activos y sus precios, sin ninguna opción para modificarlos. Si no hay productos en el menú vigente, se muestra un aviso. Un cambio hecho por el dueño se ve al volver a abrir la consulta.

## Requisitos

- [[SPEC-002 RF-13 — Acceso a la consulta]]
- [[SPEC-002 RF-14 — Consulta del menú vigente]]

## Tareas (5/5)

- ✅ [[SPEC-002 T031|T031]]
- ✅ [[SPEC-002 T032|T032]]
- ✅ [[SPEC-002 T033|T033]]
- ✅ [[SPEC-002 T043|T043]]
- ✅ [[SPEC-002 T045|T045]]

## Pruebas de punta a punta

- [[menu-us3-consultar.spec.ts (e2e)]]
