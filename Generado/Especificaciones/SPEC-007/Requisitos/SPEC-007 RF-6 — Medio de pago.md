---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-6 — Medio de pago

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá registrar entre el 55 % y el 65 % de las ventas de demostración con «Efectivo» y el resto con «QR».
- El sistema deberá registrar al menos una venta con cada medio de pago en cada día que tiene ventas.
- El sistema deberá registrar con «QR» una proporción mayor de las ventas con total de Bs 60,00 o más que de las ventas con total menor.

## Decisiones que lo resuelven

- [[SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla]]
- [[SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8…]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T005|T005]]
- ✅ [[SPEC-007 T006|T006]]
