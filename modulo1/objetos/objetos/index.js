//Exercícios de interpretação de código

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }
// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console? 

// index.js:16 Matheus Nachtergaele
// index.js:17 Virginia Cavendish
// index.js:18 {canal: 'Globo', horario: '14h'}

//Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// {nome: 'Juca', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"
// [[Prototype]]: Object
// index.js:39 
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juba"
// raca: "SRD"
// [[Prototype]]: Object
// index.js:40 
// {nome: 'Jubo', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Jubo"
// raca: "SRD"
// [[Prototype]]: Object

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

                                //------\\

//3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// No segundo console.log que é chmado, pede pra mostrar a "altura" e esse comando não consta no codigo.


//-----------------------------------------------------------------------------------------------------------------\\

//Exercícios de escrita de código.

//1. Resolva os passos a seguir: 
// a) 

// const pessoa = {
//     nome: 'Cristiano Ronaldo',
//     apelido: ['Cris', 'CR7', 'Robozão']
// }
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}`)

// // b)  
// console.log(pessoa)
// pessoa.apelido = ['Besta enjaulada', 'Uma maquina', 'Rei da Chapioins']

//2. Resolva os passos a seguir: 

// const pessoa = {
// 	nome: "Pericles", 
//   idade: 23, 
// 	profissao: "Aluno"
// }

// function minhaFuncao(pessoa) {
// const resultado = [pessoa.nome,
// pessoa.nome.length, 

// pessoa.idade,

// pessoa.profissao,

// pessoa.profissao.length]
	
//   return resultado 
// }

// console.log(minhaFuncao(pessoa))

// 3. Resolva os passos a seguir:

const carrinho =[]

const objeto1 = {
    nome:'Maçã',
    disponibilidade1: true,
    
}

const objeto2 = {
    
    nome: 'Goiaba',
    disponibilidade1: true,
    
}

const objeto3 = {
    
    nome: 'Graviola',
    disponibilidade1: true,

}

carrinho.push(objeto1, objeto2, objeto3)

console.log(carrinho)






