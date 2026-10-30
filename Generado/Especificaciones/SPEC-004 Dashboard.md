---
tags:
  - especificacion
  - modulo/dashboard
  - modulo/sales
spec: "SPEC-004"
estado: "revisada"
fecha: "2026-10-24"
tareas: "34/34"
avance: "completa"
---

# SPEC-004 — Dashboard

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-24 · **Tareas:** 34/34 (completa)

> [!abstract] Objetivo
> Que el dueño sepa en un vistazo, sin hacer cuentas, cuánto vendió Kofi hoy y en lo que va del mes, cuánto cobró en efectivo y cuánto con QR, y qué productos se venden más, para controlar la caja al cerrar el día y seguir la marcha del negocio.

## Relaciones

- **Depende de:** [[SPEC-001 Acceso]], [[SPEC-003 Ventas]]
- **La usan:** [[SPEC-005 Historial y reportes]], [[SPEC-007 Ventas de demostración]]
- **Módulos del código:** [[Módulo Dashboard (dashboard)|dashboard]], [[Módulo Ventas (sales)|sales]]
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-004 HU-1 — Ver el resumen de hoy|HU-1 — Ver el resumen de hoy]] (P1)
- [[SPEC-004 HU-2 — Ver el resumen del mes en curso|HU-2 — Ver el resumen del mes en curso]] (P2)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-004 RF-1 — Acceso al resumen\|RF-1]] | Acceso al resumen | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]] | Ventas de hoy | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-3 — Totales de un resumen\|RF-3]] | Totales de un resumen | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-4 — Por medio de pago\|RF-4]] | Por medio de pago | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-5 — Productos más vendidos\|RF-5]] | Productos más vendidos | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-6 — Momento de los datos y actualización\|RF-6]] | Momento de los datos y actualización | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-7 — Sin conexión o con error\|RF-7]] | Sin conexión o con error | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron\|RF-8]] | Las cifras salen de las ventas tal como se registraron | [[SPEC-004 HU-1 — Ver el resumen de hoy\|HU-1]] |
| [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]] | Ventas del mes en curso | [[SPEC-004 HU-2 — Ver el resumen del mes en curso\|HU-2]] |
| [[SPEC-004 RF-10 — Ventas por día\|RF-10]] | Ventas por día | [[SPEC-004 HU-2 — Ver el resumen del mes en curso\|HU-2]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-004 RNF-1 — Idioma\|RNF-1]] | Idioma |
| [[SPEC-004 RNF-2 — Cifras exactas\|RNF-2]] | Cifras exactas |
| [[SPEC-004 RNF-3 — Rapidez\|RNF-3]] | Rapidez |
| [[SPEC-004 RNF-4 — Uso con teclado\|RNF-4]] | Uso con teclado |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-004 D-1 — Las ventas registradas llegan al Dashboard como una…\|D-1]] | Las ventas registradas llegan al Dashboard como una función inyectada | [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]], [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron\|RF-8]], [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]] |
| [[SPEC-004 D-2 — Una ruta por resumen\|D-2]] | Una ruta por resumen | [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]], [[SPEC-004 RF-6 — Momento de los datos y actualización\|RF-6]], [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]] |
| [[SPEC-004 D-3 — La API calcula todo el resumen en memoria\|D-3]] | La API calcula todo el resumen en memoria | [[SPEC-004 RF-3 — Totales de un resumen\|RF-3]], [[SPEC-004 RF-4 — Por medio de pago\|RF-4]], [[SPEC-004 RF-5 — Productos más vendidos\|RF-5]], [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron\|RF-8]], [[SPEC-004 RF-10 — Ventas por día\|RF-10]] |
| [[SPEC-004 D-4 — shared∕calendar.ts en la API\|D-4]] | shared/calendar.ts en la API | [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]], [[SPEC-004 RF-6 — Momento de los datos y actualización\|RF-6]], [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]], [[SPEC-004 RF-10 — Ventas por día\|RF-10]] |
| [[SPEC-004 D-5 — formatDate y formatMonth en el contrato\|D-5]] | formatDate y formatMonth en el contrato | [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]], [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]], [[SPEC-004 RF-10 — Ventas por día\|RF-10]] |
| [[SPEC-004 D-6 — DASHBOARD_MONTH_ROLES en el contrato\|D-6]] | DASHBOARD_MONTH_ROLES en el contrato | [[SPEC-004 RF-1 — Acceso al resumen\|RF-1]], [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]] |
| [[SPEC-004 D-7 — El rechazo por rol se muestra en la propia pantalla\|D-7]] | El rechazo por rol se muestra en la propia pantalla | [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]] |
| [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo\|D-8]] | DashboardClientProvider y escenarios de desarrollo | [[SPEC-004 RF-1 — Acceso al resumen\|RF-1]], [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]], [[SPEC-004 RF-3 — Totales de un resumen\|RF-3]], [[SPEC-004 RF-4 — Por medio de pago\|RF-4]], [[SPEC-004 RF-5 — Productos más vendidos\|RF-5]], [[SPEC-004 RF-6 — Momento de los datos y actualización\|RF-6]], [[SPEC-004 RF-7 — Sin conexión o con error\|RF-7]], [[SPEC-004 RF-8 — Las cifras salen de las ventas tal como se registraron\|RF-8]], [[SPEC-004 RF-9 — Ventas del mes en curso\|RF-9]], [[SPEC-004 RF-10 — Ventas por día\|RF-10]] |
| [[SPEC-004 D-9 — Ruta ∕resumen\|D-9]] | Ruta /resumen | [[SPEC-004 RF-1 — Acceso al resumen\|RF-1]] |
| [[SPEC-004 D-10 — La jornada es el día calendario de Bolivia\|D-10]] | La jornada es el día calendario de Bolivia | [[SPEC-004 RF-2 — Ventas de hoy\|RF-2]], [[SPEC-004 RF-10 — Ventas por día\|RF-10]] |
| [[SPEC-004 D-11 — Medición de RNF-3\|D-11]] | Medición de RNF-3 |  |

## Tareas

### Fase 1 — Preparación (1/1)

- ✅ [[SPEC-004 T001|T001]] [integración] — Crear el módulo dashboard vacío en las dos aplicaciones: apps/api/src/modules/dashboard/index.ts y…

### Fase 2 — Base común (11/11)

- ✅ [[SPEC-004 T002|T002]] [contrato] — Añadir a packages/contracts/src/datetime.ts formatDate y formatMonth (plan §6.1, D-5; RF-2, RF-9, RF-10)
- ✅ [[SPEC-004 T003|T003]] [contrato] — Escribir packages/contracts/src/dashboard.ts con DASHBOARD_ROLES, DASHBOARD_MESSAGES, DASHBOARD_TOP_PRODUCTS,…
- ✅ [[SPEC-004 T004|T004]] [api] [P] — Escribir apps/api/src/shared/calendar.ts con boliviaDate, startOfBoliviaDay, boliviaDayRange y…
- ✅ [[SPEC-004 T005|T005]] [web] [P] — Escribir modules/dashboard/api/dashboard-client.ts: interfaz DashboardClient (today, month) y su cliente HTTP…
- ✅ [[SPEC-004 T006|T006]] [web] [P] — Escribir modules/dashboard/api/DashboardClientProvider.tsx y useDashboardClient: el cliente en uso por…
- ✅ [[SPEC-004 T007|T007]] [web] [P] — Escribir modules/dashboard/dev/: fixtures.ts (resúmenes de hoy y del mes, con y sin ventas, ya calculados),…
- ✅ [[SPEC-004 T008|T008]] [web] [P] — Añadir a routes.tsx la ruta /resumen con homeLink: 'Resumen de ventas' y roles: DASHBOARD_ROLES, con una…
- ✅ [[SPEC-004 T024|T024]] [web] [P] — Corregir RF-7: añadir al cliente simulado y a su selector el escenario «Con error», que responde 500…
- ✅ [[SPEC-004 T025|T025]] [contrato] — Reemplazar en dashboard.ts DASHBOARD_ROLES por DASHBOARD_MONTH_ROLES (['owner']) y…
- ✅ [[SPEC-004 T026|T026]] [web] [P] — Hacer que la ruta /resumen sea de los dos roles, sin roles propios (plan §3, D-9; RF-1). Depende de: T008
- ✅ [[SPEC-004 T027|T027]] [web] [P] — Hacer que el escenario «Sin permiso» del cliente simulado responda el resumen de hoy y rechace solo el del mes…

### Fase 3 — US1: ver el resumen de hoy (P1) (8/8)

- ✅ [[SPEC-004 T009|T009]] [api] [P] [US1] — Escribir en dashboard.summary.ts summarizeSales: total, número de ventas, promedio redondeado, importes por…
- ✅ [[SPEC-004 T010|T010]] [api] [P] [US1] — Escribir en dashboard.service.ts el resumen de hoy (today) con listSales inyectada y el reloj (plan §5.4, D-1;…
- ✅ [[SPEC-004 T011|T011]] [api] [P] [US1] — Escribir dashboard.routes.ts con dashboardPlugin y GET /api/dashboard/today con requireSession, para el dueño…
- ✅ [[SPEC-004 T012|T012]] [web] [P] [US1] — Escribir state/useDashboardSummaries.ts con el resumen de hoy: carga al montar, «Actualizar», loading sin…
- ✅ [[SPEC-004 T013|T013]] [web] [P] [US1] — Escribir components/counts.ts y components/PeriodSummaryView.tsx: total con formatPrice, «N venta(s)»,…
- ✅ [[SPEC-004 T014|T014]] [web] [P] [US1] — Escribir TodaySummarySection.tsx y DashboardPage.tsx: «Resumen de ventas», «Hoy · [fecha]» con formatDate,…
- ✅ [[SPEC-004 T015|T015]] [integración] [US1] — Registrar dashboardPlugin en app.ts con listRegisteredSales de modules/sales/index.ts y la sesión de SPEC-001,…
- ✅ [[SPEC-004 T016|T016]] [integración] [US1] — Escribir e2e/dashboard-us1-resumen-hoy.spec.ts con los 6 pasos de §8.2 del plan (RF-1 a RF-8, RNF-4). Depende…

### Fase 4 — US2: ver el resumen del mes en curso (P2) (5/5)

- ✅ [[SPEC-004 T017|T017]] [api] [P] [US2] — Escribir en dashboard.summary.ts salesByDay (plan §5.3; RF-10, RNF-2). Depende de: T009
- ✅ [[SPEC-004 T018|T018]] [api] [P] [US2] — Añadir el resumen del mes (month) a dashboard.service.ts y GET /api/dashboard/month a dashboard.routes.ts con…
- ✅ [[SPEC-004 T019|T019]] [web] [P] [US2] — Pedir el resumen del mes en useDashboardSummaries en paralelo con el de hoy, solo con los roles de…
- ✅ [[SPEC-004 T020|T020]] [integración] [US2] — Escribir e2e/dashboard-us2-resumen-mes.spec.ts con los 4 pasos de §8.2 del plan, contra la API real de E2E…
- ✅ [[SPEC-004 T034|T034]] [integración] [US2] — Integrar origin/develop mediante merge en la rama de US2 y resolver las adiciones duplicadas de US1,…

### Fase 5 — Pulido (9/9)

- ✅ [[SPEC-004 T021|T021]] [api] — Escribir modules/sales/sales-seed.cli.ts (npm run seed:sales -w @kofi/api): carga en la base de DATABASE_URL…
- ✅ [[SPEC-004 T022|T022]] [integración] — Desplegar en Render con el Blueprint apuntando a esta rama y la base indicada por la persona…
- ✅ [[SPEC-004 T023|T023]] [integración] — Actualizar README.md con el estado del módulo Dashboard: quién ve el resumen de ventas, cómo llegar a él y qué…
- ✅ [[SPEC-004 T028|T028]] [api] — Añadir a seed:sales el modo explícito --complete para completar 6000 ventas del mes sin modificar datos…
- ✅ [[SPEC-004 T029|T029]] [api] — Enviar la carga --complete en lotes con parámetros, reservando los números en la misma transacción, para…
- ✅ [[SPEC-004 T030|T030]] [integración] — Preparar measure:dashboard con tests del medidor y salida de muestras sin secretos, para ejecutar las series…
- ✅ [[SPEC-004 T031|T031]] [integración] — Corregir las ramas del Blueprint de comprobación y detectar una web anterior al Dashboard antes de abrir…
- ✅ [[SPEC-004 T032|T032]] [integración] — Conservar la primera medición, documentar la aceptación expresa del exceso manual y controlar foco/visibilidad…
- ✅ [[SPEC-004 T033|T033]] [integración] — Corregir las referencias documentales desactualizadas a T022 que señaló el verificador: actualizar el cierre…

## Pull requests

- [[PR 42]] — style(dashboard): destacar el resumen de ventas [SPEC-004] (2026-10-27)
- [[PR 33]] — test(dashboard): medir y verificar el resumen de ventas [SPEC-004] (2026-10-26)
- [[PR 30]] — feat(dashboard): mostrar el resumen del mes [SPEC-004] (2026-10-26)
- [[PR 29]] — feat(dashboard): mostrar el resumen de hoy [SPEC-004] (2026-10-26)
- [[PR 20]] — feat(dashboard): definir el resumen de ventas [SPEC-004] (2026-10-25)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/tasks.md)
- [evidence/measurement-attempt-1.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/evidence/measurement-attempt-1.json)
- [evidence/measurement-cashier-repeat.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/evidence/measurement-cashier-repeat.json)
- [measurement.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/measurement.md)
