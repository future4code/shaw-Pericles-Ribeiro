// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    
    return array = array.length
   
}

// FUNCIONA 

// EXERCÍCIO 02

function retornaArrayInvertido(array) { 
 
   return array = array.reverse()
  
}

// FUNCIONA 

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {

    return array = array.sort((a, b) => a - b)

  
}

// FUNCIONA 

// EXERCÍCIO 04

// function retornaNumerosPares(array) {

const numberPar = []
    for (let i = 0; i < array.lenght; i++){
        if (array [i] %2 === 0){
            numberPar.push(array [i])

        }
    }
return numberPar
  
}

// ERRO

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
 
    let cinema = ""
    for (let i = 0; i < filme.atores.lenght; i++){
        if (i === filme.atores.lenght -1){
         cinema += filme.atores[i] 

        }else 
        { cinema += filme.atores[i] + ","

        }
    }
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} 
e estrelado por ${cinema}` 

}
// NÃO FUNCIONA 

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}