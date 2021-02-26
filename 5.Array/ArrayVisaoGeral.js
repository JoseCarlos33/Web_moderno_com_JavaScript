console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // metodo de criação de array menos recomentado, é mais recomedado se criar através do metodo literal
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)


aprovados[9] = 'Rafael'
console.log(aprovados)

aprovados.sort()//ordena o array
console.log(aprovados)

delete aprovados[1]//deleta o valor no indice, porem não reorganiza o array, deixando o valor undefined nesta posição
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1/*<-indice*/, 1/*numeros de elementos p/ excluir*/, 'Elemento1'/*<- adicionar elementos*/)
console.log(aprovados)