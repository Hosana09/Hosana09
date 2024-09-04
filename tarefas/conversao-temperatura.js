import PromptSync from "prompt-sync";

const prompt = PromptSync()

let c = Number(prompt('Qual a temperatura em °C você gostaria de converter? '))

function converter(c) {
    let f = (c * (9 / 5)) + 32
    console.log(`A temperatura ${c}°C equivale a ${f.toFixed(1)}°F.`)
}

converter(c)