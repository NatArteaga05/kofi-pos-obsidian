---
tags:
  - requisito
spec: "SPEC-002"
---

# SPEC-002 RF-6 — Validación de un producto

Especificación: [[SPEC-002 Menú|SPEC-002]] · Historia: [[SPEC-002 HU-1 — Armar el menú|HU-1]]

Si al crear o editar un producto algún dato no cumple «Datos de un producto», entonces el sistema deberá rechazar el cambio completo, conservar lo escrito e indicar cada dato que falla con estos mensajes:

| Situación | Mensaje |
| --- | --- |
| Nombre vacío o formado solo por espacios | «Escribe el nombre del producto» |
| Nombre igual al de otro producto según «Comparación de nombres» | «Ya existe un producto con ese nombre» |
| Nombre con un carácter no admitido | «El nombre solo puede tener letras, números, espacios y los signos . , - ' ( ) & /» |
| Sin categoría | «Elige una categoría» |
| Categoría inactiva elegida al crear el producto o al moverlo de categoría | «Elige una categoría activa» |
| Precio vacío o formado solo por espacios | «Escribe el precio» |
| Precio que no es un número, con separador de miles, con espacios intermedios o con más de 2 decimales | «Escribe el precio en bolivianos, con hasta 2 decimales (por ejemplo, 12,50)» |
| Precio igual a 0 o negativo | «El precio debe ser mayor que 0» |
| Precio mayor que 1000,00 | «El precio no puede superar Bs 1000,00» |

- El sistema deberá impedir escribir más de 40 caracteres en el nombre de un producto.

## Decisiones que lo resuelven

- [[SPEC-002 D-2 — Precios en centavos enteros]]
- [[SPEC-002 D-3 — Letras admitidas]]
- [[SPEC-002 D-4 — Comparación con name_key calculada en la API]]
- [[SPEC-002 D-6 — Todos los errores de datos en un solo 400…]]
- [[SPEC-002 D-11 — Escenarios de desarrollo del menú]]

## Tareas que lo cubren

- ✅ [[SPEC-002 T003|T003]]
- ✅ [[SPEC-002 T004|T004]]
- ✅ [[SPEC-002 T005|T005]]
- ✅ [[SPEC-002 T010|T010]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T015|T015]]
- ✅ [[SPEC-002 T017|T017]]
- ✅ [[SPEC-002 T021|T021]]
- ✅ [[SPEC-002 T023|T023]]
- ✅ [[SPEC-002 T024|T024]]
- ✅ [[SPEC-002 T036|T036]]
