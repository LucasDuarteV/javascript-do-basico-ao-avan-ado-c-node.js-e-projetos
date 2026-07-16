function soma(a , b){
    if(a === undefined || b === undefined){
        return "Essa função precisa ter os dois argumentos!"
    } else{
        return a + b
    }
}

console.log(soma(1 , 5))

function saudacao(nome , idade){
    if(idade === undefined){
        return "Olá " + nome
    } else{
        return "Olá " + nome + " você tem " + idade + " anos"
    }
}

console.log(saudacao("lucas"))