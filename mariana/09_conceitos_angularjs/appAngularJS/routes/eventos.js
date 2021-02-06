module.exports = function(app) {
    // pegamos o controller de eventos, baseado na pasta e nome do arquivo
    var evento = app.controllers.eventosc;

    app.get('/', evento.index);
}