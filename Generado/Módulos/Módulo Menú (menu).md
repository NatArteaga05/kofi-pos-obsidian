---
tags:
  - modulo
  - modulo/menu
---

# Módulo Menú (menu)

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

> [!abstract] Qué hace
> Administrar productos y categorías

## Especificaciones

- [[SPEC-002 Menú]] — principal
- [[SPEC-003 Ventas]]
- [[SPEC-006 Menú inicial]] — principal
- [[SPEC-007 Ventas de demostración]]

## Contrato

- [packages/contracts/src/menu.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/packages/contracts/src/menu.ts) — ver [[Contratos]]

## API

Carpeta: [apps/api/src/modules/menu](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/menu) · 10 archivos de código y 11 de pruebas.

| Método | Ruta |
| --- | --- |
| GET | `/api/menu` |
| POST | `/api/menu/categories/:id/deactivate` |
| POST | `/api/menu/categories/:id/reactivate` |
| POST | `/api/menu/products/:id/deactivate` |
| POST | `/api/menu/products/:id/reactivate` |
| GET | `/api/menu/admin` |
| POST | `/api/menu/categories` |
| PUT | `/api/menu/categories/:id` |
| POST | `/api/menu/products` |
| PUT | `/api/menu/products/:id` |

- `categories.repository.ts`
- `categories.service.ts`
- `index.ts`
- `menu.routes.ts`
- `menu.views.ts`
- `official-menu.cli.ts`
- `official-menu.data.ts`
- `official-menu.service.ts`
- `products.repository.ts`
- `products.service.ts`

### Tablas que usa

- `categories` (002_menu.sql)
- `products` (002_menu.sql)

Ver [[Base de datos]].

## Interfaz

Carpeta: [apps/web/src/modules/menu](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/menu) · 15 archivos de código y 10 de pruebas.

| Ruta | Página | Roles | Enlace de inicio |
| --- | --- | --- | --- |
| `/menu/administrar` | MenuAdminPage | owner | Administrar menú |
| `/menu` | MenuPage | owner, cashier | Ver menú |

- **api/** `MenuClientProvider.tsx`, `menu-client.ts`
- **components/** `CategoryForm.tsx`, `CurrentMenuList.tsx`, `MenuAdminList.tsx`, `ProductForm.tsx`, `SaveStatus.tsx`, `category-anchor.ts`
- **dev/** `ScenarioPicker.tsx`, `fixtures.ts`, `menu-demo-client.ts`
- **(raíz)** `index.ts`, `menu.css`
- **pages/** `MenuAdminPage.tsx`, `MenuPage.tsx`
