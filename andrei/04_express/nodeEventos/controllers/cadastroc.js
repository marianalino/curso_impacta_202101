module.exports = function(app){
    var CadastroController ={
        novoUsuario: function(request, response){
            var nome = request.body.usuario.nome
            var senha = request.body.usuario.senha
            var confirma = request.body.usuario.confirma
        },
        novoEvento: function(request, response){
            var evento = request.body.evento
        }
    }

    return CadastroController
}