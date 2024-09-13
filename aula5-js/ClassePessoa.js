"use strict";
// npm init -y                          -> cria package.json
// npm i -D typescript
// npx tsc --init                       -> cria tsconfig.json
// npx tsc                              -> cria arquivo .js
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }
}
exports.default = Pessoa;
// const pessoa = new Pessoa("Hosana", 23, ["ler", "assistir séries", "encontrar amigos"])
// console.log(pessoa)
// console.log(JSON.stringify(pessoa))
