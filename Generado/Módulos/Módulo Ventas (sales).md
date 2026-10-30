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

- [[sales.ts (contracts)]] — ver [[Contratos]]

## Rutas de la API

- [[POST ∕api∕sales∕quote]]
- [[POST ∕api∕sales]]

## Pantallas

- [[Pantalla ∕ventas∕nueva]]

## Tablas

- [[Tabla sale_counter]]
- [[Tabla sales]]
- [[Tabla sale_lines]]

## API — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/sales)

- [[demo-sales.calendar.ts (api sales)]]
- [[demo-sales.cli.ts (api sales)]]
- [[demo-sales.generator.ts (api sales)]]
- [[demo-sales.random.ts (api sales)]]
- [[demo-sales.rules.ts (api sales)]]
- [[demo-sales.service.ts (api sales)]]
- [[index.ts (api sales)]]
- [[sales-seed.cli.ts (api sales)]]
- [[sales.pricing.ts (api sales)]]
- [[sales.repository.ts (api sales)]]
- [[sales.routes.ts (api sales)]]
- [[sales.service.ts (api sales)]]

## Interfaz — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/sales)

- [[SalesClientProvider.tsx (web sales api)]]
- [[sales-client.ts (web sales api)]]
- [[DiscardSaleDialog.tsx (web sales components)]]
- [[PaymentMethodPicker.tsx (web sales components)]]
- [[ProductPicker.tsx (web sales components)]]
- [[SaleConfirmation.tsx (web sales components)]]
- [[SaleDraftLines.tsx (web sales components)]]
- [[ScenarioPicker.tsx (web sales dev)]]
- [[fixtures.ts (web sales dev)]]
- [[sales-demo-client.ts (web sales dev)]]
- [[index.ts (web sales)]]
- [[NewSalePage.tsx (web sales pages)]]
- [[draft-store.ts (web sales state)]]
- [[useSaleDraft.ts (web sales state)]]
