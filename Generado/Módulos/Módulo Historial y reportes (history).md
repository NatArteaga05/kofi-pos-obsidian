---
tags:
  - modulo
  - modulo/history
---

# Módulo Historial y reportes (history)

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

> [!abstract] Qué hace
> Consultar ventas pasadas

## Especificaciones

- [[SPEC-005 Historial y reportes]] — principal

## Contrato

- [packages/contracts/src/history.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/packages/contracts/src/history.ts) — ver [[Contratos]]

## API

Carpeta: [apps/api/src/modules/history](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/history) · 4 archivos de código y 5 de pruebas.

| Método | Ruta |
| --- | --- |
| GET | `/api/history/day` |
| GET | `/api/history/month` |
| GET | `/api/history/sales/:number` |
| GET | `/api/history/sales/*` |

- `history.report.ts`
- `history.routes.ts`
- `history.service.ts`
- `index.ts`

### Tablas que usa

_Ninguna._

Ver [[Base de datos]].

## Interfaz

Carpeta: [apps/web/src/modules/history](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/history) · 22 archivos de código y 16 de pruebas.

| Ruta | Página | Roles | Enlace de inicio |
| --- | --- | --- | --- |
| `/ventas` | DayHistoryPage | owner | Historial de ventas |
| `/ventas/mes` | MonthHistoryPage | owner | — |
| `/ventas/:numero` | SaleDetailPage | owner | — |

- **api/** `HistoryClientProvider.tsx`, `history-client.ts`
- **components/** `HistoryTimingObserver.tsx`, `MonthDaysTable.tsx`, `PeriodTotals.tsx`, `QueryStatus.tsx`, `SaleDetailView.tsx`, `SaleSearch.tsx`, `SalesList.tsx`, `counts.ts`
- **dev/** `ScenarioPicker.tsx`, `demo-calendar.ts`, `fixtures.ts`, `history-demo-client.ts`
- **(raíz)** `history.css`, `index.ts`
- **pages/** `DayHistoryPage.tsx`, `MonthHistoryPage.tsx`, `SaleDetailPage.tsx`
- **state/** `history-timing.ts`, `useHistoryQuery.ts`, `useHistoryTiming.ts`
