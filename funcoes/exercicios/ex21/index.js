function dadoPassado(dado){
    if(typeof(dado) === 'string'){
        return "O dado passado é uma String!"
    }

    if(typeof(dado) === 'number'){
        return "O dado passado é um Number"
    }

    if(typeof(dado) === 'boolean'){
        return "O dado passado é  um Boolean!"
    }

    return "Dado passado não atendido a Number, Boolean ou String!"
}

console.log(dadoPassado(false))