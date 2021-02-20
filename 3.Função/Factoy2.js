function criarProduto(nome, preco){
    desconto = 0.50
    return{
        Nome: nome,
        Preco: preco-desconto
    }
}
 const produto1 = criarProduto('Caneta', 1.99)
 console.log(produto1)
 