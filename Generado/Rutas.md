---
tags:
  - rutas
---

# Rutas

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

Todas las rutas de la API van bajo `/api` y se sirven desde el mismo origen que la interfaz ([[Arquitectura]] §6.1).

## API

| Método | Ruta | Módulo |
| --- | --- | --- |
| POST | `/api/auth/logout` | [[Módulo Acceso (auth)\|auth]] |
| GET | `/api/auth/session` | [[Módulo Acceso (auth)\|auth]] |
| POST | `/api/auth/login` | [[Módulo Acceso (auth)\|auth]] |
| GET | `/api/dashboard/today` | [[Módulo Dashboard (dashboard)\|dashboard]] |
| GET | `/api/dashboard/month` | [[Módulo Dashboard (dashboard)\|dashboard]] |
| GET | `/api/history/day` | [[Módulo Historial y reportes (history)\|history]] |
| GET | `/api/history/month` | [[Módulo Historial y reportes (history)\|history]] |
| GET | `/api/history/sales/:number` | [[Módulo Historial y reportes (history)\|history]] |
| GET | `/api/history/sales/*` | [[Módulo Historial y reportes (history)\|history]] |
| GET | `/api/menu` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/menu/categories/:id/deactivate` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/menu/categories/:id/reactivate` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/menu/products/:id/deactivate` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/menu/products/:id/reactivate` | [[Módulo Menú (menu)\|menu]] |
| GET | `/api/menu/admin` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/menu/categories` | [[Módulo Menú (menu)\|menu]] |
| PUT | `/api/menu/categories/:id` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/menu/products` | [[Módulo Menú (menu)\|menu]] |
| PUT | `/api/menu/products/:id` | [[Módulo Menú (menu)\|menu]] |
| POST | `/api/sales/quote` | [[Módulo Ventas (sales)\|sales]] |
| POST | `/api/sales` | [[Módulo Ventas (sales)\|sales]] |

## Interfaz

| Ruta | Página | Módulo | Roles | Enlace de inicio |
| --- | --- | --- | --- | --- |
| `/ingresar` | LoginPage | [[Módulo Acceso (auth)\|auth]] | pública | — |
| `/` | HomePage | [[Módulo Acceso (auth)\|auth]] | owner, cashier | — |
| `/menu/administrar` | MenuAdminPage | [[Módulo Menú (menu)\|menu]] | owner | Administrar menú |
| `/menu` | MenuPage | [[Módulo Menú (menu)\|menu]] | owner, cashier | Ver menú |
| `/ventas/nueva` | NewSalePage | [[Módulo Ventas (sales)\|sales]] | owner, cashier | Nueva venta |
| `/resumen` | DashboardPage | [[Módulo Dashboard (dashboard)\|dashboard]] | owner, cashier | Resumen de ventas |
| `/ventas` | DayHistoryPage | [[Módulo Historial y reportes (history)\|history]] | owner | Historial de ventas |
| `/ventas/mes` | MonthHistoryPage | [[Módulo Historial y reportes (history)\|history]] | owner | — |
| `/ventas/:numero` | SaleDetailPage | [[Módulo Historial y reportes (history)\|history]] | owner | — |
