const peso1 = 1.0
const peso2 = Number('2.0')

console.log(typeof peso1, typeof peso2)

const aval1 = 9.8866
const aval2 = 7.877777777
const soma_peso = peso2 + peso1
const total = (aval1*peso1 + aval2*peso2)/ soma_peso

console.log(total)
console.log(total.toFixed(2))//define o numero de casas decimais