let enderecoIp = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/

console.log(enderecoIp.test('127.0.0.1'))
console.log(enderecoIp.test('128.011.0.3'))
console.log(enderecoIp.test('1234.0.0.0'))