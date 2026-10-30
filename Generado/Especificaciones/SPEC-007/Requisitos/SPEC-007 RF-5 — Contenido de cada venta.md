---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-5 — Contenido de cada venta

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá armar cada venta solo con productos de «Menú oficial» ([[SPEC-006 Menú inicial|SPEC-006]]), con su nombre, el nombre de su categoría y su precio tal como están en el menú vigente de la base al ejecutar la carga; un producto aparece en una sola línea de la venta.
- El sistema deberá repartir las ventas así, contando todo el período y con una tolerancia de 5 puntos: 40 % con un solo producto y cantidad 1; 20 % con un solo producto y cantidad de 2 a 6; 35 % con 2 a 5 productos distintos; y 5 % con 6 a 12 productos distintos.
- El sistema deberá dar a cada día con ventas al menos una venta con un solo producto y al menos una con 2 o más productos distintos.
- El sistema deberá usar en cada línea una cantidad de 1 a 6, salvo en las ventas de 6 a 12 productos, donde puede llegar a 12.
- El sistema deberá incluir al menos una bebida (categorías «Cafés», «Otras bebidas calientes», «Bebidas frías» o «Jugos y licuados») en al menos el 80 % de las ventas con 2 a 5 productos.
- El sistema deberá vender cada uno de los 37 productos oficiales al menos una vez en el período.
- El sistema deberá hacer que «Americano», «Cappuccino», «Café latte», «Salteña de pollo» y «Salteña de carne» estén entre los 10 productos con más unidades vendidas en el período.
- El sistema deberá registrar antes de las 12:00 al menos el 70 % de las unidades vendidas de «Salteña de pollo» y «Salteña de carne», y desde las 14:00 al menos el 60 % de las unidades vendidas de la categoría «Repostería».
- El sistema deberá calcular cada subtotal como precio unitario por cantidad y cada total como la suma exacta de sus subtotales ([[SPEC-003 Ventas|SPEC-003]]).

## Decisiones que lo resuelven

- [[SPEC-007 D-4 — menu∕index.ts exporta OFFICIAL_MENU]]
- [[SPEC-007 D-5 — Generador pseudoaleatorio propio con semilla]]
- [[SPEC-007 D-6 — checkDemoSales comprueba cada regla de RF-4 a RF-8…]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T004|T004]]
- ✅ [[SPEC-007 T006|T006]]
- ✅ [[SPEC-007 T008|T008]]
