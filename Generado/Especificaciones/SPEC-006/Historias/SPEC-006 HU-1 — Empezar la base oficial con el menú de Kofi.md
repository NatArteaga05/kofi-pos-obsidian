---
tags:
  - historia
spec: "SPEC-006"
prioridad: "P1"
---

# SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi (P1)

Especificación: [[SPEC-006 Menú inicial|SPEC-006]]

Como **persona que prepara el sistema**, quiero **cargar el menú oficial de Kofi en la base nueva con una sola orden** para **que el local pueda vender desde el primer día sin que el dueño escriba 37 productos a mano ni se cuele un dato de prueba**.

> [!example] Prueba independiente
> sobre una base nueva, sin categorías ni productos, se ejecuta la carga: termina con «Menú oficial cargado: 6 categorías y 37 productos». Con una sesión de dueño, «Administrar menú» muestra exactamente las categorías y los productos de «Menú oficial», activos y con sus precios; «Ver menú» muestra los mismos. Al ejecutar la carga por segunda vez, se rechaza con el mensaje de base no vacía y el menú queda igual. Sobre una base con los productos de prueba, se rechaza igual y no cambia nada.

## Requisitos

- [[SPEC-006 RF-1 — Contenido del menú oficial]]
- [[SPEC-006 RF-2 — Carga en una base nueva]]
- [[SPEC-006 RF-3 — Solo en una base sin menú]]
- [[SPEC-006 RF-4 — Carga completa o nada]]

## Tareas (5/5)

- ✅ [[SPEC-006 T002|T002]]
- ✅ [[SPEC-006 T003|T003]]
- ✅ [[SPEC-006 T004|T004]]
- ✅ [[SPEC-006 T005|T005]]
- ✅ [[SPEC-006 T008|T008]]

## Pruebas de punta a punta

- [[menu-inicial-us1-cargar.spec.ts (e2e)]]
