var http = require('http')
var fs = require('fs')     // filesystem
var url = require('url')

// funcao createServer é do modulo http que recebe uma funcao de callback, que por sua vez, tem 2 parametros
var server = http.createServer(function(request, response){
    /*
    readFile tem 2 parametros
          1) o arquivo a ser lido, que iremos criar (html), e o navegador ira interpretaar
          2) é opcional, mas funciona como callback que é o que sera executado conforme o arquivo for lido e com o que faremos com o arquivo
              No caso do callback, ele tem 2 parametros

                    1- possivel erro
                    2- conteudo da pagina/ arquivo html
        O file system (fs) lê o arquivo e armazena
        O parametro da funcao que pegq o conteudo, exibe para o usuario final
    */

    // vamos usar o resquest para pegar informacoes da URL
    var url_params = url.parse(request.url)
    // Vamos pegar o nome do caminho do arquivo e salvar na variavel caminho para usar dinamicamete no readFile
    var caminho = url_params.pathname
    // constante __dirname : vai retornar onde esta sendo executado o codigo
    fs.readFile(__dirname + caminho, function(erro, conteudo){      // com esse + caminho, precisa colocar o resto do camnho (localhost:3000/index.html)
        // se houver erro na leitura do arquivo mencionado
        if(erro){
            //nesse cenario, vamos tratar um cabecalho para exibir o erro de nao encontrado como resposta do servidor
            // a escrita que usaremos abaixo tem que ser exatamente como está escrito,pois o servidor depende da escrita para compreender o cabeçalho
            response.writeHead(404,{ "Content-Type": "text/html"})
            response.write('<h1>Oooops... Pagina nao encontrada!</h1>')
        }else{
            response.writeHead(200, { "Content-Type": "text/html"})
            response.write(conteudo)
        }
        response.end()  // finaliza a tratativa da resposta
    })
})
// dando erro, o node trava a execucao, e tem que executar de novo para abrir o server
// da pra testar abrindo o browser no localhost:3000
server.listen(3000, function(){
    console.log('O meu servidor está no ar!')
})