const idade = 22
const cnh = false

if(idade >= 18 && cnh == true){
    console.log('Habilitado para dirigir !')
}else if(idade >= 18 && cnh == false){
    console.log('Não pode dirigir, mas pode tirar cnh!')
}
else{
    console.log('Não Habilitado !')
}