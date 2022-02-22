//1. Exercícios de interpretação de código:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//  Ele compara o resto do numero, digitado por 2 e vê se é igual.

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//Para numeros na posição Par. 

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
//Para numeros na posição Impa. 

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, 
// contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//  Se trata de uma tabela de preços de frutas do mercado

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// "O preço da fruta  maçã  é  R$  5"

// C) //----\\
// O preço da fruta  Pêra  é  R$  5.5


// 3. Leia o código abaixo:

    // const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
            //-----------------------\\
// b) Considere um usuário digitou o número 10. Qual será a mensagem do 
// terminal? E se fosse o número -10?
            //-----------------------\\
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
            //-----------------------\\

    //------------------------------------------------------------------------------------------------------------\\


    //  Exercícios de escrita de código:

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
// se ele/ela pode dirigir (apenas maiores de idade).

// const idadeUsuario = Number (prompt('Digite sua idade'))
    
 
// function menorOuMaiordeIdade(idade1,idade2){

//  if(idade1 >= idade2){
//      console.log('Parabéns, você pode dirigir!')
//  }else{
//      console.log('Ops! Você ainda não tem idade para dirigir!')
//   } 
// }

// console.log(menorOuMaiordeIdade(idade1, idade2))

//                 //NÃO RESOLVIDO\\    
 

// 2º Exercicio 

const QuestionamentoAoUsuaario = (prompt('Digite a letra M (matutino) ou V (vespertino) ou N (Noturno) Para sabermos qual turno você estuda.'))



if (QuestionamentoAoUsuaario === 'M'){
console.log('Bom dia!');

}else if(QuestionamentoAoUsuaario === "V"){
    console.log('Boa tarde!');

}else{
    (QuestionamentoAoUsuaario === 'N')
    console.log('Boa noite!'); 
}

                            //FUNCIONANDO\\



let QuestionamentoAoUsuaario2 = (prompt('Digite a letra M (matutino) ou V (vespertino) ou N (Noturno) Para sabermos qual turno você estuda.'))

switch (QuestionamentoAoUsuaario2){
    case 'M':
    console.log('Bom dia!');
break;
case 'V':
    console.log('Boa tade!');
break;
default:
    console.log('Boa noite!');
break;
}

                        //fUNCIONANDO\\  


// 4 NÃO FEITO: \\