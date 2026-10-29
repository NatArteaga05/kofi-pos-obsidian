---
tags:
  - especificacion
  - modulo/sales
  - modulo/menu
spec: "SPEC-007"
estado: "revisada"
fecha: "2026-10-28"
tareas: "12/12"
avance: "completa"
---

# SPEC-007 — Ventas de demostración

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-28 · **Tareas:** 12/12 (completa)

> [!abstract] Objetivo
> Poder llenar una base que tiene el menú oficial, y todavía ninguna venta, con tres meses de ventas pasadas variadas y creíbles, armadas con los productos del menú oficial, para mostrar el Historial (y el Dashboard) con datos parecidos a los de un local en marcha: días con más y menos ventas, días sin ventas, ventas de un solo producto y ventas combinadas, pagos en efectivo y con QR, y registradas por las cuentas de la base.

## Relaciones

- **Depende de:** [[SPEC-006 Menú inicial]], [[SPEC-002 Menú]], [[SPEC-001 Acceso]], [[SPEC-003 Ventas]], [[SPEC-005 Historial y reportes]], [[SPEC-004 Dashboard]]
- **La usan:** —
- **Módulos del código:** [[Módulo Ventas (sales)|sales]], [[Módulo Menú (menu)|menu]]
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Llenar una base con tres meses de ventas variadas** (P1): Como persona que prepara el sistema, quiero cargar con una sola orden, en una base con el menú oficial y sin ventas, tres meses de ventas pasadas variadas armadas con ese menú para mostrar el Historial de ventas con días, meses y ventas parecidos a los de un local en marcha, sin registrar miles de ventas a mano.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Ejecución de la carga | HU-1 |
| RF-2 | Solo en una base preparada y sin ventas | HU-1 |
| RF-3 | Confirmación escrita | HU-1 |
| RF-4 | Días y horas de las ventas | HU-1 |
| RF-5 | Contenido de cada venta | HU-1 |
| RF-6 | Medio de pago | HU-1 |
| RF-7 | Quién registró cada venta | HU-1 |
| RF-8 | Número y orden de las ventas | HU-1 |
| RF-9 | Ventas como cualquier otra | HU-1 |
| RF-10 | Carga completa o nada | HU-1 |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| RNF-1 | Idioma |
| RNF-2 | Importes exactos |
| RNF-3 | Rapidez |
| RNF-4 | Historial ágil |

## Decisiones técnicas

| # | Decisión |
| --- | --- |
| D-1 | Comando nuevo npm run load:demo-sales -w @kofi/api |
| D-2 | Dos transacciones: inspección siempre deshecha y carga |
| D-3 | «Hoy» sale de PostgreSQL |
| D-4 | menu/index.ts exporta OFFICIAL_MENU |
| D-5 | Generador pseudoaleatorio propio con semilla |
| D-6 | checkDemoSales comprueba cada regla de RF-4 a RF-8 sobre el resultado |
| D-11 | Si el generador agota sus 50 intentos, la carga no se completa y el comando muestra el mensaje de RF-10 |
| D-7 | Confirmación con node:readline/promises |
| D-8 | El comando recibe sus dependencias |
| D-9 | La prueba de punta a punta carga con una ruta del servidor de E2E |
| D-10 | Inserción con insertSalesBatch en lotes de 250 |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 0/0 | sin tareas |
| Fase 2 — Base común | 2/2 | ✅ |
| Fase 3 — US1: llenar una base con tres meses de ventas variadas (P1) | 8/8 | ✅ |
| Fase 4 — Pulido | 2/2 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-29 | [#52](https://github.com/Tutuma-jar/kofi-pos-v2/pull/52) | docs(sales): pulir la carga de ventas de demostración [SPEC-007] |
| 2026-10-28 | [#51](https://github.com/Tutuma-jar/kofi-pos-v2/pull/51) | feat(sales): cargar ventas de demostración [SPEC-007] |
| 2026-10-28 | [#49](https://github.com/Tutuma-jar/kofi-pos-v2/pull/49) | docs(sales): especificar ventas-demo [SPEC-007] |

## Pruebas de punta a punta

- [e2e/ventas-demo-us1-cargar.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/ventas-demo-us1-cargar.spec.ts)

## Archivos

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/007-ventas-demo/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/007-ventas-demo/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/007-ventas-demo/tasks.md)
