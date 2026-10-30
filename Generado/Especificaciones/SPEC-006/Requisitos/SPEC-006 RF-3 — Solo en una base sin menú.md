---
tags:
  - requisito
spec: "SPEC-006"
---

# SPEC-006 RF-3 — Solo en una base sin menú

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Historia: [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi|HU-1]]

- Si al ejecutar la carga la base tiene al menos una categoría o un producto, activo o inactivo, entonces el sistema deberá rechazar la carga sin crear, cambiar ni eliminar nada y mostrar «La base ya tiene categorías o productos. El menú oficial solo se carga en una base nueva».
- El sistema deberá no eliminar ni reemplazar nunca categorías o productos existentes.
- Si dos cargas se ejecutan a la vez sobre la misma base vacía, entonces el sistema deberá completar solo una y rechazar la otra con el mensaje de este RF.

## Decisiones que lo resuelven

- [[SPEC-006 D-5 — Dos bloqueos al empezar]]
- [[SPEC-006 D-7 — El comando recibe sus dependencias]]

## Tareas que lo cubren

- ✅ [[SPEC-006 T003|T003]]
- ✅ [[SPEC-006 T004|T004]]
- ✅ [[SPEC-006 T007|T007]]
