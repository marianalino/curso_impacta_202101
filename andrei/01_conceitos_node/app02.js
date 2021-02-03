var funcoes = require('./funcoes');

let n1 = 10;
let n2 = 20;

var soma = funcoes.somar(n1, n2);
console.log('Minha soma deu ' + soma);

console.log('--------');
var multiplica = funcoes.multiplicar(n1,n2)
console.log('Minha multiplicacao deu ' + multiplica)

console.log('--------');

var listaAlunos = funcoes.alunos;
console.log('Total de alunos: '+ listaAlunos.length);

for (let index = 0; index < listaAlunos.length; index++) {
    console.log('--------');
    console.log('Posicao: '+index)
    console.log(listaAlunos[index]);

}

for (let index = 0; index < listaAlunos.length; index++) {
    let aluno = listaAlunos[index]
    console.log('--------');
    console.log('Nome: '+ aluno.nome)
    console.log('Idade: '+ aluno.idade)
    console.log('Ocupação: '+ aluno.ocupacao)
}

console.log('--------');
console.log('Usando a funçao para verificar o tamanho de uma string')
console.log('String: ' + funcoes.verificaTamanho('Impacta'))

console.log('--------');
console.log('Usando a funçao para verificar o tamanho de um numero')
console.log('String: ' + funcoes.verificaTamanho(10))

const numeros = ['1', 2, 3, '4', 5]
console.log('--------');
console.log('Usando a funçao para verificar o tamanho de uma lista')
console.log('String: ' + funcoes.verificaTamanho(numeros))

console.log('--------');
var retorno = funcoes.verificaTamanho(10)
if(retorno !== undefined){
    console.log("Nao é undefined")
} else{
    console.error("Resultado inesperado")
}

console.log('--------');
let resposta = funcoes.executar(function(texto){
    return texto.length
})
console.log('Quantidade de caracteres callback: ' + resposta)