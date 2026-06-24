# Curso: API REST com Express

## O que é Express?

Express é um framework web para Node.js que fornece um conjunto robusto de funcionalidades para construir aplicações web e APIs. Ele atua como uma camada de middleware que intercepta requisições HTTP, aplica transformações e as direciona para os handlers apropriados.

### Pipeline HTTP do Express

O Express funciona baseado em um pipeline de middlewares. Cada requisição passa por uma cadeia de funções (middlewares) em sequência:

1. **Parsing**: O `express.json()` converte o body da requisição em JSON
2. **Logging**: Middlewares de log podem registrar a requisição
3. **CORS**: Headers de acesso são configurados
4. **Roteamento**: A rota correspondente é identificada
5. **Controller**: A lógica de negócio é executada
6. **Resposta**: O resultado é enviado ao cliente em JSON

```
Requisição → express.json() → cors() → Router → Controller → SQLite → Resposta JSON
```

## Arquitetura

```
Routes → Controllers → SQLite
```

A arquitetura segue uma divisão clara de responsabilidades:

- **Routes**: Definem os endpoints HTTP e delegam para funções handler
- **Models**: Representam as entidades do domínio
- **Database**: Camada de acesso a dados usando SQLite

## Entidade

**Produto** - CRUD completo com os campos: id, nome, preco, descricao, createdAt, updatedAt

## Como rodar

```bash
npm install
npm run dev
```

O servidor iniciará em `http://localhost:3000`

A documentação Swagger estará disponível em `http://localhost:3000/api-docs`

## Stack

| Tecnologia | Versão | Função |
|-----------|--------|--------|
| Express | ^4.18.2 | Framework HTTP |
| better-sqlite3 | ^9.4.3 | Banco de dados SQLite síncrono |
| swagger-jsdoc | ^6.2.8 | Geração de especificação OpenAPI |
| swagger-ui-express | ^5.0.0 | Interface visual da documentação |
| nodemon | ^3.0.2 | Hot reload em desenvolvimento |

## Estrutura de pastas

```
Curso_API_REST_Express/
├── README.md
├── package.json
└── src/
    ├── index.js              # Configuração e inicialização do servidor
    ├── routes/
    │   └── produtoRoutes.js   # Rotas REST para Produto
    ├── models/
    │   └── Produto.js         # Modelo Produto
    └── data/
        └── database.js        # Inicialização do SQLite
```

### Descrição dos arquivos

- **src/index.js**: Ponto de entrada. Configura middlewares (JSON, CORS, Swagger), registra rotas e inicia o servidor na porta 3000. Também cria a tabela de produtos no banco se não existir.
- **src/routes/produtoRoutes.js**: Define os 5 endpoints REST (GET, GET/:id, POST, PUT, DELETE) usando `express.Router()`.
- **src/models/Produto.js**: Classe que representa a entidade Produto com seus atributos.
- **src/data/database.js**: Inicializa a conexão com SQLite via better-sqlite3 e cria a tabela `produtos` automaticamente.
