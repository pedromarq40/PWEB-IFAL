const prompt = require('prompt-sync')()

let lista =  []

for (let i = 0; i < 21;  i++){
    lista.push(Math.floor(Math.random()*10))
}

for(let i = 0; i < lista.length; i++){
    for(let j = lista.length; j > -1 ; j -= 1){
        if(lista[i] == lista[j] && i != j){
            lista.splice(j, 1)
        }
    }
}
console.log(lista)