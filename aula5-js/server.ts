// npm i express
// npm i -D @types/express @types/node
import express from 'express'
import Pessoa from './ClassePessoa'

const app = express()
const port = 3000

app.get('/pessoas', (req, res) => {
    const pessoa = new Pessoa("Hosana", 23, ["programar"])
    const novaPessoa = new Pessoa("Sara", 21, ["estudar"])
    const listaPessoas = [pessoa, novaPessoa]
    res.json(listaPessoas)
})

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})