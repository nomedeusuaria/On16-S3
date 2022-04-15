//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function retornaPalavra(brincadeira) {
    if (brincadeira % 2 == 0){
        return `É par!`
    } else {
        return `É impar!`
    }
}
console.log(retornaPalavra(5))