---
tags:
  - decision
spec: "SPEC-004"
---

# SPEC-004 D-7 — El rechazo por rol se muestra en la propia pantalla

Especificación: [[SPEC-004 Dashboard|SPEC-004]] · Requisitos: [[SPEC-004 RF-9 — Ventas del mes en curso|RF-9]]

## Decisión

**El rechazo por rol se muestra en la propia pantalla:** `DashboardPage` no pide el mes con una sesión de cajero; si aun así recibe un `403` del mes (por ejemplo, porque cambió el rol de la cuenta), muestra el mensaje de la API en lugar de esa sección, sin cifras del mes, y mantiene el resumen de hoy

## Por qué

Cumple `docs/architecture.md` §6.2 (la interfaz muestra el mensaje del módulo) sin depender del aviso de la pantalla inicial de [[SPEC-002 Menú|SPEC-002]] ([[SPEC-002 D-9 — El rechazo al cajero lo decide la API|D-9]] de ese plan)

## Alternativa descartada

Volver a `/` con el aviso, como `MenuAdminPage`: el cajero perdería también el resumen de hoy

## Tareas que la aplican

- ✅ [[SPEC-004 T019|T019]]
