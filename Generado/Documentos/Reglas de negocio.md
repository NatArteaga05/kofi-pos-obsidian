---
tags:
  - documento
  - negocio
fuente: "docs/business-rules.md"
---

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

# Reglas de negocio — Kofi POS

## Qué es Kofi

Kofi POS es el sistema web de punto de venta de Kofi, una cafetería ficticia que representa un pequeño emprendimiento gastronómico común en Bolivia.

## Contexto

- Negocio pequeño, atendido por una o dos personas.
- Una sola sucursal.
- Se usa desde una computadora del local, con conexión.
- Cobra en efectivo y con QR, y no emite factura ([[SPEC-003 Ventas|SPEC-003]]).
- Atiende dentro del día: la jornada no pasa de la medianoche, así que cada día de ventas es el día calendario en hora de Bolivia ([[SPEC-004 Dashboard|SPEC-004]]).

## Módulos

| # | Módulo | Qué hace | Especificación |
| --- | --- | --- | --- |
| 1 | Acceso | Iniciar y cerrar sesión | [[SPEC-001 Acceso]] |
| 2 | Menú | Administrar productos y categorías | [[SPEC-002 Menú]] |
| 3 | Ventas | Preparar y registrar ventas pagadas | [[SPEC-003 Ventas]] |
| 4 | Dashboard | Resumen de las ventas del día y del mes | [[SPEC-004 Dashboard]] |
| 5 | Historial y reportes | Consultar ventas pasadas | [[SPEC-005 Historial y reportes]] |

Se construyen en ese orden. El dashboard y el historial dependen de ventas reales.

## Reglas globales

Aplican a todo el producto. Las especificaciones no las copian: las enlazan.

| Regla | Valor |
| --- | --- |
| Moneda | Bolivianos (BOB) |
| Zona horaria | Hora de Bolivia (`America/La_Paz`, UTC−4, sin horario de verano) |
| Locales | Uno solo: no hay varias sucursales |
