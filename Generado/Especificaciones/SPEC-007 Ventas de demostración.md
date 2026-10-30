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
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1 — Llenar una base con tres meses de ventas variadas]] (P1)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-007 RF-1 — Ejecución de la carga\|RF-1]] | Ejecución de la carga | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas\|RF-2]] | Solo en una base preparada y sin ventas | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-3 — Confirmación escrita\|RF-3]] | Confirmación escrita | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-4 — Días y horas de las ventas\|RF-4]] | Días y horas de las ventas | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-5 — Contenido de cada venta\|RF-5]] | Contenido de cada venta | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-6 — Medio de pago\|RF-6]] | Medio de pago | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-7 — Quién registró cada venta\|RF-7]] | Quién registró cada venta | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-8 — Número y orden de las ventas\|RF-8]] | Número y orden de las ventas | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-9 — Ventas como cualquier otra\|RF-9]] | Ventas como cualquier otra | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |
| [[SPEC-007 RF-10 — Carga completa o nada\|RF-10]] | Carga completa o nada | [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas\|HU-1]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-007 RNF-1 — Idioma\|RNF-1]] | Idioma |
| [[SPEC-007 RNF-2 — Importes exactos\|RNF-2]] | Importes exactos |
| [[SPEC-007 RNF-3 — Rapidez\|RNF-3]] | Rapidez |
| [[SPEC-007 RNF-4 — Historial ágil\|RNF-4]] | Historial ágil |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-007 D-1 — Comando nuevo npm run load꞉demo-sales -w @kofi∕api\|D-1]] | Comando nuevo npm run load:demo-sales -w @kofi/api | [[SPEC-007 RF-1 — Ejecución de la carga\|RF-1]] |
| [[SPEC-007 D-2 — Dos transacciones꞉ inspección siempre deshecha y carga\|D-2]] | Dos transacciones: inspección siempre deshecha y carga | [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas\|RF-2]], [[SPEC-007 RF-3 — Confirmación escrita\|RF-3]] |
| [[SPEC-007 D-3 — «Hoy» sale de PostgreSQL\|D-3]] | «Hoy» sale de PostgreSQL | [[SPEC-007 RF-1 — Ejecución de la carga\|RF-1]], [[SPEC-007 RF-4 — Días y horas de las ventas\|RF-4]] |
| [[SPEC-007 D-4 — menu∕index.ts exporta OFFICIAL_MENU\|D-4]] | menu/index.ts exporta OFFICIAL_MENU | [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas\|RF-2]], [[SPEC-007 RF-5 — Contenido de cada venta\|RF-5]] |
| [[SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla\|D-5]] | Generador pseudoaleatorio propio con semilla | [[SPEC-007 RF-3 — Confirmación escrita\|RF-3]], [[SPEC-007 RF-4 — Días y horas de las ventas\|RF-4]], [[SPEC-007 RF-5 — Contenido de cada venta\|RF-5]], [[SPEC-007 RF-6 — Medio de pago\|RF-6]], [[SPEC-007 RF-7 — Quién registró cada venta\|RF-7]] |
| [[SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8…\|D-6]] | checkDemoSales comprueba cada regla de RF-4 a RF-8 sobre el resultado | [[SPEC-007 RF-4 — Días y horas de las ventas\|RF-4]], [[SPEC-007 RF-5 — Contenido de cada venta\|RF-5]], [[SPEC-007 RF-6 — Medio de pago\|RF-6]], [[SPEC-007 RF-7 — Quién registró cada venta\|RF-7]], [[SPEC-007 RF-8 — Número y orden de las ventas\|RF-8]] |
| [[SPEC-007 D-11 — Si el generador agota sus 50 intentos, la carga no se…\|D-11]] | Si el generador agota sus 50 intentos, la carga no se completa y el comando muestra el mensaje de RF-10 | [[SPEC-007 RF-10 — Carga completa o nada\|RF-10]] |
| [[SPEC-007 D-7 — Confirmación con node꞉readline∕promises\|D-7]] | Confirmación con node:readline/promises | [[SPEC-007 RF-3 — Confirmación escrita\|RF-3]] |
| [[SPEC-007 D-8 — El comando recibe sus dependencias\|D-8]] | El comando recibe sus dependencias | [[SPEC-007 RF-3 — Confirmación escrita\|RF-3]], [[SPEC-007 RF-10 — Carga completa o nada\|RF-10]] |
| [[SPEC-007 D-9 — La prueba de punta a punta carga con una ruta del…\|D-9]] | La prueba de punta a punta carga con una ruta del servidor de E2E | [[SPEC-007 RF-9 — Ventas como cualquier otra\|RF-9]] |
| [[SPEC-007 D-10 — Inserción con insertSalesBatch en lotes de 250\|D-10]] | Inserción con insertSalesBatch en lotes de 250 | [[SPEC-007 RF-8 — Número y orden de las ventas\|RF-8]], [[SPEC-007 RF-10 — Carga completa o nada\|RF-10]] |

## Tareas

### Fase 1 — Preparación (0/0)

_Sin tareas._

### Fase 2 — Base común (2/2)

- ✅ [[SPEC-007 T001|T001]] [api] [P] — Exportar OFFICIAL_MENU y su tipo OfficialCategory desde apps/api/src/modules/menu/index.ts, en una línea…
- ✅ [[SPEC-007 T002|T002]] [api] [P] — Escribir apps/api/src/modules/sales/demo-sales.random.ts con createRandom(seed, stream, attempt): mulberry32…

### Fase 3 — US1: llenar una base con tres meses de ventas variadas (P1) (8/8)

- ✅ [[SPEC-007 T003|T003]] [api] [US1] — Escribir en demo-sales.calendar.ts demoPeriod(now) y planDemoCalendar(period, seed), y en demo-sales.rules.ts…
- ✅ [[SPEC-007 T004|T004]] [api] [US1] — Añadir a demo-sales.rules.ts checkDemoSales(sales, context) con las reglas de horas y contenido: horario del…
- ✅ [[SPEC-007 T005|T005]] [api] [US1] — Completar checkDemoSales con las reglas de pago, cuentas y número: 55 % a 65 % en efectivo, los dos medios…
- ✅ [[SPEC-007 T006|T006]] [api] [US1] — Escribir demo-sales.generator.ts con generateDemoSales(calendar, seed, products, accounts, firstNumber) según…
- ✅ [[SPEC-007 T007|T007]] [api] [US1] — Escribir en demo-sales.service.ts checkBase(tx) e inspectDemoSales(db, { seed, now? }): toma now de SELECT…
- ✅ [[SPEC-007 T008|T008]] [api] [US1] — Escribir en demo-sales.service.ts loadDemoSales(db, { seed, now }): en una sola transacción,…
- ✅ [[SPEC-007 T009|T009]] [api] [US1] — Escribir demo-sales.cli.ts con runDemoSalesLoad({ env, createDatabase, ask, write, seed }), sus siete mensajes…
- ✅ [[SPEC-007 T010|T010]] [integración] [US1] — Añadir a apps/api/test/e2e-server.ts la ruta POST /api/__test/demo-sales, que vacía ventas y menú como POST…

### Fase 4 — Pulido (2/2)

- ✅ [[SPEC-007 T011|T011]] [integración] — Añadir a «Comandos» de AGENTS.md la fila «Cargar ventas de demostración en una base con el menú oficial» con…
- ✅ [[SPEC-007 T012|T012]] [integración] — Comprobar el comando contra PostgreSQL real en dos bases de Neon de comprobación con el menú oficial y sin…

## Pull requests

- [[PR 52]] — docs(sales): pulir la carga de ventas de demostración [SPEC-007] (2026-10-29)
- [[PR 51]] — feat(sales): cargar ventas de demostración [SPEC-007] (2026-10-28)
- [[PR 49]] — docs(sales): especificar ventas-demo [SPEC-007] (2026-10-28)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/007-ventas-demo/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/007-ventas-demo/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/007-ventas-demo/tasks.md)
