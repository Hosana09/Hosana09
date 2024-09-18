/*
Fizzbuzz
Escreva uma função chamada fizzbuzz que recebe um número inteiro positivo n como entrada e imprime os números de 1 a n, mas com as seguintes regras:

Se o número for divisível por 3, imprima "Fizz" em vez do número.
Se o número for divisível por 5, imprima "Buzz" em vez do número.
Se o número for divisível por ambos 3 e 5, imprima "FizzBuzz".
Caso contrário, imprima o próprio número.
Exemplos:

Exemplo 1: n = 5
1
2
Fizz
4
Buzz
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync()

function fizzbuzz(n) {
    if (n <= 0) {
        return console.log("Digite um número positivo e diferente de 0.")
    } else {
        let resultado = ""
        for (let numero = 1; numero <= n; numero++) {
            if (numero % 3 === 0 && numero % 5 === 0) {
                resultado = "FizzBuzz"
            } else if (numero % 3 === 0) {
                resultado = "Fizz"
            } else if (numero % 5 === 0) {
                resultado = "Buzz"
            } else {
                resultado = numero
            }
            console.log(resultado)
        }
    }
}    
 
let n = Number(prompt('Com qual número você gostaria de brincar de FizzBuzz? '))
fizzbuzz(n) 
