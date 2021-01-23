// Nesse arquivo escreveremos funções e objetos a serem exportados

function calcularSoma(x, y) {
    return x + y;
}

// Exportação com nome da função
exports.somar = calcularSoma;

// Exportação com função anônima
exports.multiplicar = function(x, y) {
    return x * y;
};

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
        ocupacao: 'Estagiário em desenvolvimento'
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
];

exports.verificaTamanho = function(x) {
    return x.length;
};

exports.executar = function(operacao) {
    return operacao('Impacta');
};

exports.verificaTamanhoAF = (x) => x.length;