/*
Declarada a importacao o express para o projeto
Nao precisa a variavel ter o mesmo nome, mas como boa prática, mantemos o nome da variavel como o do modulo importado
*/

var express = require('express')

/*
Instanciamo o express como um objeto para ser usado e rodar a aplicacao, no caso o 'app'
Essa variavel executara o que significa o próprio módulo do express, e ntao abaixo configuraremos  a aplicacao
*/

app =express()

var load = require('express-load')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')

/*
Na configuracao, existe uma constante 'views' que conseguimos configurar o caminho de onde os arequivos de views (ejs) deverao ficar
Isso significa que as nossas views nao podem fiar em qualquer lugar, pois caso coloquem em outra pasta, nao serao lidos

As viewsx precisam ficar no caminho declarado abaixo para sere compreendidas pelo projeto, entaon usamos o __dirname para declarar a pasta do projeto e concatenaos com 'view' onde serao colocados os arquivos
*/
app.set('views', __dirname + '/views')
app.set('models', __dirname + '/models')
app.set('controllers', __dirname + '/controllers')
/*
EJS é o mecanismo de execucao de views, que utilizaremos para configurar o tipo de arquivo que será lido

'view engine' tambem nao é criado, é uma constante definida para configuração
*/

app.set('view engine', 'ejs')

/*
A pasta public será usada como pasta raiz para arquivos estáticos como imagens e CSS
Essa pasta srerá usada para arquivos que sao somente 'leitura', eles nao executam oficialmente nada
*/

app.use(express.static(__dirname + '/public'))
app.use(cookieParser('nodeEventos'))  // determina o projeto que vai armazenar cookies
app.use(expressSession()) // salvar sessoes; possibilita armazenameto de sessao que utilizara o cookie para salvar dados
app.use(bodyParser.json())  // lidar com os dados em json; lida com os dados da tela para tratar as informacoes
app.use(bodyParser.urlencoded({extended: true}))  // tratar caracteres especiais

load('models').then('controllers').then('routes').into(app)
//colocamos nessa ordem "contraria" para que, qdo a aplicacao carregar, o resto ja esteja disponivel
/*
O listen usamos direto o do exress, queencapsula o http para rodar o servidor e nossa apliucacao funcionar
*/
app.listen(3001, function(){
  console.log("Aplciacao rodando!")
})