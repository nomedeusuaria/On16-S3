// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function recebeRetorna(num1, num2) {
    const divisao = num1/num2
    if (divisao %2 == 0){
        return `O resultado da divisão é ${divisao} e é um número par.`
    } else {
        return `O resto da divisão é ${divisao.toFixed(1)}.`
    }
}
console.log(recebeRetorna(32, 2))