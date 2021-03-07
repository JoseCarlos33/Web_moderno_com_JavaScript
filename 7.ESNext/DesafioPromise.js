const fs = require('fs')
const path = require('path')

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function(err,conteudo){
            resolve(JSON.parse(conteudo))
        })
    })
}

const caminho = path.join(__dirname , '/Usuario1.json')

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))
