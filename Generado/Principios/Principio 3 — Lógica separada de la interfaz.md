---
tags:
  - principio
---

# Principio 3 — Lógica separada de la interfaz

De la [[Constitución|constitución]].

> Las reglas de negocio viven solo en la API; la interfaz no calcula importes, totales ni métricas oficiales. El contrato entre ambas vive en `packages/contracts`.

## Especificaciones que lo controlan

- [[SPEC-001 Acceso]]
- [[SPEC-002 Menú]]
- [[SPEC-003 Ventas]]
- [[SPEC-004 Dashboard]]
- [[SPEC-005 Historial y reportes]]
- [[SPEC-006 Menú inicial]]
- [[SPEC-007 Ventas de demostración]]

## Decisiones que lo citan

- [[SPEC-001 D-4 — Formato común de errores]]
- [[SPEC-002 D-2 — Precios en centavos enteros]]
- [[SPEC-002 D-9 — El rechazo al cajero lo decide la API]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]
- [[SPEC-003 D-3 — La interfaz envía la lista deseada y la API la calcula…]]
- [[SPEC-004 D-3 — La API calcula todo el resumen en memoria]]
- [[SPEC-004 D-4 — shared∕calendar.ts en la API]]
- [[SPEC-004 D-8 — DashboardClientProvider y escenarios de desarrollo]]
- [[SPEC-005 D-2 — Una ruta por consulta]]
