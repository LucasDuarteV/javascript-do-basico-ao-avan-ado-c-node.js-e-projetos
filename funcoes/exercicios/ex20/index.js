function maiorIdade(idade){
    if(idade < 18){
        return "Você não pode entrar na autoescola, menor de idade!"
    }

    return "Você pode entrar na autoescola, maior de idade!"
}

console.log(maiorIdade(20))