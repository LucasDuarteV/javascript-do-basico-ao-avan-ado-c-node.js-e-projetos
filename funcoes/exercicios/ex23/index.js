function stringLimite(limite){
    if(limite.length > 10){
        return "Texto muito longo!"
    }

    return "Texto dentro do limite!"
}

console.log(stringLimite("lucas"))