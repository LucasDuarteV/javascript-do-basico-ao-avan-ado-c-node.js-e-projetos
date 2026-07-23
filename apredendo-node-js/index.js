const { createServer, request } = require('http')

let server = createServer((request , response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    response.write(`
        <h1>Olá, Mundo!</h1>
        <p>Primeira página com Node.js</p>
    `);

    response.end()
})

server.listen(8000)

console.log('Server criado com sucesso!')