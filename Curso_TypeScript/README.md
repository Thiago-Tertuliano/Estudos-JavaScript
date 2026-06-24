# TypeScript — Curso Completo

> Domine o sistema de tipos do TypeScript, desde fundamentos até decorators, generics e utility types. Curso progressivo com teoria, exercícios e projeto prático.

---

## Índice

1. [Fundamentos](/Aula_1_Fundamentos/README.md) — Tipos primitivos, type annotation, inference, tuples, enums, union/intersection, any vs unknown
2. [Tipos Avançados](/Aula_2_Tipos_Avancados/README.md) — Type guards, assertion functions, mapped types, conditional types, template literal types
3. [Generics](/Aula_3_Generics/README.md) — Generic functions, interfaces, classes, constraints, keyof, infer
4. [Classes e Interfaces](/Aula_4_Classes_Interfaces/README.md) — Interfaces vs type aliases, extends, implements, modificadores de acesso, abstract, static, declaration merging
5. [Decorators e Utility Types](/Aula_5_Decorators_UtilityTypes/README.md) — Class/property/method/parameter decorators, utility types, satisfies operator
6. [Projeto Prático](/Projeto_Pratico/README.md) — Sistema de Gerenciamento de Biblioteca

---

## Objetivos

- Escrever TypeScript com tipagem forte e segura
- Entender e aplicar o sistema de tipos avançados
- Usar generics para criar código reutilizável e type-safe
- Projetar sistemas orientados a objetos com interfaces e classes
- Aplicar decorators e utility types em cenários reais
- Construir um projeto completo do zero

## Pré-requisitos

- JavaScript básico (variáveis, funções, objetos, arrays, classes ES6)
- Node.js instalado (v16+)
- VS Code (recomendado) com suporte a TypeScript

## Como executar os exercícios

```bash
# Instalar ts-node globalmente (uma vez)
npm install -g ts-node typescript

# Executar um exercício
ts-node Aula_1_Fundamentos/Exercicios/exercicio.ts

# Ou usando npx
npx ts-node Aula_1_Fundamentos/Exercicios/exercicio.ts
```

### Alternativa com `tsconfig.json`

Crie um `tsconfig.json` na raiz do curso:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Depois execute com `npx ts-node caminho/do/arquivo.ts`.

---

## Estrutura

```
Curso_TypeScript/
├── README.md                         # Este arquivo
├── Aula_1_Fundamentos/
│   ├── README.md                     # Teoria: tipos básicos
│   └── Exercicios/exercicio.ts       # 5 exercícios
├── Aula_2_Tipos_Avancados/
│   ├── README.md                     # Teoria: type guards, mapped, conditional
│   └── Exercicios/exercicio.ts
├── Aula_3_Generics/
│   ├── README.md                     # Teoria: generics
│   └── Exercicios/exercicio.ts
├── Aula_4_Classes_Interfaces/
│   ├── README.md                     # Teoria: OOP no TS
│   └── Exercicios/exercicio.ts
├── Aula_5_Decorators_UtilityTypes/
│   ├── README.md                     # Teoria: decorators e utility types
│   └── Exercicios/exercicio.ts
├── Projeto_Pratico/
│   └── README.md                     # Especificação do projeto final
└── Exercicios/
    └── README.md                     # Guia de navegação dos exercícios
```

---

## Metodologia

Cada aula segue o formato **Teoria → Exemplos → Exercícios**:

1. Leia o README da aula com teoria e exemplos
2. Execute os exemplos no terminal com `ts-node`
3. Resolva os 5 exercícios propostos
4. Confira seu entendimento antes de avançar

---

*Desenvolvido por Thiago Matos Tertuliano*
