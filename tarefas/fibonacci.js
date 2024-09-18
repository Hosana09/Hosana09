/*
Fibonacci
Por definição, os dois primeiros números na sequência de Fibonacci são 0 e 1, e cada número subsequente é a soma dos dois anteriores.

Por exemplo, os primeiros dez números de Fibonacci são:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34

Escreva uma função que aceite um número e retorne o número naquela posição na sequência de Fibonacci.

Exemplos de saída:
console.log(fibonacci(3)); // Saída: 2 console.log(fibonacci(7)); // Saída: 13 console.log(fibonacci(9)); // Saída: 34
*/

function fibonacci(n) {
    let seq_fib = [0, 1]
    let penultimo = seq_fib[0]
    let ultimo = seq_fib[1]

    for (let num = 2; num <= n; num++){
        let prox_num = penultimo + ultimo
        penultimo = ultimo
        ultimo = prox_num
        seq_fib.push(prox_num)
    }
    
    return seq_fib[n]
}

console.log(fibonacci(3))
console.log(fibonacci(7))
console.log(fibonacci(9))
console.log(fibonacci(13))