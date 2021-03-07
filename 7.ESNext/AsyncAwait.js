const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

//objetivo do async e do await: simplificar o uso de promisses...

let obterAlunos = async () => {
    const turmA = await getTurma('A')
    const turmB = await getTurma('B')
    const turmC = await getTurma('C') 
    return [].concat(turmA, turmB, turmC)
}

obterAlunos()
    .them(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.messege))
