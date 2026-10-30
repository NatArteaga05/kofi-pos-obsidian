---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-11 — Escenarios de desarrollo del menú

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-1 — Acceso a la administración del menú|RF-1]], [[SPEC-002 RF-2 — Lista de administración|RF-2]], [[SPEC-002 RF-3 — Crear y renombrar una categoría|RF-3]], [[SPEC-002 RF-4 — Crear un producto|RF-4]], [[SPEC-002 RF-5 — Editar un producto|RF-5]], [[SPEC-002 RF-6 — Validación de un producto|RF-6]], [[SPEC-002 RF-7 — Guardado completo o nada|RF-7]], [[SPEC-002 RF-8 — Cambios desde dos navegadores|RF-8]], [[SPEC-002 RF-9 — Desactivar y reactivar un producto|RF-9]], [[SPEC-002 RF-10 — Desactivar y reactivar una categoría|RF-10]], [[SPEC-002 RF-14 — Consulta del menú vigente|RF-14]]

Principios: [[Principio 3 — Lógica separada de la interfaz]]

## Decisión

**Escenarios de desarrollo del menú:** el cliente simulado guarda el menú en memoria, valida las entradas con los esquemas del contrato y aplica solo dos comprobaciones de coherencia, para que las pantallas no muestren estados imposibles: no desactiva una categoría con productos activos ni reactiva un producto de una categoría inactiva. El resto de los errores se fuerzan con escenarios («Menú vacío», «Menú cargado», «Nombre repetido», «Categoría con productos activos», «Sin permiso», «Sin conexión»)

## Por qué

Permite trabajar la interfaz sin la API. Las reglas oficiales viven solo en la API (principio 3); el cliente simulado no llega al build de producción

## Alternativa descartada

Reimplementar todas las reglas en el cliente simulado (nombres repetidos, orden de mensajes, carreras): duplicaría la lógica de la API en la interfaz. Ninguna comprobación: las pantallas mostrarían productos activos en categorías inactivas

## Tareas que la aplican

- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T038|T038]]
