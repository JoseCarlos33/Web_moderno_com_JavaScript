const pessoa = {
    saudacao:'opa',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function pessoa2(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*bind(this)*/,1000)

}

new pessoa2