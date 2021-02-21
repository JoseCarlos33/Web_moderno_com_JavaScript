/*
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

Plano Aumento
  A     10%
  B     15%
  C     20%
.
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(plano, salario){
    const aumento = [1.1, 1.15, 1.2]
    switch(plano){
        case 'A':
            console.log(`Seu novo salário é R$${salario*aumento[0]}`)
            break
        case 'B':
            console.log(`Seu novo salário é R$${salario*aumento[1]}`)
            break
        case 'C':
            console.log(`Seu novo salário é R$${salario*aumento[2]}`)
            break
        default:
            console.log('Plano Inválido')
    }
}

aumento('B', 1000)

