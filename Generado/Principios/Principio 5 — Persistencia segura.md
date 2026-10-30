---
tags:
  - principio
---

# Principio 5 — Persistencia segura

De la [[Constitución|constitución]].

> Los datos se leen y escriben solo a través de la capa de datos de la API; una operación que modifica varios registros es atómica. Ningún secreto se versiona.

## Especificaciones que lo controlan

- [[SPEC-001 Acceso]]
- [[SPEC-002 Menú]]
- [[SPEC-003 Ventas]]
- [[SPEC-004 Dashboard]]
- [[SPEC-005 Historial y reportes]]
- [[SPEC-006 Menú inicial]]
- [[SPEC-007 Ventas de demostración]]

## Decisiones que lo citan

- [[SPEC-001 D-5 — Bloqueo con tabla failed_logins y users.locked_until]]
- [[SPEC-002 D-5 — Disparadores con FOR SHARE]]
- [[SPEC-003 D-4 — Integridad en la base]]
