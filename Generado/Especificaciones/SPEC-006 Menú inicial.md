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
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi|HU-1 — Empezar la base oficial con el menú de Kofi]] (P1)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-006 RF-1 — Contenido del menú oficial\|RF-1]] | Contenido del menú oficial | [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi\|HU-1]] |
| [[SPEC-006 RF-2 — Carga en una base nueva\|RF-2]] | Carga en una base nueva | [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi\|HU-1]] |
| [[SPEC-006 RF-3 — Solo en una base sin menú\|RF-3]] | Solo en una base sin menú | [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi\|HU-1]] |
| [[SPEC-006 RF-4 — Carga completa o nada\|RF-4]] | Carga completa o nada | [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi\|HU-1]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-006 RNF-1 — Idioma\|RNF-1]] | Idioma |
| [[SPEC-006 RNF-2 — Importes exactos\|RNF-2]] | Importes exactos |
| [[SPEC-006 RNF-3 — Rapidez\|RNF-3]] | Rapidez |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-006 D-1 — Comando npm run load꞉menu -w @kofi∕api\|D-1]] | Comando npm run load:menu -w @kofi/api | [[SPEC-006 RF-2 — Carga en una base nueva\|RF-2]] |
| [[SPEC-006 D-2 — El menú oficial es una constante de TypeScript\|D-2]] | El menú oficial es una constante de TypeScript | [[SPEC-006 RF-1 — Contenido del menú oficial\|RF-1]] |
| [[SPEC-006 D-3 — Se carga con saveCategory y saveProduct\|D-3]] | Se carga con saveCategory y saveProduct | [[SPEC-006 RF-1 — Contenido del menú oficial\|RF-1]], [[SPEC-006 RF-2 — Carga en una base nueva\|RF-2]] |
| [[SPEC-006 D-4 — Las migraciones pendientes se aplican dentro de la…\|D-4]] | Las migraciones pendientes se aplican dentro de la misma transacción que la carga | [[SPEC-006 RF-2 — Carga en una base nueva\|RF-2]], [[SPEC-006 RF-4 — Carga completa o nada\|RF-4]] |
| [[SPEC-006 D-5 — Dos bloqueos al empezar\|D-5]] | Dos bloqueos al empezar | [[SPEC-006 RF-3 — Solo en una base sin menú\|RF-3]] |
| [[SPEC-006 D-6 — Una prueba compara OFFICIAL_MENU con la tabla «Menú…\|D-6]] | Una prueba compara OFFICIAL_MENU con la tabla «Menú oficial» de spec.md | [[SPEC-006 RF-1 — Contenido del menú oficial\|RF-1]] |
| [[SPEC-006 D-7 — El comando recibe sus dependencias\|D-7]] | El comando recibe sus dependencias | [[SPEC-006 RF-2 — Carga en una base nueva\|RF-2]], [[SPEC-006 RF-3 — Solo en una base sin menú\|RF-3]], [[SPEC-006 RF-4 — Carga completa o nada\|RF-4]] |
| [[SPEC-006 D-8 — La prueba de punta a punta carga el menú con una ruta…\|D-8]] | La prueba de punta a punta carga el menú con una ruta del servidor de E2E | [[SPEC-006 RF-2 — Carga en una base nueva\|RF-2]] |

## Tareas

### Fase 1 — Preparación (0/0)

_Sin tareas._

### Fase 2 — Base común (1/1)

- ✅ [[SPEC-006 T001|T001]] [api] — Escribir apps/api/src/modules/menu/official-menu.data.ts con el tipo OfficialCategory y la constante…

### Fase 3 — US1: empezar la base oficial con el menú de Kofi (P1) (5/5)

- ✅ [[SPEC-006 T002|T002]] [api] [US1] — Escribir official-menu.service.ts con loadOfficialMenu(db, menu = OFFICIAL_MENU): en una sola transacción, el…
- ✅ [[SPEC-006 T003|T003]] [api] [US1] — Añadir a loadOfficialMenu el rechazo de una base con menú: después de los bloqueos, si categories o products…
- ✅ [[SPEC-006 T004|T004]] [api] [US1] — Escribir official-menu.cli.ts con runOfficialMenuLoad({ env, createDatabase, write }), sus tres mensajes y el…
- ✅ [[SPEC-006 T005|T005]] [integración] [US1] — Añadir a apps/api/test/e2e-server.ts la ruta POST /api/__test/official-menu, que vacía ventas y menú como POST…
- ✅ [[SPEC-006 T008|T008]] [api] [US1] — Corregir RF-4: si la conexión se corta a mitad de la carga, el comando real se cae con «Unhandled 'error'…

### Fase 4 — Pulido (2/2)

- ✅ [[SPEC-006 T006|T006]] [integración] — Añadir a «Comandos» de AGENTS.md la fila «Cargar el menú oficial en una base nueva» con npm run load:menu -w…
- ✅ [[SPEC-006 T007|T007]] [integración] — Comprobar el comando contra PostgreSQL real en dos bases de Neon de comprobación nuevas y vacías: en la…

## Pull requests

- [[PR 50]] — docs(menu): pulir la carga del menú oficial [SPEC-006] (2026-10-28)
- [[PR 48]] — feat(menu): cargar el menú oficial en una base nueva [SPEC-006] (2026-10-28)
- [[PR 47]] — feat(menu): cargar el menú oficial [SPEC-006] (2026-10-28)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/006-menu-inicial/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/006-menu-inicial/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/006-menu-inicial/tasks.md)
