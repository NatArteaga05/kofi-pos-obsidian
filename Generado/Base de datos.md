---
tags:
  - base-datos
---

# Base de datos

> [!info] Nota generada
> Generada desde `origin/develop` (34161f1, 2026-10-29) con `npm run mapa`. No la edites: se reescribe en cada ejecución. Lo tuyo va en `Notas/`.

PostgreSQL (Neon). Solo `apps/api/src/shared/database` habla con la base; ver [[Arquitectura]] §6.4.

```mermaid
erDiagram
  users ||--o{ failed_logins : "user_id"
  users ||--o{ sessions : "user_id"
  categories ||--o{ products : "category_id"
  users ||--o{ sales : "registered_by_user_id"
  sales ||--o{ sale_lines : "sale_id"
  products ||--o{ sale_lines : "product_id"
  sale_counter {}
```

| Tabla | Migración | Referencia a | La usan |
| --- | --- | --- | --- |
| `users` | [001_auth.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/001_auth.sql) | — | [[Módulo Acceso (auth)\|auth]] |
| `failed_logins` | [001_auth.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/001_auth.sql) | users (user_id) | [[Módulo Acceso (auth)\|auth]] |
| `sessions` | [001_auth.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/001_auth.sql) | users (user_id) | [[Módulo Acceso (auth)\|auth]] |
| `categories` | [002_menu.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/002_menu.sql) | — | [[Módulo Menú (menu)\|menu]] |
| `products` | [002_menu.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/002_menu.sql) | categories (category_id) | [[Módulo Menú (menu)\|menu]] |
| `sale_counter` | [003_sales.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/003_sales.sql) | — | [[Módulo Ventas (sales)\|sales]] |
| `sales` | [003_sales.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/003_sales.sql) | users (registered_by_user_id) | [[Módulo Ventas (sales)\|sales]] |
| `sale_lines` | [003_sales.sql](https://github.com/Tutuma-jar/kofi-pos-v2/blob/develop/apps/api/src/shared/database/migrations/003_sales.sql) | sales (sale_id), products (product_id) | [[Módulo Ventas (sales)\|sales]] |
