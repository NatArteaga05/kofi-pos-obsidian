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
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Consultar las ventas de un día** (P1): Como dueño, quiero elegir un día y ver todas sus ventas, una por una, con cuánto se vendió en total, cuánto en efectivo y cuánto con QR para controlar la caja de días pasados y encontrar una venta concreta por su hora, su medio de pago o su importe.
- **HU-2 — Ver el detalle de una venta** (P2): Como dueño, quiero abrir una venta y ver todo lo que tuvo: sus productos, cantidades y precios, su total, cómo se pagó, quién la registró y cuándo, ya sea desde la lista de un día o escribiendo su número, para aclarar una duda sobre una venta concreta.
- **HU-3 — Consultar las cifras de un mes** (P3): Como dueño, quiero elegir un mes y ver cuánto se vendió, cuánto en efectivo y cuánto con QR, y cuánto se vendió cada día para comparar la marcha del negocio entre meses y encontrar los días con más o menos ventas.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Acceso al Historial | HU-1 |
| RF-2 | Elegir el día | HU-1 |
| RF-3 | Ventas de un día | HU-1 |
| RF-4 | Cifras de un día | HU-1 |
| RF-5 | Momento de los datos y actualización | HU-1 |
| RF-6 | Sin conexión o con error | HU-1 |
| RF-7 | Las ventas se muestran tal como se registraron | HU-1 |
| RF-8 | Detalle de una venta | HU-2 |
| RF-9 | Buscar una venta por su número | HU-2 |
| RF-10 | Abrir el detalle desde la lista de un día | HU-2 |
| RF-11 | Elegir el mes | HU-3 |
| RF-12 | Cifras de un mes | HU-3 |
| RF-13 | Ventas por día de un mes | HU-3 |

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
| D-1 | Las ventas llegan al Historial como funciones inyectadas |
| D-2 | Una ruta por consulta |
| D-3 | La API calcula las cifras en memoria |
| D-4 | shared/calendar.ts crece con addDays, addMonths, daysOfMonth, boliviaDayBounds y boliviaMonthBounds |
| D-5 | formatTime en datetime.ts |
| D-6 | HISTORY_ROLES en el contrato |
| D-7 | Rutas /ventas (día, ?fecha=YYYY-MM-DD), /ventas/mes (?mes=YYYY-MM) y /ventas/:numero (detalle) |
| D-8 | parseSaleNumber en el contrato |
| D-9 | HistoryClientProvider y escenarios de desarrollo |
| D-10 | Validación de fechas y meses en el servicio |
| D-11 | Medición de RNF-3 |
| D-12 | La lista de un día viaja completa y sin líneas |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 1/1 | ✅ |
| Fase 2 — Base común | 7/7 | ✅ |
| Fase 3 — US1: consultar las ventas de un día (P1) | 10/10 | ✅ |
| Fase 4 — US2: ver el detalle de una venta (P2) | 8/8 | ✅ |
| Fase 5 — US3: consultar las cifras de un mes (P3) | 4/4 | ✅ |
| Fase 6 — Pulido | 8/8 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-27 | [#43](https://github.com/Tutuma-jar/kofi-pos-v2/pull/43) | style(history): disenar el historial de ventas [SPEC-005] |
| 2026-10-27 | [#39](https://github.com/Tutuma-jar/kofi-pos-v2/pull/39) | test(history): comprobar y documentar el historial [SPEC-005] |
| 2026-10-26 | [#38](https://github.com/Tutuma-jar/kofi-pos-v2/pull/38) | feat(history): consultar las cifras de un mes [SPEC-005] |
| 2026-10-26 | [#37](https://github.com/Tutuma-jar/kofi-pos-v2/pull/37) | feat(history): consultar el detalle de una venta [SPEC-005] |
| 2026-10-26 | [#35](https://github.com/Tutuma-jar/kofi-pos-v2/pull/35) | feat(history): consultar las ventas de un dia [SPEC-005] |
| 2026-10-25 | [#25](https://github.com/Tutuma-jar/kofi-pos-v2/pull/25) | feat(history): definir el historial de ventas [SPEC-005] |

## Pruebas de punta a punta

- [e2e/history-us1-ventas-dia.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/history-us1-ventas-dia.spec.ts)
- [e2e/history-us2-detalle-venta.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/history-us2-detalle-venta.spec.ts)
- [e2e/history-us3-cifras-mes.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/history-us3-cifras-mes.spec.ts)

## Archivos

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
