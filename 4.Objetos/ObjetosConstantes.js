//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 356 -> {...}
//pessoa = {nome: 'Ana'} //Gerará erro pois const so pode apontar pra um endereço de memoria

Object.freeze(pessoa)// congela objeto e não permite nenhuma alteração ou remoção do proprio objeto

//Criando objetos ja constantes e inalteráveis
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)