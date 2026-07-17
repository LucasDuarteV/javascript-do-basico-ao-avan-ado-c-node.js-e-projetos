let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionado = {
    tetoSolar: true,
    arCondicionado: true,
}

Object.assign(carro,adicionado)

console.log(carro)