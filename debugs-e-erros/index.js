function checarNumero(num){
    let number = Number(num)
    if(Number.isNaN(number)){
        console.log("Por favor passe um número!")
    } else{
        return number
    }
}

checarNumero(5)
checarNumero('Lu')