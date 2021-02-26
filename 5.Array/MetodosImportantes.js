const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//Apaga ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona elemento no inicio
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0,2)// novo array do 0 ate o indice antes do 2 (indice 1)
console.log(algunsPilotos2)




