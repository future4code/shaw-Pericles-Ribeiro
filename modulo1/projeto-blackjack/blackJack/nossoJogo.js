/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {


const usuario = comprarCarta() 
const computador = comprarCarta()


const carta = comprarCarta(); 
const carta2 = comprarCarta(); 


const somaUsuario = usuario.valor + usuario.valor
const somaPc = computador.valor + computador.valor


console.log(`Usuário - cartas: ${carta.texto}  ${carta2.texto} - ${somaUsuario}`)
console.log(`Computador - cartas:  ${carta.texto}  ${carta.texto} - ${somaPc }`)


if (somaUsuario > somaPc){
   console.log("O usuário ganhou!")

}else if(somaPc > somaUsuario ){
   console.log("O computador ganhou!");

}else if(somaUsuario  === somaPc){
   console.log("Empate!");

}

   } else { console.log("O jogo acabou");

}

















