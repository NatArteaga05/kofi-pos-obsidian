---
tags:
  - decision
spec: "SPEC-007"
---

# SPEC-007 D-9 — La prueba de punta a punta carga con una ruta del servidor de E2E

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Requisitos: [[SPEC-007 RF-9 — Ventas como cualquier otra|RF-9]]

## Decisión

**La prueba de punta a punta carga con una ruta del servidor de E2E**, que reemplaza el menú por `OFFICIAL_MENU` y llama a `loadDemoSales` sobre PGlite con el reloj falso y una semilla fija

## Por qué

La CI no tiene PostgreSQL; así se comprueba en el Historial el resultado de la carga real. El comando contra PostgreSQL se ejecuta en Pulido (§8.3)

## Alternativa descartada

Lanzar el comando en la E2E: necesitaría PostgreSQL en la CI

## Tareas que la aplican

- ✅ [[SPEC-007 T010|T010]]
