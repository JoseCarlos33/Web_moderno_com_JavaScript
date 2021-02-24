const sequencia = {
    _valor: 1, // "_" antes da variavel é uma convenção para dizer que aquela variável é privada
    get valor(){return this._valor++},//o get vai ser o que um usuario externo conseguirá acessar, não podendo acessar diretamente a função
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
