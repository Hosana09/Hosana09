import PromptSync from "prompt-sync";

const prompt = PromptSync()

let valor = Number(prompt('De qual número você gostaria de gerar a tabuada? '))
let mult = 0
let multFim = Number(prompt('Até qual número você gostaria de multiplicar? '))

while (mult <= multFim) {
    let total = valor * mult
    console.log(`${valor}x${mult} = ${total}`)
    mult++
}