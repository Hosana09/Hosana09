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