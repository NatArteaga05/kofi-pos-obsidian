---
tags:
  - especificacion
  - modulo/menu
spec: "SPEC-006"
estado: "revisada"
fecha: "2026-10-28"
tareas: "8/8"
avance: "completa"
---

# SPEC-006 — Menú inicial

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-28 · **Tareas:** 8/8 (completa)

> [!abstract] Objetivo
> Que la base oficial de Kofi empiece con el menú oficial de la cafetería, y solo con él, cargado de una vez y sin errores de tipeo, para que el local pueda vender desde el primer día. Después de la carga, el dueño mantiene el menú como siempre, desde «Administrar menú» (SPEC-002).

## Relaciones

- **Depende de:** [[SPEC-002 Menú]]
- **La usan:** [[SPEC-007 Ventas de demostración]]
- **Módulos del código:** [[Módulo Menú (menu)|menu]]
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Empezar la base oficial con el menú de Kofi** (P1): Como persona que prepara el sistema, quiero cargar el menú oficial de Kofi en la base nueva con una sola orden para que el local pueda vender desde el primer día sin que el dueño escriba 37 productos a mano ni se cuele un dato de prueba.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Contenido del menú oficial | HU-1 |
| RF-2 | Carga en una base nueva | HU-1 |
| RF-3 | Solo en una base sin menú | HU-1 |
| RF-4 | Carga completa o nada | HU-1 |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| RNF-1 | Idioma |
| RNF-2 | Importes exactos |
| RNF-3 | Rapidez |

## Decisiones técnicas

| # | Decisión |
| --- | --- |
| D-1 | Comando npm run load:menu -w @kofi/api |
| D-2 | El menú oficial es una constante de TypeScript |
| D-3 | Se carga con saveCategory y saveProduct |
| D-4 | Las migraciones pendientes se aplican dentro de la misma transacción que la carga |
| D-5 | Dos bloqueos al empezar |
| D-6 | Una prueba compara OFFICIAL_MENU con la tabla «Menú oficial» de spec.md |
| D-7 | El comando recibe sus dependencias |
| D-8 | La prueba de punta a punta carga el menú con una ruta del servidor de E2E |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 0/0 | sin tareas |
| Fase 2 — Base común | 1/1 | ✅ |
| Fase 3 — US1: empezar la base oficial con el menú de Kofi (P1) | 5/5 | ✅ |
| Fase 4 — Pulido | 2/2 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-28 | [#50](https://github.com/Tutuma-jar/kofi-pos-v2/pull/50) | docs(menu): pulir la carga del menú oficial [SPEC-006] |
| 2026-10-28 | [#48](https://github.com/Tutuma-jar/kofi-pos-v2/pull/48) | feat(menu): cargar el menú oficial en una base nueva [SPEC-006] |
| 2026-10-28 | [#47](https://github.com/Tutuma-jar/kofi-pos-v2/pull/47) | feat(menu): cargar el menú oficial [SPEC-006] |

## Pruebas de punta a punta

- [e2e/menu-inicial-us1-cargar.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/menu-inicial-us1-cargar.spec.ts)

## Archivos

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/006-menu-inicial/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/006-menu-inicial/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/006-menu-inicial/tasks.md)
