🎓 JavaScript Avançado – Aula6
🔹 Tema: Encapsulamento com Getters e Setters - Controle de Acesso

##1Fundamentos do Encapsulamento

O encapsulamento é um dos pilares da Programação Orientada a Objetos (POO) que visa proteger os dados de um objeto, controlando como eles são acessados e modificados.

### 10.1 Princípios do Encapsulamento
```javascript
// ❌ Sem encapsulamento - dados expostos
class Pessoa[object Object]  constructor(nome, idade)[object Object]  this.nome = nome;
    this.idade = idade; // Pode ser modificado diretamente
  }
}

const pessoa = new Pessoa("João",25;
pessoa.idade = -5 // Idade inválida permitida!

// ✅ Com encapsulamento - dados protegidos
class PessoaEncapsulada[object Object]  constructor(nome, idade) [object Object] this._nome = nome;
    this._idade = idade;
  }

  get nome()[object Object]
    return this._nome;
  }

  set nome(novoNome) {
    if (novoNome.length >=2[object Object]      this._nome = novoNome;
    } else[object Object]   throw new Error("Nome deve ter pelo menos 2 caracteres");
    }
  }

  get idade()[object Object]
    return this._idade;
  }

  set idade(novaIdade) {
    if (novaIdade >= 0& novaIdade <=150
      this._idade = novaIdade;
    } else[object Object]   throw new Error("Idade deve estar entre 0150
    }
  }
}
```

### 10.2 Benefícios do Encapsulamento
- **Proteção de dados**: Validação antes de modificações
- **Controle de acesso**: Apenas dados necessários são expostos
- **Manutenibilidade**: Mudanças internas não afetam código externo
- **Flexibilidade**: Lógica de negócio centralizada

##2 Getters e Setters Básicos

### 20.1ntaxe e Convenções
```javascript
class Produto[object Object]  constructor(nome, preco) [object Object] this._nome = nome;
    this._preco = preco;
    this._desconto = 0;
  }

  // Getter - acessa propriedade
  get nome()[object Object]
    return this._nome.toUpperCase();
  }

  // Setter - modifica propriedade
  set nome(novoNome) [object Object] if (novoNome.trim().length >=2[object Object]      this._nome = novoNome.trim();
    } else[object Object]   throw new Error("Nome deve ter pelo menos 2 caracteres");
    }
  }

  get preco()[object Object]
    return this._preco;
  }

  set preco(novoPreco)[object Object]
    if (novoPreco >=0[object Object]
      this._preco = novoPreco;
    } else[object Object]   throw new Error("Preço não pode ser negativo");
    }
  }

  // Getter calculado
  get precoComDesconto()[object Object]
    return this._preco * (1- this._desconto / 100);
  }

  set desconto(novoDesconto)[object Object]    if (novoDesconto >=0&& novoDesconto <=10[object Object]      this._desconto = novoDesconto;
    } else[object Object]   throw new Error("Desconto deve estar entre 0 e 100%");
    }
  }
}

const produto = new Produto("Notebook", 2500;
console.log(produto.nome); // NOTEBOOK
console.log(produto.precoComDesconto); //250

produto.desconto = 10;
console.log(produto.precoComDesconto); // 2250
```

### 20.2lidações Avançadas
```javascript
class ContaBancaria[object Object]
  constructor(titular, saldoInicial = 0
    this._titular = titular;
    this._saldo = saldoInicial;
    this._limite = 1000;
    this._historico = [];
  }

  get titular()[object Object]
    return this._titular;
  }

  set titular(novoTitular) {
    if (typeof novoTitular ===string' && novoTitular.trim().length >=3[object Object]     this._titular = novoTitular.trim();
    } else[object Object]   throw new Error("Nome do titular deve ter pelo menos 3 caracteres");
    }
  }

  get saldo()[object Object]
    return this._saldo;
  }

  // Saldo só pode ser modificado através de métodos específicos
  set saldo(novoSaldo) {
    throw new Error(Saldo só pode ser modificado através de depósito ou saque");
  }

  get limite()[object Object]
    return this._limite;
  }

  set limite(novoLimite)[object Object]    if (novoLimite >= 0 && novoLimite <= 100[object Object]      this._limite = novoLimite;
    } else[object Object]   throw new Error(Limite deve estar entre 0 e 1000;
    }
  }

  get historico()[object Object]   return [...this._historico]; // Retorna cópia para não modificar original
  }

  depositar(valor) [object Object]
    if (valor >0[object Object]
      this._saldo += valor;
      this._historico.push({
        tipo: 'depósito',
        valor: valor,
        data: new Date()
      });
    } else[object Object]   throw new Error(Valor do depósito deve ser positivo");
    }
  }

  sacar(valor) [object Object]
    if (valor > 0&& valor <= this._saldo + this._limite)[object Object]
      this._saldo -= valor;
      this._historico.push({
        tipo: 'saque',
        valor: valor,
        data: new Date()
      });
    } else[object Object]   throw new Error(Valor inválido ou saldo insuficiente");
    }
  }
}
```

##3Getters Calculados e Lazy Loading

###30.1ropriedades Calculadas
```javascript
class Retangulo[object Object]  constructor(largura, altura) {
    this._largura = largura;
    this._altura = altura;
  }

  get largura()[object Object]
    return this._largura;
  }

  set largura(novaLargura) [object Object]   if (novaLargura >0[object Object]     this._largura = novaLargura;
    } else[object Object]   throw new Error("Largura deve ser positiva");
    }
  }

  get altura()[object Object]
    return this._altura;
  }

  set altura(novaAltura)[object Object]    if (novaAltura >0[object Object]      this._altura = novaAltura;
    } else[object Object]   throw new Error("Altura deve ser positiva");
    }
  }

  // Getter calculado - área sempre atualizada
  get area()[object Object]
    return this._largura * this._altura;
  }

  // Getter calculado - perímetro sempre atualizado
  get perimetro() [object Object]  return 2* (this._largura + this._altura);
  }

  // Getter calculado - diagonal sempre atualizada
  get diagonal()[object Object]  return Math.sqrt(this._largura ** 2 + this._altura ** 2);
  }
}

const retangulo = new Retangulo(5);
console.log(retangulo.area); // 15console.log(retangulo.perimetro); // 16console.log(retangulo.diagonal); // 583..

retangulo.largura = 10console.log(retangulo.area); // 30 (atualizado automaticamente)
```

###302Lazy Loading com Getters
```javascript
class Usuario[object Object]  constructor(nome, email) [object Object] this._nome = nome;
    this._email = email;
    this._perfilCompleto = null; // Será carregado sob demanda
  }

  get nome()[object Object]
    return this._nome;
  }

  get email()[object Object]
    return this._email;
  }

  // Lazy loading - carrega dados apenas quando necessário
  get perfilCompleto()[object Object]    if (!this._perfilCompleto)[object Object]     // Simula carregamento de dados externos
      this._perfilCompleto = {
        nome: this._nome,
        email: this._email,
        dataCadastro: new Date(),
        ultimoAcesso: new Date(),
        preferencias: ['tecnologia', 'programação'],
        estatisticas: [object Object]
          posts:45,
          seguidores: 1234          seguindo: 567       }
      };
    }
    return this._perfilCompleto;
  }

  // Método para forçar recarregamento
  recarregarPerfil() [object Object]   this._perfilCompleto = null;
  }
}

const usuario = new Usuario(Thiago",thiago@email.com);// Perfil só é carregado quando acessado
console.log(usuario.perfilCompleto); // Carrega dados
console.log(usuario.perfilCompleto); // Usa dados em cache
```

## 4. Padrões Avançados

### 40.1 Getters com Cache Inteligente
```javascript
class Calculadora[object Object]  constructor()[object Object]
    this._cache = new Map();
    this._contadorCalculos = 0 }

  get contadorCalculos()[object Object]
    return this._contadorCalculos;
  }

  // Getter com cache para cálculos pesados
  get pi()[object Object]  if (!this._cache.has('pi))[object Object] // Simula cálculo complexo
      let pi =0;
      for (let i =0 i < 100000 i++) {
        pi += Math.pow(-1i) / (2 * i +1;
      }
      pi *= 4;
      this._cache.set('pi, pi);
      this._contadorCalculos++;
    }
    return this._cache.get('pi');
  }

  // Limpar cache
  limparCache()[object Object] this._cache.clear();
  }
}

const calc = new Calculadora();
console.log(calc.pi); // Calcula (demora)
console.log(calc.pi); // Usa cache (rápido)
console.log(calc.contadorCalculos); // 1
```

### 40.2 Setters com Transformação de Dados
```javascript
class Formulario[object Object]  constructor() [object Object] this._nome = ';
    this._email = ;    this._telefone = ';
  }

  get nome()[object Object]
    return this._nome;
  }

  set nome(valor) [object Object] // Normaliza nome (primeira letra maiúscula)
    this._nome = valor.trim().toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  }

  get email()[object Object]
    return this._email;
  }

  set email(valor)[object Object]// Valida e normaliza email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(valor)) {
      this._email = valor.toLowerCase().trim();
    } else[object Object]   throw new Error("Email inválido");
    }
  }

  get telefone()[object Object]
    return this._telefone;
  }

  set telefone(valor) {
    // Remove caracteres não numéricos e formata
    const numeros = valor.replace(/\D/g, );
    if (numeros.length >= 10 && numeros.length <= 11[object Object]
      this._telefone = numeros.replace(/(\d{2})(\d{4,5)(\d{4})/, ($1) $23    } else[object Object]   throw new Error(Telefone deve ter 10 ou11 dígitos");
    }
  }

  get dadosFormatados() {
    return [object Object]      nome: this._nome,
      email: this._email,
      telefone: this._telefone
    };
  }
}

const form = new Formulario();
form.nome = "  thiago matos ;
form.email =THIAGO@EMAIL.COM;
form.telefone = "11987654321

console.log(form.dadosFormatados);
// { nome: "Thiago Matos, email:thiago@email.com, telefone:(118765-4321 }
```

## 5ráticas e Considerações

### 50.1uando Usar Getters/Setters
```javascript
// ✅ Use quando precisar de:
// - Validação de dados
// - Transformação de dados
// - Controle de acesso
// - Cálculos sob demanda

// ❌ Evite quando:
// - Não há lógica adicional
// - Performance é crítica
// - Dados são imutáveis
```

### 50.2 Performance e Memória
```javascript
class ExemploPerformance[object Object]  constructor()[object Object]
    this._dados = new Array(1000.fill(0map((_, i) => i);
  }

  // ❌ Getter que recalcula sempre
  get media()[object Object]
    return this._dados.reduce((a, b) => a + b, 0) / this._dados.length;
  }

  // ✅ Getter com cache
  get mediaCache()[object Object]  if (!this._mediaCache) {
      this._mediaCache = this._dados.reduce((a, b) => a + b, 0) / this._dados.length;
    }
    return this._mediaCache;
  }

  // Método para invalidar cache
  adicionarDado(valor)[object Object]  this._dados.push(valor);
    this._mediaCache = null; // Invalida cache
  }
}
```

---

## 🧪 Exercício Prático: Sistema de Gerenciamento de Estoque

### Contexto
Você está desenvolvendo um sistema de gerenciamento de estoque para uma loja que precisa controlar produtos, categorias e movimentações com encapsulamento adequado.

### Objetivos do Exercício

**1. Criar classe Produto com encapsulamento:**
```javascript
class Produto[object Object]
  constructor(codigo, nome, preco, categoria) [object Object]    this._codigo = codigo;
    this._nome = nome;
    this._preco = preco;
    this._categoria = categoria;
    this._estoque =0
    this._dataCadastro = new Date();
  }

  // Implementar getters e setters com validações
  // - codigo: deve ser único e ter 6 dígitos
  // - nome: mínimo 3 caracteres, máximo100// - preco: sempre positivo
  // - categoria: deve ser uma das categorias válidas
  // - estoque: sempre não negativo
}
```

**2mplementar getters calculados:**
- `valorTotal`: preço × quantidade em estoque
- `statusEstoque`:Disponível,Baixo" (< 10), Esgotado" (= 0
- `idadeProduto`: dias desde o cadastro
- `precoFormatado`: preço formatado como moeda

**3. Criar classe Categoria com encapsulamento:**
- Propriedades: id, nome, descricao, taxaDesconto
- Validações: nome único, taxa entre 0-100- Getter calculado: `produtosDisponiveis`

**4. Sistema de movimentação de estoque:**
- Classe `Movimentacao` com data, tipo, quantidade, produto
- Validações: quantidade positiva, estoque suficiente
- Getters: `valorMovimentacao`, `descricaoCompleta`

**5. Cenário avançado:**
- Implementar sistema de alertas com getters
- Criar relatórios com dados calculados
- Demonstrar lazy loading para dados pesados

### Resultados Esperados
- Sistema completo de estoque com encapsulamento
- Validações robustas em todos os setters
- Getters calculados para diferentes cenários
- Demonstração de boas práticas de encapsulamento

### Dicas
- Use validações específicas para cada tipo de dado
- Implemente getters calculados para dados derivados
- Considere performance em getters complexos
- Use lazy loading para dados que não são sempre necessários

