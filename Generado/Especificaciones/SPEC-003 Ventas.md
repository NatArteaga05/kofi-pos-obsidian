---
tags:
  - especificacion
  - modulo/sales
  - modulo/menu
spec: "SPEC-003"
estado: "revisada"
fecha: "2026-10-24"
tareas: "35/35"
avance: "completa"
---

# SPEC-003 — Ventas

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-24 · **Tareas:** 35/35 (completa)

> [!abstract] Objetivo
> Que cada venta pagada quede registrada en el sistema de forma completa y exacta, sin que la persona que atiende tenga que hacer cuentas, para que el Dashboard (004) y el Historial (005) puedan construirse sobre ventas reales y bien definidas: qué se vendió, a qué precio, el total, cómo se pagó, quién la registró y cuándo.

## Relaciones

- **Depende de:** [[SPEC-001 Acceso]], [[SPEC-002 Menú]]
- **La usan:** [[SPEC-004 Dashboard]], [[SPEC-005 Historial y reportes]], [[SPEC-007 Ventas de demostración]]
- **Módulos del código:** [[Módulo Ventas (sales)|sales]], [[Módulo Menú (menu)|menu]]
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-003 HU-1 — Registrar una venta pagada|HU-1 — Registrar una venta pagada]] (P1)
- [[SPEC-003 HU-2 — No perder la venta en preparación|HU-2 — No perder la venta en preparación]] (P2)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-003 RF-1 — Acceso a Ventas\|RF-1]] | Acceso a Ventas | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-2 — Productos para vender\|RF-2]] | Productos para vender | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-3 — Armar la venta en preparación\|RF-3]] | Armar la venta en preparación | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-4 — Importes calculados por el sistema\|RF-4]] | Importes calculados por el sistema | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-5 — Cambios del menú durante la preparación\|RF-5]] | Cambios del menú durante la preparación | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-6 — Registrar la venta\|RF-6]] | Registrar la venta | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-7 — Se cobra lo que se mostró\|RF-7]] | Se cobra lo que se mostró | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-8 — Una venta se registra una sola vez\|RF-8]] | Una venta se registra una sola vez | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-9 — Registro completo o nada\|RF-9]] | Registro completo o nada | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-10 — Ventas desde varios navegadores\|RF-10]] | Ventas desde varios navegadores | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-11 — Ventas registradas para otros módulos\|RF-11]] | Ventas registradas para otros módulos | [[SPEC-003 HU-1 — Registrar una venta pagada\|HU-1]] |
| [[SPEC-003 RF-12 — Conservar la venta en preparación\|RF-12]] | Conservar la venta en preparación | [[SPEC-003 HU-2 — No perder la venta en preparación\|HU-2]] |
| [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión\|RF-13]] | Venta en preparación y fin de la sesión | [[SPEC-003 HU-2 — No perder la venta en preparación\|HU-2]] |
| [[SPEC-003 RF-14 — Descartar la venta en preparación\|RF-14]] | Descartar la venta en preparación | [[SPEC-003 HU-2 — No perder la venta en preparación\|HU-2]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-003 RNF-1 — Idioma\|RNF-1]] | Idioma |
| [[SPEC-003 RNF-2 — Importes exactos\|RNF-2]] | Importes exactos |
| [[SPEC-003 RNF-3 — Rapidez\|RNF-3]] | Rapidez |
| [[SPEC-003 RNF-4 — Uso con teclado\|RNF-4]] | Uso con teclado |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-003 D-1 — El menú vigente llega a Ventas como una función…\|D-1]] | El menú vigente llega a Ventas como una función inyectada | [[SPEC-003 RF-2 — Productos para vender\|RF-2]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación\|RF-5]], [[SPEC-003 RF-7 — Se cobra lo que se mostró\|RF-7]] |
| [[SPEC-003 D-2 — POST ∕api∕sales∕quote devuelve también los productos…\|D-2]] | POST /api/sales/quote devuelve también los productos para vender | [[SPEC-003 RF-2 — Productos para vender\|RF-2]], [[SPEC-003 RF-4 — Importes calculados por el sistema\|RF-4]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación\|RF-5]] |
| [[SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula…\|D-3]] | La interfaz envía la lista deseada y la API la calcula entera | [[SPEC-003 RF-3 — Armar la venta en preparación\|RF-3]], [[SPEC-003 RF-4 — Importes calculados por el sistema\|RF-4]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación\|RF-5]], [[SPEC-003 RF-7 — Se cobra lo que se mostró\|RF-7]] |
| [[SPEC-003 D-4 — Integridad en la base\|D-4]] | Integridad en la base | [[SPEC-003 RF-6 — Registrar la venta\|RF-6]], [[SPEC-003 RF-9 — Registro completo o nada\|RF-9]], [[SPEC-003 RF-10 — Ventas desde varios navegadores\|RF-10]], [[SPEC-003 RF-11 — Ventas registradas para otros módulos\|RF-11]] |
| [[SPEC-003 D-5 — Un registro por venta en preparación\|D-5]] | Un registro por venta en preparación | [[SPEC-003 RF-8 — Una venta se registra una sola vez\|RF-8]] |
| [[SPEC-003 D-6 — 409 MENU_CHANGED sin datos extra\|D-6]] | 409 MENU_CHANGED sin datos extra | [[SPEC-003 RF-7 — Se cobra lo que se mostró\|RF-7]] |
| [[SPEC-003 D-7 — Fechas como ISO 8601 en UTC\|D-7]] | Fechas como ISO 8601 en UTC | [[SPEC-003 RF-6 — Registrar la venta\|RF-6]], [[SPEC-003 RF-11 — Ventas registradas para otros módulos\|RF-11]] |
| [[SPEC-003 D-8 — La venta en preparación se guarda en localStorage\|D-8]] | La venta en preparación se guarda en localStorage | [[SPEC-003 RF-10 — Ventas desde varios navegadores\|RF-10]], [[SPEC-003 RF-12 — Conservar la venta en preparación\|RF-12]], [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión\|RF-13]] |
| [[SPEC-003 D-9 — SessionProvider recibe onSessionEnd(reason)\|D-9]] | SessionProvider recibe onSessionEnd(reason) | [[SPEC-003 RF-13 — Venta en preparación y fin de la sesión\|RF-13]] |
| [[SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo\|D-10]] | SalesClientProvider y escenarios de desarrollo | [[SPEC-003 RF-2 — Productos para vender\|RF-2]], [[SPEC-003 RF-3 — Armar la venta en preparación\|RF-3]], [[SPEC-003 RF-4 — Importes calculados por el sistema\|RF-4]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación\|RF-5]], [[SPEC-003 RF-6 — Registrar la venta\|RF-6]], [[SPEC-003 RF-7 — Se cobra lo que se mostró\|RF-7]], [[SPEC-003 RF-8 — Una venta se registra una sola vez\|RF-8]], [[SPEC-003 RF-9 — Registro completo o nada\|RF-9]] |
| [[SPEC-003 D-11 — Ruta ∕ventas∕nueva\|D-11]] | Ruta /ventas/nueva | [[SPEC-003 RF-1 — Acceso a Ventas\|RF-1]] |
| [[SPEC-003 D-13 — Medio de pago con códigos estables en inglés\|D-13]] | Medio de pago con códigos estables en inglés | [[SPEC-003 RF-6 — Registrar la venta\|RF-6]], [[SPEC-003 RF-7 — Se cobra lo que se mostró\|RF-7]], [[SPEC-003 RF-11 — Ventas registradas para otros módulos\|RF-11]], [[SPEC-003 RF-12 — Conservar la venta en preparación\|RF-12]] |
| [[SPEC-003 D-12 — Medición de RNF-3\|D-12]] | Medición de RNF-3 |  |
| [[SPEC-003 D-13 — §7\|D-13]] | §7 |  |

## Tareas

### Fase 1 — Preparación (1/1)

- ✅ [[SPEC-003 T001|T001]] [integración] — Crear el módulo sales vacío en las dos aplicaciones: apps/api/src/modules/sales/index.ts y…

### Fase 2 — Base común (14/14)

- ✅ [[SPEC-003 T002|T002]] [contrato] — Añadir a packages/contracts/src/errors.ts el código MENU_CHANGED (plan §6.2; RF-7)
- ✅ [[SPEC-003 T003|T003]] [contrato] — Escribir packages/contracts/src/datetime.ts con BOLIVIA_TIME_ZONE y formatDateTime, y exportarlo desde…
- ✅ [[SPEC-003 T004|T004]] [contrato] — Escribir en packages/contracts/src/sales.ts SALE_MAX_LINES, SALE_MAX_QUANTITY, SALE_MESSAGES,…
- ✅ [[SPEC-003 T005|T005]] [contrato] — Escribir en sales.ts saleLineSchema, saleQuoteSchema (con menu del esquema currentMenuResponseSchema de…
- ✅ [[SPEC-003 T006|T006]] [api] [P] — Escribir la migración 003_sales.sql: sale_counter con su fila, sales, sale_lines, el disparador diferido…
- ✅ [[SPEC-003 T007|T007]] [api] [P] — Escribir sales.repository.ts: nextSaleNumber (incrementa sale_counter), insertSale (venta y líneas en orden),…
- ✅ [[SPEC-003 T008|T008]] [web] [P] — Escribir modules/sales/api/sales-client.ts: interfaz SalesClient (quote, register) y su cliente HTTP real…
- ✅ [[SPEC-003 T009|T009]] [web] [P] — Escribir modules/sales/api/SalesClientProvider.tsx y useSalesClient: el cliente en uso por contexto, que el…
- ✅ [[SPEC-003 T010|T010]] [web] [P] — Escribir modules/sales/dev/: fixtures.ts, sales-demo-client.ts (implementa SalesClient con un menú en memoria)…
- ✅ [[SPEC-003 T011|T011]] [web] [P] — Añadir a routes.tsx la ruta /ventas/nueva con homeLink: 'Nueva venta' y los dos roles, con una página…
- ✅ [[SPEC-003 T028|T028]] [contrato] — Añadir a sales.ts PAYMENT_METHODS, paymentMethodSchema, formatPaymentMethod y el texto…
- ✅ [[SPEC-003 T029|T029]] [api] [P] — Añadir la columna payment_method a 003_sales.sql, corrigiendo la migración en su sitio (plan §4, §11, D-13;…
- ✅ [[SPEC-003 T030|T030]] [api] [P] — Guardar y leer el medio de pago en sales.repository.ts (plan §5.3; RF-6, RF-11). Depende de: T028, T029
- ✅ [[SPEC-003 T031|T031]] [web] [P] — Hacer que el cliente simulado de ventas registre el medio de pago recibido y devuelva el 400 sin él, y que el…

### Fase 3 — US1: registrar una venta pagada (P1) (11/11)

- ✅ [[SPEC-003 T012|T012]] [api] [P] [US1] — Escribir sales.pricing.ts con priceDraft (plan §5.1; RF-4, RF-5, RF-7, RNF-2). Depende de: T005
- ✅ [[SPEC-003 T013|T013]] [api] [P] [US1] — Escribir en sales.service.ts el cálculo de la venta en preparación (quote) con el menú vigente inyectado (plan…
- ✅ [[SPEC-003 T014|T014]] [api] [P] [US1] — Escribir en sales.service.ts el registro (register): venta previa por draftId antes de mirar el menú, 409…
- ✅ [[SPEC-003 T015|T015]] [api] [P] [US1] — Escribir sales.routes.ts con salesPlugin: POST /api/sales/quote y POST /api/sales con requireSession; exportar…
- ✅ [[SPEC-003 T016|T016]] [web] [P] [US1] — Escribir state/useSaleDraft.ts con un almacén en memoria: abrir con la venta vacía, agregar, «+», «−»,…
- ✅ [[SPEC-003 T017|T017]] [web] [P] [US1] — Escribir NewSalePage.tsx y ProductPicker.tsx: productos para vender por categoría con formatPrice, aviso de…
- ✅ [[SPEC-003 T018|T018]] [web] [P] [US1] — Escribir SaleDraftLines.tsx: líneas con nombre, cantidad, precio y subtotal, total, «Elige los productos de la…
- ✅ [[SPEC-003 T019|T019]] [web] [P] [US1] — Escribir el registro en useSaleDraft, PaymentMethodPicker.tsx y SaleConfirmation.tsx: elección de «Efectivo» o…
- ✅ [[SPEC-003 T020|T020]] [integración] [US1] — Registrar salesPlugin en app.ts con getCurrentMenu de modules/menu/index.ts y la sesión de SPEC-001, comprobar…
- ✅ [[SPEC-003 T021|T021]] [integración] [US1] — Escribir e2e/sales-us1-registrar-venta.spec.ts con los 5 pasos de §8.2 del plan; el paso 4 cambia el precio…
- ✅ [[SPEC-003 T032|T032]] [web] [US1] — Corregir RF-6: conservar la confirmación anterior si el cálculo rechaza el producto que se intentó agregar…

### Fase 4 — US2: no perder la venta en preparación (P2) (4/4)

- ✅ [[SPEC-003 T022|T022]] [web] [P] [US2] — Escribir state/draft-store.ts sobre localStorage (kofi:sales:draft) con la cuenta, el draftId, el medio de…
- ✅ [[SPEC-003 T023|T023]] [web] [P] [US2] — Añadir a SessionProvider el aviso onSessionEnd('logout' | 'terminated'), pasarle desde routes.tsx…
- ✅ [[SPEC-003 T024|T024]] [web] [P] [US2] — Escribir DiscardSaleDialog.tsx y la opción «Descartar venta», visible solo con líneas, con «¿Descartar esta…
- ✅ [[SPEC-003 T025|T025]] [integración] [US2] — Escribir e2e/sales-us2-conservar-venta.spec.ts con los 5 pasos de §8.2 del plan, contra la API real de E2E…

### Fase 5 — Pulido (5/5)

- ✅ [[SPEC-003 T033|T033]] [integración] — Preparar la medición asistida de T026: medidor Node/Playwright, tests con datos ficticios, Blueprint en la…
- ✅ [[SPEC-003 T026|T026]] [integración] — Desplegar en Render con el Blueprint apuntando a esta rama y su base de Neon de comprobación…
- ✅ [[SPEC-003 T027|T027]] [integración] — Actualizar README.md con el estado del módulo Ventas: quién registra ventas, cómo llegar a «Nueva venta» y qué…
- ✅ [[SPEC-003 T034|T034]] [web] [integración] — Corregir RF-2 tras la verificación completa: conservar la lista de productos entre cálculos sin casos de RF-5…
- ✅ [[SPEC-003 T035|T035]] [integración] — Repetir la medición real de RNF-3 y de la venta humana tras T034, desplegando el mismo código corregido en…

## Pull requests

- [[PR 46]] — style(sales): añadir el índice de categorías a nueva venta [SPEC-003] (2026-10-28)
- [[PR 40]] — style(sales): diseñar la pantalla de nueva venta [SPEC-003] (2026-10-27)
- [[PR 28]] — fix(sales): conservar la lista de productos al vender [SPEC-003] (2026-10-25)
- [[PR 27]] — feat(sales): conservar la venta en preparacion [SPEC-003] (2026-10-25)
- [[PR 26]] — feat(sales): registrar una venta pagada [SPEC-003] (2026-10-25)
- [[PR 19]] — feat(sales): definir las ventas y preparar el módulo [SPEC-003] (2026-10-24)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/tasks.md)
- [measurement-results.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/measurement-results.json)
- [measurement.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/measurement.md)
