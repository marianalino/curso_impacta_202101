module.exports = function(app){
    var Usuario = app.models.usuarios
    var Evento = app.models.eventos

    var CadastroController ={
        novoUsuario: function(request, response){
            var nome = request.body.usuario.nome
            var senha = request.body.usuario.senha
            var confirma = request.body.usuario.confirma

            if((senha != confirma) || nome.trim().lenght ===0){
                response.redirect('/cadUsuario')
            } else{
                var usuario = {
                    nome: nome, // ou so botar "nome"; equivale, funciona
                    senha: senha
                }

                Usuario.create(usuario, function(erro, item){
                    if(erro){
                        console.log("Erro ao cadatrar o usuario: "+erro)
                        response.redirect('/cadUsuario')
                    } else{
                        console.log("Usuario adicionado: "+item)
                        response.redirect('/menu')
                    }
                })
            }
        },
        novoEvento: function(request, response){
            var evento = request.body.evento

            if(evento.descricao.trim().lenght === 0) {
                response.redirect('/cadEvento')
            } else{
                Evento.create(evento, function(error, item) {
                    if (error){
                        console.log("Error ao criar um evento: " + error)
                        response.redirect('/cadEvento')
                    }else{
                        console.log("Evento adicionado: " + item)
                        response.redirect('/listaEventos')
                    }
                })
            }
        }
    }

    return CadastroController
}