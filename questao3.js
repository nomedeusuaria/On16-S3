/*Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens 
de acordo com cada situação:
  - Se a media for igual ou maior que 7 - Aprovado
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
  - Se a media for menor que 5 - Reprovado*/

  function calculaMedia(nota1, nota2, nota3) {
      const media = (nota1 + nota2 + nota3)/3
      if (media >= 7 && media <= 10) {
          return `Sua média é ${media.toFixed(1)}. Parabéns! Você está aprovado(a)!`
      } else if (media >= 5 && media < 7) {
          return `Sua média é ${media.toFixed(1)}. Você está em recuperação!`
      } else if (media < 5 && media > 0) {
          return `Sua média é ${media.toFixed(1)}. Que pena, você reprovou!`
      } else {
          return `Média não localizada.`
      }
  }

  console.log(calculaMedia(0, 0, 0))