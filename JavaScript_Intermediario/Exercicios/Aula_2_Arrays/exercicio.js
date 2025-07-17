// Exercício Aula 2: Métodos de Arrays

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 9 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
const nomesAprovados = aprovados.map(aluno => aluno.nome);
const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);

console.log("Aprovados:", nomesAprovados);
console.log("Soma das notas:", somaNotas); 