// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function escolhaDia(dias){
    switch(dias){
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
    }
}

console.log(escolhaDia(6))

