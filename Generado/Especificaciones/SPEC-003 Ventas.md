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
- **Reglas globales:** [[Reglas de negocio]] · [[Arquitectura]] · [[Constitución]]

## Historias de usuario

- **HU-1 — Registrar una venta pagada** (P1): Como persona que atiende el mostrador (cajero o dueño), quiero armar la venta con los productos del menú y sus cantidades, ver el total que calcula el sistema y registrarla cuando la clientela paga para cobrar lo correcto sin hacer cuentas y que la venta quede registrada para los resúmenes y reportes.
- **HU-2 — No perder la venta en preparación** (P2): Como persona que atiende el mostrador, quiero que la venta que estoy armando no se pierda si recargo la pantalla, voy a otra pantalla o vence mi sesión, y que nadie más la vea si cierro sesión o entra otra persona, para no tener que volver a pedirle el pedido a la clientela y no mezclar mi venta con la de otra persona.

## Requisitos funcionales

| RF | Requisito | Historia |
| --- | --- | --- |
| RF-1 | Acceso a Ventas | HU-1 |
| RF-2 | Productos para vender | HU-1 |
| RF-3 | Armar la venta en preparación | HU-1 |
| RF-4 | Importes calculados por el sistema | HU-1 |
| RF-5 | Cambios del menú durante la preparación | HU-1 |
| RF-6 | Registrar la venta | HU-1 |
| RF-7 | Se cobra lo que se mostró | HU-1 |
| RF-8 | Una venta se registra una sola vez | HU-1 |
| RF-9 | Registro completo o nada | HU-1 |
| RF-10 | Ventas desde varios navegadores | HU-1 |
| RF-11 | Ventas registradas para otros módulos | HU-1 |
| RF-12 | Conservar la venta en preparación | HU-2 |
| RF-13 | Venta en preparación y fin de la sesión | HU-2 |
| RF-14 | Descartar la venta en preparación | HU-2 |

## Requisitos no funcionales

| RNF | Requisito |
| --- | --- |
| RNF-1 | Idioma |
| RNF-2 | Importes exactos |
| RNF-3 | Rapidez |
| RNF-4 | Uso con teclado |

## Decisiones técnicas

| # | Decisión |
| --- | --- |
| D-1 | El menú vigente llega a Ventas como una función inyectada |
| D-2 | POST /api/sales/quote devuelve también los productos para vender |
| D-3 | La interfaz envía la lista deseada y la API la calcula entera |
| D-4 | Integridad en la base |
| D-5 | Un registro por venta en preparación |
| D-6 | 409 MENU_CHANGED sin datos extra |
| D-7 | Fechas como ISO 8601 en UTC |
| D-8 | La venta en preparación se guarda en localStorage |
| D-9 | SessionProvider recibe onSessionEnd(reason) |
| D-10 | SalesClientProvider y escenarios de desarrollo |
| D-11 | Ruta /ventas/nueva |
| D-13 | Medio de pago con códigos estables en inglés |
| D-12 | Medición de RNF-3 |

## Tareas por fase

| Fase | Hechas | Estado |
| --- | --- | --- |
| Fase 1 — Preparación | 1/1 | ✅ |
| Fase 2 — Base común | 14/14 | ✅ |
| Fase 3 — US1: registrar una venta pagada (P1) | 11/11 | ✅ |
| Fase 4 — US2: no perder la venta en preparación (P2) | 4/4 | ✅ |
| Fase 5 — Pulido | 5/5 | ✅ |

## Pull requests

| Fecha | PR | Título |
| --- | --- | --- |
| 2026-10-28 | [#46](https://github.com/Tutuma-jar/kofi-pos-v2/pull/46) | style(sales): añadir el índice de categorías a nueva venta [SPEC-003] |
| 2026-10-27 | [#40](https://github.com/Tutuma-jar/kofi-pos-v2/pull/40) | style(sales): diseñar la pantalla de nueva venta [SPEC-003] |
| 2026-10-25 | [#28](https://github.com/Tutuma-jar/kofi-pos-v2/pull/28) | fix(sales): conservar la lista de productos al vender [SPEC-003] |
| 2026-10-25 | [#27](https://github.com/Tutuma-jar/kofi-pos-v2/pull/27) | feat(sales): conservar la venta en preparacion [SPEC-003] |
| 2026-10-25 | [#26](https://github.com/Tutuma-jar/kofi-pos-v2/pull/26) | feat(sales): registrar una venta pagada [SPEC-003] |
| 2026-10-24 | [#19](https://github.com/Tutuma-jar/kofi-pos-v2/pull/19) | feat(sales): definir las ventas y preparar el módulo [SPEC-003] |

## Pruebas de punta a punta

- [e2e/sales-us1-registrar-venta.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/sales-us1-registrar-venta.spec.ts)
- [e2e/sales-us2-conservar-venta.spec.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/e2e/sales-us2-conservar-venta.spec.ts)

## Archivos

- [spec.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/spec.md)
- [plan.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/plan.md)
- [tasks.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/tasks.md)
- [measurement-results.json](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/measurement-results.json)
- [measurement.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/specs/003-ventas/measurement.md)
