---
tags:
  - especificacion
  - modulo/history
  - modulo/sales
spec: "SPEC-005"
estado: "revisada"
fecha: "2026-10-25"
tareas: "38/38"
avance: "completa"
---

# SPEC-005 — Historial y reportes

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-25 · **Tareas:** 38/38 (completa)

> [!abstract] Objetivo
> Que el dueño pueda revisar, sin hacer cuentas, qué se vendió un día o un mes cualquiera, cuánto se cobró en efectivo y cuánto con QR, y qué tuvo cada venta, para controlar la caja de días pasados, aclarar dudas sobre una venta concreta y comparar la marcha del negocio entre meses.

## Relaciones

- **Depende de:** [[SPEC-001 Acceso]], [[SPEC-003 Ventas]], [[SPEC-004 Dashboard]]
- **La usan:** [[SPEC-007 Ventas de demostración]]
- **Módulos del código:** [[Módulo Historial y reportes (history)|history]], [[Módulo Ventas (sales)|sales]]
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-005 HU-1 — Consultar las ventas de un día|HU-1 — Consultar las ventas de un día]] (P1)
- [[SPEC-005 HU-2 — Ver el detalle de una venta|HU-2 — Ver el detalle de una venta]] (P2)
- [[SPEC-005 HU-3 — Consultar las cifras de un mes|HU-3 — Consultar las cifras de un mes]] (P3)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-005 RF-1 — Acceso al Historial\|RF-1]] | Acceso al Historial | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-2 — Elegir el día\|RF-2]] | Elegir el día | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-3 — Ventas de un día\|RF-3]] | Ventas de un día | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-4 — Cifras de un día\|RF-4]] | Cifras de un día | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-5 — Momento de los datos y actualización\|RF-5]] | Momento de los datos y actualización | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-6 — Sin conexión o con error\|RF-6]] | Sin conexión o con error | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron\|RF-7]] | Las ventas se muestran tal como se registraron | [[SPEC-005 HU-1 — Consultar las ventas de un día\|HU-1]] |
| [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]] | Detalle de una venta | [[SPEC-005 HU-2 — Ver el detalle de una venta\|HU-2]] |
| [[SPEC-005 RF-9 — Buscar una venta por su número\|RF-9]] | Buscar una venta por su número | [[SPEC-005 HU-2 — Ver el detalle de una venta\|HU-2]] |
| [[SPEC-005 RF-10 — Abrir el detalle desde la lista de un día\|RF-10]] | Abrir el detalle desde la lista de un día | [[SPEC-005 HU-2 — Ver el detalle de una venta\|HU-2]] |
| [[SPEC-005 RF-11 — Elegir el mes\|RF-11]] | Elegir el mes | [[SPEC-005 HU-3 — Consultar las cifras de un mes\|HU-3]] |
| [[SPEC-005 RF-12 — Cifras de un mes\|RF-12]] | Cifras de un mes | [[SPEC-005 HU-3 — Consultar las cifras de un mes\|HU-3]] |
| [[SPEC-005 RF-13 — Ventas por día de un mes\|RF-13]] | Ventas por día de un mes | [[SPEC-005 HU-3 — Consultar las cifras de un mes\|HU-3]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-005 RNF-1 — Idioma\|RNF-1]] | Idioma |
| [[SPEC-005 RNF-2 — Cifras exactas\|RNF-2]] | Cifras exactas |
| [[SPEC-005 RNF-3 — Rapidez\|RNF-3]] | Rapidez |
| [[SPEC-005 RNF-4 — Uso con teclado\|RNF-4]] | Uso con teclado |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-005 D-1 — Las ventas llegan al Historial como funciones…\|D-1]] | Las ventas llegan al Historial como funciones inyectadas | [[SPEC-005 RF-3 — Ventas de un día\|RF-3]], [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron\|RF-7]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]], [[SPEC-005 RF-9 — Buscar una venta por su número\|RF-9]], [[SPEC-005 RF-12 — Cifras de un mes\|RF-12]] |
| [[SPEC-005 D-2 — Una ruta por consulta\|D-2]] | Una ruta por consulta | [[SPEC-005 RF-2 — Elegir el día\|RF-2]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]], [[SPEC-005 RF-11 — Elegir el mes\|RF-11]] |
| [[SPEC-005 D-3 — La API calcula las cifras en memoria\|D-3]] | La API calcula las cifras en memoria | [[SPEC-005 RF-3 — Ventas de un día\|RF-3]], [[SPEC-005 RF-4 — Cifras de un día\|RF-4]], [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron\|RF-7]], [[SPEC-005 RF-12 — Cifras de un mes\|RF-12]], [[SPEC-005 RF-13 — Ventas por día de un mes\|RF-13]] |
| [[SPEC-005 D-4 — shared∕calendar.ts crece con addDays, addMonths,…\|D-4]] | shared/calendar.ts crece con addDays, addMonths, daysOfMonth, boliviaDayBounds y boliviaMonthBounds | [[SPEC-005 RF-2 — Elegir el día\|RF-2]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]], [[SPEC-005 RF-11 — Elegir el mes\|RF-11]], [[SPEC-005 RF-13 — Ventas por día de un mes\|RF-13]] |
| [[SPEC-005 D-5 — formatTime en datetime.ts\|D-5]] | formatTime en datetime.ts | [[SPEC-005 RF-3 — Ventas de un día\|RF-3]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]] |
| [[SPEC-005 D-6 — HISTORY_ROLES en el contrato\|D-6]] | HISTORY_ROLES en el contrato | [[SPEC-005 RF-1 — Acceso al Historial\|RF-1]] |
| [[SPEC-005 D-7 — Rutas ∕ventas (día, fecha=YYYY-MM-DD), ∕ventas∕mes…\|D-7]] | Rutas /ventas (día, ?fecha=YYYY-MM-DD), /ventas/mes (?mes=YYYY-MM) y /ventas/:numero (detalle) | [[SPEC-005 RF-1 — Acceso al Historial\|RF-1]], [[SPEC-005 RF-2 — Elegir el día\|RF-2]], [[SPEC-005 RF-5 — Momento de los datos y actualización\|RF-5]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]], [[SPEC-005 RF-11 — Elegir el mes\|RF-11]] |
| [[SPEC-005 D-8 — parseSaleNumber en el contrato\|D-8]] | parseSaleNumber en el contrato | [[SPEC-005 RF-9 — Buscar una venta por su número\|RF-9]] |
| [[SPEC-005 D-9 — HistoryClientProvider y escenarios de desarrollo\|D-9]] | HistoryClientProvider y escenarios de desarrollo | [[SPEC-005 RF-1 — Acceso al Historial\|RF-1]], [[SPEC-005 RF-2 — Elegir el día\|RF-2]], [[SPEC-005 RF-3 — Ventas de un día\|RF-3]], [[SPEC-005 RF-4 — Cifras de un día\|RF-4]], [[SPEC-005 RF-5 — Momento de los datos y actualización\|RF-5]], [[SPEC-005 RF-6 — Sin conexión o con error\|RF-6]], [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron\|RF-7]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]], [[SPEC-005 RF-9 — Buscar una venta por su número\|RF-9]], [[SPEC-005 RF-10 — Abrir el detalle desde la lista de un día\|RF-10]], [[SPEC-005 RF-11 — Elegir el mes\|RF-11]], [[SPEC-005 RF-12 — Cifras de un mes\|RF-12]], [[SPEC-005 RF-13 — Ventas por día de un mes\|RF-13]] |
| [[SPEC-005 D-10 — Validación de fechas y meses en el servicio\|D-10]] | Validación de fechas y meses en el servicio | [[SPEC-005 RF-2 — Elegir el día\|RF-2]], [[SPEC-005 RF-11 — Elegir el mes\|RF-11]] |
| [[SPEC-005 D-11 — Medición de RNF-3\|D-11]] | Medición de RNF-3 |  |
| [[SPEC-005 D-12 — La lista de un día viaja completa y sin líneas\|D-12]] | La lista de un día viaja completa y sin líneas | [[SPEC-005 RF-3 — Ventas de un día\|RF-3]], [[SPEC-005 RF-8 — Detalle de una venta\|RF-8]] |

## Tareas

### Fase 1 — Preparación (1/1)

- ✅ [[SPEC-005 T001|T001]] [integración] — Crear el módulo history vacío en las dos aplicaciones: apps/api/src/modules/history/index.ts y…

### Fase 2 — Base común (7/7)

- ✅ [[SPEC-005 T002|T002]] [contrato] — Añadir formatTime a packages/contracts/src/datetime.ts y formatRole a auth.ts (plan §6.1, D-5; RF-3, RF-8).…
- ✅ [[SPEC-005 T003|T003]] [contrato] — Escribir packages/contracts/src/history.ts con HISTORY_ROLES, HISTORY_MESSAGES, saleNotFoundMessage,…
- ✅ [[SPEC-005 T004|T004]] [api] [P] — Añadir a apps/api/src/shared/calendar.ts addDays, addMonths, daysOfMonth, boliviaDayBounds y…
- ✅ [[SPEC-005 T005|T005]] [web] [P] — Escribir modules/history/api/history-client.ts: interfaz HistoryClient (day(date?), month(month?),…
- ✅ [[SPEC-005 T006|T006]] [web] [P] — Escribir modules/history/api/HistoryClientProvider.tsx y useHistoryClient: el cliente en uso por contexto, que…
- ✅ [[SPEC-005 T007|T007]] [web] [P] — Escribir modules/history/dev/: fixtures.ts (días 23, 24 y 25/10/2026 con hoy el 25, septiembre y octubre de…
- ✅ [[SPEC-005 T008|T008]] [web] [P] — Añadir a routes.tsx las rutas /ventas (con homeLink: 'Historial de ventas'), /ventas/mes y /ventas/:numero,…

### Fase 3 — US1: consultar las ventas de un día (P1) (10/10)

- ✅ [[SPEC-005 T009|T009]] [api] [P] [US1] — Escribir en history.report.ts periodTotals y listedSales, y reutilizar apps/api/test/test-sales.ts (plan §3,…
- ✅ [[SPEC-005 T010|T010]] [api] [P] [US1] — Escribir en history.service.ts el día (day) con listSales inyectada y el reloj (plan §5.3, D-1, D-4, D-10;…
- ✅ [[SPEC-005 T011|T011]] [api] [P] [US1] — Escribir history.routes.ts con historyPlugin, la comprobación de requireSession y HISTORY_ROLES para todas sus…
- ✅ [[SPEC-005 T012|T012]] [web] [P] [US1] — Escribir state/useHistoryQuery.ts: carga al montar y al cambiar la clave, «Actualizar», loading sin borrar los…
- ✅ [[SPEC-005 T013|T013]] [web] [P] [US1] — Escribir components/counts.ts, PeriodTotals.tsx y SalesList.tsx: total con formatPrice, «N venta(s)», los dos…
- ✅ [[SPEC-005 T014|T014]] [web] [P] [US1] — Escribir QueryStatus.tsx («Datos al …» solo si la respuesta tiene asOf) y DayHistoryPage.tsx: «Ventas del…
- ✅ [[SPEC-005 T015|T015]] [integración] [US1] — Registrar historyPlugin en app.ts con listRegisteredSales de modules/sales/index.ts y la sesión de SPEC-001, y…
- ✅ [[SPEC-005 T016|T016]] [integración] [US1] — Escribir e2e/history-us1-ventas-dia.spec.ts con los 9 pasos de §8.2 del plan (RF-1 a RF-7, RNF-4). Depende de:…
- ✅ [[SPEC-005 T030|T030]] [integración] [US1] — Corregir RF-2/RF-3: conservar los años menores de 100 al sumar días y meses, acotar cada lectura al día pedido…
- ✅ [[SPEC-005 T031|T031]] [integración] [US1] — Corregir RF-2/RF-3: obtener el primer instante real de cada día de Bolivia, incluso cuando un cambio histórico…

### Fase 4 — US2: ver el detalle de una venta (P2) (8/8)

- ✅ [[SPEC-005 T017|T017]] [api] [P] [US2] — Añadir findSaleByNumber(db, number) a modules/sales/sales.repository.ts, con el mismo toSale que…
- ✅ [[SPEC-005 T018|T018]] [api] [P] [US2] — Añadir la venta (sale) a history.service.ts con findSale inyectada, y GET /api/history/sales/:number a…
- ✅ [[SPEC-005 T019|T019]] [web] [P] [US2] — Escribir components/SaleSearch.tsx («Buscar venta por número» y «Buscar», con parseSaleNumber) y añadirlo a…
- ✅ [[SPEC-005 T020|T020]] [web] [P] [US2] — Escribir SaleDetailView.tsx y SaleDetailPage.tsx: «Venta N.º [número]», fecha y hora con formatDateTime,…
- ✅ [[SPEC-005 T021|T021]] [integración] [US2] — Exportar findSaleByNumber desde modules/sales/index.ts y pasarlo a historyPlugin en app.ts (plan D-1; RF-7,…
- ✅ [[SPEC-005 T022|T022]] [integración] [US2] — Escribir e2e/history-us2-detalle-venta.spec.ts con los 6 pasos de §8.2 del plan (RF-5, RF-7 a RF-10, RNF-4).…
- ✅ [[SPEC-005 T032|T032]] [integración] [US2] — Corregir RF-1/RF-9: evitar que el límite predeterminado del parámetro de ruta rechace números largos o con…
- ✅ [[SPEC-005 T033|T033]] [integración] [US2] — Corregir RF-8/RNF-1: conservar las cuatro cifras del año al mostrar la fecha y hora de ventas antiguas…

### Fase 5 — US3: consultar las cifras de un mes (P3) (4/4)

- ✅ [[SPEC-005 T023|T023]] [api] [P] [US3] — Escribir en history.report.ts salesByDay (plan §5.2; RF-13, RNF-2). Depende de: T009
- ✅ [[SPEC-005 T024|T024]] [api] [P] [US3] — Añadir el mes (month) a history.service.ts y GET /api/history/month a history.routes.ts (plan §5.3, §5.4,…
- ✅ [[SPEC-005 T025|T025]] [web] [P] [US3] — Escribir MonthDaysTable.tsx y MonthHistoryPage.tsx: «[Mes] de [año]» con formatMonth, «Mes anterior», «Mes…
- ✅ [[SPEC-005 T026|T026]] [integración] [US3] — Escribir e2e/history-us3-cifras-mes.spec.ts con los 7 pasos de §8.2 del plan, contra la API real de E2E, y…

### Fase 6 — Pulido (8/8)

- ✅ [[SPEC-005 T027|T027]] [api] — Hacer que seed:sales (SPEC-004 T021) pueda cargar 6000 ventas en un mes con 400 de ellas en un mismo día;…
- ✅ [[SPEC-005 T034|T034]] [integración] — Preparar el medidor automatizado de RNF-3 de Historial y el Blueprint de comprobación, con tests de datos…
- ✅ [[SPEC-005 T035|T035]] [integración] — Corregir la carga del medidor en el entorno de Cua: separar su núcleo de observación y generar un módulo ESM…
- ✅ [[SPEC-005 T036|T036]] [integración] — Corregir el intervalo de RNF-3: instrumentar solo el build de comprobación para medir desde el evento de…
- ✅ [[SPEC-005 T028|T028]] [integración] — Desplegar en Render con el Blueprint apuntando a esta rama y su base de Neon de comprobación…
- ✅ [[SPEC-005 T028|T028]] -H [integración] — Criterios humanos de T028: desde la computadora del local acreditar RNF-3; el dueño ve el total de un día…
- ✅ [[SPEC-005 T029|T029]] [integración] — Actualizar README.md con el estado del módulo Historial: quién lo usa, cómo llegar a él y qué muestra de un…
- ✅ [[SPEC-005 T037|T037]] [integración] — Corregir la apertura mensual del medidor en Chrome: usar la navegación al mes vecino y conservar el…

## Pull requests

- [[PR 43]] — style(history): disenar el historial de ventas [SPEC-005] (2026-10-27)
- [[PR 39]] — test(history): comprobar y documentar el historial [SPEC-005] (2026-10-27)
- [[PR 38]] — feat(history): consultar las cifras de un mes [SPEC-005] (2026-10-26)
- [[PR 37]] — feat(history): consultar el detalle de una venta [SPEC-005] (2026-10-26)
- [[PR 35]] — feat(history): consultar las ventas de un dia [SPEC-005] (2026-10-26)
- [[PR 25]] — feat(history): definir el historial de ventas [SPEC-005] (2026-10-25)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/tasks.md)
- [evidence/human-measurement.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/evidence/human-measurement.json)
- [evidence/measurement-attempt-1.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/evidence/measurement-attempt-1.json)
- [evidence/measurement-attempt-2.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/evidence/measurement-attempt-2.json)
- [evidence/measurement-data-audit.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/evidence/measurement-data-audit.json)
- [evidence/measurement-render-probe.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/evidence/measurement-render-probe.json)
- [evidence/seed-audit.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/evidence/seed-audit.json)
- [measurement.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/005-historial/measurement.md)
