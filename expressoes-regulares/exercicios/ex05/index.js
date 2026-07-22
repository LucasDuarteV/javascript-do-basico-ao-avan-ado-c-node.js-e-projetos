let usuario = /^[a-z0-9_-]{3,16}/

console.log(usuario.test("lucas"))        // true
console.log(usuario.test("lucas_123"))    // true
console.log(usuario.test("qa-teste"))     // true
console.log(usuario.test("ab"))           // false (menos de 3 caracteres)
console.log(usuario.test("Lucas"))        // false (L maiúsculo)
console.log(usuario.test("lucas@123"))    // false (@ não é permitido)
console.log(usuario.test("usuario_muito_grande")) // false (mais de 16 caracteres)
