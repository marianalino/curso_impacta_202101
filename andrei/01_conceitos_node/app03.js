var colecao = require('./colecoes');

// Pbtendo um subconjunto da lista de nomes, com base em um critério
var filtroNomes = colecao.nomes.filter(n => n.includes('ia'));

// for of: pega a lista/array e vai ler cada item do array
for (const nome of filtroNomes) {
    console.log('----------------')
    console.log(nome)
}
console.log(filtroNomes);
console.log("----FILTRO CURSOS CARGA HORARIA----")
console.log('----------------')
// Obtendo um subconjunto da lista de cursos, com base em um criterio

var filtroCursos = colecao.cursos.filter(c=> c.ch <= 20)
for (const curso of filtroCursos) {
    console.log("Nome: " + curso.nome)
    console.log("Carga horária: " + curso.ch)
    console.log("Periodo: " + curso.periodo)
    console.log('----------------')
}

console.log("----FILTRO CURSOS PERIODO----")
console.log('----------------')
var filtroCursos = colecao.cursos.filter(c=> c.period === "Noturno")
for (const curso of filtroCursos) {
    console.log("Nome: " + curso.nome)
    console.log("Carga horária: " + curso.ch)
    console.log("Periodo: " + curso.periodo)
    console.log('----------------')
}

console.log("----FILTRO CURSOS PERIODO E CARGA HORARIA----")
console.log('----------------')
var filtroCursos = colecao.cursos.filter(c=> (c.periodo.toLocaleLowerCase() === "noturno" && c.ch >= 20))
for (const curso of filtroCursos) {
    console.log("Nome: " + curso.nome)
    console.log("Carga horária: " + curso.ch)
    console.log("Periodo: " + curso.periodo)
    console.log('----------------')
}