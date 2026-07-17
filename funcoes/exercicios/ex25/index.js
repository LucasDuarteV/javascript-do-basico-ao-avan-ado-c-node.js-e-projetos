function parEImpar(number){
    let numerosPares = []
    for(let i = number; i >= 0; i--){
        console.log(i)
        if(i % 2 === 0){
            numerosPares.push(i)
        }
    }
    return numerosPares
}

console.log(parEImpar(10))