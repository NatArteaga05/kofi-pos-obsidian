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

- [[dashboard.ts (contracts)]] — ver [[Contratos]]

## Rutas de la API

- [[GET ∕api∕dashboard∕today]]
- [[GET ∕api∕dashboard∕month]]

## Pantallas

- [[Pantalla ∕resumen]]

## Tablas

_Ninguno._

## API — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/dashboard)

- [[dashboard.routes.ts (api dashboard)]]
- [[dashboard.service.ts (api dashboard)]]
- [[dashboard.summary.ts (api dashboard)]]
- [[index.ts (api dashboard)]]

## Interfaz — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/dashboard)

- [[DashboardClientProvider.tsx (web dashboard api)]]
- [[dashboard-client.ts (web dashboard api)]]
- [[DailySalesTable.tsx (web dashboard components)]]
- [[MonthSummarySection.tsx (web dashboard components)]]
- [[PeriodSummaryView.tsx (web dashboard components)]]
- [[TodaySummarySection.tsx (web dashboard components)]]
- [[counts.ts (web dashboard components)]]
- [[ScenarioPicker.tsx (web dashboard dev)]]
- [[dashboard-demo-client.ts (web dashboard dev)]]
- [[fixtures.ts (web dashboard dev)]]
- [[index.ts (web dashboard)]]
- [[DashboardPage.tsx (web dashboard pages)]]
- [[useDashboardSummaries.ts (web dashboard state)]]
