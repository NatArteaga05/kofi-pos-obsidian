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

- [[menu.ts (contracts)]] — ver [[Contratos]]

## Rutas de la API

- [[GET ∕api∕menu]]
- [[POST ∕api∕menu∕categories∕{id}∕deactivate]]
- [[POST ∕api∕menu∕categories∕{id}∕reactivate]]
- [[POST ∕api∕menu∕products∕{id}∕deactivate]]
- [[POST ∕api∕menu∕products∕{id}∕reactivate]]
- [[GET ∕api∕menu∕admin]]
- [[POST ∕api∕menu∕categories]]
- [[PUT ∕api∕menu∕categories∕{id}]]
- [[POST ∕api∕menu∕products]]
- [[PUT ∕api∕menu∕products∕{id}]]

## Pantallas

- [[Pantalla ∕menu∕administrar]]
- [[Pantalla ∕menu]]

## Tablas

- [[Tabla categories]]
- [[Tabla products]]

## API — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/menu)

- [[categories.repository.ts (api menu)]]
- [[categories.service.ts (api menu)]]
- [[index.ts (api menu)]]
- [[menu.routes.ts (api menu)]]
- [[menu.views.ts (api menu)]]
- [[official-menu.cli.ts (api menu)]]
- [[official-menu.data.ts (api menu)]]
- [[official-menu.service.ts (api menu)]]
- [[products.repository.ts (api menu)]]
- [[products.service.ts (api menu)]]

## Interfaz — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/menu)

- [[MenuClientProvider.tsx (web menu api)]]
- [[menu-client.ts (web menu api)]]
- [[CategoryForm.tsx (web menu components)]]
- [[CurrentMenuList.tsx (web menu components)]]
- [[MenuAdminList.tsx (web menu components)]]
- [[ProductForm.tsx (web menu components)]]
- [[SaveStatus.tsx (web menu components)]]
- [[category-anchor.ts (web menu components)]]
- [[ScenarioPicker.tsx (web menu dev)]]
- [[fixtures.ts (web menu dev)]]
- [[menu-demo-client.ts (web menu dev)]]
- [[index.ts (web menu)]]
- [[MenuAdminPage.tsx (web menu pages)]]
- [[MenuPage.tsx (web menu pages)]]
