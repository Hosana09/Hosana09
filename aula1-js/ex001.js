//const prompt = require('prompt-sync')()
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor = Number(prompt('Digite o valor que deseja investir: '))
let valorTri = valor*3
let porcentagem = Number(prompt('Digite o valor da rentabilidade: '))
let mes = 0
let acresMes = 0

while (valor < (valorTri)) {
    mes = mes + 1
    console.log(`Mês: ${mes}`)
    acresMes = valor*porcentagem
    console.log("Rendimento do mês:", acresMes)
    valor = valor + acresMes
    console.log("Valor após acréscimo:", valor)
    console.log(`Mês ${mes} - Saldo R$${valor}`)
}

console.log(`São necessários ${mes} meses para triplicar o valor!`)