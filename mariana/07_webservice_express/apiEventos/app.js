var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	// vamos colocar quem são as origens permitidas para acessar esse webservice
	// se quiser colocar que todos (qualquer um) possa ter acesso, colocamos no segundo valor '*'
	// se quiser deixar restrito, podemos colocar os domínios que iremos permitir separados por vírgula - exemplo: impacta.com, fit.com, impacta.com.br, ...

	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// essa configuração validará os tipos de cabeçalhos que são permitidos na requisição

	response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	// validamos quais tipos de métodos permitimos que sejam feitos, por exemplo, podemos permitir somente leitura/consulta que será via GET, não permitindo assim alterações, por exemplo

	// por ultimo, colocamos o next para seguir, se não a função não continua
	next();
});

global.db = mongoose.connect('mongodb://localhost:27017/eventos_sabado', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

load('models').into(app);

var Evento = app.models.eventos;

// apenas uma mensagem para o usuário para aparecer no navegador
app.get('/', function(request, response) {
	response.send("Webservice no ar.");
});

// listar todos os eventos
app.get('/eventos', function(request, response) {
	Evento.find(function(error, eventos) {
		if (error) {
			response.json(error);
		} else {
			response.json(eventos);
		}
	});
});

// pegar somente 1 evento pelo ID
app.get('/eventos/:id', function(request, response) {
	var id = request.params.id;

	Evento.findById(id, function(error, evento) {
		if (error) {
			response.json(error);
		} else {
			response.json(evento);
		}
	});
});

// criar novo evento
app.post('/eventos', function(request, response) {
	// criar a estrutura do evento baseado nos dados esperados no model de eventos
	// essa estrutura receberá os dados pelo request.body como na aula de banco de dados
	var evento = {
		"descricao": request.body.descricao,
		"data": request.body.data,
		"preco": request.body.preco
	};

	Evento.create(evento, function(error, evento) {
		if (error) {
			response.json(error);
		} else {
			response.json(evento);
		}
	});
});

// atualizar um evento
app.put('/eventos/:id', function(request, response) {
	var id = request.params.id;

	Evento.findById(id, function(error, evento) {
		if (error) {
			response.json(error);
		} else {
			// procede com a atualização do evento encontrado
			evento.descricao = request.body.descricao;
			evento.data = request.body.data;
			evento.preco = request.body.preco;

			evento.save(function(error, eventoAtualizado) {
				if (error) {
					response.json(error);
				} else {
					response.json(eventoAtualizado);
				}
			});
		}
	});
});

// excluir um evento
app.delete('/eventos/:id', function(request, response) {
	var id = request.params.id;

	Evento.findById(id, function(error, evento) {
		if (error) {
			response.json(error);
		} else {
			var descricao = evento.descricao;
			Evento.remove(evento, function(error, eventoApagado) {
				if (error) {
					response.json(error);
				} else {
					// response.send("Evento " + descricao + " removido!");
					response.json(eventoApagado);
				}
			});
		}
	});
});

app.listen(3200, function() {
	console.log("API funcionando!");
});