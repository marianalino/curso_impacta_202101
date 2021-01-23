var http = require('http');
var fs = require('fs');
var url = require('url');

// função createServer é do módulo http que recebe uma função de callback que por sua vez tem 2 parâmetros
var server = http.createServer(function(request, response) {
    // readFile tem 2 parâmetros
    //  1 - o arquivo a ser lido, que iremos criar (html), e o navegador irá interpretar
    //  2 - é opcional, mas funciona como callback que é o que será executado conforme o arquivo for lido e com o que faremos com o arquivo
    //      No caso do callback, ele tem 2 parâmetros
    //          1 - possivel erro
    //          2 - conteudo da página/arquivo html
    //  O file system (fs) lê o arquivo e armazena
    //  O parametro da função que pega o conteudo, exibe para o usuário final

    // Vamos usar o request para pegar informações da URL
    var url_params = url.parse(request.url);
    // Vamos pegar o nome do caminho do arquivo e salvar na variável caminho para usar dinamicamente no readFile
    var caminho = url_params.pathname;
    // constante __dirname: retornar aonde está sendo executado o código
    fs.readFile(__dirname + caminho, function(erro, conteudo) {
        // se houver erro na leitura do arquivo mencionado
        if (erro) {
            // nesse cenário, vamos tratar um cabeçalho para exibir o erro de não encontrado como resposta do servidor
            // a escrita que usaremos abaixo tem que ser exatamente como está escrito, pois o servidor depende da escrita para compreender o cabeçalho
            response.writeHead(404, { "Content-Type": "text/html" });
            response.write('<h1>Ooops... Página não encontrada!</h1>');
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(conteudo);
        }
        response.end(); // finaliza a tratativa da resposta
    });
});

server.listen(3000, function() {
    console.log('O meu servidor está no ar!');
});