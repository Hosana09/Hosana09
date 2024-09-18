/*
Caixa eletrônico
Em determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar uma função em Javascript chamada sacar() que receba o valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.

Exemplos de uso:
console.log(sacar(380)); ➞ "Notas de 100: 3, Notas de 50: 1, Notas de 10: 3"
console.log(sacar(70)); ➞ "Notas de 100: 0, Notas de 50: 1, Notas de 10: 2"
console.log(sacar(125)); ➞ "Valor inválido. Insira um valor múltiplo de 10."
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync()

let valor = Number(prompt('Qual valor você gostaria de sacar? '))

function sacar(valor) {
    if (valor % 10 !== 0) {
        return "Valor inválido. Insira um valor múltiplo de 10.";
    }
    
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0

    nota100 = Math.floor(valor / 100)
    valor = valor - (nota100 * 100)

    nota50 = Math.floor(valor / 50)
    valor = valor - (nota50 * 50)

    nota10 = Math.floor(valor / 10)
    
    return `Notas de 100: ${nota100}, Notas de 50: ${nota50}, Notas de 10: ${nota10}`
}

console.log(sacar(valor)) 