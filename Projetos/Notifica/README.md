# Notifica

## Arquitetura: Multi-host Distribuído

```
                    ┌─────────────────┐
                    │   Redis Cache   │
                    │    (6379)       │
                    └────────┬────────┘
                             │
┌──────────────┐    ┌────────┴────────┐    ┌──────────────┐
│   API REST   │────│   RabbitMQ     │────│    Worker    │
│  (Express +  │    │   (5672)       │    │  (Consumer)  │
│   WebSocket) │    └────────────────┘    └──────┬───────┘
└──────────────┘                                  │
                                                  │
                                         ┌────────┴────────┐
                                         │  WS Consumer    │
                                         │  (WebSocket)    │
                                         └─────────────────┘
```

### Stack
- **Runtime:** Node.js + TypeScript
- **API:** Express + WebSocket
- **Cache:** Redis (ioredis)
- **Fila:** RabbitMQ (amqplib)
- **Banco:** SQLite (better-sqlite3)

### Componentes
| App | Função |
|-----|--------|
| `apps/api` | API REST + WebSocket para usuários |
| `apps/worker` | Consumer RabbitMQ em background |
| `apps/ws-consumer` | Consumer WebSocket dedicado |

### Packages
| Package | Descrição |
|---------|-----------|
| `packages/domain` | Entidades (User, Notification, Message) |
| `packages/application` | Serviços e DTOs |
| `packages/infrastructure` | Redis, RabbitMQ e repositórios |

### Como Rodar

```bash
# Iniciar dependências (Redis + RabbitMQ)
docker-compose up -d

# Instalar e rodar
npm install
npm run dev
```
