// const é um valor constante, que uma vez declarado, não pode mais ser alterado
const cnumPagination = 10;
const cnome = "Mariana";
const cidade = 30;

// var é uma variável que atribui um valor independente do seu tipo e que é acessado por todo o arquivo independente de onde a variável exista
var vaula = 1;
if (vaula === 1) {
    vaula = 2;
    var vhora = '12h';
}
vhora = '13h';

// let é uma variável que atribui um valor independente do seu tipo, mas que só é acessado dentro do seu contexto/escopo
let laula = 1;
if (laula === 1) {
    laula = 2;
    let lhora = '12h';
    lhora = '13h';
}

let nome = "Mariana";
let idade = 30;
let curso = 'Node e Angular';

console.log('Meu nome é ' + nome);