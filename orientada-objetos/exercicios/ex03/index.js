class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set atualizaRua(rua){
        this.rua = rua
    }

    set atualizaBairro(bairro){
        this.bairro = bairro
    }

    set atualizaCidade(cidade){
        this.cidade = cidade
    }

    set atualizaEstado(estado){
        this.estado = estado
    }
}


let endereco = new Endereco(
    "Rua A",
    "Centro",
    "São Paulo",
    "SP"
);

console.log(endereco)

endereco.atualizaRua = 'Nova rua'
endereco.atualizaBairro = 'Novo bairro'
endereco.atualizaCidade = "Nova cidade"
endereco.atualizaEstado = "Novo estado"

console.log(endereco)