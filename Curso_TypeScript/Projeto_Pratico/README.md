# Projeto Prático — Sistema de Gerenciamento de Biblioteca

> Projeto integrador que consolida todos os conceitos do curso: tipos avançados, generics, classes, interfaces, decorators e utility types.

---

## Especificação

### Entidades

```typescript
// ItemBase — classe abstrata base para todos os itens do sistema
abstract class ItemBiblioteca {
  constructor(
    public readonly id: string,
    public titulo: string,
    protected anoPublicacao: number,
    public disponivel: boolean = true
  ) {}
  abstract get descricao(): string;
}

// Livro extends ItemBiblioteca
// Campos adicionais: autor, genero, numeroPaginas

// Revista extends ItemBiblioteca
// Campos adicionais: edicao, editora, mesPublicacao

// Membro
// Campos: id, nome, email, telefone, dataCadastro

// Emprestimo — associa Membro + ItemBiblioteca com data retirada/devolucao
```

### Funcionalidades

1. **Gerenciar Itens:** cadastrar, listar, buscar, remover livros e revistas
2. **Gerenciar Membros:** cadastrar, listar, buscar membros ativos
3. **Empréstimos:** emprestar item (marcar como indisponível), devolver item, historico por membro
4. **Relatórios:** itens mais emprestados, membros com pendências, itens atrasados

### Requisitos Técnicos

| Requisito | Onde usar |
|-----------|-----------|
| **Generic class** | `Repositorio<T extends ItemBiblioteca>` para operações CRUD genéricas |
| **Generic constraint** | Métodos que exigem `T extends { id: string }` |
| **keyof + generic** | `pluck` para extrair propriedades de coleções |
| **Discriminated union** | Resultado de operações: `Sucesso<T>` / `Erro` |
| **Type guard** | `isDisponivel(item)`, `instanceof` para Livro/Revista |
| **Type predicate** | `isAtrasado(emprestimo)` |
| **Mapped type** | Transformar `Membro` em `MembroStrings` para relatórios |
| **Conditional type** | `TipoItem<T>` que retorna "livro" ou "revista" |
| **Template literal** | Gerar IDs no formato `"LIV-{numero}"` ou `"REV-{numero}"` |
| **Utility types** | `Partial<ItemBiblioteca>` para updates, `Omit<Membro, "id">` para cadastro, `Readonly<Emprestimo>` para histórico |
| **Abstract class** | `ItemBiblioteca` como base |
| **Interface + extends** | `interface Entidade { id: string }` |
| **Decorator** | `@logOperacao` para logar chamadas aos métodos do repositório |
| **Enum** | `StatusEmprestimo { Ativo, Devolvido, Atrasado }` |

### Estrutura esperada

```
Projeto_Pratico/
├── src/
│   ├── models/
│   │   ├── ItemBiblioteca.ts     (abstract class)
│   │   ├── Livro.ts
│   │   ├── Revista.ts
│   │   ├── Membro.ts
│   │   └── Emprestimo.ts
│   ├── types/
│   │   └── index.ts              (utility types, conditionals, mapped)
│   ├── repositories/
│   │   └── Repositorio.ts        (generic class)
│   ├── services/
│   │   ├── BibliotecaService.ts  (lógica de negócio)
│   │   └── RelatorioService.ts   (relatórios)
│   ├── decorators/
│   │   └── LogDecorator.ts
│   ├── utils/
│   │   └── IdGenerator.ts        (template literal types)
│   └── index.ts                  (entry point com demonstração)
└── README.md                     (este arquivo)
```

### Exemplo de uso esperado

```typescript
const biblioteca = new BibliotecaService();

// Cadastrar itens
const livro = biblioteca.cadastrarItem({
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia",
  numeroPaginas: 1200,
});

// Cadastrar membro
const membro = biblioteca.cadastrarMembro({
  nome: "Alice",
  email: "alice@email.com",
});

// Realizar empréstimo
const emprestimo = biblioteca.emprestarItem(livro.id, membro.id);

// Devolver
biblioteca.devolverItem(emprestimo.id);

// Relatório
const relatorio = biblioteca.relatorios.itensMaisEmprestados(5);
```

### Critérios de avaliação

- [ ] Tipagem forte em todo o código (sem `any`)
- [ ] Uso de generics no repositório
- [ ] Discriminated unions para resultados de operações
- [ ] Pelo menos um decorator funcional
- [ ] Utility types aplicados em pelo menos 3 cenários
- [ ] Type guards e type predicates implementados
- [ ] Template literal types para geração de IDs
- [ ] Código compila sem erros (`tsc --noEmit`)
