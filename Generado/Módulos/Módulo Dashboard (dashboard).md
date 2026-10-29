---
tags:
  - modulo
  - modulo/dashboard
---

# Módulo Dashboard (dashboard)

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

> [!abstract] Qué hace
> Resumen de las ventas del día y del mes

## Especificaciones

- [[SPEC-004 Dashboard]] — principal

## Contrato

- [packages/contracts/src/dashboard.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/packages/contracts/src/dashboard.ts) — ver [[Contratos]]

## API

Carpeta: [apps/api/src/modules/dashboard](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/dashboard) · 4 archivos de código y 4 de pruebas.

| Método | Ruta |
| --- | --- |
| GET | `/api/dashboard/today` |
| GET | `/api/dashboard/month` |

- `dashboard.routes.ts`
- `dashboard.service.ts`
- `dashboard.summary.ts`
- `index.ts`

### Tablas que usa

_Ninguna._

Ver [[Base de datos]].

## Interfaz

Carpeta: [apps/web/src/modules/dashboard](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/dashboard) · 14 archivos de código y 8 de pruebas.

| Ruta | Página | Roles | Enlace de inicio |
| --- | --- | --- | --- |
| `/resumen` | DashboardPage | owner, cashier | Resumen de ventas |

- **api/** `DashboardClientProvider.tsx`, `dashboard-client.ts`
- **components/** `DailySalesTable.tsx`, `MonthSummarySection.tsx`, `PeriodSummaryView.tsx`, `TodaySummarySection.tsx`, `counts.ts`
- **dev/** `ScenarioPicker.tsx`, `dashboard-demo-client.ts`, `fixtures.ts`
- **(raíz)** `index.ts`
- **pages/** `DashboardPage.css`, `DashboardPage.tsx`
- **state/** `useDashboardSummaries.ts`
