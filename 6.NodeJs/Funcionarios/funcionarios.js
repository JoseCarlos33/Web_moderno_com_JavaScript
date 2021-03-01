const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const Mulheres = f => f.genero==='F'
const Chinesas = f => f.pais==='China'
const MenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
        //Desafio: encontrar a mulher chinesa com menor salario

    const func = funcionarios
        .filter(Chinesas)
        .filter(Mulheres)
        .reduce(MenorSalario)
    
    console.log(func)
})




