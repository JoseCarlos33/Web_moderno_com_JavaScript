//conjunto não indexado que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras *não tem mundial*').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))//retorna se o elemento passado no parametro esta no set
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)