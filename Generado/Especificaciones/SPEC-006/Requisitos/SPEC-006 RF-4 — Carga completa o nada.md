---
tags:
  - requisito
spec: "SPEC-006"
---

# SPEC-006 RF-4 — Carga completa o nada

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Historia: [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi|HU-1]]

- El sistema deberá cargar el menú oficial completo o no cargar nada: nunca queda una parte del menú oficial en la base.
- Si la carga no se puede completar (por ejemplo, por falta de conexión o por una configuración de acceso incorrecta), entonces el sistema deberá dejar la base exactamente como estaba antes de ejecutarla, sin eliminar nada, y mostrar «No se pudo cargar el menú oficial. Comprueba la configuración y la conexión a la base».
- Si la persona cancela la carga antes de que termine, entonces el sistema deberá dejar la base exactamente como estaba antes de ejecutarla.
- El sistema deberá no mostrar nunca, en ningún mensaje, la dirección de la base, contraseñas ni otros datos de configuración.

## Decisiones que lo resuelven

- [[SPEC-006 D-4 — Las migraciones pendientes se aplican dentro de la…]]
- [[SPEC-006 D-7 — El comando recibe sus dependencias]]

## Tareas que lo cubren

- ✅ [[SPEC-006 T002|T002]]
- ✅ [[SPEC-006 T004|T004]]
- ✅ [[SPEC-006 T008|T008]]
