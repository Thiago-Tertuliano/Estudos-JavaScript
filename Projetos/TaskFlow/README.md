# TaskFlow

## Arquitetura: DDD + CQRS + WebSocket

```
┌──────────────────────────────────────────────────┐
│                    API Layer                      │
│  ┌──────────────┐  ┌──────────────────────────┐  │
│  │   Routes     │  │       WebSocket           │  │
│  │ boardRoutes  │  │    socketHandler.ts       │  │
│  │ taskRoutes   │  │   (Socket.io events)      │  │
│  └──────┬───────┘  └───────────┬──────────────┘  │
└─────────┼──────────────────────┼──────────────────┘
          │                      │
┌─────────┼──────────────────────┼──────────────────┐
│         │    Application       │                   │
│  ┌──────┴───────┐    ┌────────┴────────┐         │
│  │   Commands   │    │    Queries      │         │
│  │CreateTaskCmd │    │ GetBoardQuery   │         │
│  │MoveTaskCmd   │    │                 │         │
│  └──────┬───────┘    └────────────────┘         │
│         │                                        │
│  ┌──────┴───────┐                                │
│  │   Handlers   │                                │
│  └──────┬───────┘                                │
└─────────┼────────────────────────────────────────┘
          │
┌─────────┼────────────────────────────────────────┐
│         │          Domain                         │
│  ┌──────┴───────┐  ┌───────────┐  ┌───────────┐ │
│  │   Entities   │  │Value Objs │  │  Events   │ │
│  │ Board, Task, │  │TaskStatus │  │TaskCreated│ │
│  │ User, etc   │  │ Priority  │  │TaskMoved  │ │
│  └──────────────┘  └───────────┘  └───────────┘ │
└──────────────────────────────────────────────────┘
          │
┌─────────┼────────────────────────────────────────┐
│         │      Infrastructure                    │
│  ┌──────┴───────┐  ┌──────────────────────────┐  │
│  │ Repositories │  │       Database           │  │
│  │ TaskRepo     │  │      SQLite setup        │  │
│  │ BoardRepo    │  │                          │  │
│  └──────────────┘  └──────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

### Stack
- **Runtime:** Node.js + TypeScript
- **Framework:** Express + Socket.io
- **Banco:** SQLite (better-sqlite3)
- **Build:** TypeScript + ts-node-dev

### Domain-Driven Design
- **Aggregates:** Board (contém Tasks como aggregate root)
- **Value Objects:** TaskStatus (TODO, IN_PROGRESS, DONE), Priority (LOW, MEDIUM, HIGH)
- **Domain Events:** TaskCreatedEvent, TaskMovedEvent (disparados via EventEmitter)

### Como Rodar

```bash
npm install
npm run dev
```
