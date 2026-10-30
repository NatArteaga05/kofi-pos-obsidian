# Kofi POS — bóveda de Obsidian

Mapa navegable de [Kofi POS](https://github.com/Tutuma-jar/kofi-pos-v2) para abrir en Obsidian. Es un repositorio aparte: no forma parte del proyecto ni de sus PR.

## Abrirla

En Obsidian: *Open folder as vault* → esta carpeta. Empieza por **Kofi POS - mapa del proyecto**.

## Actualizar el mapa

Las notas de `Generado/` y el mapa se crean a partir del repositorio real (por defecto, `origin/develop` de `../../kofi-pos-v2`), leyendo con `git`, sin cambiar la rama que tengas abierta allí.

```bash
npm run mapa:actualizar
```

`mapa:actualizar` hace antes `git fetch` en el repositorio del proyecto; `npm run mapa` usa lo que ya tengas descargado. Opciones:

- `--repo <ruta>` o la variable `KOFI_REPO`: otra copia del repositorio.
- `--ref <rama>`: otra rama, por ejemplo `--ref origin/main`.

Requiere Node 24. No tiene dependencias.

## Qué contiene

| Carpeta o nota | Contenido | ¿Se reescribe? |
| --- | --- | --- |
| `Kofi POS - mapa del proyecto.md` | Nota central: especificaciones, módulos y vistas | Sí |
| `Generado/Especificaciones/` | Una nota por `specs/NNN-*` y, en `SPEC-NNN/`, una por historia, RF, RNF, decisión y tarea | Sí |
| `Generado/Código/` | Una nota por archivo de código (sin pruebas unitarias), con lo que importa y lo que lo importa | Sí |
| `Generado/Rutas/`, `Pantallas/`, `Tablas/`, `Principios/`, `PRs/` | Una nota por ruta de la API, pantalla, tabla, principio de la constitución y PR | Sí |
| `Generado/Módulos/` | Una nota por módulo: archivos de API e interfaz, rutas, pantallas, tablas y contrato | Sí |
| `Generado/Documentos/` | Copia de `docs/` y `AGENTS.md` con los enlaces convertidos a la bóveda | Sí |
| `Generado/Rutas.md`, `Base de datos.md`, `Contratos.md`, `Historial de PRs.md` | Vistas transversales | Sí |
| `Notas/` | Tus notas | **No** |

No edites `Generado/` ni el mapa: los cambios se pierden en la próxima ejecución. Escribe en `Notas/` y enlaza desde ahí.

## Grafo

Cada pieza del proyecto es un nodo, y sus enlaces salen de las referencias reales: el RF que cita una tarea, la decisión que resuelve un RF, el archivo que nombra una tarea, los imports entre archivos, las tablas que consulta cada archivo, el PR que hizo cada tarea…

Los colores salen de las etiquetas: `#mapa`, `#especificacion`, `#historia`, `#requisito`, `#rnf`, `#decision`, `#tarea`, `#principio`, `#documento`, `#modulo`, `#archivo/api`, `#archivo/web`, `#archivo/contracts`, `#archivo/e2e`, `#ruta-api`, `#pantalla`, `#tabla` y `#pr`.

Para ver una sola capa, escribe en el filtro del grafo, por ejemplo, `tag:#archivo` (el código y sus imports) o `-tag:#tarea -tag:#pr` (sin tareas ni PR).
