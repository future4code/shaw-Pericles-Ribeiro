//  Exercícios de interpretação de código:

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// Ele esta fazendo uma soma entre os valores. E oque é impresso no console é o numero 10.

// 2. Exercício:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?

// Os numeros [19, 21, 23, 25, 27, 30]

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... 
// é suficiente? Se sim, o que poderia ser usado para fazer isso?
                        // -------------\\

// 3. Exercício: Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Resposta:
//  *
//  **
//  ***
//  ****

  //------------------------------------------------------------------------------------------------------------------\\

  // Exercícios de escrita de código:

// 1.  Pergunte ao usuário quantos bichinhos de estimação ele 
// tem e guarde esse dado em uma variável. 

const petUsuario = Number (prompt('Olá, digite por favor quantos pets você tem.'))
 
if (petUsuario === 0){
console.log('Que pena! Você pode adotar um pet!') 
}

if (petUsuario > 0){

let array = []

for (let i = 0; i < petUsuario; i++){
    array.push (prompt('Quais os nomes deles?'))
}
console.log(array)}

// 2. Exercício: 

//a)

 const arrayOriginal = [24, 23, 15, 35, 40, 60, 50, 70, 80, 120, 550, 250] 

function impresso (arrayOriginal){
    for (let array of arrayOriginal){
        console.log(array);
    }
}
impresso(arrayOriginal)

// b)

    function divisão (arrayOriginal){
    for (let array of arrayOriginal){
        console.log(array / 10);
    }
}
divisão(arrayOriginal) 

// c)

function numerosPares (arrayOriginal){
     
   const arrayNumerosPares = []
          for (let array of arrayOriginal){
     if (array % 2 === 0){

 arrayNumerosPares.push(array)
 } 
    } 
    console.log(arrayNumerosPares); 
}
numerosPares(arrayOriginal)

// d) 

// function arrayStrings (arrayOriginal){

//     const arrayOelementoIndex = []
//     for (let array of arrayOriginal){
//      }
//     }
                     //Não CONCLUIDO\\




// e)                //NÃO CONLUIDO \\
