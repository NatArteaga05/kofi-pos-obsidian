---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-7 — Quién registró cada venta

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá registrar cada venta de demostración a nombre de una cuenta de dueño o cajero de la base, con el nombre visible y el rol que esa cuenta tiene al ejecutar la carga ([[SPEC-003 Ventas|SPEC-003]], «Datos de una venta registrada»).
- Mientras la base tenga cuentas de los dos roles, el sistema deberá registrar entre el 70 % y el 85 % de las ventas a nombre de cuentas de cajero y el resto a nombre de cuentas de dueño; si solo hay cuentas de un rol, todas a nombre de cuentas de ese rol.
- Donde haya varias cuentas del mismo rol, el sistema deberá registrar ventas a nombre de cada una de ellas.

## Decisiones que lo resuelven

- [[SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla]]
- [[SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8…]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T005|T005]]
- ✅ [[SPEC-007 T006|T006]]
- ✅ [[SPEC-007 T008|T008]]
