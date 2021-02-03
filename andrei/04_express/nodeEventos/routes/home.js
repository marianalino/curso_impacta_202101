module.exports = function(app){
    //validacao sessao do usuario
    var valida = require('./../middlewares/valida')
    //criamos uma variavel para referenciar nosso controller
    var homec = app.controllers.homec

    // pegamos o objeto de app e usaremos a requisicao GET para carregar uma view (assim que bater no '/' (a URL de entrada), vai executar o index qe, nesse caso, carrega uma view)
    app.get('/', homec.index)
    app.post('/login', homec.login)
    app.get('/logout', homec.logout)

    var eventosc = app.controllers.eventosc

    app.get('/menu', valida, eventosc.menu)

    app.get('/cadUsuario', valida, eventosc.cadastroUsuario)
    app.get('/cadEvento', valida, eventosc.cadastroEvento)
    app.get('/listaEventos', valida, eventosc.listaEventos)

    var cadastroc = app.controllers.cadastroc
    app.post('/novoUsuario', cadastroc.novoUsuario)
    app.post('/novoEvento', cadastroc.novoEvento)
}