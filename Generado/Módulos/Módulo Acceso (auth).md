---
tags:
  - modulo
  - modulo/auth
---

# Módulo Acceso (auth)

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

> [!abstract] Qué hace
> Iniciar y cerrar sesión

## Especificaciones

- [[SPEC-001 Acceso]] — principal

## Contrato

- [[auth.ts (contracts)]] — ver [[Contratos]]

## Rutas de la API

- [[POST ∕api∕auth∕logout]]
- [[GET ∕api∕auth∕session]]
- [[POST ∕api∕auth∕login]]

## Pantallas

- [[Pantalla ∕ingresar]]
- [[Pantalla ∕]]

## Tablas

- [[Tabla users]]
- [[Tabla failed_logins]]
- [[Tabla sessions]]

## API — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/auth)

- [[accounts.cli.ts (api auth)]]
- [[accounts.service.ts (api auth)]]
- [[auth.cookie.ts (api auth)]]
- [[auth.hook.ts (api auth)]]
- [[auth.routes.ts (api auth)]]
- [[auth.service.ts (api auth)]]
- [[index.ts (api auth)]]
- [[passwords.service.ts (api auth)]]
- [[sessions.repository.ts (api auth)]]
- [[users.repository.ts (api auth)]]

## Interfaz — [carpeta](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/auth)

- [[auth-client.ts (web auth api)]]
- [[return-to.ts (web auth api)]]
- [[AuthenticatedLayout.tsx (web auth components)]]
- [[LoginForm.tsx (web auth components)]]
- [[RequireSession.tsx (web auth components)]]
- [[SessionProvider.tsx (web auth components)]]
- [[useSession.ts (web auth components)]]
- [[ScenarioPicker.tsx (web auth dev)]]
- [[auth-demo-client.ts (web auth dev)]]
- [[fixtures.ts (web auth dev)]]
- [[index.ts (web auth)]]
- [[HomePage.tsx (web auth pages)]]
- [[LoginPage.tsx (web auth pages)]]
