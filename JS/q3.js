const prompt = require('prompt-sync')();

let contador = 0
let opção

do{
    console.log(' 1 - Incrementar')
    console.log(' 2 - Decrementar')
    console.log(' 3 - Dobrar')
    console.log(' 0 - Sair')

    opção = parseInt(prompt("Qual sua opção: "))

    while (opção != 0 && opção != 1 && opção != 2 && opção != 3){
        opção = parseInt(prompt('Opção Inválida, Insira uma correta: '))
    }

    switch(opção){
        case 1:
            contador++
            break
        case 2:
            contador--
            break
        case 3:
            contador *= 2
            break
        case 0:
            console.log('Saindo do menu')
            break
        default:
            break
    }
} while( opção != 0)

console.log(`Valor final do contador: ${contador}`)

function menu(){
    let contador = 0
    let opção

    do{
        console.log(' 1 - Incrementar')
        console.log(' 2 - Decrementar')
        console.log(' 3 - Dobrar')
        console.log(' 0 - Sair')

        opção = parseInt(prompt("Qual sua opção: "))

        while (opção != 0 && opção != 1 && opção != 2 && opção != 3){
            opção = parseInt(prompt('Opção Inválida, Insira uma correta: '))
        }

        switch(opção){
            case 1:
                contador++
                break
            case 2:
                contador--
                break
            case 3:
                contador *= 2
                break
            case 0:
                console.log('Saindo do menu')
                break
            default:
                break
        }
    } while( opção != 0)

    console.log(`Valor final do contador: ${contador}`)
}
menu()

function boasVindas(){console.log('Boa Vindas!!')}

function calcularMedia(notas){

    let situação
    boasVindas()

    let contador = 0

    for(var i = 0 ; i < notas.length ; i++ ){
        contador += notas[i]
    }

    let media = contador/(i)

        if (media < 5){
            situação = "Reprovado"
        } else if ( media >= 5 && media < 7){
            situação = 'Recuperação'
        } else {
            situação = "Aprovado"
        }
        console.log(`Notas : ${notas}, Situação : ${situação}, Média : ${media}`)
    }

calcularMedia([7, 8, 9])
calcularMedia([6, 6, 6, 6])

let fila = ["Ana", "Bruno", "Carla"]
fila.unshift("Davi")
console.log(`Atendido : ${fila.shift()}`)
console.log(`Desistiu : ${fila.pop()}`)
console.log(fila)

