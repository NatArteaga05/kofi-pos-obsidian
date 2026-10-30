---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-2 — Precios en centavos enteros

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-6 — Validación de un producto|RF-6]], [[SPEC-002 RNF-2 — Importes exactos|RNF-2]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**Precios en centavos enteros** (`integer` en la base, `priceCents` en el contrato) y **`formatPrice` en el contrato**

## Por qué

Los enteros son exactos ([[SPEC-002 RNF-2 — Importes exactos|RNF-2]]) y servirán a Ventas para sumar sin errores de redondeo. Una sola función de formato, compartida, evita que la API y la interfaz muestren un mismo precio de dos formas. Formatear no es calcular un importe (principio 3)

## Alternativa descartada

`numeric(7,2)`: `pg` lo devuelve como texto y cada capa tendría que convertirlo. `number` con decimales: 0,1 + 0,2 no da 0,3. Que la API devuelva el texto formateado: Ventas y Dashboard tendrían que pedir cada formato a la API

## Tareas que la aplican

- ✅ [[SPEC-002 T004|T004]]
