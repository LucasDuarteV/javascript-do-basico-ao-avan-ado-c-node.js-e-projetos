const fs = require('fs')

fs.readFile('arquivo.txt' , 'utf8' , (erro,texto) =>{
    if(erro){
        throw erro
    } else{
        console.log(texto)
    }
})