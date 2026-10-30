---
tags:
  - decision
spec: "SPEC-005"
---

# SPEC-005 D-3 — La API calcula las cifras en memoria

Especificación: [[SPEC-005 Historial y reportes|SPEC-005]] · Requisitos: [[SPEC-005 RF-3 — Ventas de un día|RF-3]], [[SPEC-005 RF-4 — Cifras de un día|RF-4]], [[SPEC-005 RF-7 — Las ventas se muestran tal como se registraron|RF-7]], [[SPEC-005 RF-12 — Cifras de un mes|RF-12]], [[SPEC-005 RF-13 — Ventas por día de un mes|RF-13]], [[SPEC-005 RNF-2 — Cifras exactas|RNF-2]], [[SPEC-005 RNF-3 — Rapidez|RNF-3]]

## Decisión

**La API calcula las cifras en memoria** con funciones puras propias del Historial ([[history.report.ts (api history)|history.report.ts]]: `periodTotals`, `listedSales`, `salesByDay`), y el contrato reutiliza `byPaymentMethodSchema`, `paymentMethodTotalSchema` y `dayTotalSchema` de [[dashboard.ts (contracts)|dashboard.ts]] (exportando `byPaymentMethodSchema`, que ya existía)

## Por qué

Las cifras son las mismas que las del Dashboard, y el contrato las describe una vez. Las funciones de cálculo de 004 ([[dashboard.summary.ts (api dashboard)|dashboard.summary.ts]]) ya están fusionadas (PR #29), pero `history` no puede importar archivos internos de `dashboard`; las del Historial son unas pocas sumas, se prueban sin base y no hacen esperar a 005 por 004. Con 6000 ventas al mes ([[SPEC-005 RNF-3 — Rapidez|RNF-3]]), sumar en memoria tarda milisegundos; el costo está en leerlas, y se mide en Pulido ([[SPEC-005 D-11 — Medición de RNF-3|D-11]])

## Alternativa descartada

Recibir `summarizeSales` del `index.ts` de `dashboard`: haría depender las historias de 005 de las de 004, y entrega también promedio y productos, que el Historial no muestra. Llevar las sumas a `shared/`: cambiaría el plan de 004 desde 005. Sumar con SQL en una función nueva de `sales`: reparte la regla entre dos módulos; queda como plan B si Pulido no cumple [[SPEC-005 RNF-3 — Rapidez|RNF-3]]

## Tareas que la aplican

- ✅ [[SPEC-005 T003|T003]]
