var fetch = require('node-fetch');

// url api produtos json-server mockado
var urlProdutos = "http://localhost:3000/produtos";

// url via CEP com CEP da Impacta
var urlCEP = "http://viacep.com.br/ws/01311100/json/";

var produtos = {};
var endereco = {};

// o comando fetch passa como parâmetro uma URL da qual criará a promessa de retorno de informação, e para captar essa promessa de retorno, usamos o then com um callback e retornamos nesse then o response
fetch(urlProdutos).then(response => {
    var x = response.json();
    //console.log(x);
    return x;
}).then(saida => {
    produtos = saida;
    console.log(produtos);
});

fetch(urlCEP).then(response => {
    var x = response.json();
    //console.log(x);
    return x;
}).then(saida => {
    endereco = saida;
    console.log(endereco);
});

console.log("Fim da requisição!");