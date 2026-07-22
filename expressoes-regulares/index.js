const reg1 = new RegExp('bola')

console.log(reg1.test('Tem bola?'))
console.log(reg1.test('Não tem'))


const reg2 = /gol/

console.log(reg2.test('Tem gol'))
console.log(reg2.test("Não tem"))