---
tags:
  - ruta-api
---

# Rutas

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

Todas las rutas de la API van bajo `/api` y se sirven desde el mismo origen que la interfaz ([[Arquitectura]] §6.1).

## API

| Ruta | Módulo | Especificaciones |
| --- | --- | --- |
| [[POST ∕api∕auth∕logout]] | [[Módulo Acceso (auth)\|auth]] | [[SPEC-001 Acceso\|SPEC-001]] |
| [[GET ∕api∕auth∕session]] | [[Módulo Acceso (auth)\|auth]] | [[SPEC-001 Acceso\|SPEC-001]] |
| [[POST ∕api∕auth∕login]] | [[Módulo Acceso (auth)\|auth]] | [[SPEC-001 Acceso\|SPEC-001]] |
| [[GET ∕api∕dashboard∕today]] | [[Módulo Dashboard (dashboard)\|dashboard]] | [[SPEC-004 Dashboard\|SPEC-004]] |
| [[GET ∕api∕dashboard∕month]] | [[Módulo Dashboard (dashboard)\|dashboard]] | [[SPEC-004 Dashboard\|SPEC-004]] |
| [[GET ∕api∕history∕day]] | [[Módulo Historial y reportes (history)\|history]] | [[SPEC-005 Historial y reportes\|SPEC-005]] |
| [[GET ∕api∕history∕month]] | [[Módulo Historial y reportes (history)\|history]] | [[SPEC-005 Historial y reportes\|SPEC-005]] |
| [[GET ∕api∕history∕sales∕{number}]] | [[Módulo Historial y reportes (history)\|history]] | [[SPEC-005 Historial y reportes\|SPEC-005]] |
| [[GET ∕api∕history∕sales∕{resto}]] | [[Módulo Historial y reportes (history)\|history]] | — |
| [[GET ∕api∕menu]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]], [[SPEC-003 Ventas\|SPEC-003]] |
| [[POST ∕api∕menu∕categories∕{id}∕deactivate]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[POST ∕api∕menu∕categories∕{id}∕reactivate]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[POST ∕api∕menu∕products∕{id}∕deactivate]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[POST ∕api∕menu∕products∕{id}∕reactivate]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[GET ∕api∕menu∕admin]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[POST ∕api∕menu∕categories]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[PUT ∕api∕menu∕categories∕{id}]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[POST ∕api∕menu∕products]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[PUT ∕api∕menu∕products∕{id}]] | [[Módulo Menú (menu)\|menu]] | [[SPEC-002 Menú\|SPEC-002]] |
| [[POST ∕api∕sales∕quote]] | [[Módulo Ventas (sales)\|sales]] | [[SPEC-003 Ventas\|SPEC-003]] |
| [[POST ∕api∕sales]] | [[Módulo Ventas (sales)\|sales]] | [[SPEC-003 Ventas\|SPEC-003]], [[SPEC-004 Dashboard\|SPEC-004]], [[SPEC-005 Historial y reportes\|SPEC-005]] |

## Interfaz

| Pantalla | Componente | Módulo | Roles | Enlace de inicio |
| --- | --- | --- | --- | --- |
| [[Pantalla ∕ingresar]] | [[LoginPage.tsx (web auth pages)\|LoginPage]] | [[Módulo Acceso (auth)\|auth]] | pública | — |
| [[Pantalla ∕]] | [[HomePage.tsx (web auth pages)\|HomePage]] | [[Módulo Acceso (auth)\|auth]] | owner, cashier | — |
| [[Pantalla ∕menu∕administrar]] | [[MenuAdminPage.tsx (web menu pages)\|MenuAdminPage]] | [[Módulo Menú (menu)\|menu]] | owner | Administrar menú |
| [[Pantalla ∕menu]] | [[MenuPage.tsx (web menu pages)\|MenuPage]] | [[Módulo Menú (menu)\|menu]] | owner, cashier | Ver menú |
| [[Pantalla ∕ventas∕nueva]] | [[NewSalePage.tsx (web sales pages)\|NewSalePage]] | [[Módulo Ventas (sales)\|sales]] | owner, cashier | Nueva venta |
| [[Pantalla ∕resumen]] | [[DashboardPage.tsx (web dashboard pages)\|DashboardPage]] | [[Módulo Dashboard (dashboard)\|dashboard]] | owner, cashier | Resumen de ventas |
| [[Pantalla ∕ventas]] | [[DayHistoryPage.tsx (web history pages)\|DayHistoryPage]] | [[Módulo Historial y reportes (history)\|history]] | owner | Historial de ventas |
| [[Pantalla ∕ventas∕mes]] | [[MonthHistoryPage.tsx (web history pages)\|MonthHistoryPage]] | [[Módulo Historial y reportes (history)\|history]] | owner | — |
| [[Pantalla ∕ventas∕{numero}]] | [[SaleDetailPage.tsx (web history pages)\|SaleDetailPage]] | [[Módulo Historial y reportes (history)\|history]] | owner | — |
