const alunos = [
    {nome:'João', nota: 7.3,bolsista:false},
    {nome:'Maria', nota: 9.2,bolsista:true},
    {nome:'Pedro', nota: 9.8,bolsista:false},
    {nome:'Ana', nota: 8.7,bolsista:true}
]

//Desafio1: retornar respondendo se todos os alunos sao bolsistas

//Desafio2: retornar respondendo se algum aluno é bolsista

const desafio1 = alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador&&atual
})
const desafio2 = alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador||atual
})
console.log(desafio1)
console.log(desafio2)