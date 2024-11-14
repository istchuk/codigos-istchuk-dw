// const pessoa = {
//     nome: "João",
//     cumprimentar: function() {
//         console.log(`Olá, meu nome é ${this.name}`)
//     } 
    
// }

const aluno = {
    nome: "Pedro",
    idade: 20,
    curso: "Engenharia"
}

for (let chave in aluno) {
    console.log(chave, aluno[chave])
}