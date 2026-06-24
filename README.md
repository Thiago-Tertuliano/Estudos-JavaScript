<div align="center">

# JavaScript & TypeScript — Estudos

**Repositório de projetos e exercícios evoluindo de conceitos básicos até arquiteturas distribuídas.**

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

</div>

---

## Índice

- [Estrutura do repositório](#-estrutura-do-repositório)
- [Arquitetura por pasta](#-arquitetura-por-pasta)
- [Projetos](#-projetos)
- [Roadmap de conceitos](#-roadmap-de-conceitos)
- [Comandos](#-comandos)
- [Como rodar cada projeto](#-como-rodar-cada-projeto)
- [Referências](#-referências)

---

## Estrutura do repositório

| Pasta | Tipo | Arquitetura / Padrão | Descrição |
|:------|:-----|:---------------------|:----------|
| [JavaScript_Basico](./JavaScript_Basico) | Exercícios | HTML/JS básico | 8 aulas: variáveis, funções, DOM, eventos, condicionais, loops |
| [JavaScript_Intermediario](./JavaScript_Intermediario) | Exercícios | HTML/JS intermediário | 8 aulas: objetos, arrays avançados, localStorage, módulos ES6 |
| [JavaScript_Avancado](./JavaScript_Avancado) | Exercícios | JS avançado + módulos | 15 aulas: promises, classes, prototypes, CRUD, async |
| [Curso_TypeScript](./Curso_TypeScript) | Estudo | TypeScript | 5 aulas + projeto: tipos, generics, classes, decorators |
| [Curso_API_REST_Express](./Curso_API_REST_Express) | API | **Express monolítico** | Primeiro CRUD com Express + SQLite + Swagger |
| [Curso_API_REST_RepositoryPattern](./Curso_API_REST_RepositoryPattern) | API | **Express + Repository + Service Layer** | CRUD com separação de camadas |
| [Projetos/E-Commerce](./Projetos/E-Commerce) | API | **Monolith + Service Layer + JWT** | E-commerce com produtos, categorias, pedidos |
| [Projetos/School-Management](./Projetos/School-Management) | API multi-pacote | **Clean Architecture + CQRS** | Domain / Application / Infrastructure / API |
| [Projetos/TaskFlow](./Projetos/TaskFlow) | API | **DDD + CQRS + WebSocket** | Task management com Socket.io e eventos |
| [Projetos/ReservEasy](./Projetos/ReservEasy) | API | **Vertical Slices** | Reservas com features isoladas |
| [Projetos/Notifica](./Projetos/Notifica) | Sistema distribuído | **Multi-host + Mensageria** | API + Worker + WS Consumer + Redis |
| [Projetos/FinControl](./Projetos/FinControl) | API | **Monolith + JWT + Docker** | Controle financeiro com PostgreSQL |
| [Projetos/Restaurant-System](./Projetos/Restaurant-System) | API | **Monolith + Service Layer** | Gestão de restaurante (JS + TS) |

---

## Arquitetura por pasta

<details>
<summary><strong>JavaScript_Basico / JavaScript_Intermediario</strong> — scripts educacionais</summary>

```
Aulas/
├── README.md          → índice
├── Aula_N.md          → teoria
Exercicios/
├── README.md
└── Exercicio_N/       → arquivos .html / .js
```

- **Padrão:** scripts educacionais em HTML/JS.
- **Conceitos:** sintaxe JS, DOM, eventos, funções, arrays, objetos, localStorage.

</details>

<details>
<summary><strong>JavaScript_Avancado</strong> — módulos e projetos</summary>

```
Modulo_N/
├── Aula_N.md          → teoria
Exercicios/
├── README.md
└── Modulo_N/
    └── Aula_N/        → exercicios.js
```

- **Padrão:** módulos por área de conhecimento.
- **Conceitos:** promises, async/await, classes, prototypes, CRUD, padrões de design.

</details>

<details>
<summary><strong>Curso_TypeScript</strong> — tipagem e produtividade</summary>

```
Aula_N/
├── README.md          → teoria + exemplos
└── Exercicios/
    └── exercicio.ts
```

- **Padrão:** aulas progressivas com TypeScript puro.
- **Conceitos:** tipos primitivos, generics, interfaces, classes, decorators, utility types.

</details>

<details>
<summary><strong>Curso_API_REST_Express</strong> — Express monolítico</summary>

```
Routes → Controllers → SQLite via better-sqlite3
```

- **Padrão:** Express monolítico sem camadas.
- **Entidades:** Produto (CRUD básico).

</details>

<details>
<summary><strong>Curso_API_REST_RepositoryPattern</strong> — Repository Pattern + Service Layer</summary>

```
Routes → Service (regras) → Repository → SQLite
```

- **Padrão:** Express + Repository Pattern + Service Layer.
- **Entidades:** Author, Book.

</details>

<details>
<summary><strong>Projetos/E-Commerce</strong> — API completa com Controllers</summary>

```
Controllers → Service → Repository → SQLite
```

- **Padrão:** API tradicional com Controllers.
- **Entidades:** Product, Category, Order, OrderItem.

</details>

<details>
<summary><strong>Projetos/School-Management</strong> — Clean Architecture + CQRS</summary>

```
API (Controllers)
    ↓
Application (Commands / Queries / Handlers)
    ↓ interfaces
Domain (Entities)
    ↓ implementação
Infrastructure (DbContext, Migrations)
```

- **Padrão:** Clean Architecture + CQRS.
- **Pacotes:** `domain`, `application`, `infrastructure`, `api`.
- **Entidades:** Student, Course, Enrollment.

</details>

<details>
<summary><strong>Projetos/TaskFlow</strong> — DDD + CQRS + WebSocket</summary>

```
API → Application (CQRS) → Domain → Infrastructure
                              ↕
                         Socket.io (tempo real)
```

- **Padrão:** Domain-Driven Design + CQRS + WebSocket (Socket.io).
- **Entidades:** Board, Task, User, Workspace, Comment, Tag.

</details>

<details>
<summary><strong>Projetos/ReservEasy</strong> — Vertical Slices</summary>

```
Features/                    ← Vertical Slices
├── Properties/
├── Guests/
├── Bookings/
└── Payments/
    ├── *Controller.js
    ├── *Service.js
    └── *Validator.js

Domain/   → Entities, Enums
Data/     → DbContext
Common/   → Middleware, Errors
```

- **Padrão:** Vertical Slice Architecture.
- **Entidades:** Property, Guest, Booking, Payment.

</details>

<details>
<summary><strong>Projetos/Notifica</strong> — Multi-host distribuído</summary>

```
packages/
├── domain           → Entities, Interfaces
├── application      → Services, DTOs
├── infrastructure   → Redis, RabbitMQ, Repositories
apps/
├── api              → REST + WebSocket
├── worker           → Consumer de filas
└── ws-consumer      → WebSocket consumer dedicado
```

- **Padrão:** Multi-host distribuído (monorepo).
- **Infra:** Redis, RabbitMQ via `docker-compose.yml`.

</details>

<details>
<summary><strong>Projetos/FinControl</strong> — Monolith + JWT + Docker</summary>

```
Controllers → AuthService / ExpenseService → AppDbContext → PostgreSQL
```

- **Padrão:** monolito com Service Layer + JWT + Health Checks.
- **Testes:** `FinControl.Tests` (Jest).
- **Deploy:** Dockerfile + docker-compose.

</details>

<details>
<summary><strong>Projetos/Restaurant-System</strong> — Monolith com 9 entidades</summary>

```
Controllers → AuthService / TableService / MenuService / OrderService / PaymentService / ReservationService → AppDbContext → SQLite
```

- **Padrão:** monolito com Service Layer + JWT.
- **Linguagens:** versão JS + versão TS para comparação.
- **Entidades:** 9 (User, Table, Category, MenuItem, Order, OrderItem, Payment, PaymentMethod, Reservation).

</details>

---

## Projetos

| # | Projeto | Arquitetura | Entidades | Destaque |
|:-:|:--------|:------------|:----------|:---------|
| 1 | [Curso_API_REST_Express](./Curso_API_REST_Express) | Express monolítico | Produto | Primeiro contato com Express + SQLite |
| 2 | [Curso_API_REST_RepositoryPattern](./Curso_API_REST_RepositoryPattern) | Express + Repository + Service | Author, Book | Repository Pattern, Service Layer |
| 3 | [E-Commerce](./Projetos/E-Commerce) | Monolith + Service Layer | Product, Category, Order, OrderItem | Controllers, enums, estoque |
| 4 | [School-Management](./Projetos/School-Management) | Clean Architecture + CQRS | Student, Course, Enrollment | Multi-pacote, CQRS |
| 5 | [TaskFlow](./Projetos/TaskFlow) | DDD + CQRS + WebSocket | Board, Task, User, Workspace | Socket.io em tempo real |
| 6 | [ReservEasy](./Projetos/ReservEasy) | Vertical Slices | Property, Guest, Booking, Payment | Features isoladas |
| 7 | [Notifica](./Projetos/Notifica) | Multi-host + Mensageria | User, Notification, Message | Redis, RabbitMQ, Worker |
| 8 | [FinControl](./Projetos/FinControl) | Monolith + JWT + Docker | User, Expense | PostgreSQL, Docker, testes |
| 9 | [Restaurant-System](./Projetos/Restaurant-System) | Monolith + Service Layer | User, Table, MenuItem, Order, Payment, Reservation | 9 entidades, JS + TS |

---

## Roadmap de conceitos

```
HTML/JS Básico
  → JS Intermediário (objetos, arrays, localStorage)
    → JS Avançado (promises, classes, padrões)
      → TypeScript (tipos, generics, decorators)
        → Express API básica
          → Repository Pattern + Service Layer
            → Monolith + Controllers
              → Clean Architecture + CQRS
                → DDD + WebSocket
                  → Vertical Slices
                    → Sistema distribuído (API + Worker + Mensageria)
```

> Cada projeto adiciona uma camada nova em relação ao anterior, evoluindo de exercícios simples até arquiteturas modulares e orientadas a eventos.

---

## Comandos

### Ambiente

```bash
node --version
npm --version
npx ts-node --version   # TypeScript
```

### Ciclo de vida (qualquer projeto)

```bash
npm install
npm run dev             # nodemon / ts-node-dev
npm start
npm test
```

### TypeScript

```bash
npx tsc --init
npx tsc --noEmit        # type checking sem gerar JS
npx ts-node src/index.ts
```

### Criar projetos

```bash
npm init -y
npm install express better-sqlite3
npm install -D typescript @types/node @types/express
```

### Testes

```bash
npm test
npm run test:watch
npx jest --coverage
```

### Docker

```bash
docker compose up -d
docker compose down
```

---

## Como rodar cada projeto

<details>
<summary><strong>Exercícios</strong> — JavaScript_Basico / JavaScript_Intermediario</summary>

Os exercícios são arquivos `.html` ou `.js` isolados. Para executar:

```bash
# HTML: abrir no navegador
start Exercicios/Exercicio_1_Primeiros_Testes/index.html

# JS: executar com Node
node Exercicios/Aula_1_Objetos/exercicio.js
```

</details>

<details>
<summary><strong>JavaScript_Avancado</strong></summary>

```bash
cd JavaScript_Avancado
node Exercicios/Modulo_1/Aula_1_Promises_Async_Await/exercicio.js
```

</details>

<details>
<summary><strong>Curso_TypeScript</strong></summary>

```bash
cd Curso_TypeScript
npx ts-node Aula_1_Fundamentos/Exercicios/exercicio.ts
```

</details>

<details>
<summary><strong>Curso_API_REST_Express</strong></summary>

```bash
cd Curso_API_REST_Express
npm install
npm run dev
# Swagger: http://localhost:3000/api-docs
```

</details>

<details>
<summary><strong>Curso_API_REST_RepositoryPattern</strong></summary>

```bash
cd Curso_API_REST_RepositoryPattern
npm install
npm run dev
```

</details>

<details>
<summary><strong>E-Commerce</strong></summary>

```bash
cd Projetos/E-Commerce
npm install
npm run dev
```

</details>

<details>
<summary><strong>School-Management</strong></summary>

```bash
cd Projetos/School-Management
npm install
npm run dev --workspace=api
```

</details>

<details>
<summary><strong>TaskFlow</strong></summary>

```bash
cd Projetos/TaskFlow
npm install
npm run dev
```

</details>

<details>
<summary><strong>ReservEasy</strong></summary>

```bash
cd Projetos/ReservEasy
npm install
npm run dev
```

</details>

<details>
<summary><strong>Notifica</strong> — requer Docker</summary>

```bash
cd Projetos/Notifica
docker compose up -d          # Redis, RabbitMQ

npm run dev --workspace=apps/api
npm run dev --workspace=apps/worker
npm run dev --workspace=apps/ws-consumer
```

</details>

<details>
<summary><strong>FinControl</strong></summary>

```bash
cd Projetos/FinControl
npm install

# Com Docker (PostgreSQL incluso)
docker compose up --build

# Ou sem Docker (SQLite)
npm run dev
```

</details>

<details>
<summary><strong>Restaurant-System</strong></summary>

```bash
cd Projetos/Restaurant-System

# Versão JavaScript
cd rest-system-js
npm install
npm run dev

# Versão TypeScript
cd rest-system-ts
npm install
npm run dev
```

</details>

---

## Referências

| Documentação | Link |
|:-------------|:-----|
| JavaScript (MDN) | [developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| TypeScript | [www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/) |
| Node.js | [nodejs.org/docs/latest/api/](https://nodejs.org/docs/latest/api/) |
| Express | [expressjs.com/](https://expressjs.com/) |
| better-sqlite3 | [github.com/WiseLibs/better-sqlite3](https://github.com/WiseLibs/better-sqlite3) |

---

<div align="center">

*Evoluindo de `console.log` até sistemas distribuídos com filas, WebSockets e containers.*

</div>
