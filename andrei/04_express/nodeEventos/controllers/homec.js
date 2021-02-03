module.exports = function(app){ // tem o app como parametro da function para poder acessar os objetos do app
    var HomeController = {
        index: function(request, response){
            response.render('home/inicio')
        },
        //index esta sendo uma action dentro desse controller
        login: function(request,response){
            // obtendo as informacoes dos campos de entrada
            // utilizaremos o request para manipular o bodyParser
            var nome = request.body.usuario.nome
            var senha = request.body.usuario.senha

            //simulacao de login
            if(nome === 'admin' && senha === 'admin'){
                //armazenar as infos do usuario
                var user = request.body.usuario
                request.session.usuarioSession = user
                //usuarioSession é o nome da minha sessao

                response.redirect('menu')
            }else{
                response.redirect('/')
            }
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