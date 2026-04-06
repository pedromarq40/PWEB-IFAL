const prompt = require('prompt-sync')

function classificarIdade(idade){

    let faixa

    if (idade <= 12 && idade > 0){
        faixa = 'Criança'
    } else if (idade > 12 && idade <= 17){
        faixa = 'Adolescente'
    } else if (idade > 17 && idade <= 59){
        faixa = 'Adulto'
    } else if (idade > 59){
        faixa = 'idoso'
    } else {
        faixa = "Idade negativa oq karai"
    }
    return ` ${idade} -> ${faixa}`
}

console.log(classificarIdade(-3))
console.log(classificarIdade(7))
console.log(classificarIdade(16))
console.log(classificarIdade(30))

function somarMultiplos(n, limite){

    let soma = 0
    
    if (n <= 0 || limite < 1){
        soma = 0
    } else {
        for(let i = 1; i <= limite; i++){
            if (i % n == 0){
                soma += i
            }
        }
    }
    console.log(`A soma dos divisores é ${soma}`)
}

somarMultiplos(3, 10)
somarMultiplos(5, 20)







