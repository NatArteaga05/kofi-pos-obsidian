---
tags:
  - modulo
  - modulo/sales
---

# Módulo Ventas (sales)

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

> [!abstract] Qué hace
> Preparar y registrar ventas pagadas

## Especificaciones

- [[SPEC-003 Ventas]] — principal
- [[SPEC-004 Dashboard]]
- [[SPEC-005 Historial y reportes]]
- [[SPEC-007 Ventas de demostración]] — principal

## Contrato

- [packages/contracts/src/sales.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/packages/contracts/src/sales.ts) — ver [[Contratos]]

## API

Carpeta: [apps/api/src/modules/sales](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/sales) · 12 archivos de código y 14 de pruebas.

| Método | Ruta |
| --- | --- |
| POST | `/api/sales/quote` |
| POST | `/api/sales` |

- `demo-sales.calendar.ts`
- `demo-sales.cli.ts`
- `demo-sales.generator.ts`
- `demo-sales.random.ts`
- `demo-sales.rules.ts`
- `demo-sales.service.ts`
- `index.ts`
- `sales-seed.cli.ts`
- `sales.pricing.ts`
- `sales.repository.ts`
- `sales.routes.ts`
- `sales.service.ts`

### Tablas que usa

- `sale_counter` (003_sales.sql)
- `sales` (003_sales.sql)
- `sale_lines` (003_sales.sql)

Ver [[Base de datos]].

## Interfaz

Carpeta: [apps/web/src/modules/sales](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/sales) · 15 archivos de código y 10 de pruebas.

| Ruta | Página | Roles | Enlace de inicio |
| --- | --- | --- | --- |
| `/ventas/nueva` | NewSalePage | owner, cashier | Nueva venta |

- **api/** `SalesClientProvider.tsx`, `sales-client.ts`
- **components/** `DiscardSaleDialog.tsx`, `PaymentMethodPicker.tsx`, `ProductPicker.tsx`, `SaleConfirmation.tsx`, `SaleDraftLines.tsx`
- **dev/** `ScenarioPicker.tsx`, `fixtures.ts`, `sales-demo-client.ts`
- **(raíz)** `index.ts`
- **pages/** `NewSalePage.css`, `NewSalePage.tsx`
- **state/** `draft-store.ts`, `useSaleDraft.ts`
