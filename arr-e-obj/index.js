let pessoa = 
{
    "nome": "Lucas",
    "idade": 22,
    "profissao": "Programador",
    "hobbies": ["Video game" , "Leitura" , "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON.hobbies[2])