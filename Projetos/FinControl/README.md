# FinControl

## Arquitetura: Monolith + Service Layer + JWT + Docker

```
┌────────────────────────────────────────────┐
│              Express Server                │
│  ┌──────────────┐  ┌──────────────────┐   │
│  │  Controllers │  │   Middleware     │   │
│  │   authCtrl   │  │  auth (JWT)     │   │
│  │  expenseCtrl │  │  errorHandler   │   │
│  └──────┬───────┘  └──────────────────┘   │
└─────────┼──────────────────────────────────┘
          │
┌─────────┼──────────────────────────────────┐
│         │     Services Layer               │
│  ┌──────┴──────────┐  ┌────────────────┐  │
│  │  IAuthService   │  │ IExpenseService│  │
│  │  AuthService    │  │ ExpenseService │  │
│  └──────┬──────────┘  └───────┬────────┘  │
│         │                     │            │
│  ┌──────┴──────────┐  ┌───────┴────────┐  │
│  │     Models      │  │      DTOs      │  │
│  │  User.js        │  │ ExpenseRequest │  │
│  │  Expense.js     │  │ ExpenseResponse│  │
│  └──────┬──────────┘  └────────────────┘  │
└─────────┼──────────────────────────────────┘
          │
┌─────────┼──────────────────────────────────┐
│         │       Data Layer                 │
│  ┌──────┴──────────┐                      │
│  │    database.js  │    SQLite / Docker   │
│  └─────────────────┘                      │
└────────────────────────────────────────────┘
```

### Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Banco:** PostgreSQL (Docker) ou SQLite (local)
- **Autenticação:** JWT (jsonwebtoken + bcryptjs)
- **Testes:** Jest
- **Container:** Docker + docker-compose

### Entidades
- **User** - Usuários com autenticação JWT
- **Expense** - Despesas com categoria e valor

### Health Checks
Endpoint `/health` com status do servidor e banco.

### Como Rodar

```bash
# Com Docker
docker-compose up --build

# Local (SQLite)
npm install
npm run dev

# Testes
npm test
```
