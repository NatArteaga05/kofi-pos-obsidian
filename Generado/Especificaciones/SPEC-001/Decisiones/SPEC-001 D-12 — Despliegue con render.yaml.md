---
tags:
  - decision
spec: "SPEC-001"
---

# SPEC-001 D-12 — Despliegue con render.yaml

Especificación: [[SPEC-001 Acceso|SPEC-001]] · Requisitos: [[SPEC-001 RNF-4 — Rapidez|RNF-4]]

## Decisión

**Despliegue con `render.yaml`** (Blueprint): sitio estático `kofi-web` (publica `apps/web/dist`, reescribe `/api/*` a la API y `/*` a `/index.html`) y servicio web `kofi-api` (aplica las migraciones al arrancar, comprobación de salud en `/api/health`). `DATABASE_URL` se declara sin valor (`sync: false`) y se carga en Render. Neon aloja la base de producción. **Comprobaciones antes de `main`:** mientras Acceso no esté en `main`, el Blueprint apunta a la rama que se comprueba (la de definición en la Preparación y la de pulido al final), con su propia base de Neon. Cuando Acceso llega a `main`, se cambia a `main` y se usa la base de producción

## Por qué

La configuración queda versionada sin secretos. El build instala también las dependencias de desarrollo (`npm ci --include=dev`), porque TypeScript lo es

## Alternativa descartada

Configurar Render a mano: no queda registro ni se puede revisar en un PR

## Tareas que la aplican

- ✅ [[SPEC-001 T007|T007]]
