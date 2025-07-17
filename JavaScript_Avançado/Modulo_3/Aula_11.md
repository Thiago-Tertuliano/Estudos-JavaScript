🎓 JavaScript Avançado – Aula 11: Iteradores, Generators e Symbol.iterator

## 📚 Conceitos Fundamentais

###1 🔁 Iteradores

Iteradores são objetos que implementam o protocolo de iteração, permitindo percorrer uma sequência de valores de forma controlada.

**Protocolo de Iteração:**
- Objeto deve ter método `next()`
- `next()` retorna `[object Object]value, done }`
- `done: true` indica fim da iteração

#### Iterador Básico
```javascript
function criarIterador(array) {
  let i =0 return {
    next: function () [object Object]  return i < array.length
        ? [object Object]value: array[i++], done: false }
        : { done: true };
    }
  };
}

const iterador = criarIterador([a, c]);

console.log(iterador.next()); // [object Object] value: "a", done: false }
console.log(iterador.next()); // [object Object] value: "b", done: false }
console.log(iterador.next()); // [object Object] value: "c", done: false }
console.log(iterador.next()); // { done: true }
```

#### Iterador com Estado
```javascript
class IteradorFibonacci {
  constructor(limite)[object Object]
    this.limite = limite;
    this.atual = 0;
    this.anterior = 1;
    this.contador = 0;
  }

  next() {
    if (this.contador >= this.limite) {
      return { done: true };
    }

    const valor = this.atual;
    const proximo = this.atual + this.anterior;
    this.anterior = this.atual;
    this.atual = proximo;
    this.contador++;

    return { value: valor, done: false };
  }
}

const fibIterador = new IteradorFibonacci(8);
let resultado = fibIterador.next();
while (!resultado.done) {
  console.log(resultado.value); // 0, 1 1, 2, 3, 5,8, 13
  resultado = fibIterador.next();
}
```

### 2. 🔄 Symbol.iterator

O `Symbol.iterator` é um símbolo especial que define como um objeto deve ser iterado. Objetos com este método são chamados de **iteráveis**.

#### Objeto Iterável Simples
```javascript
const meuObjeto = [object Object]  valores:1020 Symbol.iterator]()[object Object]    let i = 0;
    const valores = this.valores;
    return[object Object]  next() [object Object]        return i < valores.length
          ? [object Object]value: valores[i++], done: false }
          : { done: true };
      }
    };
  }
};

for (const valor of meuObjeto) {
  console.log(valor); // 102030}
```

#### Classe Iterável
```javascript
class ListaPersonalizada {
  constructor(...items) [object Object]this.items = items;
  }

 Symbol.iterator]() [object Object]
    let index = 0
    const items = this.items;

    return[object Object]  next() {
        return index < items.length
          ? { value: items[index++], done: false }
          : { done: true };
      }
    };
  }

  // Método para adicionar itens
  adicionar(item) {
    this.items.push(item);
  }

  // Método para obter tamanho
  get tamanho()[object Object] return this.items.length;
  }
}

const lista = new ListaPersonalizada("maçã", banana,laranja");
for (const fruta of lista) [object Object] console.log(fruta); // maçã, banana, laranja
}
```

#### Iterável com Filtro
```javascript
class IteravelFiltrado {
  constructor(array, filtro) [object Object]this.array = array;
    this.filtro = filtro;
  }

 Symbol.iterator]() [object Object]
    let index = 0
    const array = this.array;
    const filtro = this.filtro;

    return[object Object]  next()[object Object]      while (index < array.length)[object Object]        const item = array[index++];
          if (filtro(item)) {
            return { value: item, done: false };
          }
        }
        return { done: true };
      }
    };
  }
}

const numeros = 1, 2, 3, 456, 8, 9, 10
const pares = new IteravelFiltrado(numeros, n => n % 2 === 0);

for (const par of pares) {
  console.log(par); //2, 6, 8, 10``

###3 Generators

Generators são funções especiais que podem pausar e retomar sua execução, facilitando a criação de iteradores.

#### Generator Básico
```javascript
function* contador() {
  yield 1;
  yield2 yield3

const gen = contador();

console.log(gen.next()); // { value:1e: false }
console.log(gen.next()); // { value:2e: false }
console.log(gen.next()); // { value:3e: false }
console.log(gen.next()); // [object Object] value: undefined, done: true }
```

#### Generator com Parâmetros
```javascript
function* contadorPersonalizado(inicio, fim, passo =1) {
  for (let i = inicio; i <= fim; i += passo) {
    yield i;
  }
}

// Usando for...of
for (const valor of contadorPersonalizado(1, 10)) {
  console.log(valor); //1, 3, 5,7
}

// Usando next()
const gen2 = contadorPersonalizado(5, 8);
console.log(gen2.next().value); // 5sole.log(gen2.next().value); // 6sole.log(gen2.next().value); // 7sole.log(gen2.next().value); // 8
```

#### Generator com Estado
```javascript
function* geradorFibonacci() [object Object]
  let anterior = 0  let atual = 1
  while (true)[object Object]
    yield atual;
   anterior, atual] = [atual, anterior + atual];
  }
}

const fibGen = geradorFibonacci();
for (let i = 0; i < 10; i++)[object Object]
  console.log(fibGen.next().value);
}
```

#### Generator com yield*
```javascript
function* concatenarGenerators() {
  yield* contadorPersonalizado(1,3
  yield* contadorPersonalizado(10, 12

for (const valor of concatenarGenerators()) {
  console.log(valor); //1,2, 3, 10 11, 12`

### 4. 🔧 Generators Avançados

#### Generator com Comunicação Bidirecional
```javascript
function* geradorComunicativo() {
  const nome = yieldQual é seu nome?;
  const idade = yield `Olá ${nome}, qual é sua idade?`;
  yield `Você tem ${idade} anos, ${nome}!`;
}

const gen = geradorComunicativo();
console.log(gen.next().value); // "Qual é seu nome?"
console.log(gen.next("Thiago).value); //Olá Thiago, qual é sua idade?"
console.log(gen.next(28).value); // Você tem 28os, Thiago!"
```

#### Generator para Processamento de Dados
```javascript
function* processarDados(dados) {
  for (const item of dados) {
    if (typeof item ===number') [object Object]      yield item * 2 } else if (typeof item ===string') [object Object]     yield item.toUpperCase();
    }
  }
}

const dados =1hello", 3, world", 5];
for (const resultado of processarDados(dados)) {
  console.log(resultado); // 2, HELLO,6WORLD, 10```

### 5🎯 Casos de Uso Práticos

#### Iterável para Paginação
```javascript
class Paginador[object Object] constructor(dados, itensPorPagina) [object Object]this.dados = dados;
    this.itensPorPagina = itensPorPagina;
  }

 Symbol.iterator]() [object Object]   let paginaAtual = 0
    const dados = this.dados;
    const itensPorPagina = this.itensPorPagina;

    return[object Object]  next() {
        const inicio = paginaAtual * itensPorPagina;
        const fim = inicio + itensPorPagina;
        const pagina = dados.slice(inicio, fim);

        if (pagina.length === 0) [object Object]          return { done: true };
        }

        paginaAtual++;
        return { value: pagina, done: false };
      }
    };
  }
}

const usuarios = ["Ana", João,Maria,Pedro, Lucas, Carla"];
const paginador = new Paginador(usuarios, 2);

for (const pagina of paginador) {
  console.log("Página:", pagina);
}
```

#### Generator para Lazy Loading
```javascript
function* geradorLazyLoading(urls) [object Object] for (const url of urls)[object Object] try {
      const response = yield fetch(url);
      const data = yield response.json();
      yield data;
    } catch (error) {
      yield { error: error.message };
    }
  }
}

// Simulação de uso
const urls = ['https://api.exemplo.com/1, ttps://api.exemplo.com/2];
const lazyGen = geradorLazyLoading(urls);
```

---

## 🧪 Exercício Prático: Sistema de Gerenciamento de Tarefas com Iteradores

### Enunciado

Você foi contratado para desenvolver um sistema de gerenciamento de tarefas que utilize iteradores, generators e Symbol.iterator. O sistema deve permitir diferentes formas de iteração sobre as tarefas.

### Requisitos do Sistema

#### 1**Classe Tarefa**
- Propriedades: `id`, `titulo`, `descricao`, `prioridade`, `status`, `dataCriacao`, `dataConclusao`
- Métodos: `concluir()`, `atualizarPrioridade()`, `toJSON()`

####2. **Classe GerenciadorTarefas (Iterável)**
- Implementar `[Symbol.iterator]()` para iteração padrão
- Métodos: `adicionarTarefa()`, `removerTarefa()`, `buscarPorStatus()`
- Criar diferentes iteradores para diferentes cenários

#### 3enerators Especializados**
- `geradorPorPrioridade(prioridade)`: Gera tarefas de uma prioridade específica
- `geradorPorStatus(status)`: Gera tarefas de um status específico
- `geradorAtrasadas()`: Gera tarefas atrasadas (criadas há mais de 7ias)
- `geradorConcluidasHoje()`: Gera tarefas concluídas hoje

#### 4. **Iteradores Personalizados**
- `IteradorPorPrioridade`: Itera tarefas ordenadas por prioridade
- `IteradorPorData`: Itera tarefas ordenadas por data de criação
- `IteradorFiltrado`: Itera tarefas que passam por um filtro customizado

#### 5. **Funcionalidades Avançadas**
- Sistema de prioridades: baixa, média, alta, urgente
- Sistema de status: pendente, em_andamento, concluida, cancelada
- Cálculo de estatísticas usando iteradores
- Exportação de relatórios

### Estrutura do Projeto

```javascript
class Tarefa[object Object]
  constructor(titulo, descricao, prioridade = 'média) {    this.id = Date.now() + Math.random();
    this.titulo = titulo;
    this.descricao = descricao;
    this.prioridade = prioridade;
    this.status = 'pendente';
    this.dataCriacao = new Date();
    this.dataConclusao = null;
  }

  concluir()[object Object]
    this.status = 'concluida';
    this.dataConclusao = new Date();
  }

  atualizarPrioridade(novaPrioridade) {
    this.prioridade = novaPrioridade;
  }
}

class GerenciadorTarefas[object Object]  constructor() [object Object]    this.tarefas = ;
  }

  adicionarTarefa(tarefa) [object Object] this.tarefas.push(tarefa);
  }

 Symbol.iterator]() [object Object]
    let index =0
    const tarefas = this.tarefas;

    return[object Object]  next() {
        return index < tarefas.length
          ? { value: tarefas[index++], done: false }
          : { done: true };
      }
    };
  }

  // Generators especializados
  *geradorPorPrioridade(prioridade) {
    for (const tarefa of this.tarefas) [object Object]      if (tarefa.prioridade === prioridade) {
        yield tarefa;
      }
    }
  }

  *geradorAtrasadas() [object Object]  const hoje = new Date();
    const seteDiasAtras = new Date(hoje.getTime() - 7 * 2460* 60 *1000);

    for (const tarefa of this.tarefas) [object Object] if (tarefa.status !== 'concluida' && tarefa.dataCriacao < seteDiasAtras) {
        yield tarefa;
      }
    }
  }
}
```

### Funcionalidades a Implementar
1 **Iteração Básica**: Usar for...of para percorrer todas as tarefas2*Filtros Dinâmicos**: Criar iteradores para diferentes filtros3 **Estatísticas**: Calcular estatísticas usando iteradores
4*Relatórios**: Gerar relatórios baseados em iterações
5. **Performance**: Implementar lazy loading para grandes volumes

### Exemplo de Uso

```javascript
const gerenciador = new GerenciadorTarefas();

// Adicionar tarefas
gerenciador.adicionarTarefa(new Tarefa("Estudar JS", Revisar módulos",alta"));
gerenciador.adicionarTarefa(new Tarefa("Exercícios",Fazer exercícios práticos", média"));
gerenciador.adicionarTarefa(new Tarefa("Projeto", "Desenvolver sistema", "urgente"));

// Iteração básica
for (const tarefa of gerenciador) {
  console.log(`${tarefa.titulo} - ${tarefa.prioridade}`);
}

// Usando generators
for (const tarefa of gerenciador.geradorPorPrioridade('alta')) [object Object] console.log(`Tarefa prioritária: ${tarefa.titulo}`);
}

// Verificar tarefas atrasadas
for (const tarefa of gerenciador.geradorAtrasadas()) [object Object] console.log(`Tarefa atrasada: ${tarefa.titulo}`);
}
```

### Entregáveis

1. **Código completo** com todas as classes implementadas2. **Demonstração** de todos os tipos de iteração
3. **Generators funcionais** para diferentes cenários
4. **Iteradores personalizados** com filtros5**Relatórios** gerados usando iteração

### Critérios de Avaliação

- **Implementação correta** do protocolo de iteração
- **Uso adequado** de generators e Symbol.iterator
- **Performance** e eficiência das iterações
- **Flexibilidade** dos iteradores personalizados
- **Funcionalidade** completa do sistema

**Dica:** Comece implementando a classe Tarefa e o iterador básico, depois adicione os generators e iteradores especializados gradualmente.