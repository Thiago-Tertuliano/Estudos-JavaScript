🎓 JavaScript Avançado – Aula 14
🔹 Tema: CRUD Completo em Memória (Create, Read, Update, Delete)
1. O que é CRUD?
CRUD são as operações básicas para manipular dados:

Create: criar novo dado

Read: ler dados existentes

Update: atualizar dados

Delete: apagar dados

2. Exemplo simples com array de objetos
Vamos criar um sistema básico de gerenciamento de tarefas:

js
Copy
Edit
let tarefas = [];

// Create
function criarTarefa(nome) {
  tarefas.push({ id: Date.now(), nome, feita: false });
}

// Read
function listarTarefas() {
  return tarefas;
}

// Update
function atualizarTarefa(id, novaInfo) {
  tarefas = tarefas.map(tarefa =>
    tarefa.id === id ? { ...tarefa, ...novaInfo } : tarefa
  );
}

// Delete
function deletarTarefa(id) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
}
3. Testando
js
Copy
Edit
criarTarefa("Estudar JS");
criarTarefa("Fazer almoço");
console.log(listarTarefas());

atualizarTarefa(tarefas[0].id, { feita: true });
console.log(listarTarefas());

deletarTarefa(tarefas[1].id);
console.log(listarTarefas());
4. Considerações
Aqui o “banco” é um array em memória, que será perdido ao reiniciar o programa.

Em apps reais, essa lógica vai conversar com APIs ou bancos de dados.

Você pode melhorar adicionando validações, ordenação, etc.

🧪 Exercício
Implemente função para marcar todas as tarefas como feitas.

Implemente busca por nome da tarefa (ex: retorna todas que contenham uma palavra).

Crie função para apagar todas as tarefas feitas.