let promiseFalha = Promise.resolve(new Error('Não deu certo'))

console.log('Siiiiiiiiiiu')

promiseFalha.then(value => console.log(value))
.catch(erro => console.log('FALHA!'))