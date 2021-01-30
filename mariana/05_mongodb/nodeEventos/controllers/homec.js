module.exports = function(app) {
    var Usuario = app.models.usuarios;

    var HomeController = {
        index: function(request, response) {
            response.render('home/inicio');
        },
        login: function(request, response) {
            // obtendo as informações dos campos de entrada
            // utilizaremos o request para manipular o bodyParser
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var query = { 'nome': nome, 'senha': senha };

            Usuario.findOne(query).exec(function(erro, usuario) {
                if (erro) {
                    console.log("Erro ao tentar realizar o login: " + erro);
                    response.redirect('/');
                } else {
                    request.session.usuarioSession = usuario;
                    response.redirect('/menu');
                }
            });

            // Diferença entre render e redirect
            // Render: renderiza uma view
            // Redirect: após uma avaliação, por exemplo, recebe como parâmetro uma rota, é como se estivessemos acionando no browser uma rota direto
        },
        logout: function(request, response) {
            request.session.destroy();
            response.redirect('/');
        }
    };

    return HomeController;
}