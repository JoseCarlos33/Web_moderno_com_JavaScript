const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

let criarObjeto = []

carrinho.map(e => criarObjeto.push(JSON.parse(e)))
console.log(criarObjeto)
const PrecoNoCarrinho = criarObjeto.map(e => e.preco)
console.log(PrecoNoCarrinho)