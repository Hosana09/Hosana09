function somar(a, b) {
    const total = a + b
    return Number(total)
}

function imprimir(texto) {
    console.log(texto)
}

const teste = somar(10, 20)
imprimir(teste)

//atribuindo uma função a uma variável e quando chamar a variável, passando o parâmetro, ele executa a função de acordo com o parâmetro
const atalho = console.log
atalho("teste")

const atalho2 = somar

function calcular(a, b, operacao) {
    return operacao(a, b)
}

console.log(calcular(20, 30, somar))
console.log(calcular)

//transformando função comum em arrow funtion
// abaixo são formas diferentes para a mesma função
const sub = (a, b) => {
    return a-b
}

calcular(30, 20, function sub(a, b) {
    //
})

calcular(30, 20, (a, b) => {
    //
})