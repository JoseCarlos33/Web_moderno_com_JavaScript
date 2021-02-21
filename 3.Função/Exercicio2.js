/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:Equilátero: Os três lados são iguais.
 Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos
 três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. */


function classificaTriangulo(a, b, c){
    if((Math.abs(b-c)<a && a<b+c) && (Math.abs(b-c)<a && a<b+c) && (Math.abs(b-c)<a && a<b+c)){
        if(a==b && b==c && c==a){
            return 'Triângulo Equilátero'
        }else if(a!=b && b!=c && c!=a){
            return 'Triângulo Escaleno'
        }else{
            return 'Triângulo Isósceles'
        }
    }else{
        return "Essas medidas não representam um triangulo"
    }
}

console.log(classificaTriangulo(3,5,7))
console.log(classificaTriangulo(2,2,1))
console.log(classificaTriangulo(1,0,0))