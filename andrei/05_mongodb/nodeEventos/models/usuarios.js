module.exports =function(app){
    var mongoose = require('mongoose')
    var Schema = mongoose.Schema

    var usuario = Schema({
        nome: {
            type: String,
            required: true,
            index:{
                unique: true /* util pra login via email */
            }
        },
        senha: {
            type: String,
            required: true
        }
    })

    return mongoose.model('usuarios', usuario)
    // usuarios é a 'tabela' e usuario é o modelo de estrutura de dados para criar um usuario
}