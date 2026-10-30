---
tags:
  - requisito
spec: "SPEC-007"
---

# SPEC-007 RF-10 — Carga completa o nada

Especificación: [[SPEC-007 Ventas de demostración|SPEC-007]] · Historia: [[SPEC-007 HU-1 — Llenar una base con tres meses de ventas variadas|HU-1]]

- El sistema deberá cargar todas las ventas anunciadas o no cargar ninguna: nunca queda una parte de las ventas de demostración en la base.
- Si la carga no se puede completar (por ejemplo, por falta de conexión o por una configuración de acceso incorrecta), entonces el sistema deberá dejar la base exactamente como estaba antes de ejecutarla y mostrar «No se pudieron cargar las ventas de demostración. Comprueba la configuración y la conexión a la base».
- Si la persona cancela la carga antes de que termine, entonces el sistema deberá dejar la base exactamente como estaba antes de ejecutarla.
- Si dos cargas se ejecutan a la vez sobre la misma base sin ventas, entonces el sistema deberá completar solo una y rechazar la otra con el mensaje de base con ventas de [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]].
- Si mientras se ejecuta la carga se registra una venta desde «Nueva venta», entonces el sistema deberá completar solo una de las dos operaciones: o la carga se rechaza con el mensaje de base con ventas de [[SPEC-007 RF-2 — Solo en una base preparada y sin ventas|RF-2]], o la venta se registra después con el número siguiente al de la última venta de demostración.
- El sistema deberá no mostrar nunca, en ningún mensaje, la dirección de la base, contraseñas ni otros datos de configuración.

## Decisiones que lo resuelven

- [[SPEC-007 D-11 — Si el generador agota sus 50 intentos, la carga no se…]]
- [[SPEC-007 D-8 — El comando recibe sus dependencias]]
- [[SPEC-007 D-10 — Inserción con insertSalesBatch en lotes de 250]]

## Tareas que lo cubren

- ✅ [[SPEC-007 T008|T008]]
- ✅ [[SPEC-007 T009|T009]]
- ✅ [[SPEC-007 T012|T012]]
