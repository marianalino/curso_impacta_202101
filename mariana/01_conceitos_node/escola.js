var Escola = {
    nome: "Impacta Tecnologia",
    endereco: {
        logradouro: "Avenida Paulista",
        numero: 1009,
        cep: "01311-100"
    },
    cursos: [
        'Angular',
        "Docker e Kubernetes",
        "Typescript",
        "HTML 5",
        "SQL",
        "Dev Web com asp.Net Core",
        "Inteligência artificial"
    ],
    mostrarNomeAF: (nome) => {
        var texto = 'Nome da escola: ' + nome;
        return texto;
    },
    mostrarEndereco: function() {
        var texto =
            `Nome da escola: ${this.nome}
Endereço
    Logradouro: ${this.endereco.logradouro}
    Número: ${this.endereco.numero}
    CEP: ${this.endereco.cep}`;
        return texto;
    }
};

module.exports = Escola;