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

- [packages/contracts/src/auth.ts](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/packages/contracts/src/auth.ts) — ver [[Contratos]]

## API

Carpeta: [apps/api/src/modules/auth](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/api/src/modules/auth) · 10 archivos de código y 8 de pruebas.

| Método | Ruta |
| --- | --- |
| POST | `/api/auth/logout` |
| GET | `/api/auth/session` |
| POST | `/api/auth/login` |

- `accounts.cli.ts`
- `accounts.service.ts`
- `auth.cookie.ts`
- `auth.hook.ts`
- `auth.routes.ts`
- `auth.service.ts`
- `index.ts`
- `passwords.service.ts`
- `sessions.repository.ts`
- `users.repository.ts`

### Tablas que usa

- `users` (001_auth.sql)
- `failed_logins` (001_auth.sql)
- `sessions` (001_auth.sql)

Ver [[Base de datos]].

## Interfaz

Carpeta: [apps/web/src/modules/auth](https://github.com/Tutuma-jar/kofi-pos-v2/tree/develop/apps/web/src/modules/auth) · 16 archivos de código y 11 de pruebas.

| Ruta | Página | Roles | Enlace de inicio |
| --- | --- | --- | --- |
| `/ingresar` | LoginPage | pública | — |
| `/` | HomePage | owner, cashier | — |

- **api/** `auth-client.ts`, `return-to.ts`
- **components/** `AuthenticatedLayout.css`, `AuthenticatedLayout.tsx`, `LoginForm.tsx`, `RequireSession.tsx`, `SessionProvider.tsx`, `useSession.ts`
- **dev/** `ScenarioPicker.tsx`, `auth-demo-client.ts`, `fixtures.ts`
- **(raíz)** `index.ts`
- **pages/** `HomePage.css`, `HomePage.tsx`, `LoginPage.css`, `LoginPage.tsx`
