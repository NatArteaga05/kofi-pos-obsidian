---
tags:
  - especificacion
  - modulo/auth
spec: "SPEC-001"
estado: "revisada"
fecha: "2026-10-24"
tareas: "46/46"
avance: "completa"
---

# SPEC-001 — Acceso

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

**Estado:** revisada · **Fecha:** 2026-10-24 · **Tareas:** 46/46 (completa)

> [!abstract] Objetivo
> Que solo las personas del local con una cuenta puedan usar el sistema, que el sistema sepa en todo momento quién lo está usando y con qué rol, y que en la computadora compartida se pueda cambiar de persona sin dejar una sesión abierta.

## Relaciones

- **Depende de:** —
- **La usan:** [[SPEC-002 Menú]], [[SPEC-003 Ventas]], [[SPEC-004 Dashboard]], [[SPEC-005 Historial y reportes]], [[SPEC-007 Ventas de demostración]]
- **Módulos del código:** [[Módulo Acceso (auth)|auth]]
- **Principios:** [[Principio 1 — Stack mínimo|1 (Sí)]], [[Principio 2 — Especificación antes que código|2 (Sí)]], [[Principio 3 — Lógica separada de la interfaz|3 (Sí)]], [[Principio 4 — Tests primero|4 (Sí)]], [[Principio 5 — Persistencia segura|5 (Sí)]], [[Principio 6 — Idioma|6 (Sí)]]
- **Documentos:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- [[SPEC-001 HU-1 — Iniciar y cerrar sesión|HU-1 — Iniciar y cerrar sesión]] (P1)
- [[SPEC-001 HU-2 — Proteger las cuentas|HU-2 — Proteger las cuentas]] (P2)

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| [[SPEC-001 RF-1 — Ingreso con credenciales\|RF-1]] | Ingreso con credenciales | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-2 — Credenciales incorrectas\|RF-2]] | Credenciales incorrectas | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-3 — Campos vacíos y largo máximo\|RF-3]] | Campos vacíos y largo máximo | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-4 — Sin sesión no hay acceso\|RF-4]] | Sin sesión no hay acceso | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-5 — Identidad, rol y pantalla inicial\|RF-5]] | Identidad, rol y pantalla inicial | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-6 — Sesión por navegador\|RF-6]] | Sesión por navegador | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-7 — Cierre de sesión\|RF-7]] | Cierre de sesión | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-8 — Sesión cerrada inservible\|RF-8]] | Sesión cerrada inservible | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-13 — Validación de las cuentas\|RF-13]] | Validación de las cuentas | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-14 — Sin conexión al ingresar\|RF-14]] | Sin conexión al ingresar | [[SPEC-001 HU-1 — Iniciar y cerrar sesión\|HU-1]] |
| [[SPEC-001 RF-9 — Bloqueo por intentos fallidos\|RF-9]] | Bloqueo por intentos fallidos | [[SPEC-001 HU-2 — Proteger las cuentas\|HU-2]] |
| [[SPEC-001 RF-10 — Vencimiento de la sesión\|RF-10]] | Vencimiento de la sesión | [[SPEC-001 HU-2 — Proteger las cuentas\|HU-2]] |
| [[SPEC-001 RF-11 — Regreso tras el vencimiento\|RF-11]] | Regreso tras el vencimiento | [[SPEC-001 HU-2 — Proteger las cuentas\|HU-2]] |
| [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión\|RF-12]] | Cambios en la cuenta durante la sesión | [[SPEC-001 HU-2 — Proteger las cuentas\|HU-2]] |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| [[SPEC-001 RNF-1 — Contraseñas protegidas\|RNF-1]] | Contraseñas protegidas |
| [[SPEC-001 RNF-2 — Sin pistas sobre las cuentas\|RNF-2]] | Sin pistas sobre las cuentas |
| [[SPEC-001 RNF-3 — Idioma\|RNF-3]] | Idioma |
| [[SPEC-001 RNF-4 — Rapidez\|RNF-4]] | Rapidez |
| [[SPEC-001 RNF-5 — Uso con teclado\|RNF-5]] | Uso con teclado |

## Decisiones técnicas

| # | Decisión | RF |
| --- | --- | --- |
| [[SPEC-001 D-1 — Sesión en la base con cookie HttpOnly\|D-1]] | Sesión en la base con cookie HttpOnly | [[SPEC-001 RF-6 — Sesión por navegador\|RF-6]], [[SPEC-001 RF-7 — Cierre de sesión\|RF-7]], [[SPEC-001 RF-8 — Sesión cerrada inservible\|RF-8]], [[SPEC-001 RF-10 — Vencimiento de la sesión\|RF-10]], [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión\|RF-12]] |
| [[SPEC-001 D-2 — Mismo origen para interfaz y API\|D-2]] | Mismo origen para interfaz y API | [[SPEC-001 RF-1 — Ingreso con credenciales\|RF-1]], [[SPEC-001 RF-7 — Cierre de sesión\|RF-7]] |
| [[SPEC-001 D-3 — Contraseñas con scrypt de node꞉crypto\|D-3]] | Contraseñas con scrypt de node:crypto | [[SPEC-001 RF-1 — Ingreso con credenciales\|RF-1]] |
| [[SPEC-001 D-4 — Formato común de errores\|D-4]] | Formato común de errores | [[SPEC-001 RF-2 — Credenciales incorrectas\|RF-2]], [[SPEC-001 RF-9 — Bloqueo por intentos fallidos\|RF-9]], [[SPEC-001 RF-10 — Vencimiento de la sesión\|RF-10]], [[SPEC-001 RF-12 — Cambios en la cuenta durante la sesión\|RF-12]] |
| [[SPEC-001 D-5 — Bloqueo con tabla failed_logins y users.locked_until\|D-5]] | Bloqueo con tabla failed_logins y users.locked_until | [[SPEC-001 RF-9 — Bloqueo por intentos fallidos\|RF-9]] |
| [[SPEC-001 D-6 — pg\|D-6]] | pg |  |
| [[SPEC-001 D-7 — @electric-sql∕pglite\|D-7]] | @electric-sql/pglite |  |
| [[SPEC-001 D-8 — @fastify∕cookie\|D-8]] | @fastify/cookie | [[SPEC-001 RF-1 — Ingreso con credenciales\|RF-1]], [[SPEC-001 RF-7 — Cierre de sesión\|RF-7]] |
| [[SPEC-001 D-9 — react-router\|D-9]] | react-router | [[SPEC-001 RF-4 — Sin sesión no hay acceso\|RF-4]], [[SPEC-001 RF-6 — Sesión por navegador\|RF-6]], [[SPEC-001 RF-11 — Regreso tras el vencimiento\|RF-11]] |
| [[SPEC-001 D-10 — Herramientas de calidad\|D-10]] | Herramientas de calidad |  |
| [[SPEC-001 D-11 — Cada módulo expone un index.ts\|D-11]] | Cada módulo expone un index.ts | [[SPEC-001 RF-4 — Sin sesión no hay acceso\|RF-4]], [[SPEC-001 RF-5 — Identidad, rol y pantalla inicial\|RF-5]] |
| [[SPEC-001 D-12 — Despliegue con render.yaml\|D-12]] | Despliegue con render.yaml |  |
| [[SPEC-001 D-13 — API ejecutada con TypeScript nativo de Node 24\|D-13]] | API ejecutada con TypeScript nativo de Node 24 |  |
| [[SPEC-001 D-14 — packages∕contracts se compila antes\|D-14]] | packages/contracts se compila antes |  |
| [[SPEC-001 D-15 — La cookie dura más que la sesión\|D-15]] | La cookie dura más que la sesión | [[SPEC-001 RF-10 — Vencimiento de la sesión\|RF-10]], [[SPEC-001 RF-11 — Regreso tras el vencimiento\|RF-11]] |

## Tareas

### Fase 1 — Preparación (7/7)

- ✅ [[SPEC-001 T001|T001]] [integración] — Configurar TypeScript y Prettier en la raíz: tsconfig.base.json (estricto, ESM, erasableSyntaxOnly),…
- ✅ [[SPEC-001 T002|T002]] [contrato] — Crear el paquete @kofi/contracts vacío: package.json con zod, tsconfig, scripts build (tsc a dist/) y dev (tsc…
- ✅ [[SPEC-001 T003|T003]] [api] [P] — Crear el paquete @kofi/api con las dependencias de §7.1 del plan (fastify, @types/node): app.ts con…
- ✅ [[SPEC-001 T004|T004]] [web] [P] — Crear el paquete @kofi/web con las dependencias de §7.1 del plan (react, react-dom, vite,…
- ✅ [[SPEC-001 T005|T005]] [integración] — Scripts de la raíz (typecheck, lint, test y build, que compilan el contrato primero), proyectos de Vitest y…
- ✅ [[SPEC-001 T006|T006]] [integración] — Configurar Playwright con Chromium: playwright.config.ts, que levanta vite preview y una API mínima de E2E…
- ✅ [[SPEC-001 T007|T007]] [integración] — Desplegar en Render con render.yaml (D-12): sitio estático kofi-web con las reescrituras /api/* → kofi-api y…

### Fase 2 — Base común (12/12)

- ✅ [[SPEC-001 T008|T008]] [contrato] — Escribir packages/contracts/src/errors.ts: esquema ApiError (code, message, fields?, retryAfterMinutes?,…
- ✅ [[SPEC-001 T009|T009]] [contrato] — Escribir packages/contracts/src/auth.ts: USERNAME_MAX_LENGTH, PASSWORD_MAX_LENGTH, Role, SessionUser,…
- ✅ [[SPEC-001 T010|T010]] [api] [P] — Escribir la interfaz Database (query, transaction) con el adaptador de pg y el de PGlite, y el helper…
- ✅ [[SPEC-001 T011|T011]] [api] [P] — Escribir migrate.ts (tabla schema_migrations, aplica en orden las pendientes), el script npm run migrate -w…
- ✅ [[SPEC-001 T012|T012]] [api] [P] — Escribir shared/clock.ts (Clock real y falso para pruebas) y shared/config/env.ts (DATABASE_URL, PORT y…
- ✅ [[SPEC-001 T013|T013]] [api] [P] — Escribir shared/http/errors.ts (AppError y manejador que responde con el formato común, 500 INTERNAL_ERROR sin…
- ✅ [[SPEC-001 T014|T014]] [api] [P] — Escribir passwords.service.ts con scrypt de node:crypto (plan §5.4, D-3; RF-1, RNF-1). Depende de: T003
- ✅ [[SPEC-001 T015|T015]] [api] [P] — Escribir users.repository.ts y sessions.repository.ts: buscar cuenta por usuario (con FOR UPDATE), crear…
- ✅ [[SPEC-001 T016|T016]] [web] [P] — Escribir shared/http/api-fetch.ts: peticiones al mismo origen con cookies, lectura de ApiError con el esquema…
- ✅ [[SPEC-001 T017|T017]] [web] [P] — Escribir modules/auth/api/auth-client.ts: interfaz AuthClient (login, logout, getSession) y su cliente HTTP…
- ✅ [[SPEC-001 T018|T018]] [web] [P] — Escribir modules/auth/dev/: fixtures.ts, auth-demo-client.ts (implementa AuthClient) y ScenarioPicker.tsx con…
- ✅ [[SPEC-001 T019|T019]] [web] [P] — Escribir routes.tsx con react-router (D-9): /ingresar pública y / protegida con su lista roles (por defecto,…

### Fase 3 — US1: iniciar y cerrar sesión (P1) (12/12)

- ✅ [[SPEC-001 T020|T020]] [api] [P] [US1] — Escribir el ingreso en auth.service.ts: usuario normalizado, contraseña exacta, hash ficticio si el usuario no…
- ✅ [[SPEC-001 T021|T021]] [api] [P] [US1] — Escribir POST /api/auth/login en auth.routes.ts, con la cookie kofi_session (HttpOnly, SameSite=Strict,…
- ✅ [[SPEC-001 T022|T022]] [api] [P] [US1] — Escribir resolveSession (sin cookie, token desconocido o revocado → SESSION_MISSING), el hook requireSession…
- ✅ [[SPEC-001 T023|T023]] [api] [P] [US1] — Escribir POST /api/auth/logout (plan §5.3; RF-7, RF-8). Depende de: T022
- ✅ [[SPEC-001 T024|T024]] [api] [P] [US1] — Escribir accounts.service.ts con create y list, validando con accountInputSchema (RF-13). Depende de: T009,…
- ✅ [[SPEC-001 T025|T025]] [api] [P] [US1] — Escribir accounts.cli.ts y el script npm run accounts -w @kofi/api con create y list; la contraseña se pide…
- ✅ [[SPEC-001 T026|T026]] [web] [P] [US1] — Escribir LoginForm.tsx: contraseña oculta, maxLength de 30 y 64, aviso del campo faltante con el esquema del…
- ✅ [[SPEC-001 T027|T027]] [web] [P] [US1] — Escribir SessionProvider.tsx, useSession.ts y RequireSession.tsx: la sesión se comprueba al abrir o recargar…
- ✅ [[SPEC-001 T028|T028]] [web] [P] [US1] — Escribir LoginPage.tsx: si ya hay sesión, va a /; tras un ingreso correcto, va a / (RF-1, RF-6). Depende de:…
- ✅ [[SPEC-001 T029|T029]] [web] [P] [US1] — Escribir AuthenticatedLayout.tsx y HomePage.tsx: saludo con el nombre visible, rol («Dueño» o «Cajero») y…
- ✅ [[SPEC-001 T030|T030]] [integración] [US1] — Cambiar el cliente simulado por el real en la aplicación y ampliar e2e-server.ts con PGlite y las cuentas de…
- ✅ [[SPEC-001 T031|T031]] [integración] [US1] — Escribir e2e/us1-iniciar-cerrar-sesion.spec.ts con los 8 pasos de §8.2 del plan (RF-1 a RF-8, RF-14). Depende…

### Fase 4 — US2: proteger las cuentas (P2) (10/10)

- ✅ [[SPEC-001 T032|T032]] [api] [P] [US2] — Añadir el bloqueo al ingreso: failed_logins, ventana de 15 minutos, locked_until de 5 minutos, intentos…
- ✅ [[SPEC-001 T033|T033]] [api] [P] [US2] — Añadir el vencimiento: resolveSession devuelve SESSION_EXPIRED con el userId de la sesión a las 12 horas,…
- ✅ [[SPEC-001 T034|T034]] [api] [P] [US2] — Añadir la terminación: SESSION_TERMINATED si la cuenta se eliminó o su session_version cambió (plan §5.2;…
- ✅ [[SPEC-001 T035|T035]] [api] [P] [US2] — Añadir update y delete a accounts.service.ts y a accounts.cli.ts (plan §5.5; RF-12, RF-13). Depende de: T025,…
- ✅ [[SPEC-001 T036|T036]] [web] [P] [US2] — Mostrar en LoginPage y LoginForm el mensaje de bloqueo de la API y los avisos de vencimiento y terminación…
- ✅ [[SPEC-001 T037|T037]] [web] [P] [US2] — Hacer que SessionProvider y RequireSession manejen SESSION_EXPIRED y SESSION_TERMINATED: van a /ingresar con…
- ✅ [[SPEC-001 T038|T038]] [web] [P] [US2] — Escribir api/return-to.ts y la navegación de regreso tras el vencimiento (plan §5.6; RF-11): ante…
- ✅ [[SPEC-001 T039|T039]] [integración] [US2] — Añadir a e2e-server.ts las rutas de prueba POST /api/__test/clock y POST /api/__test/accounts/:username, que…
- ✅ [[SPEC-001 T040|T040]] [integración] [US2] — Escribir e2e/us2-proteger-cuentas.spec.ts con los 4 pasos de §8.2 del plan, incluida la comprobación de que la…
- ✅ [[SPEC-001 T045|T045]] [web] [US2] — Corregir la sincronización de la prueba del aviso recibido al ingresar (RF-10, RF-12), requerida por el…

### Fase 5 — Pulido (5/5)

- ✅ [[SPEC-001 T041|T041]] [integración] — Añadir a la CI la comprobación de que el build de apps/web no contiene nada de dev/, con un script en Node…
- ✅ [[SPEC-001 T042|T042]] [integración] — Desplegar la versión completa en Render y comprobarla, con el Blueprint apuntando a esta rama y su base de…
- ✅ [[SPEC-001 T043|T043]] [integración] — Medir en el despliegue de T042 el RNF-4 y el criterio de 15 segundos, como indica el plan (§8.3): script local…
- ✅ [[SPEC-001 T044|T044]] [integración] — Actualizar README.md: estado del módulo Acceso, cómo arrancar en desarrollo (apps/api/.env, npm run migrate y…
- ✅ [[SPEC-001 T046|T046]] [integración] — Corregir el timeout de la prueba que aísla los controles de E2E de la aplicación normal (RF-4, RF-9, RF-10,…

## Pull requests

- [[PR 18]] — test(auth): completar el pulido de acceso [SPEC-001] (2026-10-24)
- [[PR 17]] — feat(auth): proteger las cuentas [SPEC-001] (2026-10-24)
- [[PR 15]] — feat(auth): iniciar y cerrar sesión [SPEC-001] (2026-10-24)
- [[PR 10]] — feat(auth): definir el acceso y preparar el monorepo [SPEC-001] (2026-10-24)

## Archivos de la especificación

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/tasks.md)
- [evidence/access-performance.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/evidence/access-performance.json)
