module.exports = function(app){
    var Evento = app.models.eventos
    var moment = require('moment')
    var EventosController = {
        menu: function(request,response){
            var usuario = request.session.usuarioSession
            var params = { usuarioParams: usuario}

            response.render('eventos/menu', params)
        },
        cadastroUsuario: function(request, response) {
            var usuario = request.session.usuarioSession
            var params = { usuarioParams: usuario}

            response.render('eventos/cadUsuario', params)
        },
        cadastroEvento: function(request, response) {
            var usuario = request.session.usuarioSession
            var params = { usuarioParams: usuario}

            response.render('eventos/cadEvento', params)
        },
        listaEventos: function(request, response) {
            Evento.find(function(erro, eventos){
                if(erro){
                    response.redirect('/menu')
                }else{
                    var usuario = request.session.usuarioSession
                    var params = {
                        usuarioParams: usuario,
                        eventosParams: eventos,
                        momentParams: moment
                    }
                    response.render('eventos/listaEventos', params)
                }
            })
        },
    }
    return EventosController
}