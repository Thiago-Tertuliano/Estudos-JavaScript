# Restaurant System

## Arquitetura: Monolith + Service Layer (JS + TS)

```
┌─────────────────────────────────────────────┐
│              Express Server                  │
│  ┌────────────────────────────────────────┐ │
│  │            Controllers                 │ │
│  │  auth │ table │ menu │ order │ payment│ │
│  │  reservation                           │ │
│  └──────────┬─────────────────────────────┘ │
└─────────────┼───────────────────────────────┘
              │
┌─────────────┼───────────────────────────────┐
│             │     Services Layer            │
│  ┌──────────┴──────────────┐                │
│  │  IAuthService           │                │
│  │  ITableService          │                │
│  │  IMenuService           │                │
│  │  IOrderService          │                │
│  │  IPaymentService        │                │
│  │  IReservationService    │                │
│  └──────────┬──────────────┘                │
└─────────────┼───────────────────────────────┘
              │
┌─────────────┼───────────────────────────────┐
│             │     Models / DTO / Data       │
│  ┌──────────┴──────────────┐                │
│  │  Entities (9)           │                │
│  │  Enums (5)              │                │
│  │  DTOs (auth, tables, ...)               │
│  │  SQLite database        │                │
│  └─────────────────────────┘                │
└─────────────────────────────────────────────┘
```

### Duas Implementações
| Implementação | Linguagem | Entrada |
|---------------|-----------|---------|
| `rest-system-js` | JavaScript | `src/index.js` |
| `rest-system-ts` | TypeScript | `src/index.ts` |

### Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Banco:** SQLite (better-sqlite3)
- **Autenticação:** JWT (jsonwebtoken + bcryptjs)
- **Build (TS):** TypeScript + ts-node-dev

### 9 Entidades
User, Table, Category, MenuItem, Order, OrderItem, Payment, PaymentMethod, Reservation

### 5 Enums
OrderStatus, PaymentStatus, ReservationStatus, TableStatus, UserRole

### Como Rodar

```bash
# JS
cd rest-system-js
npm install
npm run dev

# TS
cd rest-system-ts
npm install
npm run dev
```
