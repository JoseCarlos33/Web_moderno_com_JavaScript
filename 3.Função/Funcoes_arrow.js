let dobro = function(a){
    return 2*a
}

dobro = (a) =>{
    return 2*a
}

dobro = a => 2*a //retorno implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())


let comparaComThis = function(param){
    console.log(this===param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)//module.exports = This