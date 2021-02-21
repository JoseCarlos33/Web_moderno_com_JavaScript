/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacoesMatematicas(val1=0, val2=0){
    sum = val1+val2
    if(val1>val2){
        div = val1 / val2
        sub = val1 - val2
    }else{
        div = val2 / val1
        sub = val2 - val1
    }
    mult = val1*val2

    console.log(`Soma = ${sum}`)
    console.log(`Subtração = ${sub}`)
    console.log(`Multiplicação = ${mult}`)
    console.log(`Divisão = ${div}`)
}

operacoesMatematicas(2, 3)