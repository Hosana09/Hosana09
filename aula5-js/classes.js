// cria uma classe pessoa
class Pessoa {
    constructor(nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }

    // métodos
    meApresentar() {
        console.log(`Olá, meu nome é ${this.nome}!`)
    }

    anoNascimento() {
        return console.log(2024 - this.idade)
    }
}

// cria instância da classe Pessoa
const pessoa1 = new Pessoa("Graziella", 18, "ler")
console.log(pessoa1)
// chamando métodos
pessoa1.meApresentar()
pessoa1.anoNascimento()

const pessoa2 = new Pessoa("William", 35, "assistir animes")
console.log(pessoa2)
pessoa2.meApresentar()
pessoa2.anoNascimento()