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
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-002 HU-1 — Armar el menú|HU-1 — Armar el menú]] (P1)
- [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece|HU-2 — Sacar del menú lo que no se ofrece]] (P2)
- [[SPEC-002 HU-3 — Consultar el menú vigente|HU-3 — Consultar el menú vigente]] (P3)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-002 RF-1 — Acceso a la administración del menú\|RF-1]] | Acceso a la administración del menú | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-2 — Lista de administración\|RF-2]] | Lista de administración | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-3 — Crear y renombrar una categoría\|RF-3]] | Crear y renombrar una categoría | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-4 — Crear un producto\|RF-4]] | Crear un producto | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-5 — Editar un producto\|RF-5]] | Editar un producto | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-6 — Validación de un producto\|RF-6]] | Validación de un producto | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-7 — Guardado completo o nada\|RF-7]] | Guardado completo o nada | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-8 — Cambios desde dos navegadores\|RF-8]] | Cambios desde dos navegadores | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-15 — Menú vigente para otros módulos\|RF-15]] | Menú vigente para otros módulos | [[SPEC-002 HU-1 — Armar el menú\|HU-1]] |
| [[SPEC-002 RF-9 — Desactivar y reactivar un producto\|RF-9]] | Desactivar y reactivar un producto | [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece\|HU-2]] |
| [[SPEC-002 RF-10 — Desactivar y reactivar una categoría\|RF-10]] | Desactivar y reactivar una categoría | [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece\|HU-2]] |
| [[SPEC-002 RF-11 — Categorías inactivas\|RF-11]] | Categorías inactivas | [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece\|HU-2]] |
| [[SPEC-002 RF-12 — Datos que se conservan\|RF-12]] | Datos que se conservan | [[SPEC-002 HU-2 — Sacar del menú lo que no se ofrece\|HU-2]] |
| [[SPEC-002 RF-13 — Acceso a la consulta\|RF-13]] | Acceso a la consulta | [[SPEC-002 HU-3 — Consultar el menú vigente\|HU-3]] |
| [[SPEC-002 RF-14 — Consulta del menú vigente\|RF-14]] | Consulta del menú vigente | [[SPEC-002 HU-3 — Consultar el menú vigente\|HU-3]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-002 RNF-1 — Idioma\|RNF-1]] | Idioma |
| [[SPEC-002 RNF-2 — Importes exactos\|RNF-2]] | Importes exactos |
| [[SPEC-002 RNF-3 — Rapidez\|RNF-3]] | Rapidez |
| [[SPEC-002 RNF-4 — Uso con teclado\|RNF-4]] | Uso con teclado |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-002 D-1 — El menú se integra en el monorepo de SPEC-001 sin…\|D-1]] | El menú se integra en el monorepo de SPEC-001 sin dependencias nuevas | [[SPEC-002 RF-1 — Acceso a la administración del menú\|RF-1]] |
| [[SPEC-002 D-2 — Precios en centavos enteros\|D-2]] | Precios en centavos enteros | [[SPEC-002 RF-6 — Validación de un producto\|RF-6]] |
| [[SPEC-002 D-3 — Letras admitidas\|D-3]] | Letras admitidas | [[SPEC-002 RF-3 — Crear y renombrar una categoría\|RF-3]], [[SPEC-002 RF-6 — Validación de un producto\|RF-6]] |
| [[SPEC-002 D-4 — Comparación con name_key calculada en la API\|D-4]] | Comparación con name_key calculada en la API | [[SPEC-002 RF-2 — Lista de administración\|RF-2]], [[SPEC-002 RF-3 — Crear y renombrar una categoría\|RF-3]], [[SPEC-002 RF-6 — Validación de un producto\|RF-6]], [[SPEC-002 RF-14 — Consulta del menú vigente\|RF-14]] |
| [[SPEC-002 D-5 — Disparadores con FOR SHARE\|D-5]] | Disparadores con FOR SHARE | [[SPEC-002 RF-8 — Cambios desde dos navegadores\|RF-8]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría\|RF-10]], [[SPEC-002 RF-11 — Categorías inactivas\|RF-11]] |
| [[SPEC-002 D-6 — Todos los errores de datos en un solo 400…\|D-6]] | Todos los errores de datos en un solo 400 VALIDATION_ERROR | [[SPEC-002 RF-3 — Crear y renombrar una categoría\|RF-3]], [[SPEC-002 RF-6 — Validación de un producto\|RF-6]] |
| [[SPEC-002 D-7 — Rutas de acción\|D-7]] | Rutas de acción | [[SPEC-002 RF-5 — Editar un producto\|RF-5]], [[SPEC-002 RF-9 — Desactivar y reactivar un producto\|RF-9]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría\|RF-10]] |
| [[SPEC-002 D-8 — La pantalla inicial recibe sus enlaces de routes.tsx\|D-8]] | La pantalla inicial recibe sus enlaces de routes.tsx | [[SPEC-002 RF-1 — Acceso a la administración del menú\|RF-1]], [[SPEC-002 RF-13 — Acceso a la consulta\|RF-13]] |
| [[SPEC-002 D-9 — El rechazo al cajero lo decide la API\|D-9]] | El rechazo al cajero lo decide la API | [[SPEC-002 RF-1 — Acceso a la administración del menú\|RF-1]] |
| [[SPEC-002 D-10 — MenuClientProvider\|D-10]] | MenuClientProvider | [[SPEC-002 RF-2 — Lista de administración\|RF-2]], [[SPEC-002 RF-14 — Consulta del menú vigente\|RF-14]] |
| [[SPEC-002 D-11 — Escenarios de desarrollo del menú\|D-11]] | Escenarios de desarrollo del menú | [[SPEC-002 RF-1 — Acceso a la administración del menú\|RF-1]], [[SPEC-002 RF-2 — Lista de administración\|RF-2]], [[SPEC-002 RF-3 — Crear y renombrar una categoría\|RF-3]], [[SPEC-002 RF-4 — Crear un producto\|RF-4]], [[SPEC-002 RF-5 — Editar un producto\|RF-5]], [[SPEC-002 RF-6 — Validación de un producto\|RF-6]], [[SPEC-002 RF-7 — Guardado completo o nada\|RF-7]], [[SPEC-002 RF-8 — Cambios desde dos navegadores\|RF-8]], [[SPEC-002 RF-9 — Desactivar y reactivar un producto\|RF-9]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría\|RF-10]], [[SPEC-002 RF-14 — Consulta del menú vigente\|RF-14]] |
| [[SPEC-002 D-12 — Medición de RNF-3 con 200 productos\|D-12]] | Medición de RNF-3 con 200 productos |  |

## Tareas

### Fase 1 — Preparación (1/1)

- ✅ [[SPEC-002 T001|T001]] [integración] — Crear el módulo menu vacío en las dos aplicaciones: apps/api/src/modules/menu/index.ts y…

### Fase 2 — Base común (15/15)

- ✅ [[SPEC-002 T002|T002]] [contrato] — Añadir a packages/contracts/src/errors.ts los códigos FORBIDDEN, NOT_FOUND, CATEGORY_HAS_ACTIVE_PRODUCTS y…
- ✅ [[SPEC-002 T003|T003]] [contrato] — Escribir en packages/contracts/src/menu.ts las constantes de largo, normalizeMenuName, menuNameKey,…
- ✅ [[SPEC-002 T004|T004]] [contrato] — Escribir en menu.ts priceSchema (parsePrice), formatPrice, formatPriceInput y categoryIdSchema (plan §5.2,…
- ✅ [[SPEC-002 T005|T005]] [contrato] — Escribir en menu.ts categoryInputSchema, productInputSchema, Category, AdminProduct, MenuProduct y los…
- ✅ [[SPEC-002 T006|T006]] [api] [P] — Escribir la migración 002_menu.sql: categories, products y los disparadores products_require_active_category…
- ✅ [[SPEC-002 T007|T007]] [api] [P] — Escribir categories.repository.ts: insertar, cambiar el nombre, cambiar active, buscar por id (con FOR UPDATE…
- ✅ [[SPEC-002 T008|T008]] [api] [P] — Escribir products.repository.ts: insertar, actualizar nombre, categoría y precio, cambiar active, buscar por…
- ✅ [[SPEC-002 T009|T009]] [web] [P] — Hacer que shared/http/api-fetch.ts admita PUT (plan D-7). Depende de: T001
- ✅ [[SPEC-002 T010|T010]] [web] [P] — Escribir modules/menu/api/menu-client.ts: interfaz MenuClient con las 10 operaciones del contrato y su cliente…
- ✅ [[SPEC-002 T011|T011]] [web] [P] — Escribir modules/menu/api/MenuClientProvider.tsx y useMenuClient: el cliente en uso por contexto, que el…
- ✅ [[SPEC-002 T012|T012]] [web] [P] — Escribir modules/menu/dev/: fixtures.ts, menu-demo-client.ts (implementa MenuClient con el menú en memoria) y…
- ✅ [[SPEC-002 T013|T013]] [web] [P] — Añadir a routes.tsx el campo homeLink y las rutas /menu («Ver menú», los dos roles) y /menu/administrar…
- ✅ [[SPEC-002 T037|T037]] [integración] — Corregir la integración con develop: integrar origin/develop (con SPEC-001 US1 y US2 fusionadas) con merge y…
- ✅ [[SPEC-002 T038|T038]] [web] — Corregir D-10 según DD-17 de SPEC-001: la aplicación usa el cliente real del menú también en desarrollo, y el…
- ✅ [[SPEC-002 T039|T039]] [integración] — Corregir los textos desfasados sobre SPEC-001: plan.md y tasks.md dejan de decir que feat/001-acceso-us1 no…

### Fase 3 — US1: armar el menú (P1) (11/11)

- ✅ [[SPEC-002 T014|T014]] [api] [P] [US1] — Escribir en categories.service.ts crear y renombrar una categoría: nombre normalizado, repetido según name_key…
- ✅ [[SPEC-002 T015|T015]] [api] [P] [US1] — Escribir en products.service.ts crear y editar un producto según §5.3 del plan: todos los campos que fallan en…
- ✅ [[SPEC-002 T016|T016]] [api] [P] [US1] — Escribir menu.views.ts con getAdminMenu y getCurrentMenu, ordenados con compareMenuNames, y exportar…
- ✅ [[SPEC-002 T017|T017]] [api] [P] [US1] — Escribir menu.routes.ts con menuPlugin: GET /api/menu/admin, POST y PUT /api/menu/categories, POST y PUT…
- ✅ [[SPEC-002 T018|T018]] [web] [P] [US1] — Hacer que HomePage muestre los enlaces que recibe de routes.tsx según el rol de la sesión y el aviso de…
- ✅ [[SPEC-002 T019|T019]] [web] [P] [US1] — Escribir MenuAdminPage.tsx y MenuAdminList.tsx: lista con categorías y productos, precio con formatPrice,…
- ✅ [[SPEC-002 T020|T020]] [web] [P] [US1] — Escribir CategoryForm.tsx para crear y renombrar: maxLength de 30, mensaje de la API junto al campo, lo…
- ✅ [[SPEC-002 T021|T021]] [web] [P] [US1] — Escribir ProductForm.tsx para crear y editar: nombre con maxLength de 40, categorías activas, precio…
- ✅ [[SPEC-002 T022|T022]] [web] [P] [US1] — Escribir SaveStatus.tsx y el flujo de guardado de la página: «Cambios guardados» y lista recargada, o «No hay…
- ✅ [[SPEC-002 T023|T023]] [integración] [US1] — Registrar menuPlugin en app.ts, comprobar que la aplicación usa el cliente real del menú sin ?escenarios=menu…
- ✅ [[SPEC-002 T024|T024]] [integración] [US1] — Escribir e2e/menu-us1-armar-menu.spec.ts con los 6 pasos de §8.2 del plan (RF-1 a RF-7). Depende de: T023

### Fase 4 — US2: sacar del menú lo que no se ofrece (P2) (8/8)

- ✅ [[SPEC-002 T025|T025]] [api] [P] [US2] — Añadir a products.service.ts desactivar y reactivar: reactivar exige la categoría activa (409…
- ✅ [[SPEC-002 T026|T026]] [api] [P] [US2] — Añadir a categories.service.ts desactivar y reactivar: 409 CATEGORY_HAS_ACTIVE_PRODUCTS con N («1 producto…
- ✅ [[SPEC-002 T027|T027]] [api] [P] [US2] — Añadir a menu.routes.ts las rutas de acción …/deactivate y …/reactivate de categorías y productos (plan §6.2;…
- ✅ [[SPEC-002 T028|T028]] [web] [P] [US2] — Añadir a MenuAdminList las acciones desactivar y reactivar de cada categoría y producto, sin confirmación y…
- ✅ [[SPEC-002 T029|T029]] [web] [P] [US2] — Hacer que ProductForm no ofrezca categorías inactivas al crear ni al mover, y que al editar un producto de una…
- ✅ [[SPEC-002 T030|T030]] [integración] [US2] — Escribir e2e/menu-us2-desactivar.spec.ts con los 5 pasos de §8.2 del plan, contra la API real de E2E (RF-9 a…
- ✅ [[SPEC-002 T042|T042]] [integración] [US2] — Restaurar la implementación y las pruebas de US2 perdidas al resolver el merge de develop en feat/002-menu-us2…
- ✅ [[SPEC-002 T044|T044]] [integración] [US2] — Adelantar a US2 el margen de 15 segundos por test de API ya adoptado en US3 y Pulido, tras el timeout de…

### Fase 5 — US3: consultar el menú vigente (P3) (5/5)

- ✅ [[SPEC-002 T031|T031]] [api] [P] [US3] — Añadir a menu.routes.ts GET /api/menu con getCurrentMenu, para las sesiones de dueño y de cajero (plan §5.5,…
- ✅ [[SPEC-002 T032|T032]] [web] [P] [US3] — Escribir MenuPage.tsx y CurrentMenuList.tsx: solo lectura, precio con formatPrice, aviso «El menú todavía no…
- ✅ [[SPEC-002 T033|T033]] [integración] [US3] — Escribir e2e/menu-us3-consultar.spec.ts con los 3 pasos de §8.2 del plan, contra la API real de E2E (RF-13,…
- ✅ [[SPEC-002 T043|T043]] [integración] [US3] — Adelantar a US3 la configuración de Vitest de la API ya adoptada en Pulido: 15 segundos por test para las…
- ✅ [[SPEC-002 T045|T045]] [integración] [US3] — Restaurar la importación de getCurrentMenu y la decisión D-15 perdidas al integrar develop en US3 (RF-13 a…

### Fase 6 — Pulido (5/5)

- ✅ [[SPEC-002 T034|T034]] [integración] — Escribir apps/api/test/seed-menu.ts y su script npm run seed:menu -w @kofi/api, que carga 200 productos de…
- ✅ [[SPEC-002 T035|T035]] [integración] — Desplegar en Render con el Blueprint apuntando a esta rama y su base de Neon de comprobación…
- ✅ [[SPEC-002 T036|T036]] [integración] — Actualizar README.md con el estado del módulo Menú y cómo cargar el menú (RF-1 a RF-15). Depende de: T034; la…
- ✅ [[SPEC-002 T040|T040]] [integración] — Configurar el tiempo máximo de cada test de la API en 15 segundos para que las pruebas con PostgreSQL en…
- ✅ [[SPEC-002 T041|T041]] [integración] — Automatizar la medición asistida de T035 con scripts/measure-menu.mjs, sus pruebas con datos ficticios y los…

## Pull requests

- [[PR 44]] — style(menu): añadir un índice de categorías al menú [SPEC-002] (2026-10-28)
- [[PR 36]] — style(menu): disenar las pantallas del menu [SPEC-002] (2026-10-27)
- [[PR 24]] — test(menu): completar el pulido del menu [SPEC-002] (2026-10-25)
- [[PR 23]] — feat(menu): consultar el menu vigente [SPEC-002] (2026-10-25)
- [[PR 22]] — feat(menu): desactivar y reactivar el menu [SPEC-002] (2026-10-25)
- [[PR 21]] — feat(menu): armar el menu [SPEC-002] (2026-10-25)
- [[PR 12]] — docs(menu): especificar menu [SPEC-002] (2026-10-24)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/tasks.md)
- [evidence/deployment.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/evidence/deployment.md)
- [evidence/menu-performance.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/002-menu/evidence/menu-performance.json)
