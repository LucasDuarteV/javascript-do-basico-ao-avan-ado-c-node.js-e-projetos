let frutas = /\d+ (bananas | maçãs | laranjas)/

console.log(frutas.test('10 bananas'))
console.log(frutas.test('5 maçãs'))
console.log(frutas.test('15 laranjas'))