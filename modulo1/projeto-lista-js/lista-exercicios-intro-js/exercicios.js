// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }
// console.log(soma);
// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(){
  // implemente sua lógica aqui

          const altura = Number (prompt('Digite a altura do retangulo'))
const largura = Number (prompt('Digite a largura do retangulo'))

      const resultado = altura * largura 

console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

        const digaSeuanoAtual = Number(prompt('Digite seu ano atual'))
    const digasSeuAnoDeNascimento = Number(prompt('Digite seu ano de nascimento'))

          const resultado = digaSeuanoAtual - digasSeuAnoDeNascimento
console.log (resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return IMC = peso / (altura * altura) 


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
            const nome = prompt('Diga seu nome')
        const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

             const cor = prompt('Diga uma das suas cores favoritas')
        const cor1 = prompt('Diga uma segunda cor favorita')
  const cor2 = prompt('Diga uma terceira cor favorita')

console.log([cor, cor1, cor2]); 

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

    return custo / valorIngresso 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

    return string1 >= string2 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
    return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array [array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

//  Não cheguei a uma resposta :(

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  
  return string1.toLowerCase() === string2.toLowerCase()
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}