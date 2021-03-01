const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (request, response, next)=>{
    response.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})
