// npm init -y                          -> cria package.json
// npm i -D typescript
// npx tsc --init                       -> cria tsconfig.json
// npx tsc                              -> cria arquivo .js

export default class Pessoa {
    nome: string
    idade: number
    hobbies: string[]
    
    constructor(nome: string, idade:number, hobbies:string[]) {
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
}

// const pessoa = new Pessoa("Hosana", 23, ["ler", "assistir séries", "encontrar amigos"])
// console.log(pessoa)
// console.log(JSON.stringify(pessoa))