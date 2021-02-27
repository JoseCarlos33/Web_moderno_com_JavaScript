Array.prototype.forEach2 = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)//Respectivamente valor, indice, array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})