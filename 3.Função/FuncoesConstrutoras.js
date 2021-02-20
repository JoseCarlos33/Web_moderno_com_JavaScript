function Carro(velocidadeMaxima=200, delta=5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

//criando objeto Uno
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//criando objeto Lamborghini
const lamborghini = new Carro(400, 25)
lamborghini.acelerar()
console.log(lamborghini.getVelocidadeAtual())
