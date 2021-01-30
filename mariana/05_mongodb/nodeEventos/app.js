// Declarado a importação do express para o projeto
// Não precisa a variável ter o mesmo nome, mas como boa prática mantemos o nome da variável como o do módulo importado
var express = require('express');

// Instanciamos o express como um objeto para ser usado e rodar a aplicação, no caso o 'app'
// Essa variável executará o que significa o próprio módulo do express, e então abaixo configuraremos a aplicação
app = express();
var mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost:27017/eventos_sabado');

mongoose.connection.on('connected', function() {
	console.log('Conexão estabelecida');
});

mongoose.connection.on('error', function(error) {
	console.log("Erro de conexão: " + error);
});

mongoose.connection.on('disconnected', function() {
	console.log('Conexão finalizada');
});

var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

// Na configuração, existe uma constante 'views' que conseguimos configurar o caminho de onde os arquivos de views (ejs) deverão ficar
// Isso significa que as nossas views não podem ficar em qualquer lugar, pois caso coloquem em outra pasta não serão lidos
// As views precisam ficar no caminho declarado abaixo para serem compreendidas pelo projeto, então usamos o __dirname para declarar a pasta do projeto e concatenamos com 'view' aonde serão colocados os arquivos
app.set('views', __dirname + '/views');
app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

// EJS é o mecanismo de execução de views, que utilizaremos para configurar o tipo de arquivo que será lido
// 'view engine' também não é criado, é uma constante definida para configuração
app.set('view engine', 'ejs');

// A pasta public será usada como pasta raiz para arquivos estáticos como imagens e CSS
// Essa pasta será usada para arquivos que são somente 'leitura', eles não executam oficialmente nada
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('nodeEventos')); // pega qual projeto deverá armazenar cookies
app.use(expressSession()); // possibilita armazenamento de sessão que utilizará o cookie para salvar dados
app.use(bodyParser.json()); // lida com os dados da tela para tratar as informações
app.use(bodyParser.urlencoded({ extended: true })); // trata os caracteres especiais

load('models').then('controllers').then('routes').into(app);

// O listen usamos direto o do express, que encapsula o http para rodar o servidor e nossa aplicação funcionar
app.listen(3001, function() {
	console.log("Aplicação rodando!");
});