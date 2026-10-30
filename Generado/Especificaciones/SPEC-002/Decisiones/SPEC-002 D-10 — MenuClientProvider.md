---
tags:
  - decision
spec: "SPEC-002"
---

# SPEC-002 D-10 — MenuClientProvider

Especificación: [[SPEC-002 Menú|SPEC-002]] · Requisitos: [[SPEC-002 RF-2 — Lista de administración|RF-2]], [[SPEC-002 RF-14 — Consulta del menú vigente|RF-14]]

## Decisión

**`MenuClientProvider`:** la interfaz obtiene el cliente del menú de un contexto de React, que siempre recibe el cliente (sin valor por defecto). Como en [[SPEC-001 Acceso|SPEC-001]] (DD-17), [[main.tsx (web)|main.tsx]] provee el cliente real también en desarrollo; el cliente simulado del menú y su selector se activan solo en desarrollo con `?escenarios=menu`, combinable con el de Acceso (`?escenarios=acceso,menu`) para recorrer las pantallas sin la API. Cambiar de escenario vuelve a montar las rutas

## Por qué

Las páginas y las pruebas usan el mismo código con cualquiera de los dos clientes (`docs/architecture.md` §4.5), y el desarrollo normal prueba la integración real, como fija [[SPEC-001 Acceso|SPEC-001]]

## Alternativa descartada

Importar el cliente real dentro de cada componente: las pruebas tendrían que interceptar `fetch`. Un cliente por defecto en el contexto: una página fuera del proveedor usaría la API sin que se note. El cliente simulado por defecto en desarrollo (primera versión de este plan): contradice DD-17 de [[SPEC-001 Acceso|SPEC-001]] e impide probar la integración normal

## Tareas que la aplican

- ✅ [[SPEC-002 T011|T011]]
- ✅ [[SPEC-002 T012|T012]]
- ✅ [[SPEC-002 T038|T038]]
- ✅ [[SPEC-002 T023|T023]]
