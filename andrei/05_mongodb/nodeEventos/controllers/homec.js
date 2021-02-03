module.exports = function(app){ // tem o app como parametro da function para poder acessar os objetos do app
    var Usuario = app.models.usuarios
    var HomeController = {
        //var Usuario = app.models.usuarios

        index: function(request, response){
            response.render('home/inicio')
        },
        //index esta sendo uma action dentro desse controller
        login: function(request,response){
            // obtendo as informacoes dos campos de entrada
            // utilizaremos o request para manipular o bodyParser
            var nome = request.body.usuario.nome
            var senha = request.body.usuario.senha
            var query = { 'nome': nome, 'senha': senha}

            Usuario.findOne(query).exec(function(erro, usuario){    //como é unico, basta encontrar um
                if(erro){
                    console.log("Erro ao tentar realizar o login: "+erro)
                    response.redirect('/')
                }else{
                    request.session.usuarioSession = usuario
                    console.log("usuario encontrada"+usuario)
                    response.redirect('/menu')
                }
            })

            /*
            Diferenca entre render e redirect
                Render: renderiza uma view
                Redirect: após uma avaliacao, por exemplo, recebe como parametro uma rota, é como se estivessemos acionando no browser uma rota direto
            */
        },
        logout: function(request,response){
            request.session.destroy()
            response.redirect('/')
        }
    }

    return HomeController
}