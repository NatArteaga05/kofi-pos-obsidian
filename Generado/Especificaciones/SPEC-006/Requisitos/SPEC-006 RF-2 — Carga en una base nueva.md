---
tags:
  - requisito
spec: "SPEC-006"
---

# SPEC-006 RF-2 — Carga en una base nueva

Especificación: [[SPEC-006 Menú inicial|SPEC-006]] · Historia: [[SPEC-006 HU-1 — Empezar la base oficial con el menú de Kofi|HU-1]]

- Cuando la persona que prepara el sistema ejecuta la carga sobre una base sin ninguna categoría ni ningún producto, el sistema deberá crear todas las categorías y todos los productos del menú oficial, activos, con los nombres y los precios de «Menú oficial».
- Cuando la base está recién creada y el sistema todavía no está preparado en ella, el sistema deberá prepararla y después cargar el menú oficial, con el mismo resultado que en una base ya preparada.
- El sistema deberá ejecutar la carga sin pedir ni usar una cuenta de dueño o cajero: solo puede hacerlo quien tenga la configuración de acceso a la base.
- Cuando la carga termina, el sistema deberá mostrar «Menú oficial cargado: 6 categorías y 37 productos».
- El sistema deberá dejar el menú cargado igual que si el dueño lo hubiera creado desde «Administrar menú»: se ve en la administración y en la consulta, forma parte del menú vigente que se entrega a otros módulos ([[SPEC-002 Menú|SPEC-002]], RF-15) y el dueño puede editarlo, desactivarlo y reactivarlo como cualquier otro.

## Decisiones que lo resuelven

- [[SPEC-006 D-1 — Comando npm run load꞉menu -w @kofi∕api]]
- [[SPEC-006 D-3 — Se carga con saveCategory y saveProduct]]
- [[SPEC-006 D-4 — Las migraciones pendientes se aplican dentro de la…]]
- [[SPEC-006 D-7 — El comando recibe sus dependencias]]
- [[SPEC-006 D-8 — La prueba de punta a punta carga el menú con una ruta…]]

## Tareas que lo cubren

- ✅ [[SPEC-006 T002|T002]]
- ✅ [[SPEC-006 T004|T004]]
- ✅ [[SPEC-006 T005|T005]]
- ✅ [[SPEC-006 T007|T007]]
