module.exports = function(app) {
    var HomeController = {
        index: function(request, response) {
            response.render('home/inicio');
        },
        login: function(request, response) {
            // obtendo as informações dos campos de entrada
            // utilizaremos o request para manipular o bodyParser
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            // simulação de login
            if (nome === 'admin' && senha === 'admin') {
                // vamos armazenar as infos do usuário
                var user = request.body.usuario;
                request.session.usuarioSession = user;
                // usuarioSession é o nome da minha sessão

                response.redirect('menu');
            } else {
                response.redirect('/');
            }
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