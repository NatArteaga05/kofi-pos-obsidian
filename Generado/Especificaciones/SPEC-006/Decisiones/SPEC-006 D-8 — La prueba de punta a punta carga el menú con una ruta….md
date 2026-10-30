---
tags:
  - decision
spec: "SPEC-006"
---

# SPEC-006 D-8 — La prueba de punta a punta carga el menú con una ruta del servidor de E2E

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Requisitos: [[SPEC-006 RF-2 — Carga en una base nueva|RF-2]]

## Decisión

**La prueba de punta a punta carga el menú con una ruta del servidor de E2E**, que vacía el menú y llama a `loadOfficialMenu` sobre PGlite

## Por qué

La CI no tiene PostgreSQL; así se comprueba en el navegador el resultado de la carga real. El comando contra PostgreSQL se ejecuta en Pulido contra una base de comprobación (§8.3)

## Alternativa descartada

Lanzar el comando en la E2E: necesitaría una base PostgreSQL en la CI

## Tareas que la aplican

- ✅ [[SPEC-006 T005|T005]]
