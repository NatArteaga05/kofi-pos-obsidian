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
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Iniciar y cerrar sesión** (P1): Como persona del local (dueño o cajero), quiero iniciar sesión con mi usuario y contraseña y cerrarla al terminar para usar el sistema con mi identidad y que la siguiente persona de la computadora compartida no opere con mi cuenta.
- **HU-2 — Proteger las cuentas** (P2): Como dueño, quiero que las sesiones venzan solas, que se frenen los intentos repetidos de adivinar una contraseña y que los cambios en una cuenta corten sus sesiones para que una sesión olvidada, alguien probando contraseñas o una cuenta modificada no comprometan el sistema.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Ingreso con credenciales | HU-1 |
| RF-2 | Credenciales incorrectas | HU-1 |
| RF-3 | Campos vacíos y largo máximo | HU-1 |
| RF-4 | Sin sesión no hay acceso | HU-1 |
| RF-5 | Identidad, rol y pantalla inicial | HU-1 |
| RF-6 | Sesión por navegador | HU-1 |
| RF-7 | Cierre de sesión | HU-1 |
| RF-8 | Sesión cerrada inservible | HU-1 |
| RF-13 | Validación de las cuentas | HU-1 |
| RF-14 | Sin conexión al ingresar | HU-1 |
| RF-9 | Bloqueo por intentos fallidos | HU-2 |
| RF-10 | Vencimiento de la sesión | HU-2 |
| RF-11 | Regreso tras el vencimiento | HU-2 |
| RF-12 | Cambios en la cuenta durante la sesión | HU-2 |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| RNF-1 | Contraseñas protegidas |
| RNF-2 | Sin pistas sobre las cuentas |
| RNF-3 | Idioma |
| RNF-4 | Rapidez |
| RNF-5 | Uso con teclado |

## Decisiones técnicas

| # | Decisión |
| --- | --- |
| D-1 | Sesión en la base con cookie HttpOnly |
| D-2 | Mismo origen para interfaz y API |
| D-3 | Contraseñas con scrypt de node:crypto |
| D-4 | Formato común de errores |
| D-5 | Bloqueo con tabla failed_logins y users.locked_until |
| D-6 | pg |
| D-7 | @electric-sql/pglite |
| D-8 | @fastify/cookie |
| D-9 | react-router |
| D-10 | Herramientas de calidad |
| D-11 | Cada módulo expone un index.ts |
| D-12 | Despliegue con render.yaml |
| D-13 | API ejecutada con TypeScript nativo de Node 24 |
| D-14 | packages/contracts se compila antes |
| D-15 | La cookie dura más que la sesión |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 7/7 | ✅ |
| Fase 2 — Base común | 12/12 | ✅ |
| Fase 3 — US1: iniciar y cerrar sesión (P1) | 12/12 | ✅ |
| Fase 4 — US2: proteger las cuentas (P2) | 10/10 | ✅ |
| Fase 5 — Pulido | 5/5 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-24 | [#18](https://github.com/Tutuma-jar/kofi-pos-v2/pull/18) | test(auth): completar el pulido de acceso [SPEC-001] |
| 2026-10-24 | [#17](https://github.com/Tutuma-jar/kofi-pos-v2/pull/17) | feat(auth): proteger las cuentas [SPEC-001] |
| 2026-10-24 | [#15](https://github.com/Tutuma-jar/kofi-pos-v2/pull/15) | feat(auth): iniciar y cerrar sesión [SPEC-001] |
| 2026-10-24 | [#10](https://github.com/Tutuma-jar/kofi-pos-v2/pull/10) | feat(auth): definir el acceso y preparar el monorepo [SPEC-001] |

## Pruebas de punta a punta

- [e2e/us1-iniciar-cerrar-sesion.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/us1-iniciar-cerrar-sesion.spec.ts)
- [e2e/us2-proteger-cuentas.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/us2-proteger-cuentas.spec.ts)

## Archivos

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/tasks.md)
- [evidence/access-performance.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/001-acceso/evidence/access-performance.json)
