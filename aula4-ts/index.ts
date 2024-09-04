function calcularArea(lado: number): number {
    return lado*lado
}

const quadrado = calcularArea(2)
console.log(quadrado)

type situacao = 'aprovado' | 'reprovado' | 'recuperação'

interface Aluno {
    nome: string
    mediaFinal: number
    situacao: situacao
}

const aluno: Aluno = {
    nome: 'João',
    mediaFinal: 7.5,
    situacao: 'aprovado'
}

console.log(aluno)