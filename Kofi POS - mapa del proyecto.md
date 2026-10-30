---
tags:
  - mapa
---

# Kofi POS — mapa del proyecto

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

> [!summary] Qué es
> Kofi POS es el sistema web de punto de venta de Kofi, una cafetería ficticia que representa un pequeño emprendimiento gastronómico común en Bolivia.

Repositorio: [Tutuma-jar/kofi-pos-v2](https://github.com/Tutuma-jar/kofi-pos-v2) · rama `develop` · commit `34161f1` del 2026-10-29.

## Documentos base

- [[Constitución]] — [docs/constitution.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/docs/constitution.md)
- [[Reglas de negocio]] — [docs/business-rules.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/docs/business-rules.md)
- [[Arquitectura]] — [docs/architecture.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/docs/architecture.md)
- [[Reglas de trabajo (AGENTS)]] — [AGENTS.md](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/AGENTS.md)

Principios: [[Principio 1 — Stack mínimo|Stack mínimo]] · [[Principio 2 — Especificación antes que código|Especificación antes que código]] · [[Principio 3 — Lógica separada de la interfaz|Lógica separada de la interfaz]] · [[Principio 4 — Tests primero|Tests primero]] · [[Principio 5 — Persistencia segura|Persistencia segura]] · [[Principio 6 — Idioma|Idioma]]

## Especificaciones

| Especificación | Estado | Tareas | Avance | Depende de | PRs |
| --- | --- | --- | --- | --- | --- |
| [[SPEC-001 Acceso]] | revisada | 46/46 | completa | — | 4 |
| [[SPEC-002 Menú]] | revisada | 45/45 | completa | SPEC-001 | 7 |
| [[SPEC-003 Ventas]] | revisada | 35/35 | completa | SPEC-001, SPEC-002 | 6 |
| [[SPEC-004 Dashboard]] | revisada | 34/34 | completa | SPEC-001, SPEC-003 | 5 |
| [[SPEC-005 Historial y reportes]] | revisada | 38/38 | completa | SPEC-001, SPEC-003, SPEC-004 | 6 |
| [[SPEC-006 Menú inicial]] | revisada | 8/8 | completa | SPEC-002 | 3 |
| [[SPEC-007 Ventas de demostración]] | revisada | 12/12 | completa | SPEC-006, SPEC-002, SPEC-001, SPEC-003, SPEC-005, SPEC-004 | 3 |

### Dependencias entre especificaciones

```mermaid
graph LR
  S001["SPEC-001<br/>Acceso"]
  S002["SPEC-002<br/>Menú"]
  S003["SPEC-003<br/>Ventas"]
  S004["SPEC-004<br/>Dashboard"]
  S005["SPEC-005<br/>Historial y reportes"]
  S006["SPEC-006<br/>Menú inicial"]
  S007["SPEC-007<br/>Ventas de demostración"]
  S001 --> S002
  S001 --> S003
  S002 --> S003
  S001 --> S004
  S003 --> S004
  S001 --> S005
  S003 --> S005
  S004 --> S005
  S002 --> S006
  S006 --> S007
  S002 --> S007
  S001 --> S007
  S003 --> S007
  S005 --> S007
  S004 --> S007
```

## Código

| Grupo | Qué hace | Archivos | Rutas API | Pantallas |
| --- | --- | --- | --- | --- |
| [[Módulo Acceso (auth)]] | Iniciar y cerrar sesión | 23 | 3 | 2 |
| [[Módulo Dashboard (dashboard)]] | Resumen de las ventas del día y del mes | 17 | 2 | 1 |
| [[Módulo Historial y reportes (history)]] | Consultar ventas pasadas | 25 | 4 | 3 |
| [[Módulo Menú (menu)]] | Administrar productos y categorías | 24 | 10 | 2 |
| [[Módulo Ventas (sales)]] | Preparar y registrar ventas pagadas | 26 | 2 | 1 |
| [[Contratos]] | — | 8 | — | — |
| [[Código compartido de la API]] | — | 15 | — | — |
| [[Código compartido de la interfaz]] | — | 9 | — | — |
| [[Pruebas de punta a punta]] | — | 20 | — | — |

## Vistas transversales

- [[Rutas]] — 21 rutas de la API y 9 pantallas.
- [[Base de datos]] — 8 tablas en 3 migraciones.
- [[Contratos]] — 8 archivos en `packages/contracts`.
- [[Historial de PRs]] — 54 commits en `develop`.

## Nodos del grafo

En el grafo (Ctrl+G), filtra por etiqueta para ver una sola capa, por ejemplo `tag:#requisito OR tag:#decision`, o quita las tareas con `-tag:#tarea`.

| Tipo | Notas | Etiqueta |
| --- | --- | --- |
| Especificaciones | 7 | #especificacion |
| Historias de usuario | 14 | #historia |
| Requisitos funcionales | 80 | #requisito |
| Requisitos no funcionales | 28 | #rnf |
| Decisiones técnicas | 83 | #decision |
| Tareas | 218 | #tarea |
| Archivos de código | 167 | #archivo |
| Rutas de la API | 21 | #ruta-api |
| Pantallas | 9 | #pantalla |
| Tablas | 8 | #tabla |
| Principios | 6 | #principio |
| Pull requests | 51 | #pr |

## Notas propias

Escribe en `Notas/`: el generador no las toca. Enlaza desde ahí a cualquier nota de este mapa.
