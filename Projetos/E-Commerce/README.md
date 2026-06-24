# E-Commerce API

## Arquitetura: Monolith + Service Layer

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Controllers  │────▶│   Services   │────▶│ Repositories │────▶│    SQLite    │
│  (routes/)    │     │  (services/) │     │(repositories/)│    │  (data/)    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
       │                    │                      │
       │              ┌─────┴─────┐                │
       │              │  DTOs     │                │
       │              │ (dto/)   │                │
       │              └───────────┘                │
       │                                           │
  ┌────┴────┐                               ┌─────┴──────┐
  │  Auth   │                               │   Models   │
  │  JWT    │                               │  (models/) │
  └─────────┘                               └────────────┘
```

### Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Banco:** SQLite (better-sqlite3)
- **Autenticação:** JWT (jsonwebtoken + bcryptjs)
- **Testes:** Jest

### Entidades
- **Product** - Produtos com controle de estoque
- **Category** - Categorias para classificação
- **Order** - Pedidos com status (PENDING, PAID, SHIPPED, DELIVERED, CANCELLED)
- **OrderItem** - Itens do pedido
- **User** - Usuários do sistema

### Regras de Negócio
- Validação de estoque antes de confirmar pedido
- Cálculo automático do total do pedido
- Exclusão protegida (não permite excluir categorias com produtos vinculados)
- Produtos não podem ser deletados se estiverem em pedidos ativos

### Estrutura de Pastas

```
src/
├── data/
│   └── database.js          # Inicialização SQLite com migrations
├── dto/
│   ├── CategoryRequest.js    # Validação de entrada de categorias
│   ├── CategoryResponse.js   # Formatação de saída de categorias
│   ├── ProductRequest.js     # Validação de entrada de produtos
│   ├── ProductResponse.js    # Formatação de saída de produtos
│   ├── OrderRequest.js       # Validação de entrada de pedidos
│   └── OrderResponse.js      # Formatação de saída de pedidos
├── middleware/
│   └── auth.js               # Middleware JWT para proteção de rotas
├── models/
│   ├── Category.js           # Modelo de categoria
│   ├── Product.js            # Modelo de produto
│   ├── Order.js              # Modelo de pedido
│   ├── OrderItem.js          # Modelo de item de pedido
│   ├── OrderStatus.js        # Enum de status de pedido
│   └── User.js               # Modelo de usuário
├── repositories/
│   ├── IRepository.js        # Interface genérica de repositório
│   ├── Repository.js         # Implementação genérica
│   └── index.js              # Exporta instâncias dos repositórios
├── routes/
│   ├── authRoutes.js         # POST /login, POST /register
│   ├── categoryRoutes.js     # CRUD /categories
│   ├── productRoutes.js      # CRUD /products
│   └── orderRoutes.js        # CRUD /orders + regras de negócio
├── services/
│   ├── IAuthService.js       # Interface do serviço de autenticação
│   ├── AuthService.js        # Implementação (login, register)
│   ├── ICategoryService.js   # Interface do serviço de categorias
│   ├── CategoryService.js    # Implementação
│   ├── IProductService.js    # Interface do serviço de produtos
│   ├── ProductService.js     # Implementação
│   ├── IOrderService.js      # Interface do serviço de pedidos
│   └── OrderService.js       # Implementação
└── index.js                  # Entry point do Express
```

### Como Rodar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Modo produção
npm start

# Rodar testes
npm test
```
