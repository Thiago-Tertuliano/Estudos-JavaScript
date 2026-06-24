# School Management

## Arquitetura: Clean Architecture + CQRS

```
┌─────────────────────────────────────────────────────────────┐
│                         apps/api                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                  Controllers                         │   │
│  └──────────────────────┬───────────────────────────────┘   │
└──────────────────────────┼───────────────────────────────────┘
                           │
┌──────────────────────────┼───────────────────────────────────┐
│              packages/application                            │
│  ┌──────────────────────┴───────────────────────────────┐   │
│  │   Commands          │         Queries                │   │
│  │  ┌─────────────────┐│  ┌──────────────────────────┐  │   │
│  │  │CreateStudentCmd ││  │GetStudentsQuery          │  │   │
│  │  │EnrollStudentCmd ││  │GetCoursesQuery           │  │   │
│  │  └────────┬────────┘│  └───────────┬──────────────┘  │   │
│  │           │         │              │                 │   │
│  │  ┌────────┴────────┐│  ┌───────────┴──────────────┐  │   │
│  │  │   Handlers      ││  │      Handlers            │  │   │
│  │  └────────┬────────┘│  └──────────────────────────┘  │   │
│  └───────────┼─────────┘                                │   │
└──────────────┼───────────────────────────────────────────┘   │
               │
┌──────────────┼───────────────────────────────────────────┐
│              │  packages/domain                           │
│  ┌───────────┴──────────┐                                │
│  │      Entities        │                                │
│  │  Student, Course,    │                                │
│  │  Enrollment          │                                │
│  └──────────────────────┘                                │
└──────────────────────────────────────────────────────────┘
               │
┌──────────────┼───────────────────────────────────────────┐
│  packages/infrastructure                                 │
│  ┌───────────┴──────────┐  ┌──────────────────────────┐  │
│  │    Repositories      │  │       Database           │  │
│  │  StudentRepository   │  │      SQLite setup        │  │
│  │  CourseRepository    │  │                          │  │
│  └──────────────────────┘  └──────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### Stack
- **Runtime:** Node.js + TypeScript
- **Framework:** Express
- **Banco:** SQLite (better-sqlite3)
- **Monorepo:** npm workspaces
- **Build:** TypeScript Project References

### Pacotes
| Pacote | Descrição |
|--------|-----------|
| `packages/domain` | Entidades puras do domínio (sem dependências externas) |
| `packages/application` | Casos de uso (Commands/Queries separados) |
| `packages/infrastructure` | Repositórios e banco de dados |
| `apps/api` | Interface HTTP (Express + Controllers) |

### Como Rodar

```bash
# Instalar dependências
npm install

# Build todos os pacotes
npm run build

# Desenvolvimento
npm run dev
```
