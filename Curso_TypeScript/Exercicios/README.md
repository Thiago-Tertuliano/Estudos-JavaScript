# Exercícios — Como Navegar e Executar

Cada aula possui 5 exercícios práticos no arquivo `Exercicios/exercicio.ts`. Siga o guia abaixo para executá-los.

---

## Pré-requisitos

```bash
# Verificar Node.js
node --version  # v16+

# Instalar ts-node globalmente (opcional)
npm install -g ts-node typescript
```

## Como executar

```bash
# Pela raiz do curso
npx ts-node Aula_1_Fundamentos/Exercicios/exercicio.ts
npx ts-node Aula_2_Tipos_Avancados/Exercicios/exercicio.ts
npx ts-node Aula_3_Generics/Exercicios/exercicio.ts
npx ts-node Aula_4_Classes_Interfaces/Exercicios/exercicio.ts

# Decorators precisam da flag experimentalDecorators
npx ts-node --experimentalDecorators true Aula_5_Decorators_UtilityTypes/Exercicios/exercicio.ts
```

## Estrutura dos exercícios

| Aula | Arquivo | Tópicos |
|------|---------|---------|
| Aula 1 | `Aula_1_Fundamentos/Exercicios/exercicio.ts` | Type annotation, enums, union, intersection, type alias |
| Aula 2 | `Aula_2_Tipos_Avancados/Exercicios/exercicio.ts` | Discriminated unions, type predicates, mapped types, conditional types, template literals |
| Aula 3 | `Aula_3_Generics/Exercicios/exercicio.ts` | Generic functions, interfaces, classes, constraints, keyof |
| Aula 4 | `Aula_4_Classes_Interfaces/Exercicios/exercicio.ts` | Interfaces, modificadores, abstract, static, declaration merging |
| Aula 5 | `Aula_5_Decorators_UtilityTypes/Exercicios/exercicio.ts` | Decorators, utility types (Partial, Pick, Omit, Record, ReturnType, etc.) |

## Formato

Cada `exercicio.ts` contém:

1. Descrição do exercício em comentário
2. Espaço para você implementar a solução
3. Testes automáticos no final do arquivo

Basta preencher as implementações e executar o arquivo para verificar se os testes passam.

## Dicas

- Use `tsc --noEmit` para verificar erros de tipo sem gerar arquivos JS
- O VS Code já faz type checking em tempo real — fique de olho nos erros
- Leia o README da aula antes de tentar os exercícios
- Experimente modificar os exemplos da teoria para entender melhor
