// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, 
// mostre uma mensagem no console "Os números são iguais".

function digaNumero(n1, n2){
    if (n1 > n2) {
        return `${n1} é maior que ${n2}.`
    } else if (n1 == n2) {
        return "Os números são iguais."
    } else {
        return "Não atende a condição."
    }
}
console.log(digaNumero(1, 4))