function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O paramentro nome precisa ser string!")
    }

    console.log(`Olá, ${nome}`)
}

saudacao('Lucas')
saudacao(10)
console.log("teste")