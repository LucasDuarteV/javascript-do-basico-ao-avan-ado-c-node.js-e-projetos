const fs = require('fs')

fs.readFile('arquivo.txt' , 'utf8' , (erro,texto) =>{
    if(erro){
        throw erro
    } else{
        console.log(texto)
    }
})

const { writeFile } = require('fs')

writeFile('arquivo.txt' , 'Olá, Mundo!' , (erro => {
    if(erro){
        throw erro
    } else{
        console.log('Arquivo criado com sucesso!')
    }
}))