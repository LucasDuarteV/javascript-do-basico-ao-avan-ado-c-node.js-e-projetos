let p = Promise.resolve(1 + 6)

console.log(p)

p.then((value) => {console.log(`O valor é ${value}`)})