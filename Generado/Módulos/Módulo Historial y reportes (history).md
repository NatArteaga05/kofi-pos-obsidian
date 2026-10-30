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

- [[history.ts (contracts)]] — ver [[Contratos]]

## Rutas de la API

- [[GET ∕api∕history∕day]]
- [[GET ∕api∕history∕month]]
- [[GET ∕api∕history∕sales∕{number}]]
- [[GET ∕api∕history∕sales∕{resto}]]

## Pantallas

- [[Pantalla ∕ventas]]
- [[Pantalla ∕ventas∕mes]]
- [[Pantalla ∕ventas∕{numero}]]

## Tablas

_Ninguno._

## API — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/history)

- [[history.report.ts (api history)]]
- [[history.routes.ts (api history)]]
- [[history.service.ts (api history)]]
- [[index.ts (api history)]]

## Interfaz — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/history)

- [[HistoryClientProvider.tsx (web history api)]]
- [[history-client.ts (web history api)]]
- [[HistoryTimingObserver.tsx (web history components)]]
- [[MonthDaysTable.tsx (web history components)]]
- [[PeriodTotals.tsx (web history components)]]
- [[QueryStatus.tsx (web history components)]]
- [[SaleDetailView.tsx (web history components)]]
- [[SaleSearch.tsx (web history components)]]
- [[SalesList.tsx (web history components)]]
- [[counts.ts (web history components)]]
- [[ScenarioPicker.tsx (web history dev)]]
- [[demo-calendar.ts (web history dev)]]
- [[fixtures.ts (web history dev)]]
- [[history-demo-client.ts (web history dev)]]
- [[index.ts (web history)]]
- [[DayHistoryPage.tsx (web history pages)]]
- [[MonthHistoryPage.tsx (web history pages)]]
- [[SaleDetailPage.tsx (web history pages)]]
- [[history-timing.ts (web history state)]]
- [[useHistoryQuery.ts (web history state)]]
- [[useHistoryTiming.ts (web history state)]]
