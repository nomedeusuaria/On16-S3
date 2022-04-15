//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function informaMaioridade(ano) {
    const idade = 2022 - ano
    if (idade >= 18){
        return `Você é maior de idade e tem ${idade} anos.`
    } else {
        return `Você tem ${idade} anos e é menor de idade.`
    }
}
console.log(informaMaioridade(2007))