//Adicionando funções novas no prototipo

String.prototype.reverse = function(){
    return this.split('').reverse().join('')// o reverse utilizado foi o a função reverse do array
}

console.log('Escola'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5,6].first())
console.log(['a', 'b', 'c', 'd'].first())
