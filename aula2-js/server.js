import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (requisicao, resposta) => {
    resposta.send('Olá, mundo!')
})

app.get('/teste', (requisicao, resposta) => {
    resposta.json({msg: "Teste"})
})

app.get('/tabuada', (requisicao, resposta) => {
    const numero = 3
    let tabuadaPronta = ''
    for (let i = 1; i <= 10; i++) {
        console.log(i)
        tabuadaPronta += `<p>${numero}X${i} = ${numero*i}<p>`
    }
    resposta.send(tabuadaPronta)
})

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})

// para executar, o comando é node server.js