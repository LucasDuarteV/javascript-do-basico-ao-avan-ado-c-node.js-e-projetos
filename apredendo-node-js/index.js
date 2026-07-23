let express = require('express')

let app = express()

app.get('/', (req,res) =>{
    res.send('Primeira rota criada!')
})

app.get('/teste' , (req , res) =>{
    res.send('Testando rota!')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})