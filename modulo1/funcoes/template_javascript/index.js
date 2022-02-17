//Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
 
//a) O que vai ser impresso no console?
//O resultado da multiplicação de 5 * 2 = 10 e de 10 * 5 = 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função 
//minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//Resposta = "after argument list"

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// // a. Explique o que essa função faz e qual é sua utilidade

// // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      ii.  `CENOURA é bom pra vista`
//      iii. `Cenouras crescem na terra`
//NÃO CHEGEUI A UMA CONCLUSÃO.

//------------------------------------------------------------------------------------------------------------------\\

// Exercícios de escrita de código

//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
//informações sobre você, como: 

// const informaçoes= ('Eu sou Pericles, tenho 23 anos, moro em Camaçari-ba, sou aluno')

// console.log(informaçoes);  

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o
// nome (string), a idade (number), a cidade (string) e uma profissão (string). 
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// const nome = "Pericles"
// const minhaIdade = "23 anos"
// const MinhaCidade = "Camaçari-ba"
// const profissão = "em busca de emprego kkk."

// const informaçõesPessoais = 'Meu nome é, ' + nome + " tenho " + minhaIdade + " moro na cidade de " + MinhaCidade + ", e temporariamente estou, " + profissão 

// console.log(informaçõesPessoais);


//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a 
//soma das duas entradas e retorne o  resultado. Invoque a função e imprima no console o resultado.

// const n1 = Number (prompt("Digite um numero"))
// const n2 = Number (prompt("Digite um segundo numero"))

// const resultado = n1 + n2 

// console.log(resultado); 

//b) Faça uma função que recebe 2 números e retorne um 
//booleano que informa se o primeiro número é maior ou igual ao segun

// const n3 = Number (prompt("Digite um numero"))
// const n4 = Number (prompt("Digite outro numero"))

// const informaçãoDosNumeros = n3 >= n4 
// console.log(informaçãoDosNumeros); 

//c) Escreva uma função que receba um número e devolva 
//um booleano indicando se ele é par ou não.

// const entradaDeNumero = Number (prompt("Digite um numero"))
// console.log (entradaDeNumero)

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o 
// tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// const digaUmaFrase = prompt(("Digite uma frase")) 

//  function formatar(digaUmaFrase) {
 
//     digaUmaFrase = digaUmaFrase.toUpperCase()

//     return digaUmaFrase

// }
// const mostraTela = formatar(digaUmaFrase)
// console.log(mostraTela); 

//3. Crie uma função para cada uma das operações básicas (soma, subtração, 
// multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 
// 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o 
// resultado das operações:


// const numerosInseridosn1= 'numeros inseridos -'

// const n1 = Number (prompt('digite um numero'))
// const n2 = Number (prompt ('digite outro numero'))

//             const resultado = "soma -"
//         const soma = n1 + n2  

//             const conta = 'diferença -'
//         const diferença = n1 - n2

//         const vezes = "multiplicação -"
//     const receba = n1 * n2

//         const divisão = 'divisão -'
//     const recebe = n1 / n2



//                 console.log(numerosInseridosn1, n1, n2,)
//             console.log(resultado, soma)
//         console.log(conta, diferença); 
//     console.log(vezes, receba) 
// console.log(divisão, recebe)









