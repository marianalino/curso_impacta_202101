module.exports = function(app) {
    // Validação sessão do usuário
    var valida = require('./../middlewares/valida');

    // Criamos uma variável para referenciar nosso controller
    var homec = app.controllers.homec;

    // Pegamos o objeto de app e usaremos a requisição GET para carregar uma view
    // Inicialmente declaramos '/' que é a URL de entrada
    app.get('/', homec.index);
    app.post('/login', homec.login);
    app.get('/logout', homec.logout);

    var eventosc = app.controllers.eventosc;

    app.get('/menu', valida, eventosc.menu);

    app.get('/cadUsuario', valida, eventosc.cadastroUsuario);
    app.get('/cadEvento', valida, eventosc.cadastroEvento);
    app.get('/listaEventos', valida, eventosc.listaEventos);

    var cadastroc = app.controllers.cadastroc;
    app.post('/novoUsuario', cadastroc.novoUsuario);
    app.post('/novoEvento', cadastroc.novoEvento);
}