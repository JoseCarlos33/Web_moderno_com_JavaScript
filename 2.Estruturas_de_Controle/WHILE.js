function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + 2*min
    return Math.ceil(valor)
}
let opcao = 0
let contador = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
    if (contador > 40) break
    contador++
}

console.log('Até a próxima!')