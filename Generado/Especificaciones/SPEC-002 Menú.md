---
tags:
  - especificacion
  - modulo/menu
spec: "SPEC-002"
estado: "revisada"
fecha: "2026-10-24"
tareas: "45/45"
avance: "completa"
---

# SPEC-002 — Menú

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-24 · **Tareas:** 45/45 (completa)

> [!abstract] Objetivo
> Que el dueño pueda armar y mantener el menú de Kofi (categorías y productos con su precio en bolivianos) desde el sistema, sin ayuda técnica, y que cualquier persona del local pueda consultar el menú vigente.

## Relaciones

- **Depende de:** [[SPEC-001 Acceso]]
- **La usan:** [[SPEC-003 Ventas]], [[SPEC-006 Menú inicial]], [[SPEC-007 Ventas de demostración]]
- **Módulos del código:** [[Módulo Menú (menu)|menu]]
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Armar el menú** (P1): Como dueño, quiero crear y editar las categorías y los productos del menú, con su precio, para tener en el sistema lo que vende Kofi y corregirlo cuando cambie un nombre o un precio.
- **HU-2 — Sacar del menú lo que no se ofrece** (P2): Como dueño, quiero desactivar y reactivar productos y categorías para dejar de ofrecer lo que se acabó o no es de temporada sin perderlo ni tener que volver a cargarlo.
- **HU-3 — Consultar el menú vigente** (P3): Como persona del local (dueño o cajero), quiero consultar el menú vigente con sus precios para responder a la clientela qué hay y cuánto cuesta.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Acceso a la administración del menú | HU-1 |
| RF-2 | Lista de administración | HU-1 |
| RF-3 | Crear y renombrar una categoría | HU-1 |
| RF-4 | Crear un producto | HU-1 |
| RF-5 | Editar un producto | HU-1 |
| RF-6 | Validación de un producto | HU-1 |
| RF-7 | Guardado completo o nada | HU-1 |
| RF-8 | Cambios desde dos navegadores | HU-1 |
| RF-15 | Menú vigente para otros módulos | HU-1 |
| RF-9 | Desactivar y reactivar un producto | HU-2 |
| RF-10 | Desactivar y reactivar una categoría | HU-2 |
| RF-11 | Categorías inactivas | HU-2 |
| RF-12 | Datos que se conservan | HU-2 |
| RF-13 | Acceso a la consulta | HU-3 |
| RF-14 | Consulta del menú vigente | HU-3 |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| RNF-1 | Idioma |
| RNF-2 | Importes exactos |
| RNF-3 | Rapidez |
| RNF-4 | Uso con teclado |

## Decisiones técnicas

| # | Decisión |
| --- | --- |
| D-1 | El menú se integra en el monorepo de SPEC-001 sin dependencias nuevas |
| D-2 | Precios en centavos enteros |
| D-3 | Letras admitidas |
| D-4 | Comparación con name_key calculada en la API |
| D-5 | Disparadores con FOR SHARE |
| D-6 | Todos los errores de datos en un solo 400 VALIDATION_ERROR |
| D-7 | Rutas de acción |
| D-8 | La pantalla inicial recibe sus enlaces de routes.tsx |
| D-9 | El rechazo al cajero lo decide la API |
| D-10 | MenuClientProvider |
| D-11 | Escenarios de desarrollo del menú |
| D-12 | Medición de RNF-3 con 200 productos |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 1/1 | ✅ |
| Fase 2 — Base común | 15/15 | ✅ |
| Fase 3 — US1: armar el menú (P1) | 11/11 | ✅ |
| Fase 4 — US2: sacar del menú lo que no se ofrece (P2) | 8/8 | ✅ |
| Fase 5 — US3: consultar el menú vigente (P3) | 5/5 | ✅ |
| Fase 6 — Pulido | 5/5 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-28 | [#44](https://github.com/Tutuma-jar/kofi-pos-v2/pull/44) | style(menu): añadir un índice de categorías al menú [SPEC-002] |
| 2026-10-27 | [#36](https://github.com/Tutuma-jar/kofi-pos-v2/pull/36) | style(menu): disenar las pantallas del menu [SPEC-002] |
| 2026-10-25 | [#24](https://github.com/Tutuma-jar/kofi-pos-v2/pull/24) | test(menu): completar el pulido del menu [SPEC-002] |
| 2026-10-25 | [#23](https://github.com/Tutuma-jar/kofi-pos-v2/pull/23) | feat(menu): consultar el menu vigente [SPEC-002] |
| 2026-10-25 | [#22](https://github.com/Tutuma-jar/kofi-pos-v2/pull/22) | feat(menu): desactivar y reactivar el menu [SPEC-002] |
| 2026-10-25 | [#21](https://github.com/Tutuma-jar/kofi-pos-v2/pull/21) | feat(menu): armar el menu [SPEC-002] |
| 2026-10-24 | [#12](https://github.com/Tutuma-jar/kofi-pos-v2/pull/12) | docs(menu): especificar menu [SPEC-002] |

## Pruebas de punta a punta

- [e2e/menu-us1-armar-menu.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/menu-us1-armar-menu.spec.ts)
- [e2e/menu-us2-desactivar.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/menu-us2-desactivar.spec.ts)
- [e2e/menu-us3-consultar.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/menu-us3-consultar.spec.ts)

## Archivos

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/tasks.md)
- [evidence/deployment.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/evidence/deployment.md)
- [evidence/menu-performance.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/evidence/menu-performance.json)
