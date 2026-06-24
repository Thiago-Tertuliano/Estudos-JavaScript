# Curso: API REST com Repository Pattern + Service Layer

## O que é Repository Pattern?

O Repository Pattern é um padrão de design que abstrai a camada de acesso a dados, permitindo que a lógica de negócio não dependa diretamente do banco de dados. Ele atua como uma coleção de objetos em memória, isolando o código da aplicação das especificidades do armazenamento.

### Service Layer

A Service Layer adiciona uma camada extra de abstração contendo as regras de negócio, mantendo os controllers enxutos e os repositórios focados apenas em operações de dados.

## Arquitetura

```
Routes → Service (regras de negócio) → Repository → SQLite
```

O fluxo de uma requisição segue esta cadeia:

1. **Route**: Recebe a requisição HTTP e chama o Service
2. **Service**: Aplica regras de negócio e validações
3. **Repository**: Executa operações no banco de dados
4. **SQLite**: Armazena e recupera os dados

### Benefícios do desacoplamento

- **Testabilidade**: Cada camada pode ser testada isoladamente
- **Manutenibilidade**: Mudanças no banco não afetam as camadas superiores
- **Reutilização**: Repositórios podem ser reutilizados em diferentes serviços
- **Separação de concerns**: Cada camada tem uma responsabilidade única

## Entidades

- **Author**: id, nome, biography, createdAt
- **Book**: id, title, authorId, year, pages, createdAt (relacionamento N:1 com Author)

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
Curso_API_REST_RepositoryPattern/
├── README.md
├── package.json
└── src/
    ├── index.js                    # Configuração e inicialização do servidor
    ├── routes/
    │   ├── authorRoutes.js         # Rotas REST para Author
    │   └── bookRoutes.js           # Rotas REST para Book
    ├── models/
    │   ├── Author.js               # Modelo Author
    │   └── Book.js                 # Modelo Book
    ├── dto/
    │   ├── AuthorRequest.js        # DTO de requisição para Author
    │   ├── AuthorResponse.js       # DTO de resposta para Author
    │   ├── BookRequest.js          # DTO de requisição para Book
    │   └── BookResponse.js         # DTO de resposta para Book
    ├── repositories/
    │   ├── IRepository.js          # Interface do repositório
    │   ├── Repository.js           # Implementação genérica do repositório
    │   └── index.js                # Exporta instâncias dos repositórios
    ├── services/
    │   ├── IAuthorService.js       # Interface do AuthorService
    │   ├── AuthorService.js        # Implementação com regras de Author
    │   ├── IBookService.js         # Interface do BookService
    │   └── BookService.js          # Implementação com regras de Book
    └── data/
        └── database.js             # Inicialização do SQLite
```

### Descrição dos arquivos

- **src/index.js**: Ponto de entrada. Configura middlewares, registra rotas de Author e Book, inicia servidor.
- **src/routes/**: Define os endpoints REST para cada entidade.
- **src/models/**: Classes que representam as entidades do domínio.
- **src/dto/**: Data Transfer Objects para validar e formatar dados de entrada/saída.
- **src/repositories/**: Camada de acesso a dados com implementação genérica.
- **src/services/**: Camada de negócio com regras e validações.
- **src/data/database.js**: Inicializa SQLite com tabelas `authors` e `books` e chave estrangeira.
