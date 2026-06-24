# ReservEasy

## Arquitetura: Vertical Slices

```
src/
├── domain/
│   ├── entities/        # Entidades de domínio
│   ├── enums/           # Enumeradores
│   └── events/          # EventEmitter central
├── features/
│   ├── properties/      # Slice: Gestão de propriedades
│   │   ├── propertyRoutes.js
│   │   ├── propertyService.js
│   │   └── propertyValidator.js
│   ├── guests/          # Slice: Gestão de hóspedes
│   ├── bookings/        # Slice: Gestão de reservas
│   │   └── events/      # Eventos de domínio (bookingCreated)
│   └── payments/        # Slice: Gestão de pagamentos
├── data/
│   └── database.js      # SQLite setup
├── common/
│   ├── middleware/       # Error handler
│   └── errors/          # AppError customizado
└── index.js             # Entry point
```

### Vertical Slice Architecture
Cada feature contém TUDO que precisa: rotas, serviços, validação e eventos. Diferente da arquitetura em camadas (que separa por função técnica), vertical slices separam por funcionalidade de negócio.

### Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Banco:** SQLite (better-sqlite3)

### Domain Events
Usamos EventEmitter do Node.js para desacoplar efeitos colaterais:
- `booking.created` → dispara atualização de disponibilidade e notificação

### Entidades
- **Property** - Propriedades para aluguel
- **Guest** - Hóspedes
- **Booking** - Reservas
- **Payment** - Pagamentos

### Como Rodar

```bash
npm install
npm run dev
```
