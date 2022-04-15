//crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converteDias(dias) {
    let horas = dias * 24
    return `${dias} dias corresponde a ${horas} horas.`
}

console.log(converteDias(7))