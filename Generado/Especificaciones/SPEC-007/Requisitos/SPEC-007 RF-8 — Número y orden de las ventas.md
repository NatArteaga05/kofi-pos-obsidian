---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-8 — Número y orden de las ventas

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá numerar las ventas de demostración desde el N.º 1, sin saltos ni repeticiones, en el orden de su fecha y hora: una venta posterior tiene siempre un número mayor ([[SPEC-003 Ventas|SPEC-003]], «Datos de una venta registrada»).
- El sistema deberá no registrar dos ventas de demostración en el mismo segundo; varias pueden caer en el mismo minuto, como en un mostrador real.
- Cuando después de la carga se registra una venta desde «Nueva venta», el sistema deberá darle el número siguiente al de la última venta de demostración.

## Decisiones que lo resuelven

- [[SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8…]]
- [[SPEC-007 D-10 — Inserción con insertSalesBatch en lotes de 250]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T005|T005]]
- ✅ [[SPEC-007 T006|T006]]
- ✅ [[SPEC-007 T008|T008]]
- ✅ [[SPEC-007 T010|T010]]
