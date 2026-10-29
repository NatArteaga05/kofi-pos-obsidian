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
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Ver el resumen de hoy** (P1): Como persona que atiende el local (dueño o cajero), quiero ver cuánto se vendió hoy, en cuántas ventas, cuánto se cobró en efectivo y cuánto con QR, y qué productos se vendieron más para controlar la caja al cerrar el día o el turno y saber cómo va la jornada sin hacer cuentas.
- **HU-2 — Ver el resumen del mes en curso** (P2): Como dueño, quiero ver cuánto se vendió en lo que va del mes, cómo se reparte entre efectivo y QR, cuánto se vendió cada día y qué productos se vendieron más para seguir la marcha del negocio durante el mes.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Acceso al resumen | HU-1 |
| RF-2 | Ventas de hoy | HU-1 |
| RF-3 | Totales de un resumen | HU-1 |
| RF-4 | Por medio de pago | HU-1 |
| RF-5 | Productos más vendidos | HU-1 |
| RF-6 | Momento de los datos y actualización | HU-1 |
| RF-7 | Sin conexión o con error | HU-1 |
| RF-8 | Las cifras salen de las ventas tal como se registraron | HU-1 |
| RF-9 | Ventas del mes en curso | HU-2 |
| RF-10 | Ventas por día | HU-2 |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| RNF-1 | Idioma |
| RNF-2 | Cifras exactas |
| RNF-3 | Rapidez |
| RNF-4 | Uso con teclado |

## Decisiones técnicas

| # | Decisión |
| --- | --- |
| D-1 | Las ventas registradas llegan al Dashboard como una función inyectada |
| D-2 | Una ruta por resumen |
| D-3 | La API calcula todo el resumen en memoria |
| D-4 | shared/calendar.ts en la API |
| D-5 | formatDate y formatMonth en el contrato |
| D-6 | DASHBOARD_MONTH_ROLES en el contrato |
| D-7 | El rechazo por rol se muestra en la propia pantalla |
| D-8 | DashboardClientProvider y escenarios de desarrollo |
| D-9 | Ruta /resumen |
| D-10 | La jornada es el día calendario de Bolivia |
| D-11 | Medición de RNF-3 |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 1/1 | ✅ |
| Fase 2 — Base común | 11/11 | ✅ |
| Fase 3 — US1: ver el resumen de hoy (P1) | 8/8 | ✅ |
| Fase 4 — US2: ver el resumen del mes en curso (P2) | 5/5 | ✅ |
| Fase 5 — Pulido | 9/9 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-27 | [#42](https://github.com/Tutuma-jar/kofi-pos-v2/pull/42) | style(dashboard): destacar el resumen de ventas [SPEC-004] |
| 2026-10-26 | [#33](https://github.com/Tutuma-jar/kofi-pos-v2/pull/33) | test(dashboard): medir y verificar el resumen de ventas [SPEC-004] |
| 2026-10-26 | [#30](https://github.com/Tutuma-jar/kofi-pos-v2/pull/30) | feat(dashboard): mostrar el resumen del mes [SPEC-004] |
| 2026-10-26 | [#29](https://github.com/Tutuma-jar/kofi-pos-v2/pull/29) | feat(dashboard): mostrar el resumen de hoy [SPEC-004] |
| 2026-10-25 | [#20](https://github.com/Tutuma-jar/kofi-pos-v2/pull/20) | feat(dashboard): definir el resumen de ventas [SPEC-004] |

## Pruebas de punta a punta

- [e2e/dashboard-us1-resumen-hoy.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/dashboard-us1-resumen-hoy.spec.ts)
- [e2e/dashboard-us2-resumen-mes.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/dashboard-us2-resumen-mes.spec.ts)

## Archivos

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/tasks.md)
- [evidence/measurement-attempt-1.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/evidence/measurement-attempt-1.json)
- [evidence/measurement-cashier-repeat.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/evidence/measurement-cashier-repeat.json)
- [measurement.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/004-dashboard/measurement.md)
