// Nesse arquivo, escreveremos funcoes e objetos a serem exportados

function calcularSoma(x,y){
    return x+y;
}

// Exportacoa com nome da funcao
exports.somar = calcularSoma;

// Exportacao com funcao anonima
exports.multiplicar = function(x,y){
    return x*y
}

exports.alunos = [
    {
        nome: 'Andrei',
        idade: 26,
        ocupacao: 'Estudante'
    },
    {
        nome: 'Bru',
        idade: 30,
        ocupacao: 'Dev'
    },
    {
        nome: 'Caio',
        idade: 20,
        ocupacao: 'Assistente Administrativo'
    },
    {
        nome: 'Mariana',
        idade: 30,
        ocupacao: 'Faz tudo'
    },
    {
        nome: 'Pedro',
        idade: 21,
        ocupacao: 'Estagiario em desenvolvimento'
    },
    {
        nome: 'Thiago',
        idade: 30,
        ocupacao: 'Dev'
    },
    {
        nome: 'Valdson',
        idade: 41,
        ocupacao: 'Desenvolvedor'
    }
]

exports.verificaTamanho = function(x){
    return x.length
}

exports.executar = function(operacao){
    return operacao('Impacta')
}