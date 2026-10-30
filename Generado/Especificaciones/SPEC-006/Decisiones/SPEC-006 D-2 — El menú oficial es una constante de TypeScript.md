---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-2 — El menú oficial es una constante de TypeScript

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-1 — Contenido del menú oficial|RF-1]]

## Decisión

**El menú oficial es una constante de TypeScript** (`OFFICIAL_MENU`), con el precio como texto («10,00»)

## Por qué

Lo validan los mismos esquemas que lo que escribe el dueño, y se lee igual que la tabla de la especificación

## Alternativa descartada

Migración `004` con `INSERT`: se aplicaría sola en todas las bases, también en las de pruebas y comprobación y al arrancar la API, en contra de la carga manual y única de la especificación, y saltaría los servicios

## Tareas que la aplican

- ✅ [[SPEC-006 T001|T001]]
