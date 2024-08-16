console.log('Olá, mundo!')

//qualquer variável criada possui métodos disponíveis para uso, pois todas serão objetos

const a = 10
let b = 20
let c = undefined
let d = true

const total = a + b
console.log(total)

if (d === true) {
    console.log("Entrou no if!")
}

if (total > 30) {
    console.log("Total é maior que 30.")
} else if (total == 30) {
    console.log("Total é 30.")
} else {
    console.log("Total é menor que 30.")
}

const dia = 'segunda'

switch (dia.toLowerCase()) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        //todos os cases acima irão entrar nesse bloco
        console.log('aberto')
        break;
    case 'sábado':
        console.log('fechado')
        break;
    default:
        console.log('meio aberto')
        break;
}

//operador ternário
let idade = 18
let podeBeber = idade >= 18 ? 'Pode beber!' : 'Não pode beber!'

const maiorIdade = true
const temCarteiraTrab = false
const podeAplicarVaga = maiorIdade && temCarteiraTrab

podeAplicarVaga ? console.log('Sim!') : console.log('Não.');

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let value = 0 
console.log('do while')
do {
    value++
    console.log(value)
} while (value <= 9)