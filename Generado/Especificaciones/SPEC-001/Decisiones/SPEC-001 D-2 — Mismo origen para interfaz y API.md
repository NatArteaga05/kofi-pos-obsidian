---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-2 — Mismo origen para interfaz y API

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RF-1 — Ingreso con credenciales|RF-1]], [[SPEC-001 RF-7 — Cierre de sesión|RF-7]]

## Decisión

**Mismo origen para interfaz y API:** en Render, una regla de reescritura del sitio estático envía `/api/*` al servicio de la API; en desarrollo lo hace el proxy de Vite

## Por qué

Permite `SameSite=Strict`, sin CORS ni cookies de terceros, que los navegadores restringen. Render admite que el destino de una reescritura sea «una URL completa y pública»

## Alternativa descartada

Dominios separados con `SameSite=None` y CORS con credenciales: depende de cookies de terceros. **Riesgo:** la documentación de Render no detalla cómo trata las cookies ni los métodos POST en una reescritura; una tarea de Preparación lo comprueba en un despliegue real antes de construir encima

## Tareas que la aplican

- ✅ [[SPEC-001 T004|T004]]
