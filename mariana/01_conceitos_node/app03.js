var colecao = require('./colecoes');

// Obtendo um subconjunto da lista de nomes, com base em um critério
var filtroNomes = colecao.nomes.filter(n => n.includes('e'));

console.log("--- FILTRO NOMES ---");
// pega a lista/array e ele vai ler cada item do array
console.log('------------------');
for (const nome of filtroNomes) {
    console.log(nome);
    console.log('------------------');
}

console.log("--- FILTRO CURSOS CARGA HORÁRIA ---");
console.log('------------------');
// Obtendo um subconjunto da lista de cursos, com base em um critério
var filtroCursos = colecao.cursos.filter(c => c.ch <= 20);
for (const curso of filtroCursos) {
    console.log("Nome: " + curso.nome);
    console.log("Carga Horária: " + curso.ch);
    console.log("Período: " + curso.periodo);
    console.log('------------------');
}

console.log("--- FILTRO CURSOS PERÍODO ---");
console.log('------------------');
var filtroCursos = colecao.cursos.filter(c => c.periodo === "Noturno");
for (const curso of filtroCursos) {
    console.log("Nome: " + curso.nome);
    console.log("Carga Horária: " + curso.ch);
    console.log("Período: " + curso.periodo);
    console.log('------------------');
}

console.log("--- FILTRO CURSOS PERÍODO E CARGA HORÁRIA ---");
console.log('------------------');
var filtroCursos = colecao.cursos.filter(c => (c.periodo.toLowerCase() === "noturno" && c.ch >= 20));
for (const curso of filtroCursos) {
    console.log("Nome: " + curso.nome);
    console.log("Carga Horária: " + curso.ch);
    console.log("Período: " + curso.periodo);
    console.log('------------------');
}