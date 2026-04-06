let dicionarioGirias = new Map()

dicionarioGirias.set('a', 'Primeira letra do alfabeto')

let frase = 'a prova animal'

let frase_2 = frase.split(' ')

for (let i of frase_2){

    if (dicionarioGirias.has(i)){
        frase_2[frase_2.indexOf(i)] = dicionarioGirias.get(i)
    }
}

frase = frase_2.join(' ')
console.log(frase)
