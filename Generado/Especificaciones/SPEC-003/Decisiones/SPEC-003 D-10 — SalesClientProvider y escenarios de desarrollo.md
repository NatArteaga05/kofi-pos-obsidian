---
tags:
  - decision
spec: "SPEC-003"
---

# SPEC-003 D-10 — SalesClientProvider y escenarios de desarrollo

Especificación: [[SPEC-003 Ventas|SPEC-003]] · Requisitos: [[SPEC-003 RF-2 — Productos para vender|RF-2]], [[SPEC-003 RF-3 — Armar la venta en preparación|RF-3]], [[SPEC-003 RF-4 — Importes calculados por el sistema|RF-4]], [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]], [[SPEC-003 RF-6 — Registrar la venta|RF-6]], [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]], [[SPEC-003 RF-8 — Una venta se registra una sola vez|RF-8]], [[SPEC-003 RF-9 — Registro completo o nada|RF-9]]

## Decisión

**`SalesClientProvider` y escenarios de desarrollo:** como en [[SPEC-002 Menú|SPEC-002]] ([[SPEC-002 D-10 — MenuClientProvider|D-10]], [[SPEC-002 D-11 — Escenarios de desarrollo del menú|D-11]]), la interfaz obtiene el cliente de un contexto que siempre lo recibe; [[main.tsx (web)|main.tsx]] provee el real, también en desarrollo, y el simulado con su selector solo con `?escenarios=ventas`, combinable (`?escenarios=acceso,menu,ventas`). El cliente simulado tiene un menú en memoria, multiplica precio por cantidad para responder `quote`, numera las ventas, guarda su medio de pago y valida con los esquemas del contrato; los escenarios son «Menú cargado», «Menú vacío», «Cambió un precio», «Producto retirado», «Sin conexión» y «Respuesta perdida»

## Por qué

Permite trabajar la interfaz sin la API (`docs/architecture.md` §4.5) y recorrer los avisos de [[SPEC-003 RF-5 — Cambios del menú durante la preparación|RF-5]] y [[SPEC-003 RF-7 — Se cobra lo que se mostró|RF-7]]. Las cifras oficiales solo las calcula la API; el cliente simulado no llega al build

## Alternativa descartada

Respuestas fijas por escenario sin cálculo: no se podría armar una venta en la pantalla. Reimplementar las reglas completas de la API: duplicaría su lógica

## Tareas que la aplican

- ✅ [[SPEC-003 T009|T009]]
- ✅ [[SPEC-003 T010|T010]]
- ✅ [[SPEC-003 T031|T031]]
