// ========================================
// EXERCÍCIO: Módulos ES6
// ========================================

/*
OBJETIVO: Implementar um sistema modular usando ES6 Modules

DESCRIÇÃO:
Você deve criar um sistema de gerenciamento de biblioteca usando módulos ES6.
O sistema deve incluir:
1. Módulos com exportações nomeadas e default
2. Importações de diferentes tipos
3. Organização de código em módulos
4. Reutilização de código entre módulos

REQUISITOS:
- Implementar todos os módulos marcados com TODO
- Usar export/import adequadamente
- Organizar código em módulos lógicos
- Seguir as especificações de cada módulo
*/

// ========================================
// ESTRUTURA DE MÓDULOS
// ========================================

/*
Você deve criar os seguintes arquivos:

1. utils/validacao.js - Funções de validação
2. models/Livro.js - Classe Livro
3. models/Usuario.js - Classe Usuario
4. services/BibliotecaService.js - Serviço de biblioteca
5. main.js - Arquivo principal

Cada arquivo deve ser implementado conforme as especificações abaixo.
*/

// ========================================
// MÓDULO 1: utils/validacao.js
// ========================================

/*
TODO: Implementar módulo de validação

EXPORTAÇÕES NOMEADAS:
- validarEmail(email) - Valida formato de email
- validarCPF(cpf) - Valida formato de CPF
- validarISBN(isbn) - Valida formato de ISBN
- validarAno(ano) - Valida ano de publicação

EXPORTAÇÃO DEFAULT:
- classe Validador com métodos estáticos
*/

// ========================================
// MÓDULO 2: models/Livro.js
// ========================================

/*
TODO: Implementar classe Livro

PROPRIEDADES:
- id, titulo, autor, isbn, ano, categoria, disponivel

MÉTODOS:
- emprestar() - Marca livro como emprestado
- devolver() - Marca livro como disponível
- getInfo() - Retorna informações formatadas

EXPORTAÇÃO:
- Classe Livro como exportação default
- Constantes de categoria como exportações nomeadas
*/

// ========================================
// MÓDULO 3: models/Usuario.js
// ========================================

/*
TODO: Implementar classe Usuario

PROPRIEDADES:
- id, nome, email, cpf, livrosEmprestados

MÉTODOS:
- emprestarLivro(livro) - Adiciona livro à lista de emprestados
- devolverLivro(livro) - Remove livro da lista de emprestados
- getInfo() - Retorna informações formatadas

EXPORTAÇÃO:
- Classe Usuario como exportação default
- Tipos de usuário como exportações nomeadas
*/

// ========================================
// MÓDULO 4: services/BibliotecaService.js
// ========================================

/*
TODO: Implementar serviço de biblioteca

FUNCIONALIDADES:
- Cadastrar livros e usuários
- Emprestar e devolver livros
- Buscar livros por critérios
- Gerar relatórios

EXPORTAÇÃO:
- Classe BibliotecaService como exportação default
- Funções auxiliares como exportações nomeadas
*/

// ========================================
// MÓDULO 5: main.js
// ========================================

/*
TODO: Implementar arquivo principal

FUNCIONALIDADES:
- Importar todos os módulos necessários
- Criar instância do serviço de biblioteca
- Demonstrar uso dos módulos
- Executar testes de funcionalidade

IMPORTAÇÕES:
- Importar classes e funções dos outros módulos
- Usar importações nomeadas e default
*/

// ========================================
// EXEMPLO DE IMPLEMENTAÇÃO
// ========================================

// Este é um exemplo de como implementar um dos módulos:

/*
// utils/validacao.js
export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCPF(cpf) {
  // Remove caracteres não numéricos
  const cpfLimpo = cpf.replace(/\D/g, '');
  
  // Verifica se tem 11 dígitos
  if (cpfLimpo.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;
  
  // Validação dos dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.charAt(9))) return false;
  
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.charAt(10))) return false;
  
  return true;
}

export function validarISBN(isbn) {
  // Remove hífens e espaços
  const isbnLimpo = isbn.replace(/[-\s]/g, '');
  
  // ISBN-10 ou ISBN-13
  if (isbnLimpo.length !== 10 && isbnLimpo.length !== 13) return false;
  
  return true; // Implementação simplificada
}

export function validarAno(ano) {
  const anoAtual = new Date().getFullYear();
  return ano >= 1900 && ano <= anoAtual;
}

export default class Validador {
  static validarEmail(email) {
    return validarEmail(email);
  }
  
  static validarCPF(cpf) {
    return validarCPF(cpf);
  }
  
  static validarISBN(isbn) {
    return validarISBN(isbn);
  }
  
  static validarAno(ano) {
    return validarAno(ano);
  }
}
*/

// ========================================
// INSTRUÇÕES DE IMPLEMENTAÇÃO
// ========================================

/*
Para implementar este exercício:

1. Crie os arquivos nas pastas correspondentes:
   - utils/validacao.js
   - models/Livro.js
   - models/Usuario.js
   - services/BibliotecaService.js
   - main.js

2. Implemente cada módulo conforme as especificações

3. Use export/import adequadamente:
   - export function/class para exportações nomeadas
   - export default para exportação padrão
   - import { nome } from './caminho' para importações nomeadas
   - import Nome from './caminho' para importação default

4. Teste a funcionalidade executando main.js

5. Verifique se todos os módulos funcionam corretamente juntos
*/

// ========================================
// TESTES SUGERIDOS
// ========================================

/*
Testes que você deve implementar no main.js:

1. Criar livros e usuários
2. Emprestar e devolver livros
3. Validar dados usando o módulo de validação
4. Gerar relatórios da biblioteca
5. Testar importações e exportações

Exemplo de teste:
*/

/*
// main.js
import { validarEmail, validarCPF } from './utils/validacao.js';
import Livro from './models/Livro.js';
import Usuario from './models/Usuario.js';
import BibliotecaService from './services/BibliotecaService.js';

// Testes
console.log('Testando validações:');
console.log('Email válido:', validarEmail('teste@email.com'));
console.log('CPF válido:', validarCPF('123.456.789-09'));

console.log('\nTestando biblioteca:');
const biblioteca = new BibliotecaService();

// Adicionar livros
const livro1 = new Livro(1, 'JavaScript Avançado', 'João Silva', '978-1234567890', 2023, 'Tecnologia');
const livro2 = new Livro(2, 'Python Básico', 'Maria Santos', '978-0987654321', 2022, 'Tecnologia');

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

// Adicionar usuário
const usuario = new Usuario(1, 'Pedro Alves', 'pedro@email.com', '123.456.789-09');
biblioteca.adicionarUsuario(usuario);

// Emprestar livro
biblioteca.emprestarLivro(1, 1);
console.log('Livro emprestado:', livro1.disponivel);

// Gerar relatório
const relatorio = biblioteca.gerarRelatorio();
console.log('Relatório:', relatorio);
*/ 