function verificaNumero(num){
    return new Promise((resolve, reject) => {
        if(num === 2){
            resolve("O número é 2");
        } else {
            reject(new Error("Falha!"));
        }
    });
}

verificaNumero(2)
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.log(erro.message));