function multiplicarNumeros(x,y,z){
    return x * y * z
}

console.log(multiplicarNumeros(5 , 1 , 1))

const mult = multiplicarNumeros(2 , 2 , 2)
console.log(mult)

function podeDirigir(idade , cnh){
    if(idade >= 18 && cnh == true){
        return 'Pode dirigir!'
    } else{
        return 'Não pode dirigir!'
    }
}

console.log(podeDirigir(20 , true))