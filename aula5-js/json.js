const pessoa1 = {
    nome: "Pessoa 1",
    idade: 20,
    hobbies: ["jogar", "assistir tv", "programar"]
}

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.hobbies[0])
console.log(pessoa1.hobbies[1])
console.log(pessoa1.hobbies[2])

pessoa1.cpf = 123456789
console.log(pessoa1)

pessoa1.hobbies.push("outra atividade")
console.log(pessoa1.hobbies)

function criaPessoas(nome, idade, hobbies) {
    return {
        nome,
        idade,
        hobbies
    }
}
const pessoa2 = criaPessoas("Hosana", 23, ["assistir séries", "ler", "fazer atividade física"])
console.log(pessoa2)

// transformar objeto em JSON
console.log(JSON.stringify(pessoa2))

// transformar JSON em objeto
const outraPessoa = '{"nome": "Gabriel", "idade": 26}'
console.log(JSON.parse(outraPessoa))